(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites-setting-favorites-setting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites-setting/favorites-setting.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites-setting/favorites-setting.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar no-padding-important class=\"ion-no-padding\">\n    <ion-item lines=\"none\">\n      <ion-label>\n        <span tappable primary (click)=\"checkAll()\">{{'favorites.chose'|translate}}</span>\n      </ion-label>\n      <ion-button size=\"small\" slot=\"end\" fill=\"outline\" [color]=\"saved?'primary':'dark'\" (click)=\"save()\">\n        <span *ngIf=\"!saved\">{{'favorites.save'|translate}}</span>\n        <span *ngIf=\"saved\">{{'favorites.saved'|translate}}</span>\n      </ion-button>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Refresh -->\n  <app-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"getCategories($event)\"></app-refresher>\n  <!-- no data -->\n  <app-no-data *ngIf=\"loaded && (!categories || categories.length < 1)\"></app-no-data>\n  <!-- loading -->\n  <app-loading *ngIf=\"!loaded\"></app-loading>\n  <!-- list categories -->\n  <ion-list *ngIf=\"categories && categories.length > 0\">\n    <ion-item *ngFor=\"let category of categories\" lines=\"none\">\n      <ion-label [innerHTML]=\"category.name\"></ion-label>\n      <ion-checkbox [(ngModel)]=\"category.favorite\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/favorites-setting/favorites-setting-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/favorites-setting/favorites-setting-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: FavoritesSettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesSettingPageRoutingModule", function() { return FavoritesSettingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _favorites_setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorites-setting.page */ "./src/app/pages/favorites-setting/favorites-setting.page.ts");




const routes = [
    {
        path: '',
        component: _favorites_setting_page__WEBPACK_IMPORTED_MODULE_3__["FavoritesSettingPage"]
    }
];
let FavoritesSettingPageRoutingModule = class FavoritesSettingPageRoutingModule {
};
FavoritesSettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FavoritesSettingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/favorites-setting/favorites-setting.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/favorites-setting/favorites-setting.module.ts ***!
  \*********************************************************************/
/*! exports provided: FavoritesSettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesSettingPageModule", function() { return FavoritesSettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _favorites_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favorites-setting-routing.module */ "./src/app/pages/favorites-setting/favorites-setting-routing.module.ts");
/* harmony import */ var _favorites_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorites-setting.page */ "./src/app/pages/favorites-setting/favorites-setting.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









let FavoritesSettingPageModule = class FavoritesSettingPageModule {
};
FavoritesSettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _favorites_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritesSettingPageRoutingModule"]
        ],
        declarations: [_favorites_setting_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesSettingPage"]]
    })
], FavoritesSettingPageModule);



/***/ }),

/***/ "./src/app/pages/favorites-setting/favorites-setting.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/favorites-setting/favorites-setting.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zhdm9yaXRlcy1zZXR0aW5nL2Zhdm9yaXRlcy1zZXR0aW5nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/favorites-setting/favorites-setting.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/favorites-setting/favorites-setting.page.ts ***!
  \*******************************************************************/
/*! exports provided: FavoritesSettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesSettingPage", function() { return FavoritesSettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/core.service */ "./src/app/services/core.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");




let FavoritesSettingPage = class FavoritesSettingPage {
    constructor(storage, core) {
        this.storage = storage;
        this.core = core;
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
    getCategories(refresher) {
        // request get categories from website
        this.core.request('m_categories').subscribe(res => {
            this.categories = res;
            this.applyFavorites();
            if (refresher)
                refresher.target.complete();
            this.loaded = true;
        }, err => {
            if (refresher)
                refresher.target.complete();
            this.loaded = true;
        });
    }
    applyFavorites() {
        // set favorites
        if (!this.favorites || this.favorites.length < 1 || !this.categories || this.categories.length < 1)
            return;
        this.categories.forEach(category => {
            if (this.favorites.indexOf(category['id']) != -1)
                category['favorite'] = true;
        });
    }
    checkAll() {
        // set check = false if have > 0 categories not favorites
        let check = true;
        this.categories.forEach(category => {
            if (!category['favorite'])
                check = false;
        });
        // set all
        this.categories.forEach(category => {
            category['favorite'] = !check;
        });
    }
    save() {
        let favorites = [];
        this.categories.forEach(category => {
            if (category['favorite'])
                favorites.push(category['id']);
        });
        this.storage.set('favorites', favorites).then(() => {
            this.saved = true;
            setTimeout(() => { this.saved = false; }, 1000);
            this.favorites = favorites;
        });
    }
};
FavoritesSettingPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: src_app_services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"] }
];
FavoritesSettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites-setting',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./favorites-setting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites-setting/favorites-setting.page.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./favorites-setting.page.scss */ "./src/app/pages/favorites-setting/favorites-setting.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        src_app_services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]])
], FavoritesSettingPage);



/***/ })

}]);
//# sourceMappingURL=favorites-setting-favorites-setting-module-es2015.js.map