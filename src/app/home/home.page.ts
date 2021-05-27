import { Component, NgZone, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, AlertController, PickerController,NavController, MenuController ,LoadingController} from '@ionic/angular';
import { CoreService } from '../services/core.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { TranslateService } from '@ngx-translate/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { DeeplinksService } from '../services/deeplinks.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { THEME_DARK, BACK_BUTTON_EXIT_TIMEOUT } from '../const/general';
import { Toast } from '@ionic-native/toast/ngx';
import { NotificationsPage } from '../pages/notifications/notifications.page';
import {Geolocation} from "@ionic-native/geolocation/ngx";
import {HttpClient} from "@angular/common/http";
import { LOCATION_INITIALIZED } from '@angular/common';
import {PopoverPage} from "../popover/popover.page"
import { DEFAULT_LIST_POSTS_TEMPLATE } from '../const/general';

// Modal
import { ModalController ,PopoverController} from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';


declare var google;
declare var window;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  providers: [AppVersion, OneSignal, StatusBar],
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('homeTabs', { static: true }) homeTabs;
  // title
  title: string;
  // settings detail page theme
  theme: string = THEME_DARK;
  // login data from Storage
  login: any = {};
  // translate for this page
  trans: Object;
  // backbutton press subscribe
  backButton;
  // backbutton pressed
  backButtonPressed: boolean;
  // Language display
  CityName: any;
  // location
  geocodedAddress:string="";
  // temperature
  temperature:string="";
  
  modal:any;
 
   // templates for settings
   templates: string;


  constructor(
    private translate: TranslateService,
    private storage: Storage,
    private platform: Platform,
    private core: CoreService,
    private AppVersion: AppVersion,
    private alertCtrl: AlertController,
    private OneSignal: OneSignal,
    private Toast: Toast,
    private navCtrl: NavController,
    private deeplinks: DeeplinksService,
    private ngZone: NgZone,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    private pickerCtrl: PickerController,
    private geolocation:Geolocation,
    private http:HttpClient,
    public modalController: ModalController,
    private loader:LoadingController,
    private pop:PopoverController
    
  ) {
    // get translate
    translate.get('home').subscribe(trans => {
      this.trans = trans;
      this.platformReady();
      this.getLanguage();
    });
    // get translate
    translate.get('menu').subscribe(trans => this.trans = trans);

     // *********************************************
    // refresh app when user open from background
    // *********************************************
  //   this.platform.resume.subscribe((res) => {

  //   window.home  = this;
  //   this.geolocation.getCurrentPosition({}).then((position:any)=>{
  //     this.getAddress(position.coords.latitude,position.coords.longitude);
     
  //   },(err)=>{
  //     //alert(JSON.stringify(err));
  //   });
      
  // });
    // get templates from storage
    storage.get('templates').then(templates => {
      if (!templates) templates = DEFAULT_LIST_POSTS_TEMPLATE;
      this.templates = templates;
    });
  }

   // *********************************************
  // open menu
 // *********************************************
  toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }


  async settings() {
    // when click templates
    let alert = await this.alertCtrl.create({
      header: this.trans['settings']['title'],
      cssClass: 'alert-buttons-no-border',
      buttons: [
        // {
        //   text: this.trans['languages']['title'],
        //   handler: () => { this.languages(); }
        // },
        {
          text: this.trans['templates']['title'],
          handler: () => { this.updateTemplates(); }
        },
        {
          text: this.trans['cache']['title'],
          handler: () => { this.clearCache(); }
        },
        {
          text: this.trans['settings']['cancel'],
          cssClass: 'place'
        }
      ]
    });
    alert.present();
  }


  // Update template
  async updateTemplates() {
    if (!Array.isArray(this.trans['templates']['options'])) return;
    let buttons = [];
    // when click templates
    this.trans['templates']['options'].forEach(option => {
      let button = {
        text: option['text'],
        cssClass: option['_value'] == this.templates ? 'danger' : '',
        handler: () => {
          if (option['_value'] == this.templates) return;
          this.storage.set('templates', option['_value']).then(() => {
            this.refresh();
          });
        }
      };
      buttons.push(button);
    });
    buttons.push({
      text: this.trans['templates']['cancel'],
      cssClass: 'place'
    });
    let alert = await this.alertCtrl.create({
      header: this.trans['templates']['title'],
      message: this.trans['templates']['message'],
      cssClass: 'alert-buttons-no-border',
      buttons: buttons
    });
    alert.present();
  }

  clearCache() {
    // when click clear cache
    this.platform.ready().then(async () => {
      let alert = await this.alertCtrl.create({
        header: this.trans['cache']['title'],
        message: this.trans['cache']['message'],
        buttons: [
          {
            text: this.trans['cache']['yes'],
            handler: () => {
              if (window && window['CacheClear']) window['CacheClear'](status => {
                this.Toast.showShortCenter(this.trans['cache']['success']).subscribe(() => { }, () => { });
              }, err => {
                this.Toast.showShortCenter(this.trans['cache']['error']).subscribe(() => { }, () => { });
              });
            }
          },
          { text: this.trans['cache']['no'] }
        ]
      });
      alert.present();
    });
  }


  // Show modal 
  // ********
  async presentModal() {
    this.modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await this.modal.present();
  }

  dismissModal()
  {
this.modal.dismiss();
  }


// popover
  openPopover()
  {
    this.pop.create({
    
      component:PopoverPage,
      cssClass:'contact-popover',
      showBackdrop:true,
    }).then((element)=>{
      element.present();
    })
  }



  // **************************************
  // Get location
  // **************************************
  ngOnInit()
  {
    //alert("location starts");
    window.home  = this;
    // this.geolocation.getCurrentPosition({}).then((position:any)=>{
    //   //alert("location received");
    //   this.getAddress(position.coords.latitude,position.coords.longitude);
     

    // },(err)=>{
      
    // });
  }
  
  getAddress(latitude,longitude)
  {
    this.loader.create({
      message:"please wait..."
    }).then((element)=>{
      element.present();

    
    var  gps = latitude.toString()+","+longitude.toString();
    var mode = "retrieveAddresses";
    var maxresults = "1";
    var apikey = "1uQem1CTeDWuoxzIU8sKBFa4Sc6OLBNirPbs_msbXS4";
    var url = "https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox="+gps+"&mode="+mode+"&maxresults="+maxresults+"&apiKey="+apikey;
    this.http.get(url).subscribe((results:any)=>{
      this.geocodedAddress = results.Response.View[0].Result[0].Location.Address.Label;
      this.getWeather(latitude,longitude,element);

      //alert(this.geocodedAddress);

    },(err)=>{
      alert("Network connection issue. Please check your Network connection."); 
    })
  });
  }


  // **************************************
  // Get weather
  // **************************************
  getWeather(latitude,longitude,element)
  {
    var url  = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude.toString()+"&lon="+longitude.toString()+"&appid=494fb3293a018ab529297faade6c6d3d";
    this.http.get(url).subscribe((data:any)=>{
    let temp:any= ((parseFloat(data.main.temp)-273.15).toFixed(2));
    this.temperature = (Math.round(temp)).toString();

      element.dismiss();

      //alert(this.temperature);

    },(err)=>{
      alert(JSON.stringify(err));
    });
    
  }

  // get languages
  languages() {
    let language = this.translate.getDefaultLang();
    this.translate.getTranslation('languages').subscribe(async langTrans => {
      if (langTrans['languages'] && langTrans['languages'].length > 0) {
        // create picker
        // add picker column
        let columns: any = {
          name: 'language',
          options: []
        };
        // add column options
        let defaultIndex: Number;
        langTrans['languages'].forEach((lang, index) => {
          columns.options.push({
            text: lang['name'],
            value: lang['value']
          });
          // find default index
          if (lang['value'] == language) defaultIndex = index;
        });
        // set default index and add column
        columns['selectedIndex'] = defaultIndex;
        if (!language) language = langTrans['default'];
        let picker = await this.pickerCtrl.create({
          columns: [columns],
          buttons: [
            {
              text: this.trans['languages']['cancel'],
              role: 'cancel'
            },
           
            {
              text: this.trans['languages']['save'],
              handler: data => {
                if (data['language']['value'] == language) return;
                this.storage.set('language', data['language']['value']).then(() => {
                  this.storage.remove('last_config').then(() => {
                    this.refresh();
                  });
                });
              }
            }
          
          ],
          
        });
        // show picker
        picker.present();
      }
    });
  }

  // Refresh page after select
  async refresh(alert?) {
    // refresh application
    if (alert) {
      let alert = await this.alertCtrl.create({
        header: this.trans['refresh']['title'],
        message: this.trans['refresh']['message'],
        buttons: [
          {
            text: this.trans['refresh']['yes'],
            handler: () => {
              location.href = '/';
            }
          },
          { text: this.trans['refresh']['no'] }
        ]
      });
      alert.present();
    } else location.href = '/';
  }



// Display City In the Header
// ************************
  getLanguage() {
    var CityName = "";
    this.storage.get("language").then((language) => {
      this.CityName = language;
      //console.log(language);
      let num = language
      let stringForm = num.toString();
      //console.log(stringForm);
       console.log(CityName)
    })

  }
  


  platformReady() {
    this.platform.ready().then(() => {
      if (!this.platform.is('cordova')) return;
      // subscribe OneSignal notification opened
      this.OneSignal.handleNotificationOpened().subscribe(res => this.clickedNotification(res));
      // handle deeplinks
      let route = (typeof this.trans['_deeplinks'] == 'object') ? this.trans['_deeplinks'] : {};
      if (window['IonicDeeplink']) window['IonicDeeplink'].route(route, function (match) { }, this.handleDeeplinksNotMatch);
      // check update version
      if (this.AppVersion) {
        this.AppVersion.getVersionNumber().then(version => this.checkAppVersion(version));
      }
    });
  }

  ionViewDidEnter() {
    // fire ionViewDidEnter event children tab activated
    if (this.homeTabs && this.homeTabs.outlet.activated) {
      let activeComponent = this.homeTabs.outlet.activated._component;
      if (typeof activeComponent.ionViewDidEnter == 'function') {
        activeComponent.ionViewDidEnter();
      }
    }
    this.storage.get('login').then(login => {
      if (login) this.login = login;
      else this.login = {};
    });
    this.storage.get('theme').then(theme => {
      if (theme) this.theme = theme;
    }); 
    if (this.platform.is('android')) {
      this.backButton = this.platform.backButton.subscribe(() => {
        this.menuCtrl.isOpen('root-menu').then(isOpen => {
          if (isOpen) return;
          if (this.backButtonPressed && window) window['navigator']['app'].exitApp();
          else {
            this.backButtonPressed = true;
            if (this.trans && this.trans['exitApp']) this.Toast.showShortBottom(this.trans['exitApp']).subscribe(() => { }, () => { });
            setTimeout(() => {
              this.backButtonPressed = false;
            }, BACK_BUTTON_EXIT_TIMEOUT);
          }
        });
      });
    }
  }

 
  ionViewWillLeave() {
    if (this.backButton && this.backButton.unsubscribe) this.backButton.unsubscribe();
  }

  clickedNotification(res) {
    // launch notification if have additionalData with key is link
    let payload = res.notification.payload;
    // get list notification from Storage
    this.storage.get('notifications').then(notifications => {
      if (!notifications) notifications = [];
      // add time to payload
      payload['time'] = new Date().getTime();
      // unshift notification to list notifications and save to Storage
      notifications.unshift(payload);
      this.storage.set('notifications', notifications).then(() => {
        this.ngZone.run(() => {
          this.core.setState('clicked_notification', payload);
          let activeComponent = this.navCtrl['topOutlet'].activated._component;
          if (activeComponent instanceof NotificationsPage) {
            if (typeof activeComponent.ionViewDidEnter == 'function') activeComponent.ionViewDidEnter();
          } else this.navCtrl.navigateForward(['/notifications']);
        });
      });
    });
  }

  handleDeeplinksNotMatch = (not) => {
    if (!not || !not.$link) return;
    this.core.setState('not_show_interstitial', true);
    this.core.request('m_tools/deeplinks', { params: { url: encodeURIComponent(not.$link['url']) } }).subscribe(res => {
      this.ngZone.run(() => this.deeplinks.run(res, null, /^https?:\/\//i.test(not.$link['url']) ? not.$link['url'] : null, true));
    }, err => { });
  }

  async checkAppVersion(version) {
    let config_version = this.platform.is('ios') ? this.core.getConfig('version_ios') : this.core.getConfig('version');
    if (!config_version) return;
    let needUpdate;
    version = version.split('.');
    let latest = config_version.split('.');
    for (var i = 0; i < latest.length; i++) {
      if (Number(latest[i]) < Number(version[i])) break;
      if (!version[i] || Number(latest[i]) > Number(version[i])) {
        needUpdate = true;
        break;
      }
    }
    if (needUpdate) {
      let alert = await this.alertCtrl.create({
        header: this.trans['update']['title'],
        message: this.trans['update']['message'],
        buttons: [
          { text: this.trans['update']['no'] },
          {
            text: this.trans['update']['yes'],
            handler: () => { this.core.openStore() }
          }
        ]
      });
      alert.present();
    }
  }

  updateTheme() {
    // update font size of view
    let html = document.querySelector('html');
    html.classList.remove(THEME_DARK);
    html.classList.remove(THEME_DARK);
    html.classList.add(this.theme || THEME_DARK);
    if (this.theme == THEME_DARK) {
      this.statusBar.backgroundColorByHexString('#000000');
      this.statusBar.styleLightContent();
    } else {
      this.statusBar.backgroundColorByHexString('#ffffff');
      this.statusBar.styleDefault();
    }
  }


  changeTheme() {
    if (this.theme != THEME_DARK) this.theme = THEME_DARK;
    else this.theme = THEME_DARK;
    this.storage.set('theme', this.theme).then(() => {
      this.updateTheme();
    });
  }
}
