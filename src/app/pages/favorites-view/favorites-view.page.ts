import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-favorites-view',
  templateUrl: './favorites-view.page.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./favorites-view.page.scss'],
})
export class FavoritesViewPage implements OnInit {
  // list categories id in favorites
  favorites: Number[];
  // page of posts
  page = 1;
  // array Play posts
  posts: Object[];
  // set true when loaded posts
  loaded: boolean;
  // true if haven't posts when load more disable infiniteScroll
  over: boolean;

  constructor(
    private storage: Storage,
    private core: CoreService,
  ) {
    this.doRefresh();
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // refresh if setting changed
    if (this.favorites) this.storage.get('favorites').then(res => {
      if (!res) res = [];
      if (JSON.stringify(this.favorites) != JSON.stringify(res)) {
        this.loaded = false;
        this.posts = [];
        this.page = 1;
        this.doRefresh();
      }
    });
  }

  doRefresh(refresher?) {
    // when refresh
    this.storage.get('favorites').then(res => {
      this.favorites = res || [];
      this.over = false;
      if (refresher) this.core.updateTime();
      this.getPosts(refresher);
    });
  }

  getPosts(refresher?, infiniteScroll?) {
    // empty favorites
    if (!this.favorites || this.favorites.length < 1) {
      this.posts = [];
      this.over = true;
      this.loaded = true;
      if (refresher) refresher.target.complete();
      if (infiniteScroll) infiniteScroll.target.complete();
      return;
    }
    // get posts with page then concat to list post
    let params = { categories: this.favorites.join(','), page: (refresher ? 1 : this.page) };
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

  load(infiniteScroll) {
    // when scroll to bottom
    this.getPosts(null, infiniteScroll);
  }
}
