import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  // keyword input
  _keyword: string;
  // keyword search
  keyword: string;
  // search history from Storage
  search: string[] = [];
  // set true show History
  show: boolean = false;
  // category id if is search in category
  id: Object;
  // search results
  posts: Object[];
  // is searching show loading spinner
  searching: boolean;
  // set true when searched
  searched: boolean;
  // page of search results
  page = 1;
  // is over search
  over: boolean;
  // translate for this page
  trans: Object;

  constructor(
    private storage: Storage,
    private core: CoreService,
    private alertCtrl: AlertController,
    translate: TranslateService,
    route: ActivatedRoute,
  ) {
    // get translate
    translate.get('search').subscribe(trans => {
      this.trans = trans;
    });
    // get params for search global or search in category
    this.id = route.snapshot.params['id'];
    // get search history
    storage.get('search').then(search => {
      if (search) this.search = search;
    });
  }

  ngOnInit() {
  }

  doSearch() {
    if (!this._keyword) {
      this.page = 1;
      this.over = false;
      this.posts = [];
    } else this.onSearch(this._keyword);
  }

  onSearch(keyword?: string, infiniteScroll?: any) {
    // search
    // hide history
    this.show = false;
    // if isn't load more reset search results for new search
    if (!infiniteScroll) {
      this.page = 1;
      this.over = false;
      this.posts = [];
      // show searching spinner
      this.searching = true;
    }
    // prepare keyword
    if (keyword) {
      this.keyword = keyword;
      this._keyword = keyword;
    }
    if (!this.keyword) return;
    // prepare add to history
    if (this.search.indexOf(this.keyword) == -1) {
      this.search.unshift(this.keyword);
      // limit store 20 history
      // this.search = this.search.slice(0, 20);
    }
    this.searched = true;
    // update history to Storage
    this.storage.set('search', this.search).then(() => {
      // prepare params request
      let params = { search: this.keyword.toLowerCase(), t: Date.now(), page: this.page };
      if (this.id) params['categories'] = this.id;
      // request search posts with keyword
      this.core.getPosts(params).subscribe(posts => {
        // when request success
        if (posts.length > 0) {
          this.page++;
          this.posts = this.posts.concat(posts);
        } else this.over = true;
        if (infiniteScroll) infiniteScroll.target.complete();
        this.searching = false;
      }, err => {
        // when request error
        this.searching = false;
        if (infiniteScroll) infiniteScroll.target.complete();
      });
    }, err => this.searching = false);
  }

  load(infiniteScroll) {
    // when scroll to bottom
    this.onSearch(this.keyword, infiniteScroll);
  }

  async clear() {
    // when click clear history
    let alert = await this.alertCtrl.create({
      header: this.trans['clear']['title'],
      message: this.trans['clear']['message'],
      buttons: [
        {
          text: this.trans['clear']['yes'],
          handler: () => {
            this.storage.remove('search').then(() => {
              this.search = [];
              this.show = false;
            });
          }
        },
        { text: this.trans['clear']['no'] }
      ]
    });
    alert.present();
  }
}
