import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { Platform, AlertController, PickerController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Toast } from '@ionic-native/toast/ngx';
import { Storage } from '@ionic/storage';
import { EventsService } from 'src/app/services/events.service';
import { DEFAULT_LIST_POSTS_TEMPLATE } from '../../const/general';
import {HttpClient} from "@angular/common/http";
import {SpeechRecognition,SpeechRecognitionListeningOptions,SpeechRecognitionListeningOptionsIOS} from "@ionic-native/speech-recognition/ngx";
import { ItemCommentComponent } from '../item-comment/item-comment.component';
import { isArray } from 'util';
import { LoadingController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

//import {ReportsPage} from '../../reports/reports.page';
// open jobs cat 
import {Router} from "@angular/router";

declare var window;


@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  providers: [SocialSharing],
  styleUrls: ['./menus.component.scss'],
})
export class MenusComponent implements OnInit {
  // list pages data
  pages: Object[];
  // translate for this page
  trans: Object;
  // templates for settings
  templates: string;
   // Language display
   CityName: any;
  // set title
  title: string;

  public showSearchBar = false;
  items:any[]=[];
  itemstemp:any[]=[];
  str:string="";
  itemss:any[]=[];
  asds:string="";
  speakingStart:boolean = false;
  

  constructor(
    private translate: TranslateService,
    private core: CoreService,
    private platform: Platform,
    private SocialSharing: SocialSharing,
    private alertCtrl: AlertController,
    private Toast: Toast,
    private storage: Storage,
    private pickerCtrl: PickerController,
    private http:HttpClient,
    events: EventsService,
    private speech:SpeechRecognition,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private router:Router,
    public navCtrl: NavController,
    private iab: InAppBrowser 
  
  ) {

    this.navCtrl = navCtrl
    window.menus = this;
    // get translate
    translate.get('menu').subscribe(trans => this.trans = trans);
    // call get pages function
    this.getPages();
    // get templates from storage
    storage.get('templates').then(templates => {
      if (!templates) templates = DEFAULT_LIST_POSTS_TEMPLATE;
      this.templates = templates;
    });
    events.watchOffline().subscribe(() => {
      if ((!this.pages || this.pages.length < 1)) {
        this.getPages();
      }
    });
    this.getLanguage();

// Get the list of supported languages
// this.speech.getSupportedLanguages()
// .then(
//   (languages: Array<string>) => console.log(languages),
//   (error) => console.log(error)
// )


  }

  openUrl(url) {
    this.iab.create( url, '_system' );
  }

  // reports() {
   
  //   this.router.navigateByUrl('../reports/')
  // }
  
// *********************************************************
// Voice search - No City found
// *********************************************************

  ifNoResFound(){
    this.alertCtrl.create({
      message:"<h6>Nincs találat.</h6>",
      buttons:[
        {
          text:"Újra",
          
          handler:()=>{
            this.speech.hasPermission().then((hasPermission)=>{
              if(hasPermission)
              {
          this.openSpeech();
              }
              else{
                this.speech.requestPermission().then(()=>{
                  this.openSpeech();
          
                })
          
              } 
              
            },(err)=>{
              this.speech.requestPermission().then(()=>{
                this.openSpeech();
                
          
              })
            })
    
          }
        },
        {
          text:"Bezár",
          
        }
      ]
    }).then((element)=>{
      element.present();
    })
  }


  

// *********************************************************
// Voice search from here - Ask User permission to acces Mic
// *********************************************************

askPermission()
{
  if(this.speakingStart == false)
  {
   this.alertCtrl.create({
  message:'<h1><ion-icon name="mic-outline" class="mix-size pulse-ring1" size="large"></ion-icon></h1> <p><h6>Kattints az OK gombra és beszélj.<h6></p>',
  
  buttons:[
    {
      text:"OK",
      
      handler:()=>{
        this.speech.hasPermission().then((hasPermission)=>{
          if(hasPermission)
          {
      this.openSpeech();
          }
          else{
            this.speech.requestPermission().then(()=>{
              this.openSpeech();
      
            })
      
          } 
          
        },(err)=>{
          this.speech.requestPermission().then(()=>{
            this.openSpeech();
            
      
          })
        })

      }
    },
    {
      text:"Bezár"
    }
  ]
}).then((element)=>{
  element.present();
})
  
  
}
}

// ***********************************
// Loading before show results - voice
// ***********************************
async presentLoading() {
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: '<ion-icon class="match-load" name="checkmark-outline"></ion-icon>Találat betoltése… ',
    duration: 1000
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed!');
}

// ***********************************
// Show toast when user need to talk
// ************************************
async presentToast() {
  // const toast = await this.toastController.create({
  //   message: 'Talk now... <ion-icon name="mic-outline"></ion-icon>',
  //   duration: 3000,
  //   color: 'danger'
  //   // position: 'middle'
  // });
  // toast.present();

  this.alertCtrl.create({
    message:'<h1><ion-icon name="mic-outline" class="mix-size pulse-ring" size="large"></ion-icon></h1><br><h6 class="listening">Hallgatlak</h6>',
    backdropDismiss: false // <- Here! :)
    
  }).then((element)=>{
    element.present();

  //   setTimeout(()=>{
  //     element.dismiss();
  // }, 3000);
  });

}

// *************************
// Call speech search 
// **************************

openSpeech()
{
  this.speakingStart = true;
  // call talk now toast
  this.presentToast();
    var options:SpeechRecognitionListeningOptionsIOS=
    {
      showPartial:true,
      matches:1,
      language: 'hu-HU',
     

    }
    var ref = this;
    
    let sub =  this.speech.startListening(options).subscribe((data:string[])=>{
      if(data.length > 0)
      {
        // hide alert for listening
        this.alertCtrl.dismiss();
        document.getElementById("ctc").innerHTML = "";
        this.speech.stopListening();
        sub.unsubscribe();
        this.speakingStart = false;
        var node = document.createElement("p");   
        let found = false;
        
        for(var  i = 0;i<this.itemstemp.length;i++) 
        {
       
          if(data[0].trim() == this.itemstemp[i].value.trim())
          {
          // loading
          this.presentLoading();
            found = true;
            
            // Show results after a 1 sec

            setTimeout(() => {

              // var textnode = document.createTextNode(data[0].trim()+">>");         // Create a text node
              // node.appendChild(textnode); 
              // node.onclick = function()
              //  {
                //  ref.tempCalll(data[0].trim());
                this.tempCalll(data[0].trim());
 
              //  }
              //  // Append the text to <div>
              //  document.getElementById("ctc").appendChild(node);          
              
            }, 1000);
            // this.tempCalll(data[0].trim());
           
          }
        }  
        if(found == false)   
        {
          //alert("No City found!");
          // Call no city found method
          this.ifNoResFound();


         
        }        // Create a <li> node
        
      }
      else{
        alert("no records found!");
        var para = document.createElement("P");
        var t = document.createTextNode("no records found!");
        para.appendChild(t);
        document.getElementById("ctc").appendChild(para);
      }
     
      },(err)=>{
       
        //alert(JSON.stringify(err));
        //this.speech.stopListening();
        //this.openSpeech()
        this.ifNoResFound();
    
      })  
}


// Show resukt of voice search
tempCalll(dat)
{
  //alert(dat);
  for(var i = 0;i<this.itemstemp.length;i++)
  {
    if(dat == this.itemstemp[i].value)
    {
      
      //alert("matched");
      this.tempCall(this.itemstemp[i]);
      return;
    }
  }
}

getItemsVoice(str) { 
  // Reset items back to all of the items     
  //console.log(this.getCities());
  // set val to the value of the searchbar
  //this.isItemAvailable = true;
  const val = str;
  console.log(val);
  this.items = this.itemstemp;

 //  // if the value is an empty string don't filter the items
  if (val && val.trim() !== '') {
     this.isItemAvailable = true;
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
         
      })
      if(this.items.length > 0)
      {
       this.str = "";
      }
      else{
      this.str = "Nincs találat.";
      }
  } else{
   this.isItemAvailable = false;
  }
}


 // *************************
  // Show search input
  // *************************
  clickedSearchIcon(event: Event) {
    this.showSearchBar = !this.showSearchBar;
  }

  // *************************
  // auto search
  // *************************
  isItemAvailable = false;
    
    readJsonData(){    
      //this.items = ["Test", "Test1", "Test2"].subscribe(data => {
        this.http.get("assets/i18n/languages.json").subscribe((data:any)=>{
          this.items =data.languages;
          this.itemstemp = this.items;
          //this.isItemAvailable = true;
        
        })  
    }
   // *************************
   // Get autocomplete items
   // *************************∏
     getItems(ev: any) { 
         // Reset items back to all of the items     
         //console.log(this.getCities());
         // set val to the value of the searchbar
         //this.isItemAvailable = true;
         document.getElementById("ctc").innerHTML = "";
         const val = ev.target.value;
         console.log(val);
         this.items = this.itemstemp;

        //  // if the value is an empty string don't filter the items
         if (val && val.trim() !== '') {
            this.isItemAvailable = true;
             this.items = this.items.filter((item) => {
               return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
                
             })
             if(this.items.length > 0)
             {
              this.str = "";
             }
             else{
             this.str = "No City found";
             }
         } else{
          this.isItemAvailable = false;
         }
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

  ngOnInit() {
    //this.loadData();
    this.readJsonData();
  }



  getPages(refresher?) {
    // function get list pages
    this.core.request('m_pages').subscribe(pages => {
      this.pages = pages;
      if (refresher) refresher.target.complete();
    }, err => {
      if (refresher) refresher.target.complete();
    });
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
          ]
        });
        // show picker
        picker.present();
      }
    });
  }

  // *********************************
  // Call city set after click on item
  // *********************************
  tempCall(obj)
  {
    //alert(obj);
    //alert(JSON.stringify(obj));
  let data:any={};
  data['language'] = obj.value;
  //alert(obj.value);
    this.storage.set('language', data['language']).then(() => {
      this.storage.remove('last_config').then(() => {
       // alert("refresh call 1");
        this.refresh();
      },(err)=>{
       // alert("refresh call 2");
        this.refresh(); 
      })   ;
    },(err)=>{
      //alert("refresh call 3");
      this.refresh();
    });
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

  rate() {
    // function open application on store
    this.core.openStore();
  }

  // share application store link
  // *****************************
  share() {
    // function share application
    let share = this.platform.is('ios') ? this.core.getConfig('share_ios') : this.core.getConfig('share_android');
    this.SocialSharing.share(share, null, null, null);
  }

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
}
