import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { LoadingController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Toast } from '@ionic-native/toast/ngx';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { CryptoService } from './crypto.service';
import { CACHE_PREFIX } from '../const/development';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private config: Object = {};
  private state: Object = {};
  private trans: string;
  public loading;
  private backButton;
  public hostname;

  constructor(
    private http: HttpClient,
    private Toast: Toast,
    private translate: TranslateService,
    private platform: Platform,
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private crypto: CryptoService,
  ) { }

  setTrans() {
    // get translate
    this.translate.get('general.error').subscribe(trans => this.trans = trans);
  }

  setConfig(value: Object) {
    this.hostname = this.getHostname(value['root_endpoint']);
    this.config = value;
  }

  getConfig(name: string) {
    return this.config ? this.config[name] : null;
  }

  patchConfig(name: string, value: any) {
    if (this.config) this.config[name] = value;
  }

  getState(name: string) {
    return this.state ? this.state[name] : null;
  }

  setState(name: string, value: any) {
    if (this.state) this.state[name] = value;
  }

  request(endpoint: string, option: Object = {}, root: boolean = false, authentication: boolean = false, root_url?: string): Observable<any> {
    if (!root_url) {
      root_url = this.getConfig('root_endpoint');
    }
    if (!this.getConfig('offline') && !root_url) return new Observable(observable => {
      observable.error(new HttpErrorResponse({
        error: {
          code: 'root_endpoint_notfound',
          message: 'Not found root endpoint config',
          data: { status: 400 }
        }
      }));
      observable.complete();
    });
    // pre endpoint
    if (!root) endpoint = 'wp/v2/' + endpoint;
    if (root_url && !root_url.endsWith('/')) endpoint = '/' + endpoint;
    // create cache key with '_cache' prefix before add t params
    let cache = null;
    let isGet = !option['method'] || option['method'].toLowerCase() == 'get';
    // pre request
    if (isGet) {
      cache = CACHE_PREFIX + this.crypto.SHA1(encodeURIComponent(root_url + endpoint + '_' + JSON.stringify(option['params'])));
      // add param 't' for over cache function
      if (!option['params']) option['params'] = { t: this.getConfig('last_time') };
      else if (!option['params']['t']) option['params']['t'] = this.getConfig('last_time');
    }
    if (option['method'] && option['method'].toLowerCase() == 'post') {
      if (Object.prototype.toString.call(option['body']) === '[object Object]') option['body'] = new HttpParams({ fromObject: option['body'] });
    }
    if (authentication && this.config['user_token'] && (!option['headers'] || !option['headers']['Authorization'])) {
      if (!option['headers']) {
        let headers = { 'Authorization': 'Bearer ' + this.config['user_token'] };
        option['headers'] = headers;
      } else {
        option['headers']['Authorization'] = 'Bearer ' + this.config['user_token'];
      }
      option['withCredentials'] = true;
    }
    // return request after prepare
    return new Observable(observable => {
      // check offline mode
      if (cache && this.getConfig('offline')) {
        // get cache from Storage
        this.storage.get(cache).then(res => {
          if (res != null) {
            observable.next(res);
            observable.complete();
          } else {
            observable.error(new HttpErrorResponse({
              error: {
                code: 'cache_not_found',
                message: 'Cache not found in Offline mode',
                data: { status: 404 }
              }
            }));
            observable.complete();
          }
        });
      } else {
        // set timeout for request
        let timeout = setTimeout(() => {
          if (ing) ing.unsubscribe();
          observable.error(new HttpErrorResponse({
            error: {
              code: 'timeout',
              message: 'Request timeout',
              data: { status: 408 }
            }
          }));
          observable.complete();
          if (this.trans) this.Toast.showShortCenter(this.trans['request_timeout']).subscribe(() => { }, () => { });
        }, this.getConfig('request_timeout') || 30000);
        // request http
        let ing = this.http['request'](option['method'] || 'get', root_url + endpoint, option).subscribe(response => {
          // when success
          clearTimeout(timeout);
          if (cache) this.storage.set(cache, response);
          observable.next(response);
          observable.complete();
        }, err => {
          // when error
          if (err.error && err.error['code'] == 'maintenance' && this.trans) {
            this.Toast.showShortCenter(this.trans['maintenance']).subscribe(() => { }, () => { });
          }
          clearTimeout(timeout);
          observable.error(err);
          observable.complete();
        });
      }
    });
  }

  getPosts(params: Object = null): Observable<any> {
    // get posts of website and return array
    return this.request('m_posts', { params: params });
  }

  updateTime() {
    if (this.getConfig('offline')) return;
    this.patchConfig('last_time', Date.now());
  }

  openStore() {
    // run deeplinks to store in device with apple_id and package config in website
    let ios = "itms-apps://itunes.apple.com/app/id" + this.getConfig('apple_id') + "?mt=8";
    let android = "market://details?id=" + this.getConfig('package');
    window['cordova'].InAppBrowser.open(this.platform.is('ios') ? ios : android, '_system');
  }

  async showLoading() {
    // disable back button
    if (this.platform.is('android')) {
      this.backButton = this.platform.backButton.subscribeWithPriority(110, () => { });
    }
    this.loading = await this.loadingCtrl.create();
    if (this.loading && this.loading['present']) {
      await this.loading.present();
    }
  }

  hideLoading() {
    // setTimeout make sure if showLoading function called
    setTimeout(async () => {
      if (this.loading && this.loading['dismiss']) {
        await this.loading.dismiss();
      }
      // enable back button
      if (this.backButton && this.backButton.unsubscribe) this.backButton.unsubscribe();
    }, 100);
  }

  getHostname(url) {
    let hostname;
    try {
      hostname = (new URL(url)).hostname
    } catch (e) { }
    return hostname;
  }
}
