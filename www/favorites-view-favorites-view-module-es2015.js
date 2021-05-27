(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites-view-favorites-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites-view/favorites-view.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites-view/favorites-view.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #content>\n  <!-- Refresh -->\n  <app-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event)\"></app-refresher>\n  <!-- no data -->\n  <app-no-data *ngIf=\"loaded && (!favorites || favorites.length < 1 || !posts || posts.length < 1)\" src=\"assets/imgs/no-data-favorites.svg\">\n    <div place class=\"ion-margin-bottom\">{{'favorites.noData.message'|translate}}</div>\n    <ion-button color=\"danger\" size=\"small\" class=\"ion-margin-top\" routerLink=\"/home/favorites/setting\">{{'favorites.noData.button'|translate}}</ion-button>\n  </app-no-data>\n  <!-- loading -->\n  <app-loading *ngIf=\"!loaded\"></app-loading>\n  <!-- List posts -->\n  <app-list-posts *ngIf=\"posts\" [posts]=\"posts\"></app-list-posts>\n  <!-- Load more -->\n  <app-infinite-scroll threshold=\"45%\" (ionInfinite)=\"load($event)\" *ngIf=\"!over && posts?.length > 0\"></app-infinite-scroll>\n  <!-- Go to top -->\n  <app-goto-top slot=\"fixed\" [content]=\"content\"></app-goto-top>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/favorites-view/favorites-view-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/favorites-view/favorites-view-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: FavoritesViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesViewPageRoutingModule", function() { return FavoritesViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _favorites_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorites-view.page */ "./src/app/pages/favorites-view/favorites-view.page.ts");




const routes = [
    {
        path: '',
        component: _favorites_view_page__WEBPACK_IMPORTED_MODULE_3__["FavoritesViewPage"]
    }
];
let FavoritesViewPageRoutingModule = class FavoritesViewPageRoutingModule {
};
FavoritesViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FavoritesViewPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/favorites-view/favorites-view.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/favorites-view/favorites-view.module.ts ***!
  \***************************************************************/
/*! exports provided: FavoritesViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesViewPageModule", function() { return FavoritesViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _favorites_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favorites-view-routing.module */ "./src/app/pages/favorites-view/favorites-view-routing.module.ts");
/* harmony import */ var _favorites_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorites-view.page */ "./src/app/pages/favorites-view/favorites-view.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









let FavoritesViewPageModule = class FavoritesViewPageModule {
};
FavoritesViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _favorites_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritesViewPageRoutingModule"]
        ],
        declarations: [_favorites_view_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesViewPage"]]
    })
], FavoritesViewPageModule);



/***/ }),

/***/ "./src/app/pages/favorites-view/favorites-view.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/favorites-view/favorites-view.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zhdm9yaXRlcy12aWV3L2Zhdm9yaXRlcy12aWV3LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/favorites-view/favorites-view.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/favorites-view/favorites-view.page.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesViewPage", function() { return FavoritesViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_services_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/core.service */ "./src/app/services/core.service.ts");




let FavoritesViewPage = class FavoritesViewPage {
    constructor(storage, core) {
        this.storage = storage;
        this.core = core;
        // page of posts
        this.page = 1;
        this.doRefresh();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // refresh if setting changed
        if (this.favorites)
            this.storage.get('favorites').then(res => {
                if (!res)
                    res = [];
                if (JSON.stringify(this.favorites) != JSON.stringify(res)) {
                    this.loaded = false;
                    this.posts = [];
                    this.page = 1;
                    this.doRefresh();
                }
            });
    }
    doRefresh(refresher) {
        // when refresh
        this.storage.get('favorites').then(res => {
            this.favorites = res || [];
            this.over = false;
            if (refresher)
                this.core.updateTime();
            this.getPosts(refresher);
        });
    }
    getPosts(refresher, infiniteScroll) {
        // empty favorites
        if (!this.favorites || this.favorites.length < 1) {
            this.posts = [];
            this.over = true;
            this.loaded = true;
            if (refresher)
                refresher.target.complete();
            if (infiniteScroll)
                infiniteScroll.target.complete();
            return;
        }
        // get posts with page then concat to list post
        let params = { categories: this.favorites.join(','), page: (refresher ? 1 : this.page) };
        this.core.getPosts(params).subscribe(posts => {
            if (refresher)
                this.page = 1;
            if (posts.length > 0)
                this.page++;
            else
                this.over = true;
            if (infiniteScroll) {
                this.posts = this.posts.concat(posts);
                infiniteScroll.target.complete();
            }
            else
                this.posts = posts;
            this.loaded = true;
            if (refresher)
                refresher.target.complete();
        }, err => {
            if (infiniteScroll)
                infiniteScroll.target.complete();
            if (refresher)
                refresher.target.complete();
            this.loaded = true;
        });
    }
    load(infiniteScroll) {
        // when scroll to bottom
        this.getPosts(null, infiniteScroll);
    }
};
FavoritesViewPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: src_app_services_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"] }
];
FavoritesViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./favorites-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites-view/favorites-view.page.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./favorites-view.page.scss */ "./src/app/pages/favorites-view/favorites-view.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        src_app_services_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"]])
], FavoritesViewPage);



/***/ })

}]);
//# sourceMappingURL=favorites-view-favorites-view-module-es2015.js.map