import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.page.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit {
  // list bookmark from Storage
  rawPosts: Object = {};
  // list bookmark show
  posts: Object[];
  // set true loaded bookmark, search bookmark
  loaded: boolean;
  // keyword search bookmark by title
  keyword: string;
  // translate for this page
  trans: Object;

  constructor(
    private storage: Storage,
    translate: TranslateService,
    private alertCtrl: AlertController,
    private core: CoreService,
  ) {
    translate.get('bookmark').subscribe(trans => this.trans = trans);
    // foreach Storage get Bookmark
    storage.forEach((value, key) => {
      // if key has prefix bookmark -> this element is bookmark -> push to list Bookmark
      if (key.indexOf('bookmark') == 0 && value['id'] && value['title'] && this.core.getHostname(value['link']) == this.core.hostname) {
        this.rawPosts[key] = {
          bookmark: key,
          id: value['id'],
          title: value['title']['rendered'],
          date: value['modified_gmt'],
          image: value['featured_square_url']
        };
      }
    }).then(() => {
      // when get all Bookmark prepare for Seach function
      this.onSearch();
      this.loaded = true;
    });
  }

  ngOnInit() {
  }

  onSearch() {
    this.loaded = false;
    // reset list posts show in results
    this.posts = [];
    // prepare keyword
    if (!this.keyword) this.keyword = '';
    // foreach list Bookmark get results
    for (var key in this.rawPosts) {
      let post = this.rawPosts[key];
      if (post && post['title'] && post['title'].toLowerCase().indexOf(this.keyword.toLowerCase()) != -1) this.posts.push(post);
    }
    this.loaded = true;
  }

  delete(post: Object) {
    if (!post || !post['bookmark']) return;
    this.storage.remove(post['bookmark']).then(() => {
      delete this.rawPosts[post['bookmark']];
      this.onSearch();
    });
  }

  async clear() {
    let alert = await this.alertCtrl.create({
      header: this.trans['clear']['title'],
      message: this.trans['clear']['message'],
      buttons: [
        {
          text: this.trans['clear']['yes'],
          handler: () => {
            let tmpBookmark: Object = Object.assign({}, this.rawPosts);
            // for list bookmark delete in Storage
            for (var key in tmpBookmark) {
              this.storage.remove(key);
            }
            this.rawPosts = {};
            this.onSearch();
          }
        },
        { text: this.trans['clear']['no'] }
      ]
    });
    alert.present();
  }
}
