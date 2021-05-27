import { Component, OnInit, ViewEncapsulation, NgZone, ViewChild } from '@angular/core';
import { Platform, IonContent, NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { CoreService } from '../../services/core.service';
import { Toast } from '@ionic-native/toast/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { HtmlContentComponent } from 'src/app/components/html-content/html-content.component';
import { UtitlitiesService } from 'src/app/services/utitlities.service';
import { take } from 'rxjs/operators';
import { SubSink } from 'src/app/classes/subsink';
import { BOOKMARK_PREFIX } from 'src/app/const/development';
import {TextToSpeech,TTSOptions} from "@ionic-native/text-to-speech/ngx";
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  encapsulation: ViewEncapsulation.None,
  providers: [SocialSharing, AdMobFree, FirebaseAnalytics],
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  // Content element
  @ViewChild('content', { read: IonContent, static: false }) content: IonContent;
  // Html Content element
  @ViewChild('htmlContent', { read: HtmlContentComponent, static: false }) htmlContent: HtmlContentComponent;
  // id of post viewing
  id: Number;
  // true if is page else post
  type: boolean;
  // post slug for search data by slug
  slug: string;
  // endpoint request get detail post
  endpoint: string;
  // detail post data
  detail: any;
  // is bookmarked
  bookmarked: boolean;
  // is loading
  _loading: boolean;
  // loading control
  _loadingCtrl;
  // posts same categories
  posts: Object[] = [];
  // true when load detail post error
  error: boolean;
  // content of detail post sanitized
  post: any;
  // set true show change font size panel
  isFont: boolean = false;
  // font size for settings
  fontsize: any = {
    value: 9,
    max: 12,
    min: 7
  };
  speaking:boolean=true;
  // translate for this page
  trans: Object;
  // data of social share
  socialShare: Object[];
  // recatcha
  recaptcha: string;
  // rewards ads object
  rewards: any = {
    key: null,
    subs: new SubSink(),
  };
  // set true enable view mode (only content)
  viewMode: boolean;

  constructor(
    route: ActivatedRoute,
    translate: TranslateService,
    private storage: Storage,
    private core: CoreService,
    private platform: Platform,
    private Toast: Toast,
    private SocialSharing: SocialSharing,
    private ngZone: NgZone,
    private navCtrl: NavController,
    private AdMobFree: AdMobFree,
    private FirebaseAnalytics: FirebaseAnalytics,
    private alertCtrl: AlertController,
    private utilities: UtitlitiesService,
    private tts:TextToSpeech
  ) {
    translate.get('detail').subscribe(trans => {
      this.trans = trans;
      if (this.trans['_socialShare'] && this.trans['_socialShare'].length > 0) {
        this.socialShare = this.trans['_socialShare'];
      }
    });
    // get params
    route.snapshot.params = Object.assign({}, route.snapshot.params, route.snapshot.data);
    this.id = Number(route.snapshot.params['id']);
    this.type = route.snapshot.params['type'];
    this.slug = route.snapshot.params['slug'];
    this.viewMode = !!route.snapshot.params['viewMode'];
    this.setEndpoint();
    if (Number.isInteger(Number(this.id))) {
      // get bookmark of this post
      storage.get(BOOKMARK_PREFIX + this.id).then(detail => {
        if (detail && this.core.getHostname(detail['link']) == this.core.hostname) {
          // if this post bookmarked
          this.detail = detail;
          this.getContent();
          this.bookmarked = true;
          this.prepareView();
        } else this.getPosts();
      });
    }
    // get font size from storage
    storage.get('fontsize').then(fontsize => {
      if (!fontsize || fontsize < this.fontsize['min'] || fontsize > this.fontsize['max']) this.fontsize['value'] = this.fontsize['min'] + 2;
      else this.fontsize['value'] = fontsize;
    });
    // function when platform ready
    this.platformReady();
  }

  get loading(): boolean {
    return this._loading;
  }

  set loading(value: boolean) {
    this._loading = value;
    if (this.viewMode) {
      if (value) {
        this.core.showLoading();
      } else {
        this.core.hideLoading();
      }
    }
  }


  // *****************************************
   // Text to scpeech
  // *******************************************
  speak()
  {
  
    if(this.speaking == true)
    {
      this.speaking = false;
      let temp = this.post.replace( /(<([^>]+)>)/ig, '');
      let til = this.detail.title.rendered.replace( /(<([^>]+)>)/ig, '');
    let options:TTSOptions={
      text:"A cím "+til+"és a tartalom "+temp,
      locale:"hu_HU",
      rate:1.5
      
      
    }
   
    this.tts.speak(options).then((val)=>{
      this.speaking = true;
       
    },(err)=>{
      alert(JSON.stringify(err));
    })
  }
  else{
    this.speaking = true;
    
    this.tts.speak("").then((val)=>{
      
    },(err)=>{
      alert(JSON.stringify(err));
    })
   
  }
  }

  // stop speech
  stopSpeak()
  {
    this.tts.stop();
  }

  ngOnInit() {
    this.speaking = true;
    
    this.tts.speak("").then((val)=>{
      
      

    },(err)=>{
      alert(JSON.stringify(err));
    })

  }

  ngOnDestroy() {
    
    this.speaking = true;
    
    this.tts.speak("").then((val)=>{
      
    },(err)=>{
      alert(JSON.stringify(err));
    })
    this.rewards['subs'].unsubscribe();
  }


  
  setEndpoint() {
    if (this.type) {
      if (this.id) this.endpoint = 'pages/' + this.id;
      else if (this.slug) this.endpoint = 'pages/?slug=' + this.slug;
    } else this.endpoint = 'posts/' + this.id;
  }

  platformReady() {
    this.platform.ready().then(() => {
      if (!this.platform.is('cordova')) return;
      // show Interstitial ads
      if (this.AdMobFree) {
        if (!this.core.getState('not_show_interstitial')) {
          this.AdMobFree.interstitial.isReady().then(ready => {
            if (ready) this.AdMobFree.interstitial.show().catch(() => { });
          }).catch(() => { });
        } else this.core.setState('not_show_interstitial', false);
      }
    });
  }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      if (!this.platform.is('cordova')) return;
      if (this.AdMobFree) {
        if (Number(this.core.getConfig('ads_after')) <= Number(this.core.getConfig('detail_count'))) {
          // reset detail_count
          this.core.patchConfig('detail_count', 0);
          if (window['AdMob'] && window['AdMob']['interstitial']['_config']['id'])
            this.AdMobFree.interstitial.prepare().catch(() => { });
        }
      }
      // plus detail_count;
      if (this.core.getConfig('detail_count')) {
        this.core.patchConfig('detail_count', Number(this.core.getConfig('detail_count')) + 1);
      } else this.core.patchConfig('detail_count', 1);
    });
  }

  ionViewWillLeave() {
    // when leave Detail page
    this.stopMedia();
    // try prepare banner one more time
    if (window['AdMob'] && window['AdMob']['banner']['_config']['id'] && this.core.getState('banner_load_fail')) {
      this.AdMobFree.banner.prepare().catch(() => { });
    }
  }

  getPosts(endpoint?: string, isRefresh?: boolean) {
    if (!this.endpoint && !endpoint) return;
    this.core.request(endpoint || this.endpoint).subscribe(detail => {
      // if get data by slug
      if (!this.id && this.slug) {
        if (Array.isArray(detail) && detail.length) {
          detail = detail[0];
        } else {
          if (isRefresh) this.loading = false;
          this.error = true;
          return;
        }
      }
      if (endpoint) this.type = endpoint.indexOf('pages/') == 0;
      console.log(JSON.stringify(detail));
      // if isn't bookmark request to website get post
      this.detail = detail;
      // after get data by slug successful switch to get data by id
      if (!this.id) {
        this.id = this.detail['id'];
        this.setEndpoint();
      }
      // prepare cotent
      this.getContent();
      if (isRefresh) {
        this.loading = false;
        if (this.bookmarked) this.updateBookmark();
      } else this.prepareView();
      this.error = false;
    }, err => {
      if (!endpoint && err['error']['code'] == 'rest_post_invalid_id') {
        this.getPosts((this.endpoint.indexOf('pages/') != 0 ? 'pages/' : 'posts/') + this.id);
      } else this.error = true;
      if (isRefresh) this.loading = false;
    });
  }

  getContent() {
    // prepare content before show
    if (this.detail) {
      // if have setting required rewards ads
      // && window['AdMob']['rewardvideo']['_config']['id']
      if (!this.post && this.detail['required_rewards_ads'] && window['AdMob']) {
        let postRequired = this.detail['required_rewards_ads'];
        this.rewards['key'] = 'required_rewards_ads_' + this.detail['id'];
        this.storage.get(this.rewards['key']).then(required => {
          if (!required) required = postRequired;
          if (required >= postRequired) {
            this.showAlertRewards();
          } else {
            this.storage.set(this.rewards['key'], required + 1);
            this.setContent();
          }
        });
      } else this.setContent();
    }
  }

  setContent() {
    // set content
    this.detail['encode_link'] = encodeURIComponent(this.detail['link']);
    this.post = this.detail['content']['rendered'];
    this.core.setState('last_detail', this.detail);
  }

  async showAlertRewards() {
    let alert = await this.alertCtrl.create({
      header: this.trans['rewards']['title'],
      message: this.trans['rewards']['message'],
      buttons: [
        {
          text: this.trans['rewards']['yes'],
          handler: () => {
            this.showRewards();
          }
        },
        { text: this.trans['rewards']['no'] }
      ]
    });
    alert.present();
  }

  showRewards() {
    if (!this.AdMobFree) return;
    // Event
    this.rewards['subs'] = this.AdMobFree.on(this.AdMobFree.events.REWARD_VIDEO_LOAD).pipe(take(1)).subscribe(() => {
      this.core.hideLoading();
      this.AdMobFree.rewardVideo.show().catch(() => { });
    });
    this.rewards['subs'] = this.AdMobFree.on(this.AdMobFree.events.REWARD_VIDEO_REWARD).pipe(take(1)).subscribe(() => {
      this.storage.set(this.rewards['key'], 1);
      this.ngZone.run(() => {
        this.setContent();
      });
    });
    this.rewards['subs'] = this.AdMobFree.on(this.AdMobFree.events.REWARD_VIDEO_LOAD_FAIL).subscribe(() => {
      this.core.hideLoading();
      this.ngZone.run(() => {
        // this.setContent();
      });
      this.rewards['subs'].unsubscribe();
    });
    this.AdMobFree.rewardVideo.isReady().then(async ready => {
      if (ready) this.AdMobFree.rewardVideo.show().catch(() => { });
      else {
        this.core.showLoading();
        this.AdMobFree.rewardVideo.prepare().catch(() => { });
      }
    }).catch(() => { });
  }

  prepareView() {
    if (this.platform.is('cordova')) {
      if (this.core.getState('agreed_terms')) this.FirebaseAnalytics.logEvent('app_detail_page', {
        id: this.id,
        title: this.detail['title']['rendered'],
        link: this.detail['link']
      });
    }
    if (this.type) return;
    let params = {
      categories: this.detail['categories'].join(','),
      exclude: this.id
    };
    // get posts same category
    this.core.getPosts(params).subscribe(posts => {
      if (posts.length > 0) {
        this.posts = [];
        this.posts = this.posts.concat(posts);
      }
    }, err => { });
  }

  refresh(refresher?) {
    if (refresher) refresher.target.complete();
    if (this.loading) return;
    // refresh post data
    this.loading = true;
    // update last_time over cache
    this.core.updateTime();
    this.getPosts(null, true);
  }

  stopMedia() {
    this.utilities.stopMedia();
  }

  updateBookmark() {
    // update bookmark on Storage
    this.storage.set(BOOKMARK_PREFIX + this.detail['id'], this.detail);
  }

  changeBookmark() {
    // bookmark or remove bookmark
    this.bookmarked = !this.bookmarked;
    if (this.bookmarked) {
      this.updateBookmark();
      this.Toast.showShortCenter(this.trans['bookmark']).subscribe(() => { }, () => { });
    } else {
      this.storage.remove(BOOKMARK_PREFIX + this.id).then(() => {
        this.Toast.showShortCenter(this.trans['unbookmark']).subscribe(() => { }, () => { });
      })
    }
  }

  share() {
    // when click share button
    let title = document.createElement('span');
    title.innerHTML = this.detail['title']['rendered'];
    let link = document.createElement('span');
    link.innerHTML = this.detail['link'];
    let message = title.textContent + '\r\n' + decodeURIComponent(link.textContent);
    this.SocialSharing.share(message, null, null, null);
  }

  shareBy(item: Object) {
    if (!item) item = {};
    let app = this.platform.is('ios') ? item['ios'] : item['android'];
    if (app && this.detail['link']) {
      this.SocialSharing.canShareVia(app, null, null, null, this.detail['link']).then(() => {
        switch (app) {
          case 'whatsapp':
            this.SocialSharing.shareViaWhatsApp(null, null, this.detail['link']).catch(() => this.share());
            break;
          default:
            this.SocialSharing.shareVia(app, null, null, null, this.detail['link']).catch(() => this.share());
            break;
        }
      }).catch(() => {
        this.share();
      });
    } else this.share();
  }

  updateFont() {
    // update font size settings to Storage
    this.storage.set('fontsize', this.fontsize['value']);
  }

  previous() {
    // go to previous post
    if (!this.detail || !this.detail['m_previous_post']) {
      this.Toast.showLongCenter(this.trans['no_previous']).subscribe(() => { }, () => { });
      return;
    }
    this.navCtrl.navigateBack(['/detail', this.detail['m_previous_post']]);
  }

  next() {
    // go to next post
    if (!this.detail || !this.detail['m_next_post']) {
      this.Toast.showLongCenter(this.trans['no_next']).subscribe(() => { }, () => { });
      return;
    }
    this.navCtrl.navigateForward(['/detail', this.detail['m_next_post']]);
  }
}
