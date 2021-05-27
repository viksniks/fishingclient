import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { CoreService } from 'src/app/services/core.service';
import { Toast } from '@ionic-native/toast/ngx';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {
  // post id
  post_id: Number;
  // last post detail
  post_data: any;
  // comment status data
  status: string;
  // is viewing comment
  view: any;
  // set true hide comment form
  viewMode: boolean;
  // page of posts
  page = 1;
  // is over posts, set true then disable infinite scroll
  over: boolean;
  // list comments
  comments: Object[];
  // set true when loaded comments
  needInfo: boolean;
  // is loading comment
  loaded: boolean;
  // set true when loading
  loading: boolean;
  // set true when comment
  commenting: boolean;
  // if is viewing comment, parent is id of comment viewing
  parent: Number;
  // FormGroup control form comment
  formComment: FormGroup;
  // translate for this page
  trans: Object;
  // login data from Storage
  login: Object;

  constructor(
    route: ActivatedRoute,
    translate: TranslateService,
    private storage: Storage,
    private core: CoreService,
    private Toast: Toast,
    private navCtrl: NavController,
    private platform: Platform,
    private InAppBrowser: InAppBrowser,
    private ngZone: NgZone,
    private alertCtrl: AlertController,
  ) {
    // get params
    this.post_id = route.snapshot.params['post_id'];
    this.parent = route.snapshot.params['parent'] || 0;
    this.status = route.snapshot.params['status'];
    this.post_data = this.core.getState('last_detail') || {};
    this.view = this.core.getState('comment_viewing') || {};
    this.viewMode = !!this.view['id'];
    if (this.view['id']) this.core.setState('comment_viewing', null);
    this.getComments();
    // get translate
    translate.get('comments').subscribe(trans => this.trans = trans);
    // setup form comment
    this.formComment = new FormGroup({ content: new FormControl('', [Validators.required]) });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // get user login
    this.storage.get('login').then(login => {
      this.login = login;
      if (login) {
        // if user logined
        this.needInfo = false;
        this.formComment.removeControl('author_name');
        this.formComment.removeControl('author_email');
      } else {
        // if Guest
        this.needInfo = true;
        // backup data form
        let data = this.formComment.value || {};
        // setup form comment if website settings require_name_email when comment
        if (this.core.getConfig('require_name_email')) {
          this.formComment.setControl('author_name', new FormControl(data['author_name'], Validators.required));
          this.formComment.setControl('author_email', new FormControl(data['author_email'],
            Validators.compose([Validators.required, Validators.email])
          ));
        } else {
          this.formComment.setControl('author_name', new FormControl(data['author_name']));
          this.formComment.setControl('author_email', new FormControl(data['author_email'], Validators.email));
        }
      }
    });
  }

  facebook() {
    if (!this.platform.is('cordova') || this.loading || !this.post_data['encode_link']) return;
    let isShow;
    let link = 'https://www.facebook.com/plugins/feedback.php?href=' + this.post_data['encode_link'];
    let option = 'location=no,hardwareback=no,zoom=no,hidden=yes,useWideViewPort=no';
    let accept: string[] = [
      link,
      'facebook.com/dialog/plugin.optin',
      'facebook.com/login.php'
    ];
    let comment = this.InAppBrowser.create(link, '_blank', option);
    this.loading = true;
    comment.on('loadstart').subscribe(res => {
      let valid = false;
      accept.forEach(url => {
        if (res['url'].indexOf(url) != -1) valid = true;
      });
      if (!valid) {
        let script = { code: 'location.href = "' + link + '";' };
        comment.executeScript(script);
      }
    });
    comment.on('loaderror').subscribe(res => {
      if (!isShow) {
        comment.close();
        // set comment to null, don't show inappbrowser
        comment = null;
        this.ngZone.run(() => this.loading = false);
      }
    });
    comment.on('loadstop').subscribe(res => {
      let code;
      code = 'document.body.style.padding="50px 0";';
      comment.executeScript({ code: code });
      if (res.url.indexOf('https://www.facebook.com/plugins/feedback.php') == 0) {
        code = 'var meta = document.createElement("meta");meta.setAttribute("name", "viewport");';
        code += 'meta.setAttribute("content", "user-scalable=no,initial-scale=1.0001,maximum-scale=1.0001,viewport-fit=cover");';
        code += 'document.head.appendChild(meta);';
        code += 'document.body.style.height="100px";document.body.style.overflowY="scroll";';
        code += 'window.open=function(url){location.href=url;};';
        comment.executeScript({ code: code });
      }
      // let meta = '<meta name="viewport" content="user-scalable=no,initial-scale=1.0001,maximum-scale=1.0001,viewport-fit=cover">';
      // let code = 'var div = document.createElement("div");';
      // code += "div.innerHTML='" + meta + "';";
      // code += 'document.getElementsByTagName("head")[0].appendChild(div.firstChild);';
      // let script = { code: code };
      // comment.executeScript(script);
      if (!isShow && comment) {
        isShow = true;
        this.ngZone.run(() => this.loading = false);
        setTimeout(() => { comment.show(); }, 300);
      }
    });
  }

  async logout() {
    if (!this.platform.is('cordova') || this.loading) return;
    let alert = await this.alertCtrl.create({
      header: this.trans['logout']['title'],
      message: this.trans['logout']['message'],
      buttons: [
        {
          text: this.trans['logout']['yes'],
          handler: () => {
            this.loading = true;
            let option = 'hidden=yes';
            let logout = this.InAppBrowser.create('https://graph.facebook.com/', '_blank', option);
            logout.on('loadstop').subscribe(() => {
              this.ngZone.run(() => this.loading = false);
              let script = { code: 'document.cookie = "c_user=;Path=/;domain=.facebook.com;";' };
              logout.executeScript(script);
              logout.close();
            });
          }
        },
        { text: this.trans['logout']['no'] }
      ]
    });
    alert.present();
  }

  getComments(refresher = null, infiniteScroll = null) {
    // get comments of post
    let params = { parent: this.parent, page: (refresher ? 1 : this.page) };
    this.core.request('m_comments/' + this.post_id, { params: params }).subscribe(comments => {
      if (refresher) this.page = 1;
      if (infiniteScroll) {
        this.comments = this.comments.concat(comments);
        infiniteScroll.target.complete();
      }
      else if (this.page == 1) this.comments = comments;
      if (comments.length > 0) this.page++;
      else this.over = true;
      this.loaded = true;
      if (refresher) refresher.target.complete();
    }, err => {
      this.loaded = true;
      if (refresher) refresher.target.complete();
      if (infiniteScroll) infiniteScroll.target.complete();
    });
  }

  doRefresh(refresher) {
    this.over = false;
    this.core.updateTime();
    this.getComments(refresher);
  }

  load(infiniteScroll) {
    this.getComments(null, infiniteScroll);
  }

  comment() {
    if (this.viewMode) {
      this.viewMode = false;
      return;
    }
    if (this.commenting) return;
    // when click comment button
    this.commenting = true;
    // prepare request
    let option = { method: 'POST' };
    let body = Object.assign(this.formComment.value, {
      parent: this.parent,
      post: this.post_id,
    });
    option['body'] = body;
    // request comment
    this.core.request('comments', option, false, true).subscribe(res => {
      this.commenting = false;
      // when success
      let data = res;
      this.formComment.reset();
      // if comment is approved then reload list comments
      if (data['status'] == 'approved') {
        let comment = {
          content: body['content'],
          date: data['date_gmt'] + '+00:00',
          has_child: false,
          id: data['id'],
          name: data['author_name'],
          user_id: data['author']
        };
        if (data['author_avatar_urls']) comment['avatar'] = data['author_avatar_urls'][96];
        this.comments.unshift(comment);
      } else this.Toast.showLongCenter(this.trans['message']['hold']).subscribe(() => { }, () => { });
    }, err => {
      // when error
      this.commenting = false;
      // prepare message
      let message: string;
      if (!this.trans['message']) return;
      if (this.trans['message'][err['error']['code']]) message = this.trans['message'][err['error']['code']];
      else message = this.trans['message']['default'];
      // show Toast
      this.Toast.showLongCenter(message).subscribe(() => { }, () => { });
      // if website require for comment and user is Guest
      if (err['error']['code'] == 'rest_comment_login_required') this.navCtrl.navigateForward('/login');
    });
  }

  viewComment(comment: Object) {
    this.core.setState('comment_viewing', comment);
    this.navCtrl.navigateForward(['/comment', this.post_id, { status: this.status, parent: comment['id'] }]);
  }
}
