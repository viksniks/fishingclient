import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Toast } from '@ionic-native/toast/ngx';
import { CoreService } from 'src/app/services/core.service';
import { Storage } from '@ionic/storage';
import { AlertController, IonRouterOutlet, NavController, Platform } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  encapsulation: ViewEncapsulation.None,
  providers: [Facebook],
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // FormGroup control form login
  form: FormGroup;
  // is loging
  loading: boolean;
  // is loading Facebook
  loadingFacebook: boolean;
  // translate for this page
  trans: Object;
  // set true show register form
  isRegister: boolean = false;

  constructor(
    translate: TranslateService,
    private Toast: Toast,
    private core: CoreService,
    private storage: Storage,
    private alertCtrl: AlertController,
    private routerOutlet: IonRouterOutlet,
    private navCtrl: NavController,
    private platform: Platform,
    private Facebook: Facebook,
  ) {
    // get translate
    translate.get('login').subscribe(trans => this.trans = trans);
    this.makeLoginForm();
  }

  ngOnInit() {
  }

  makeLoginForm() {
    // constructor form login
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl(''),
      password: new FormControl('', [Validators.required])
    });
  }

  makeRegisterForm() {
    // constructor form login
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('')
    });
  }

  switch() {
    this.isRegister = !this.isRegister;
    if (this.isRegister) this.makeRegisterForm();
    else this.makeLoginForm();
  }

  login() {
    if (this.loadingFacebook || this.loading || this.form.invalid) return;
    // when click login button
    let option = {
      method: 'POST',
      body: this.form.value
    };
    this.loading = true;
    this.core.request('jwt-auth/v1/token', option, true, true).subscribe(res => {
      this.loginSuccessful(res);
    }, err => {
      this.form.patchValue({ password: null });
      this.loading = false;
      this.Toast.showShortCenter(this.trans['login']['wrong']).subscribe(() => { }, () => { });
    });
  }

  loginSuccessful(login: Object) {
    this.storage.set('login', login).then(() => {
      this.core.patchConfig('user_token', login['token']);
      this.loading = false;
      this.Toast.showShortCenter(this.trans['login']['success']).subscribe(() => { }, () => { });
      if (this.routerOutlet.canGoBack()) this.navCtrl.pop();
      else this.navCtrl.navigateRoot('/home');
    });
  }

  facebook(isTry?: boolean) {
    if (this.loadingFacebook || this.loading) return;
    // when click Facebook button
    if (!this.platform.is('cordova')) return;
    this.Facebook.login(['email']).then((res: FacebookLoginResponse) => {
      if (res && res['authResponse']) {
        // login
        let option = {
          method: 'POST',
          body: { token: res['authResponse']['accessToken'] }
        };
        this.loadingFacebook = true;
        this.core.request('m_facebook/login', option).subscribe(res => {
          this.loadingFacebook = false;
          this.loginSuccessful(res);
        }, err => {
          this.loadingFacebook = false;
          let message: string;
          if (this.trans['register'][err['error']['code']]) message = this.trans['register'][err['error']['code']];
          else message = this.trans['register']['default'];
          this.Toast.showLongCenter(message).subscribe(() => { }, () => { });
        });
      }
    }).catch(err => {
      this.Facebook.logout().then(() => {
        if (!isTry) this.facebook(true);
        else this.Toast.showLongCenter(this.trans['register']['default']).subscribe(() => { }, () => { });
      }).catch(() => { });
    });
  }

  register() {
    if (this.loadingFacebook || this.loading || this.form.invalid) return;
    // when click register
    let option = {
      method: 'POST',
      body: this.form.value
    };
    this.loading = true;
    // request register
    this.core.request('m_users/register', option).subscribe(res => {
      // when request success
      this.loading = false;
      this.switch();
      this.Toast.showShortCenter(this.trans['register']['success']).subscribe(() => { }, () => { });
    }, err => {
      // when request error
      this.loading = false;
      let message: string;
      if (this.trans['register'][err['error']['code']]) message = this.trans['register'][err['error']['code']];
      else message = this.trans['register']['default'];
      this.Toast.showLongCenter(message).subscribe(() => { }, () => { });
    });
  }

  async forgot() {
    // popup forgot password
    let alert = await this.alertCtrl.create({
      header: this.trans['forgot']['title'],
      message: this.trans['forgot']['message'],
      inputs: [
        {
          name: 'username',
          placeholder: this.trans['username']
        }
      ],
      buttons: [
        {
          text: this.trans['forgot']['yes'],
          role: 'send-forgot',
          handler: (data) => {
            if (!data['username']) return false;
            this.handlerForgot(data);
          }
        },
        { text: this.trans['forgot']['no'] }
      ],
      backdropDismiss: false
    });
    alert.present();
  }

  async handlerForgot(data) {
    // if request forgot password
    this.core.showLoading();
    let option = {
      method: 'POST',
      body: data
    };
    this.core.request('m_users/password', option).subscribe(res => {
      // when request success
      this.core.hideLoading();
      if (res) this.Toast.showLongCenter(this.trans['forgot']['success']).subscribe(() => { }, () => { });
      else this.Toast.showLongCenter(this.trans['forgot']['mail']).subscribe(() => { }, () => { });
    }, err => {
      // when request error
      this.core.hideLoading();
      this.Toast.showShortCenter(this.trans['forgot']['error']).subscribe(() => { }, () => { });
    });
  }

  submit() {
    if (this.isRegister) this.register();
    else this.login();
  }
}
