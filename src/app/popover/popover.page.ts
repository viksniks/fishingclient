import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import {AlertController,PopoverController} from "@ionic/angular";
declare var window;
@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
list:any[]=[];
selectedLang:string="";
  constructor(
    private translate: TranslateService,
    private storage: Storage,
    private alertCtrl:AlertController,
    private pop:PopoverController

  ) { }

  ngOnInit() {
    this.storage.get("language").then((val)=>{
      //alert(val);
      if(val)
      {
      this.selectedLang = val;
      }
    })
    this.languages();
  }


  // get languages
  languages() {
    let language = this.translate.getDefaultLang();
    this.translate.getTranslation('languages').subscribe(async langTrans => {
     //alert(JSON.stringify(langTrans));
      this.list = langTrans["languages"];
      
    });
  }
dismiss()
{
  this.pop.dismiss();
}

// **********************************
//click and navigate to cities
// **********************************
  onClick(lang)
  { 
    let data = {};
    data["language"]={value:lang};
    //alert(JSON.stringify(data));
  this.storage.set('language', data["language"]["value"]).then(() => {
    this.storage.remove('last_config').then(() => {
      //alert("going to refresh");
    window.home.refresh();
    // alert("refresh done");
    },(err)=>{
      alert(JSON.stringify(err));
    });
  });


  }

  

  // Refresh page after select
  async refresh(alert?) {
    // refresh application
    if (alert) {
      let alert = await this.alertCtrl.create({
        header: this.translate['refresh']['title'],
        message: this.translate['refresh']['message'],
        buttons: [
          {
            text: this.translate['refresh']['yes'],
            handler: () => {
              location.href = '/';
            }
          },
          { text: this.translate['refresh']['no'] }
        ]
      });
      alert.present();
    } else location.href = '/';
  }

}
