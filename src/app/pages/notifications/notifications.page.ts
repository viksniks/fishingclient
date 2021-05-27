import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { CoreService } from 'src/app/services/core.service';
import { DeeplinksService } from 'src/app/services/deeplinks.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  // list notifications from Storage
  notifications: Object[];
  // set true when loaded list notifications from Storage
  loaded: boolean;
  // set true when loading deeplinks
  loading: boolean;
  // translate for this page
  trans: Object;

  constructor(
    translate: TranslateService,
    private storage: Storage,
    private core: CoreService,
    private deeplinks: DeeplinksService,
    private alertCtrl: AlertController,
  ) {
    // get translate
    translate.get('notification').subscribe(trans => this.trans = trans);
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // get notifications from Storage
    this.updateNotifications();
    // check clicked or not
    let clicked = this.core.getState('clicked_notification');
    if (clicked) {
      this.core.setState('not_show_interstitial', true);
      this.runDeeplinks(clicked);
      this.core.setState('clicked_notification', null);
    }
  }

  updateNotifications(): Promise<any> {
    return new Promise(resolve => {
      this.storage.get('notifications').then(notifications => {
        this.notifications = notifications;
        this.loaded = true;
        resolve();
      });
    });
  }

  launch(notification: Object) {
    this.runDeeplinks(notification, true);
  }

  runDeeplinks(notification: Object, isLaunch: boolean = false) {
    if (this.loading || !notification) return;
    let link: string;
    if (isLaunch) {
      link = notification['launchURL'];
      window['cordova'].InAppBrowser.open(link, '_system');
      return;
    } else if (notification['additionalData']) {
      link = notification['additionalData']['link'];
      if (notification['additionalData']['type'] && notification['additionalData']['id']) {
        this.deeplinks.run(notification['additionalData'], null, link);
        return;
      }
    }
    if (!link) return;
    this.loading = true;
    this.core.request('m_tools/deeplinks', { params: { url: encodeURIComponent(link) } })
      .subscribe(res => {
        this.loading = false;
        this.deeplinks.run(res, null, link);
      }, err => this.loading = false);
  }

  async delete(notification: Object) {
    // when click delete notification
    let alert = await this.alertCtrl.create({
      header: (notification['title'] || this.trans['delete']['title']),
      message: this.trans['delete']['message'],
      buttons: [
        {
          text: this.trans['delete']['yes'],
          handler: () => {
            // delete notification and update to Storage
            this.notifications.splice(this.notifications.indexOf(notification), 1);
            this.storage.set('notifications', this.notifications);
          }
        },
        { text: this.trans['delete']['no'] }
      ]
    });
    alert.present();
  }

  async clear() {
    let alert = await this.alertCtrl.create({
      header: this.trans['clear']['title'],
      message: this.trans['clear']['message'],
      buttons: [
        {
          text: this.trans['clear']['yes'],
          handler: () => {
            this.storage.remove('notifications').then(() => {
              this.notifications = null;
            });
          }
        },
        { text: this.trans['clear']['no'] }
      ]
    });
    alert.present();
  }
}
