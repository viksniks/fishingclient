import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-favorites-setting',
  templateUrl: './favorites-setting.page.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./favorites-setting.page.scss'],
})
export class FavoritesSettingPage implements OnInit {
  // list categories id in favorites
  favorites: Number[];
  // list categories
  categories: Object[];
  // set true when loaded categories
  loaded: boolean;
  // set true when saved favorites to storage
  saved: boolean;

  constructor(
    private storage: Storage,
    private core: CoreService,
  ) {
    this.getFavorites();
  }

  ngOnInit() {
  }

  getFavorites() {
    // get favorites from Storage
    this.storage.get('favorites').then(res => {
      this.favorites = res;
      this.getCategories();
    });
  }

  getCategories(refresher?) {
    // request get categories from website
    this.core.request('m_categories').subscribe(res => {
      this.categories = res;
      this.applyFavorites();
      if (refresher) refresher.target.complete();
      this.loaded = true;
    }, err => {
      if (refresher) refresher.target.complete();
      this.loaded = true;
    });
  }

  applyFavorites() {
    // set favorites
    if (!this.favorites || this.favorites.length < 1 || !this.categories || this.categories.length < 1) return;
    this.categories.forEach(category => {
      if (this.favorites.indexOf(category['id']) != -1) category['favorite'] = true;
    });
  }

  checkAll() {
    // set check = false if have > 0 categories not favorites
    let check: boolean = true;
    this.categories.forEach(category => {
      if (!category['favorite']) check = false;
    });
    // set all
    this.categories.forEach(category => {
      category['favorite'] = !check;
    })
  }

  save() {
    let favorites: Number[] = [];
    this.categories.forEach(category => {
      if (category['favorite']) favorites.push(category['id']);
    });
    this.storage.set('favorites', favorites).then(() => {
      this.saved = true;
      setTimeout(() => { this.saved = false }, 1000);
      this.favorites = favorites;
    })
  }
}
