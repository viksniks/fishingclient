(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bookmarks-bookmarks-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookmarks/bookmarks.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookmarks/bookmarks.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"toolbar-searchbar-common\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-searchbar [(ngModel)]=\"keyword\" (search)=\"onSearch()\" (ionClear)=\"keyword=''; onSearch()\"\n      [placeholder]=\"'bookmark.search'|translate\" class=\"ion-text-start\">\n      </ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"clear()\">\n\t\t\t\t<ion-icon slot=\"icon-only\" src=\"assets/svg/icon-clean.svg\"></ion-icon>\n\t\t\t</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"list-bookmark\">\n\t\t<!-- Loading -->\n    <app-loading *ngIf=\"!loaded\"></app-loading>\n    <!-- no data -->\n    <app-no-data *ngIf=\"loaded && posts && posts.length < 1\" src=\"assets/imgs/no-data-bookmarks.svg\">\n      <div place class=\"ion-margin-bottom\">{{'bookmark.noData.message1'|translate}}</div>\n      <div place class=\"ion-margin-bottom\">{{'bookmark.noData.message2'|translate}}</div>\n      <ion-button size=\"small\" class=\"ion-margin-top\" routerLink=\"/home\" routerDirection=\"root\">{{'bookmark.noData.button'|translate}}</ion-button>\n    </app-no-data>\n\t\t<!-- List posts -->\n\t\t<ion-list *ngIf=\"loaded && posts && posts.length > 0\" box-shadow class=\"ion-no-margin\">\n\t\t\t<ion-item-sliding *ngFor=\"let post of posts\">\n\t\t\t\t<ion-item lines=\"none\" detail=\"false\" [routerLink]=\"['/detail', post.id]\">\n\t\t\t\t\t<!-- thumbnail image -->\n\t\t\t\t\t<ion-thumbnail slot=\"start\" border-radius>\n\t\t\t\t\t\t<img [src]=\"post.image||'assets/imgs/no-image-square.png'\">\n          </ion-thumbnail>\n          <ion-label>\n            <!-- title post -->\n            <div [innerHTML]=\"post.title\" class=\"ion-margin-bottom ion-text-wrap\"></div>\n            <!-- date modified post -->\n            <div place overflow><small class=\"ion-float-start\">{{post.date|time}}</small></div>\n          </ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item-options side=\"end\">\n          <ion-item-option (click)=\"delete(post)\" color=\"danger\">{{'bookmark.delete'|translate}}</ion-item-option>\n\t\t\t\t</ion-item-options>\n\t\t\t</ion-item-sliding>\n\t\t</ion-list>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/bookmarks/bookmarks-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/bookmarks/bookmarks-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: BookmarksPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksPageRoutingModule", function() { return BookmarksPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bookmarks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookmarks.page */ "./src/app/pages/bookmarks/bookmarks.page.ts");




const routes = [
    {
        path: '',
        component: _bookmarks_page__WEBPACK_IMPORTED_MODULE_3__["BookmarksPage"]
    }
];
let BookmarksPageRoutingModule = class BookmarksPageRoutingModule {
};
BookmarksPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookmarksPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/bookmarks/bookmarks.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/bookmarks/bookmarks.module.ts ***!
  \*****************************************************/
/*! exports provided: BookmarksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksPageModule", function() { return BookmarksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bookmarks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookmarks-routing.module */ "./src/app/pages/bookmarks/bookmarks-routing.module.ts");
/* harmony import */ var _bookmarks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookmarks.page */ "./src/app/pages/bookmarks/bookmarks.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");










let BookmarksPageModule = class BookmarksPageModule {
};
BookmarksPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
            _bookmarks_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookmarksPageRoutingModule"]
        ],
        declarations: [_bookmarks_page__WEBPACK_IMPORTED_MODULE_6__["BookmarksPage"]]
    })
], BookmarksPageModule);



/***/ }),

/***/ "./src/app/pages/bookmarks/bookmarks.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/bookmarks/bookmarks.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-bookmarks .list-bookmark .item {\n  --padding-start: 0;\n}\napp-bookmarks .list-bookmark .item ion-thumbnail {\n  --size: 80px;\n  min-width: var(--size);\n  min-height: var(--size);\n  margin: 10px !important;\n  overflow: hidden;\n}\napp-bookmarks .list-bookmark .item .item-inner {\n  --margin-right: 2px;\n  --margin-left: 2px;\n}\napp-bookmarks .list-bookmark ion-item-options {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va21hcmtzL2Jvb2ttYXJrcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDRSxrQkFBQTtBQUhOO0FBSU07RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUlNO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUZSO0FBS0k7RUFDRSxtQkFBQTtBQUhOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm9va21hcmtzL2Jvb2ttYXJrcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvL3NoYXJlZF92YXJpYWJsZXMuc2Nzc1wiO1xuXG5hcHAtYm9va21hcmtzIHtcbiAgLmxpc3QtYm9va21hcmsge1xuICAgIC5pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICAtLXNpemU6IDgwcHg7XG4gICAgICAgIG1pbi13aWR0aDogdmFyKC0tc2l6ZSk7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXNpemUpO1xuICAgICAgICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIC5pdGVtLWlubmVyIHtcbiAgICAgICAgLS1tYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgLS1tYXJnaW4tbGVmdDogMnB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24taXRlbS1vcHRpb25zIHtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/bookmarks/bookmarks.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/bookmarks/bookmarks.page.ts ***!
  \***************************************************/
/*! exports provided: BookmarksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksPage", function() { return BookmarksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/core.service */ "./src/app/services/core.service.ts");






let BookmarksPage = class BookmarksPage {
    constructor(storage, translate, alertCtrl, core) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.core = core;
        // list bookmark from Storage
        this.rawPosts = {};
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
        if (!this.keyword)
            this.keyword = '';
        // foreach list Bookmark get results
        for (var key in this.rawPosts) {
            let post = this.rawPosts[key];
            if (post && post['title'] && post['title'].toLowerCase().indexOf(this.keyword.toLowerCase()) != -1)
                this.posts.push(post);
        }
        this.loaded = true;
    }
    delete(post) {
        if (!post || !post['bookmark'])
            return;
        this.storage.remove(post['bookmark']).then(() => {
            delete this.rawPosts[post['bookmark']];
            this.onSearch();
        });
    }
    clear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: this.trans['clear']['title'],
                message: this.trans['clear']['message'],
                buttons: [
                    {
                        text: this.trans['clear']['yes'],
                        handler: () => {
                            let tmpBookmark = Object.assign({}, this.rawPosts);
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
        });
    }
};
BookmarksPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"] }
];
BookmarksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bookmarks',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bookmarks.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookmarks/bookmarks.page.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bookmarks.page.scss */ "./src/app/pages/bookmarks/bookmarks.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        src_app_services_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"]])
], BookmarksPage);



/***/ })

}]);
//# sourceMappingURL=pages-bookmarks-bookmarks-module-es2015.js.map