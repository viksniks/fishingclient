(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"toolbar-searchbar-common\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-searchbar [(ngModel)]=\"_keyword\" (search)=\"doSearch()\" (ionClear)=\"_keyword=''; doSearch()\"\n      [placeholder]=\"'search.search'|translate\" class=\"ion-text-start\">\n      </ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"show=!show\" [color]=\"show?'success':'primary'\" [disabled]=\"!search || search.length < 1\">\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"time-outline\"></ion-icon>\n\t\t\t</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n  <!-- history -->\n  <div slot=\"fixed\" absolute top start size-full light-bg overflow *ngIf=\"show && search && search.length > 0\">\n    <h5 place class=\"ion-text-center\">{{'search.history'|translate}}</h5>\n    <ion-button *ngFor=\"let item of search\" fill=\"clear\" expand=\"block\" (click)=\"onSearch(item)\" text-ellipsis>\n      <span>{{item}}</span>\n    </ion-button>\n  </div>\n  <ion-button *ngIf=\"show && search && search.length > 0\"slot=\"fixed\" absolute bottom end (click)=\"clear()\" fill=\"clear\" color=\"danger\">\n    <ion-icon slot=\"icon-only\" src=\"assets/svg/icon-clean.svg\"></ion-icon>\n  </ion-button>\n  <!-- no data -->\n  <app-no-data *ngIf=\"searched && !searching && (!posts || posts.length < 1)\"></app-no-data>\n  <!-- searching -->\n  <app-loading *ngIf=\"searching\"></app-loading>\n  <!-- List posts -->\n  <app-list-posts *ngIf=\"posts\" [posts]=\"posts\"></app-list-posts>\n  <app-infinite-scroll threshold=\"45%\" (ionInfinite)=\"load($event)\" *ngIf=\"!over && posts?.length > 0\"></app-infinite-scroll>\n  <!-- Go to top -->\n  <app-goto-top slot=\"fixed\" [content]=\"content\"></app-goto-top>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/search/search-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/search/search-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function() { return SearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.page */ "./src/app/pages/search/search.page.ts");




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/search/search.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.module.ts ***!
  \***********************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/pages/search/search-routing.module.ts");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/pages/search/search.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









let SearchPageModule = class SearchPageModule {
};
SearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"]
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
    })
], SearchPageModule);



/***/ }),

/***/ "./src/app/pages/search/search.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/search/search.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/search/search.page.ts ***!
  \*********************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/core.service */ "./src/app/services/core.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let SearchPage = class SearchPage {
    constructor(storage, core, alertCtrl, translate, route) {
        this.storage = storage;
        this.core = core;
        this.alertCtrl = alertCtrl;
        // search history from Storage
        this.search = [];
        // set true show History
        this.show = false;
        // page of search results
        this.page = 1;
        // get translate
        translate.get('search').subscribe(trans => {
            this.trans = trans;
        });
        // get params for search global or search in category
        this.id = route.snapshot.params['id'];
        // get search history
        storage.get('search').then(search => {
            if (search)
                this.search = search;
        });
    }
    ngOnInit() {
    }
    doSearch() {
        if (!this._keyword) {
            this.page = 1;
            this.over = false;
            this.posts = [];
        }
        else
            this.onSearch(this._keyword);
    }
    onSearch(keyword, infiniteScroll) {
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
        if (!this.keyword)
            return;
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
            if (this.id)
                params['categories'] = this.id;
            // request search posts with keyword
            this.core.getPosts(params).subscribe(posts => {
                // when request success
                if (posts.length > 0) {
                    this.page++;
                    this.posts = this.posts.concat(posts);
                }
                else
                    this.over = true;
                if (infiniteScroll)
                    infiniteScroll.target.complete();
                this.searching = false;
            }, err => {
                // when request error
                this.searching = false;
                if (infiniteScroll)
                    infiniteScroll.target.complete();
            });
        }, err => this.searching = false);
    }
    load(infiniteScroll) {
        // when scroll to bottom
        this.onSearch(this.keyword, infiniteScroll);
    }
    clear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // when click clear history
            let alert = yield this.alertCtrl.create({
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
        });
    }
};
SearchPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: src_app_services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search.page.scss */ "./src/app/pages/search/search.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        src_app_services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], SearchPage);



/***/ })

}]);
//# sourceMappingURL=pages-search-search-module-es2015.js.map