(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-images-images-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/images/images.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/images/images.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #content>\n  <!-- Refresh -->\n  <app-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event)\"></app-refresher>\n  <!-- no data -->\n  <app-no-data *ngIf=\"loaded && (!posts || posts.length < 1)\"></app-no-data>\n  <!-- loading -->\n  <app-loading *ngIf=\"!loaded\"></app-loading>\n  <!-- List posts -->\n  <app-list-posts *ngIf=\"posts\" [posts]=\"posts\" templates=\"card\"></app-list-posts>\n  <!-- Load more -->\n  <app-infinite-scroll threshold=\"45%\" (ionInfinite)=\"load($event)\" *ngIf=\"!over && posts?.length > 0\"></app-infinite-scroll>\n  <!-- Go to top -->\n  <app-goto-top slot=\"fixed\" [content]=\"content\"></app-goto-top>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/images/images-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/images/images-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ImagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesPageRoutingModule", function() { return ImagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _images_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images.page */ "./src/app/pages/images/images.page.ts");




const routes = [
    {
        path: '',
        component: _images_page__WEBPACK_IMPORTED_MODULE_3__["ImagesPage"]
    }
];
let ImagesPageRoutingModule = class ImagesPageRoutingModule {
};
ImagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ImagesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/images/images.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/images/images.module.ts ***!
  \***********************************************/
/*! exports provided: ImagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesPageModule", function() { return ImagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _images_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images-routing.module */ "./src/app/pages/images/images-routing.module.ts");
/* harmony import */ var _images_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images.page */ "./src/app/pages/images/images.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let ImagesPageModule = class ImagesPageModule {
};
ImagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _images_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImagesPageRoutingModule"]
        ],
        declarations: [_images_page__WEBPACK_IMPORTED_MODULE_6__["ImagesPage"]]
    })
], ImagesPageModule);



/***/ }),

/***/ "./src/app/pages/images/images.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/images/images.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltYWdlcy9pbWFnZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/images/images.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/images/images.page.ts ***!
  \*********************************************/
/*! exports provided: ImagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesPage", function() { return ImagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/core.service */ "./src/app/services/core.service.ts");



let ImagesPage = class ImagesPage {
    constructor(core) {
        this.core = core;
        // page of posts
        this.page = 1;
        this.getPosts();
    }
    ngOnInit() {
    }
    getPosts(refresher, infiniteScroll) {
        // get posts with page then concat to list post
        let params = { format: 'image', page: (refresher ? 1 : this.page) };
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
        // when refresh
        this.over = false;
        this.core.updateTime();
        this.getPosts(refresher);
    }
    load(infiniteScroll) {
        // when scroll to bottom
        this.getPosts(null, infiniteScroll);
    }
};
ImagesPage.ctorParameters = () => [
    { type: src_app_services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"] }
];
ImagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-images',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./images.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/images/images.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./images.page.scss */ "./src/app/pages/images/images.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]])
], ImagesPage);



/***/ })

}]);
//# sourceMappingURL=pages-images-images-module-es2015.js.map