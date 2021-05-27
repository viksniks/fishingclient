(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categories-categories-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #content>\n  <!-- Refresh -->\n  <app-refresher slot=\"fixed\" [disabled]=\"!loaded || isReorder\" (ionRefresh)=\"doRefresh($event)\"></app-refresher>\n  <!-- no data -->\n  <app-no-data *ngIf=\"loaded && categories.length <1\"></app-no-data>\n  <!-- Loading -->\n  <app-loading *ngIf=\"!loaded\"></app-loading>\n  <!-- List categories -->\n  <ion-reorder-group class=\"list-categories\" [disabled]=\"!isReorder\" (ionItemReorder)=\"itemReorder($event)\">\n    <ion-card *ngFor=\"let category of categories\" [routerLink]=\"!isReorder ? ['/detail-category', category.id] : null\">\n      <img [src]=\"category.image||'assets/imgs/no-image.png'\" width-100 class=\"ion-float-start\">\n      <ion-card-content absolute top start size-full blur-inner padding-x2>\n        <ion-reorder slot=\"start\" absolute bottom start index-100>\n          <ion-icon name=\"repeat\" size=\"large\" padding-x2 rotate-90></ion-icon>\n        </ion-reorder>\n        <b [innerHTML]=\"category.name\" class=\"category-name trueblack\"></b>\n      </ion-card-content>\n    </ion-card>\n  </ion-reorder-group>\n  <ion-fab #fab *ngIf=\"categories && categories.length > 1\" vertical=\"top\" horizontal=\"end\" slot=\"fixed\" class=\"fab-sort-categories\">\n    <ion-fab-button color=\"light\" size=\"small\" (click)=\"changeReorder()\">\n      <ion-icon name=\"repeat\" rotate-90></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <ion-fab-button color=\"primary\" (click)=\"saveReorder()\">\n        <ion-icon name=\"checkmark\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"danger\" (click)=\"clearReorder($event, fab)\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n    <!-- Go to top -->\n    <app-goto-top slot=\"fixed\" [content]=\"content\"></app-goto-top>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/categories/categories-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/categories/categories-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function() { return CategoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.page */ "./src/app/pages/categories/categories.page.ts");




const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
    }
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/categories/categories.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/pages/categories/categories-routing.module.ts");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/pages/categories/categories.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"]
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })
], CategoriesPageModule);



/***/ }),

/***/ "./src/app/pages/categories/categories.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-categories .list-categories ion-card {\n  min-height: 110px;\n}\napp-categories .list-categories ion-card .category-name {\n  padding-right: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-height: 40px;\n  line-height: 20px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  text-shadow: 1px 1px 5px var(--ion-color-truewhite);\n}\napp-categories .fab-sort-categories {\n  right: calc(var(--ion-safe-area-right, 0px));\n}\n[dir=rtl] app-categories .fab-sort-categories {\n  right: unset;\n  left: calc(var(--ion-safe-area-right, 0px));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGlCQUFBO0FBRE47QUFFTTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxtREFBQTtBQUFSO0FBSUU7RUFDRSw0Q0FBQTtBQUZKO0FBT0U7RUFDRSxZQUFBO0VBQ0EsMkNBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtY2F0ZWdvcmllcyB7XG4gIC5saXN0LWNhdGVnb3JpZXMge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDExMHB4O1xuICAgICAgLmNhdGVnb3J5LW5hbWUge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgbWF4LWhlaWdodDogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCB2YXIoLS1pb24tY29sb3ItdHJ1ZXdoaXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmZhYi1zb3J0LWNhdGVnb3JpZXMge1xuICAgIHJpZ2h0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQsIDBweCkpO1xuICB9XG59XG5cbltkaXI9XCJydGxcIl0gYXBwLWNhdGVnb3JpZXMge1xuICAuZmFiLXNvcnQtY2F0ZWdvcmllcyB7XG4gICAgcmlnaHQ6IHVuc2V0O1xuICAgIGxlZnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCwgMHB4KSk7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/categories/categories.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/categories/categories.page.ts ***!
  \*****************************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_services_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/core.service */ "./src/app/services/core.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






let CategoriesPage = class CategoriesPage {
    constructor(core, storage, alertCtrl, translate) {
        this.core = core;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
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
            if (refresher)
                refresher.target.complete();
        }, err => {
            // when error
            this.rawCategories = [];
            this.categories = [];
            if (refresher)
                refresher.target.complete();
            this.loaded = true;
        });
    }
    doRefresh(refresher) {
        // when refresh update last_time over cache
        this.core.updateTime();
        this.getCategories(refresher);
    }
    sortReorder(categories, reorder) {
        // clone categories as Object for sort
        let reCategories = {};
        categories.forEach(category => {
            reCategories[category['id']] = category;
        });
        // array sorted categories by reorder from Storage
        let sortCategories = [];
        // for reorder sort cateogories
        for (var index in reorder) {
            // if has category now add to list sortCategories
            if (reCategories[reorder[index]])
                sortCategories.push(reCategories[reorder[index]]);
            // delete from reCategories
            delete reCategories[reorder[index]];
        }
        // if reCategories has child add to end of sortCategories
        if (Object.keys(reCategories).length > 0)
            for (var category in reCategories)
                sortCategories.push(reCategories[category]);
        return sortCategories;
    }
    itemReorder(event) {
        // when reorder item
        this.categories = event.detail.complete(this.categories);
    }
    changeReorder() {
        if (!this.isReorder)
            this.isReorder = true;
        else
            this.cancelReorder();
    }
    cancelReorder() {
        // when click cancel reorder
        this.isReorder = false;
        this.categories = this.rawCategories.slice();
    }
    saveReorder() {
        // when click save reorder
        let reorder = {};
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
    clearReorder(event, fab) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            event.stopPropagation();
            // when click clear reorder show alert
            let alert = yield this.alertCtrl.create({
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
        });
    }
};
CategoriesPage.ctorParameters = () => [
    { type: src_app_services_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categories.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categories.page.scss */ "./src/app/pages/categories/categories.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
], CategoriesPage);



/***/ })

}]);
//# sourceMappingURL=pages-categories-categories-module-es2015.js.map