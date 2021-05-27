import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, IonRouterOutlet, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Toast } from '@ionic-native/toast/ngx';
import { CoreService } from 'src/app/services/core.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  // FormGroup control form update project
  formUpdate: FormGroup;
  // login data from Storage
  login: any;
  // is change profile
  changing: boolean;
  // translate for this page
  trans: Object;
  // is updating
  updating: boolean;

  constructor(
    private storage: Storage,
    private core: CoreService,
    private Toast: Toast,
    translate: TranslateService,
    private alertCtrl: AlertController,
    private routerOutlet: IonRouterOutlet,
    private navCtrl: NavController,
  ) {
    // get translate
    translate.get('profile').subscribe(trans => this.trans = trans);
    // constructor form update
    this.formUpdate = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email]))
    });
    // get login data
    storage.get('login').then(login => {
      this.login = login;
      if (!this.login) return;
      this.reset();
    });
  }

  ngOnInit() {
  }

  reset() {
    // reset form update
    this.formUpdate.patchValue({
      name: this.login['user_display_name'],
      email: this.login['user_email']
    });
  }

  async logout() {
    // when click logout
    let alert = await this.alertCtrl.create({
      header: this.trans['logout']['title'],
      message: this.trans['logout']['message'],
      buttons: [
        {
          text: this.trans['logout']['yes'],
          handler: () => {
            this.storage.remove('login').then(() => {
              this.core.patchConfig('user_token', null);
              if (this.routerOutlet.canGoBack()) this.navCtrl.pop();
              else this.navCtrl.navigateRoot('/home');
            });
          }
        },
        { text: this.trans['logout']['no'] }
      ]
    });
    alert.present();
  }

  update() {
    if (this.updating || !this.login || !this.login['id'] || !this.login['token']) return;
    // when click update profile
    this.updating = true;
    let option = {
      method: 'POST',
      body: this.formUpdate.value,
    };
    // request update profile
    this.core.request('users/' + this.login['id'], option, false, true).subscribe(res => {
      // when request success
      this.login['user_display_name'] = res['name'];
      this.login['user_email'] = res['email'];
      this.reset();
      this.Toast.showShortCenter(this.trans['success']).subscribe(() => { }, () => { });
      this.save();
      this.updating = false;
    }, err => {
      // when request error
      this.updating = false;
      this.getError(err['error']['code']);
    });
  }

  getError(code: string) {
    // catch error show Toast when update profile error
    let message: string;
    if (this.trans['errors'][code]) message = this.trans['errors'][code];
    else message = this.trans['errors']['default'];
    this.Toast.showLongCenter(message).subscribe(() => { }, () => { });
  }

  save() {
    // update login data on Storage
    this.storage.set('login', this.login);
  }

  async password() {
    let alert = await this.alertCtrl.create({
      header: this.trans['password']['title'],
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: this.trans['password']['new_password']
        },
        {
          name: 'repass',
          type: 'password',
          placeholder: this.trans['password']['confirm_password']
        }
      ],
      buttons: [
        {
          text: this.trans['password']['yes'],
          role: 'send-password',
          handler: data => {
            if (!data['password'] || !data['repass']) return false;
            if (data['password'] != data['repass']) {
              this.Toast.showLongCenter(this.trans['errors']['password_mismatch']).subscribe(() => { }, () => { });
              return false;
            }
            this.handlerPassword(data);
          }
        },
        { text: this.trans['password']['no'] }
      ],
      backdropDismiss: false
    });
    alert.present();
  }

  async handlerPassword(data) {
    // if request change password
    this.core.showLoading();
    let option = {
      method: 'POST',
      body: data,
    };
    // request change password
    this.core.request('users/' + this.login['id'], option, false, true).subscribe(res => {
      // when request success
      this.core.hideLoading();
      this.Toast.showShortCenter(this.trans['password']['success']).subscribe(() => { }, () => { });
    }, err => {
      // when request error
      this.core.hideLoading();
      this.getError(err['error']['code']);
    });
  }

  async keep() {
    // removing other session
    let alert = await this.alertCtrl.create({
      header: this.trans['keep']['title'],
      message: this.trans['keep']['message'],
      buttons: [
        {
          text: this.trans['keep']['yes'],
          handler: async () => {
            let option = { method: 'POST' };
            this.core.showLoading();
            // request removing other session
            this.core.request('m_users/keep', option, false, true).subscribe(res => {
              // when request success
              let message: string;
              if (res) message = this.trans['keep']['success'];
              else message = this.trans['keep']['error'];
              this.core.hideLoading();
              this.Toast.showShortCenter(message).subscribe(() => { }, () => { });
            }, err => {
              // when request error
              this.core.hideLoading();
              this.getError(err['error']['code']);
            });
          }
        },
        { text: this.trans['keep']['no'] }
      ]
    });
    alert.present();
  }
}
