import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';
import { Storage } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.page.html',
  encapsulation: ViewEncapsulation.None,
  providers: [OneSignal],
  styleUrls: ['./detail-category.page.scss'],
})
export class DetailCategoryPage implements OnInit {
  // id of category
  id: any;
  // category viewing data
  category: any;
  // list childs categories
  childs: Object[];
  // is showing child categories
  showChild: boolean = false;
  // set true when loaded posts
  loaded: boolean;
  // list posts in category
  posts: Object[];
  // is user following this category
  subscribe: Object = {};
  // page of posts
  page = 1;
  // is over posts, set true then disable infinite scroll
  over: boolean;
  // set true show description
  isShow: boolean = false;

  constructor(
    route: ActivatedRoute,
    private core: CoreService,
    private storage: Storage,
    private OneSignal: OneSignal,
  ) {
    this.id = route.snapshot.params['id'];
    // request get child categories
    core.request('m_categories?include=' + this.id).subscribe(res => {
      this.category = res[0];
      if (this.category) {
        core.request('m_categories?parent=' + this.id).subscribe(res => {
          this.childs = res;
        }, err => { });
        this.getPosts();
        // get subscribe status
        storage.get('subscribe').then(subscribe => {
          if (subscribe) this.subscribe = subscribe;
        });
      }
    }, err => {
      this.loaded = true;
    });
  }

  ngOnInit() {
  }

  getPosts(refresher = null, infiniteScroll = null) {
    // get posts in category from website
    let params = { categories: this.id, page: (refresher ? 1 : this.page) };
    this.core.getPosts(params).subscribe(posts => {
      if (refresher) this.page = 1;
      if (posts.length > 0) this.page++;
      else this.over = true;
      if (infiniteScroll) {
        this.posts = this.posts.concat(posts);
        infiniteScroll.target.complete();
      }
      else this.posts = posts;
      this.loaded = true;
      if (refresher) refresher.target.complete();
    }, err => {
      if (infiniteScroll) infiniteScroll.target.complete();
      if (refresher) refresher.target.complete();
      this.loaded = true;
    });
  }

  doRefresh(refresher) {
    this.over = false;
    this.core.updateTime();
    this.getPosts(refresher);
  }

  load(infiniteScroll) {
    this.getPosts(null, infiniteScroll);
  }

  changeSubscribe() {
    // change subscribe status
    if (this.subscribe[this.id]) {
      this.OneSignal.deleteTag(this.id);
      delete this.subscribe[this.id];
      this.updateSubscribe();
    } else {
      this.OneSignal.sendTag(this.id, this.category['name']);
      this.subscribe[this.id] = this.category['name'];
      this.updateSubscribe();
    }
  }

  updateSubscribe() {
    // update subscribe status in Storage
    this.storage.set('subscribe', this.subscribe);
  }
}
