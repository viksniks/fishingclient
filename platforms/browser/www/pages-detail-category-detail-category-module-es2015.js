(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-category-detail-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-category/detail-category.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-category/detail-category.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar [color]=\"category?.color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/categories\"></ion-back-button>\n      <ion-button routerLink=\"/home/categories\" routerDirection=\"root\">\n        <ion-icon slot=\"icon-only\" name=\"home\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n\t\t\t<span [innerHTML]=\"category?.name\"></span>\n\t\t</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button *ngIf=\"category?.id\" [routerLink]=\"['/search', {id:category.id}]\">\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"changeSubscribe()\">\n\t\t\t\t<ion-icon *ngIf=\"!subscribe[id]\" slot=\"icon-only\" name=\"notifications\"></ion-icon>\n\t\t\t\t<ion-icon *ngIf=\"subscribe[id]\" slot=\"icon-only\" name=\"notifications-off\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n  </ion-toolbar>\n  <!-- List childs -->\n\t<ion-toolbar *ngIf=\"childs && childs.length > 0\" class=\"list-childs ion-no-padding ion-border\">\n\t\t<ion-row height-100 overflow nowrap>\n      <ion-button *ngFor=\"let child of childs\" fill=\"clear\" class=\"ion-no-margin\" [routerLink]=\"['/detail-category', child.id]\">\n\t\t\t\t<ion-badge [color]=\"child.color || 'place'\" class=\"ion-padding-vertical\">\n          <span [innerHTML]=\"child.name\"></span>\n\t\t\t\t</ion-badge>\n\t\t\t</ion-button>\n\t\t</ion-row>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n\t<!-- Refresh -->\n\t<app-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event)\"></app-refresher>\n\t<!-- no data -->\n  <app-no-data *ngIf=\"loaded && (!posts || posts.length < 1)\"></app-no-data>\n\t<!-- Loading -->\n\t<app-loading *ngIf=\"!loaded\"></app-loading>\n\t<!-- List posts -->\n\t<app-list-posts *ngIf=\"posts\" [posts]=\"posts\"></app-list-posts>\n\t<!-- Load more -->\n\t<app-infinite-scroll threshold=\"45%\" (ionInfinite)=\"load($event)\" *ngIf=\"!over && posts?.length > 0\"></app-infinite-scroll>\n  <!-- Go to top -->\n  <app-goto-top slot=\"fixed\" [content]=\"content\"></app-goto-top>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/detail-category/detail-category-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/detail-category/detail-category-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DetailCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCategoryPageRoutingModule", function() { return DetailCategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detail_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-category.page */ "./src/app/pages/detail-category/detail-category.page.ts");




const routes = [
    {
        path: '',
        component: _detail_category_page__WEBPACK_IMPORTED_MODULE_3__["DetailCategoryPage"]
    }
];
let DetailCategoryPageRoutingModule = class DetailCategoryPageRoutingModule {
};
DetailCategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailCategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/detail-category/detail-category.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/detail-category/detail-category.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetailCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCategoryPageModule", function() { return DetailCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detail_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-category-routing.module */ "./src/app/pages/detail-category/detail-category-routing.module.ts");
/* harmony import */ var _detail_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-category.page */ "./src/app/pages/detail-category/detail-category.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









let DetailCategoryPageModule = class DetailCategoryPageModule {
};
DetailCategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _detail_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailCategoryPageRoutingModule"]
        ],
        declarations: [_detail_category_page__WEBPACK_IMPORTED_MODULE_6__["DetailCategoryPage"]]
    })
], DetailCategoryPageModule);



/***/ }),

/***/ "./src/app/pages/detail-category/detail-category.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/detail-category/detail-category.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-detail-category .list-childs .button {\n  --padding-start: 8px;\n  --padding-end: 8px;\n}\napp-detail-category .list-childs .button ion-badge {\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWlsLWNhdGVnb3J5L2RldGFpbC1jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FBRE47QUFFTTtFQUNFLG1CQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhaWwtY2F0ZWdvcnkvZGV0YWlsLWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1kZXRhaWwtY2F0ZWdvcnkge1xuICAubGlzdC1jaGlsZHMge1xuICAgIC5idXR0b24ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgICBpb24tYmFkZ2Uge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/detail-category/detail-category.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/detail-category/detail-category.page.ts ***!
  \***************************************************************/
/*! exports provided: DetailCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCategoryPage", function() { return DetailCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/core.service */ "./src/app/services/core.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");






let DetailCategoryPage = class DetailCategoryPage {
    constructor(route, core, storage, OneSignal) {
        this.core = core;
        this.storage = storage;
        this.OneSignal = OneSignal;
        // is showing child categories
        this.showChild = false;
        // is user following this category
        this.subscribe = {};
        // page of posts
        this.page = 1;
        // set true show description
        this.isShow = false;
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
                    if (subscribe)
                        this.subscribe = subscribe;
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
        }
        else {
            this.OneSignal.sendTag(this.id, this.category['name']);
            this.subscribe[this.id] = this.category['name'];
            this.updateSubscribe();
        }
    }
    updateSubscribe() {
        // update subscribe status in Storage
        this.storage.set('subscribe', this.subscribe);
    }
};
DetailCategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__["OneSignal"] }
];
DetailCategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-category/detail-category.page.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        providers: [_ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__["OneSignal"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-category.page.scss */ "./src/app/pages/detail-category/detail-category.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__["OneSignal"]])
], DetailCategoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-detail-category-detail-category-module-es2015.js.map