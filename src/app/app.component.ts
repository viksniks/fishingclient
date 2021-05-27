import { Component, ViewEncapsulation } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from './services/core.service';
import { HttpClient } from '@angular/common/http';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { EventsService } from './services/events.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Router, NavigationEnd } from '@angular/router';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { THEME_LIGHT, THEME_DARK } from './const/general';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { UtitlitiesService } from './services/utitlities.service';


declare var window;
declare var firebase;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [OneSignal, AdMobFree, Keyboard, ScreenOrientation, FirebaseAnalytics],
  host: {
    '(document:fullscreenchange)': 'fullscreenchange($event)',
    '(document:webkitfullscreenchange)': 'fullscreenchange($event)',
    '(document:mozfullscreenchange)': 'fullscreenchange($event)',
  },
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  // translate for this page
  trans: Object;
  // set true when loaded config from website
  loaded: boolean;
  // set true load root
  rooted: boolean;
  // set true when is offline
  isOffline: boolean;
  // translate for this page
  // set true show intro
  intro: boolean;
  // login token
  token;

  firebasetemp:any;

  appName:string="MMa";

  constructor(
    private platform: Platform,
    private translate: TranslateService,
    private storage: Storage,
    private splashScreen: SplashScreen,
    private core: CoreService,
    private utilities: UtitlitiesService,
    private http: HttpClient,
    private alertCtrl: AlertController,
    private Toast: Toast,
    private events: EventsService,
    private statusBar: StatusBar,
    private OneSignal: OneSignal,
    private AdMobFree: AdMobFree,
    private Keyboard: Keyboard,
    private router: Router,
    private FirebaseAnalytics: FirebaseAnalytics,
    private ScreenOrientation: ScreenOrientation,
  ) {
    window.app = this;
    // // show intro image, if enable it then remove line 63-64
    // storage.get('intro').then(intro => {
    //   if (intro) this.getLanguage();
    //   else this.intro = true;
    // });
    // not show intro image
    this.getLanguage();
    this.updateTheme();
    this.initializeApp();

    // refresh app when user open from background
    this.platform.resume.subscribe((res) => {
      //window.location.reload();
     
      
  });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      var config = {

        apiKey: "AIzaSyB9xA2f5NEcaj3ewdaMkNUFAOrM4C__3xg",
        authDomain: "m-ma-2c36a.firebaseapp.com",
        databaseURL: "https://m-ma-2c36a-default-rtdb.firebaseio.com/",
        storageBucket: "bucket.appspot.com"
      
      
      };
      firebase.initializeApp(config);
      this.firebasetemp = firebase;
      if (this.platform.is('cordova')) {
        this.ScreenOrientation.lock(this.ScreenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
      }
      // subscribe pause application event to stop Media
      this.platform.pause.subscribe(() => {
        this.utilities.stopMedia();
      });
      this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 1500);
    });
    // add class name current route path
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects) {
          let path = event.urlAfterRedirects.split('/');
          let html = document.querySelector('html');
          html.classList.forEach(className => {
            if (className.indexOf('route-path-') == 0) html.classList.remove(className);
          });
          if (path[1]) html.classList.add('route-path-' + encodeURIComponent(path[1]));
        }
      }
    });
  }

  
  skipIntro() {
    this.storage.set('intro', true).then(() => {
      this.intro = false;
      this.getLanguage();
    });
  }

  getLanguage() {
    // get setting language from Storage
    this.storage.get('language').then(language => {
      if (language) {
        // check if exists language
        this.translate.getTranslation(language).subscribe(res => {
          this.translate.setDefaultLang(language);
          this.load();
        }, err => {
          // if not exists language file remove from Storage and show chose language
          this.storage.remove('language').then(() => {
            this.getLanguage();
          });
        });
      } else {
        // set language first time open app, load config from ./assets/i18n/languages.json
        this.translate.getTranslation('languages').subscribe(langTrans => {
          // function: set language is default
          let setDefault = () => {
            this.translate.setDefaultLang(langTrans['default']);
            this.storage.set('language', langTrans['default']);
            this.load();
            console.log('done: set default language');
          }
          // get device language
          let deviceLanguage = window.navigator.language ? window.navigator.language.slice(0, 2) : null;
          if (deviceLanguage && Array.isArray(langTrans['languages']) && langTrans['languages'].length > 1) {
            // set true if found device language in list
            let hasDeviceLanguage: boolean;
            langTrans['languages'].forEach(lang => {
              if (lang['value'] == deviceLanguage) {
                hasDeviceLanguage = true;
                this.translate.setDefaultLang(lang['value']);
                this.storage.set('language', lang['value']);
                this.load();
                console.log('done: set device language');
              }
            });
            if (!hasDeviceLanguage) setDefault();
          } else setDefault();
        });
      }
    });
  }

  updateTheme() {
    this.storage.get('theme').then(theme => {
      // update font size of view
      let html = document.querySelector('html');
      html.classList.remove(THEME_LIGHT);
      html.classList.remove(THEME_DARK);
      html.classList.add(theme || THEME_LIGHT);
      if (theme == THEME_DARK) {
        this.statusBar.backgroundColorByHexString('#000000');
        this.statusBar.styleLightContent();
      } else {
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
      }
    });
  }

  load() {
    this.storage.get('login').then(login => {
      if (login && login['token']) this.token = login['token'];
      // start load config from website
      this.core.setTrans();
      // get translate
      this.translate.get('general.config').subscribe(trans => {
        this.trans = trans;
        if (!this.trans['url']) {
          console.log('error: missing config general.config.url');
          return;
        }
        // load config from storage
        this.storage.get('last_config').then(config => {
          if (config) {
            if (this.token) config['user_token'] = this.token;
            this.core.setConfig(config);
            this.setRoot();
            this.getConfig();
          } else this.getConfig(true);
        });
      });
    });
  }

  getConfig(notOffline?: boolean) {
    // request get config
    this.http.get(this.trans['url'] + (this.trans['url'].endsWith('/') ? '' : '/') + 'wp-json/wp/v2/m_config?t=' + new Date().getTime()).subscribe(res => {
      // when success
      let config = { ...res };
      // if maintenance settings is checked on website
      if (config['maintenance']) {
        let buttons = [{
          text: this.trans['try'],
          handler: () => { this.getConfig(notOffline) }
        }];
        if (!notOffline) {
          buttons.unshift({
            text: this.trans['offline'],
            handler: () => { this.offline() }
          });
        }
        this.alertCtrl.create({
          header: this.trans['title'],
          message: config['maintenance'],
          buttons: buttons,
          backdropDismiss: false
        }).then(alert => {
          alert.present();
        });
      } else {
        // save config to storage
        this.storage.set('last_config', res);
        if (this.token) config['user_token'] = this.token;
        // if config is valid
        this.core.setConfig(config);
        this.events.updateConfig(config);
        this.validateToken(this.token);
        // prepare view
        this.setRoot();
        console.log('done: updated config');
        if (this.trans['_terms'] && this.trans['_terms']['slug']) {
          this.storage.get('terms').then(terms => {
            if (terms) {
              this.core.setState('agreed_terms', true);
              this.preparePlugin();
            } else this.showTerms();
          });
        } else this.preparePlugin();
      }
    }, () => {
      let buttons = [{
        text: this.trans['try'],
        handler: () => { this.getConfig(notOffline) }
      }];
      if (!notOffline) {
        buttons.unshift({
          text: this.trans['offline'],
          handler: () => { this.offline() }
        });
      }
      // when error
      this.alertCtrl.create({
        header: this.trans['title'],
        message: this.trans['message'],
        buttons: buttons,
        backdropDismiss: false
      }).then(alert => {
        alert.present();
      });
    });
  }

  async showTerms() {
    let alert = await this.alertCtrl.create({
      message: this.trans['_terms']['message'],
      cssClass: 'alert-terms',
      backdropDismiss: false,
      buttons: [
        {
          text: this.trans['_terms']['read'],
          handler: () => {
            this.router.navigate(['/detail', 0, { type: 1, slug: this.trans['_terms']['slug'] }]);
            return false;
          }
        },
        {
          text: this.trans['_terms']['agree'],
          handler: () => {
            this.storage.set('terms', true).then(() => {
              this.core.setState('agreed_terms', true);
              this.preparePlugin();
            });
          }
        }
      ]
    });
    alert.present();
  }

  preparePlugin() {
    // when platform ready
    this.platform.ready().then(() => {
      if (!this.platform.is('cordova')) return;
      // firebase analytics
      this.FirebaseAnalytics.setEnabled(true);
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.FirebaseAnalytics.logEvent('app_page_view', { url: event['urlAfterRedirects'] });
        }
      });
      // AdMob ads
      if (this.AdMobFree) {
        // Ads banner
        let id_banner: string;
        if (this.platform.is('android')) id_banner = this.core.getConfig('android_banner');
        else if (this.platform.is('ios')) id_banner = this.core.getConfig('ios_banner');
        if (id_banner) {
          this.AdMobFree.banner.config({
            id: id_banner,
            isTesting: this.core.getConfig('is_testing_ads') ? true : false,
            autoShow: true
          });
          this.AdMobFree.on(this.AdMobFree.events.BANNER_LOAD_FAIL).subscribe(() => {
            this.core.setState('banner_load_fail', true);
          });
          this.AdMobFree.on(this.AdMobFree.events.BANNER_LOAD).subscribe(() => {
            this.core.setState('banner_load_fail', false);
          });
          this.AdMobFree.banner.prepare().catch(() => { });
        }
        // show Admob Interstitial
        let id_interstitial: string;
        if (this.platform.is('android')) id_interstitial = this.core.getConfig('android_interstitial')
        else if (this.platform.is('ios')) id_interstitial = this.core.getConfig('ios_interstitial');
        if (id_interstitial) {
          // show interstitial
          this.AdMobFree.interstitial.config({
            id: id_interstitial,
            isTesting: this.core.getConfig('is_testing_ads') ? true : false,
            autoShow: false
          });
          this.AdMobFree.interstitial.prepare().catch(() => { });
        }
        // show Admob Rewards ads
        let id_rewards: string;
        if (this.platform.is('android')) id_rewards = this.core.getConfig('android_rewards');
        else if (this.platform.is('ios')) id_rewards = this.core.getConfig('ios_rewards');
        if (id_rewards) {
          this.AdMobFree.rewardVideo.config({
            id: id_rewards,
            isTesting: this.core.getConfig('is_testing_ads') ? true : false,
            autoShow: false
          });
        }
        // hide banner when keyboard show
        this.Keyboard.onKeyboardWillShow().subscribe(() => {
          this.AdMobFree.banner.hide().catch(() => { });
        });
        this.Keyboard.onKeyboardDidHide().subscribe(() => {
          this.AdMobFree.banner.show().catch(() => { });
        });
        // hide banner when reward show fix bug banner overlap ion-footer
        this.AdMobFree.on(this.AdMobFree.events.REWARD_VIDEO_OPEN).subscribe(() => {
          this.AdMobFree.banner.hide().catch(() => { });
        });
        this.AdMobFree.on(this.AdMobFree.events.REWARD_VIDEO_CLOSE).subscribe(() => {
          this.AdMobFree.banner.show().catch(() => { });
        });
      }
      // subscribe OneSignal for notification
      if (this.core.getConfig('onesignal_app_id') && this.OneSignal) {
        this.OneSignal.startInit(this.core.getConfig('onesignal_app_id'));
        this.OneSignal.inFocusDisplaying(this.OneSignal.OSInFocusDisplayOption.Notification);       
        // notification check
        this.OneSignal.sendTag('language', this.translate.getDefaultLang());
        this.OneSignal.endInit();
      }
    });
  }

  setRoot(isOffline: boolean = false) {
    if (this.isOffline != undefined && isOffline != this.isOffline) {
      this.Toast.showShortCenter(this.trans['refreshData']).subscribe(() => { }, () => { });
    }
    this.events.updateOffline(isOffline);
    this.isOffline = isOffline;
    this.rooted = true;
    setTimeout(() => { this.loaded = true; }, 300);
  }

  offline() {
    this.core.patchConfig('offline', true);
    this.setRoot(true);
  }

  validateToken(token: string) {
    if (!token) return;
    this.core.request('jwt-auth/v1/token/validate', { method: 'POST' }, true, true).subscribe(res => { }, err => {
      if (err['status'] != 403) return;
      this.storage.remove('login');
      this.core.patchConfig('user_token', null);
      if (this.trans && this.trans['tokenInvalid']) this.Toast.showLongCenter(this.trans['tokenInvalid']).subscribe(() => { }, () => { });
    });
  }

  fullscreenchange(event) {
    if (!this.platform.is('cordova')) return;
    if (document['fullscreen'] || document['fullscreenElement']) {
      if (this.platform.is('android')) this.ScreenOrientation.unlock();
      this.AdMobFree.banner.hide().catch(() => { });
    } else {
      if (this.platform.is('android')) this.ScreenOrientation.lock(this.ScreenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
      this.AdMobFree.banner.show().catch(() => { });
    }
  }
}
