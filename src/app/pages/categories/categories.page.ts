import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CoreService } from 'src/app/services/core.service';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  // list categories
  categories: Object[];
  // for cancel reorder
  rawCategories: Object[];
  // for clear reorder
  dataCategories: Object[];
  // reorder categories from Storage
  reorder: Object;
  // set true when loaded categories
  loaded: boolean;
  // set true when reorder list categories
  isReorder: boolean;
  // translate for this page
  trans: Object;

  constructor(
    private core: CoreService,
    private storage: Storage,
    private alertCtrl: AlertController,
    translate: TranslateService,
  ) {
    translate.get('categories').subscribe(trans => this.trans = trans);
    storage.get('reorder_categories').then(reorder => {
      this.reorder = reorder;
      this.getCategories();
    });
  }

  ngOnInit() {
  }

  getCategories(refresher = null) {
    let endpoint = 'm_categories' + (this.core.getConfig('show_all_categories') ? '' : '?parent=0');
    // request get categories from website
    this.core.request(endpoint).subscribe(categories => {
      // when success
      this.rawCategories = categories;
      this.categories = categories;
      this.dataCategories = categories.slice();
      if (this.reorder) {
        this.categories = this.sortReorder(this.categories, this.reorder);
        this.rawCategories = this.categories.slice();
      }
      this.loaded = true;
      if (refresher) refresher.target.complete();
    }, err => {
      // when error
      this.rawCategories = [];
      this.categories = [];
      if (refresher) refresher.target.complete();
      this.loaded = true;
    });
  }

  doRefresh(refresher) {
    // when refresh update last_time over cache
    this.core.updateTime();
    this.getCategories(refresher);
  }

  sortReorder(categories: Object[], reorder: Object): Object[] {
    // clone categories as Object for sort
    let reCategories: Object = {};
    categories.forEach(category => {
      reCategories[category['id']] = category;
    });
    // array sorted categories by reorder from Storage
    let sortCategories: Object[] = [];
    // for reorder sort cateogories
    for (var index in reorder) {
      // if has category now add to list sortCategories
      if (reCategories[reorder[index]]) sortCategories.push(reCategories[reorder[index]]);
      // delete from reCategories
      delete reCategories[reorder[index]];
    }
    // if reCategories has child add to end of sortCategories
    if (Object.keys(reCategories).length > 0) for (var category in reCategories) sortCategories.push(reCategories[category]);
    return sortCategories;
  }

  itemReorder(event) {
    // when reorder item
    this.categories = event.detail.complete(this.categories);
  }

  changeReorder() {
    if (!this.isReorder) this.isReorder = true;
    else this.cancelReorder();
  }

  cancelReorder() {
    // when click cancel reorder
    this.isReorder = false;
    this.categories = this.rawCategories.slice();
  }

  saveReorder() {
    // when click save reorder
    let reorder: Object = {};
    this.categories.forEach((category, index) => {
      reorder[index] = category['id'];
    });
    // save to storage
    this.storage.set('reorder_categories', reorder).then(() => {
      this.reorder = reorder;
      this.rawCategories = this.categories.slice();
    });
    this.isReorder = false;
  }

  async clearReorder(event, fab) {
    event.stopPropagation();
    // when click clear reorder show alert
    let alert = await this.alertCtrl.create({
      header: this.trans['clear']['title'],
      message: this.trans['clear']['message'],
      buttons: [
        {
          text: this.trans['clear']['yes'],
          handler: () => {
            // if yes remove from Storage
            this.storage.remove('reorder_categories').then(() => {
              // update view
              this.reorder = null;
              // reload categories
              this.categories = this.dataCategories.slice();
              this.rawCategories = this.dataCategories.slice();
              // close fab
              this.isReorder = false;
              fab.close && fab.close();
            });
          }
        },
        { text: this.trans['clear']['no'] }
      ]
    });
    alert.present();
  }
}
