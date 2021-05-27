(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail/detail.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail/detail.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"!viewMode\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n      <ion-button routerLink=\"/home\" routerDirection=\"root\">\n        <ion-icon slot=\"icon-only\" name=\"home\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"refresh()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh-circle\" *ngIf=\"!loading\"></ion-icon>\n        <ion-spinner name=\"{{'general._infiniteSpinner'|translate}}\" *ngIf=\"loading\"></ion-spinner>\n      </ion-button>\n    </ion-buttons>\n\n    <!-- new -->\n \n    <!-- <ion-button (click)=\"speak()\"> \n   \n      <ion-icon slot=\"icon-only\" *ngIf=\"speaking == false\" name=\"volume-high-outline\"></ion-icon>\n      <ion-icon *ngIf=\"speaking == true\" name=\"volume-mute-outline\"></ion-icon>\n      \n    </ion-button> -->\n   \n    <!-- new end -->\n\n    <ion-buttons slot=\"end\">\n      \n      <ion-button (click)=\"speak()\"> \n   \n        <ion-icon slot=\"icon-only\" *ngIf=\"speaking == false\" name=\"volume-high-outline\"></ion-icon>\n        <ion-icon *ngIf=\"speaking == true\" name=\"volume-mute-outline\"></ion-icon>\n        \n      </ion-button>\n\n      <!-- <ion-button *ngIf=\"detail && !type\" [color]=\"bookmarked?'danger':null\" (click)=\"changeBookmark()\">\n        <ion-icon slot=\"icon-only\" name=\"bookmarks\"></ion-icon>\n      </ion-button> -->\n      <ion-button (click)=\"isFont=!isFont\">\n        <!-- <ion-icon slot=\"icon-only\" [attr.danger]=\"isFont?true:null\" src=\"assets/svg/icon-font.svg\"></ion-icon> -->\n        <ion-icon slot=\"icon-only\" [attr.danger]=\"isFont?true:null\" name=\"text-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"isFont\">\n    <ion-range [(ngModel)]=\"fontsize.value\" [min]=\"fontsize.min\" [max]=\"fontsize.max\" snaps=\"true\" pin=\"true\" (ionChange)=\"updateFont()\"></ion-range>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n  <!-- Refresh -->\n  <app-refresher slot=\"fixed\" [disabled]=\"!viewMode\" (ionRefresh)=\"refresh($event)\"></app-refresher>\n  <!-- No data -->\n  <app-no-data *ngIf=\"error && !detail\"></app-no-data>\n  <!-- Loading -->\n  <app-loading *ngIf=\"!detail && !error\"></app-loading>\n  <div *ngIf=\"detail\" [style.fontSize]=\"(fontsize.value*2+(fontsize.value-7)*0.5)+'px'\">\n    <!-- Featured -->\n    <img *ngIf=\"detail.featured_url\" [src]=\"detail.featured_url\" width-100 margin-auto (click)=\"htmlContent && htmlContent.click($event)\" class=\"thumbnail-image object-cover\" />\n    <!-- Title -->\n    <div *ngIf=\"!viewMode\" padding-x2>\n      <h3 [innerHTML]=\"detail.title.rendered\" class=\"ion-no-margin\"></h3>\n      <br>\n      <!-- <h6 class=\"ion-margin-top\">{{detail.modified_gmt+'+00:00'|date:('detail._date_format'|translate)}}</h6> -->\n      <h6 *ngIf=\"detail.m_categories\" overflow place class=\"ion-no-margin ion-text-nowrap\">\n        <div *ngFor=\"let category of detail.m_categories\" class=\"ion-float-start ion-margin-end ion-padding-vertical max-width-100 cat-list\"\n          text-ellipsis [routerLink]=\"['/detail-category', category.id]\">\n          <span [innerHTML]=\"category.name\" class=\"ion-margin-end ion-padding-end\"></span>\n        </div>\n      </h6>\n    </div>\n    <!-- Social share -->\n    <!-- <ion-row *ngIf=\"!viewMode\" class=\"ion-align-items-center ion-padding ion-margin-bottom social-share\">\n      <ion-col col-4 *ngFor=\"let item of socialShare\" class=\"ion-no-padding ion-padding-horizontal\">\n        <ion-button size=\"small\" expand=\"block\" [ngClass]=\"item.id\" (click)=\"shareBy(item)\" class=\"ion-no-margin\">\n          <ion-icon slot=\"icon-only\" [name]=\"item.icon\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row> -->\n    <!-- Message require view ads -->\n    <div *ngIf=\"!post && detail.required_rewards_ads\" padding-x2 class=\"ion-margin-bottom truewhite ion-text-center\">\n      <div class=\"ion-padding\" danger-bg border-radius>\n        <div class=\"ion-margin-vertical\">{{'detail.rewards.message'|translate}}</div>\n        <ion-icon name=\"caret-forward-circle-outline\" tappable (click)=\"showRewards()\" font-64></ion-icon>\n      </div>\n    </div>\n    <!-- Content -->\n    <div *ngIf=\"post\" class=\"ion-padding ion-margin-bottom post-image\">\n      <!-- Content body -->\n      <app-html-content #htmlContent class=\"ion-padding-horizontal\" [innerHTML]=\"post\" [content]=\"content\" makeSafe=\"true\"\n        [(loading)]=\"loading\" [handleLoading]=\"false\" [data]=\"{id: id, link: detail.link}\">\n      </app-html-content>\n       <div *ngIf=\"!type\" class=\"ion-margin-top display-date-time\">{{detail.modified_gmt+'+00:00'|date:('detail._date_format'|translate)}}</div>\n      <hr *ngIf=\"!type\" class=\"hr-d\">\n      \n    </div>\n    <!-- List posts -->\n   <app-list-posts *ngIf=\"!viewMode && posts && posts.length > 0 && !type\" [posts]=\"posts\" templates=\"column\" class=\"in-categories horizontal-scroll ion-no-box-shadow\">\n    </app-list-posts>\n    \n  </div>\n  <!-- Go to top -->\n  <app-goto-top slot=\"fixed\" [content]=\"content\"></app-goto-top>\n</ion-content>\n\n<ion-footer *ngIf=\"!viewMode && !type\">\n  <ion-toolbar>\n    <ion-row class=\"ion-justify-content-between ion-align-item-center\">\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"previous()\" [disabled]=\"type\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"detail && !type\" [color]=\"bookmarked?'danger':null\" (click)=\"changeBookmark()\">\n        <ion-icon slot=\"icon-only\" name=\"bookmarks\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"next()\" [disabled]=\"type\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-forward\"></ion-icon>\n      </ion-button>\n      <!-- <ion-button fill=\"clear\" size=\"small\" [routerLink]=\"['/comment', id, detail?{status:detail.comment_status}:{}]\" [disabled]=\"!detail\" overflow-visible>\n        <span *ngIf=\"detail?.m_comment_count\" absolute top start class=\"ion-margin-start\">\n          <ion-badge color=\"danger\" class=\"ion-margin-start\">\n            <span>{{detail.m_comment_count}}</span>\n          </ion-badge>\n        </span>\n        <ion-icon slot=\"icon-only\" name=\"chatbubbles\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"share()\" [disabled]=\"!detail\">\n        <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\n      </ion-button> -->\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/detail/detail-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/detail/detail-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function() { return DetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail.page */ "./src/app/pages/detail/detail.page.ts");




const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
    }
];
let DetailPageRoutingModule = class DetailPageRoutingModule {
};
DetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/detail/detail.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/detail/detail.module.ts ***!
  \***********************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail-routing.module */ "./src/app/pages/detail/detail-routing.module.ts");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail.page */ "./src/app/pages/detail/detail.page.ts");









let DetailPageModule = class DetailPageModule {
};
DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_7__["DetailPageRoutingModule"]
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_8__["DetailPage"]]
    })
], DetailPageModule);



/***/ }),

/***/ "./src/app/pages/detail/detail.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/detail/detail.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-detail .thumbnail-image {\n  max-height: 400px;\n}\napp-detail .in-categories .content {\n  padding: var(--ion-padding) !important;\n}\napp-detail .in-categories .content .item {\n  padding: var(--ion-padding) !important;\n}\napp-detail .in-categories .content .item:last-child {\n  padding-right: calc(var(--ion-padding) * 2) !important;\n}\n[dir=rtl] app-detail .in-categories .content .item:last-child {\n  padding-right: var(--ion-padding) !important;\n  padding-left: calc(var(--ion-padding) * 2) !important;\n}\n.display-date-time {\n  font-size: 13px;\n  padding-left: 8px;\n  color: gray;\n}\n.hr-d {\n  width: 100% !important;\n  background: #616161 !important;\n  display: block !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n.related-post {\n  color: gray;\n  padding-left: 10px;\n}\n.post-image img {\n  border-radius: 10px;\n}\n.cat-list {\n  border: 1px solid yellow;\n  border-radius: 20px;\n  padding: 3px;\n  padding-left: 20px;\n  color: yellow;\n}\ntable {\n  border-collapse: separate;\n  border-spacing: 10px 0;\n  position: relative;\n  left: -13px;\n}\ntd {\n  padding: 10px 0;\n  border-bottom: 1px solid white;\n  text-align: center;\n}\nth {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: yellow;\n  color: black;\n}\n.column-4 {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBR0k7RUFDRSxzQ0FBQTtBQUROO0FBRU07RUFDRSxzQ0FBQTtBQUFSO0FBQ1E7RUFDRSxzREFBQTtBQUNWO0FBQVU7RUFDRSw0Q0FBQTtFQUNBLHFEQUFBO0FBRVo7QUFNQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFIRjtBQU1BO0VBRUUsc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBRUEscUJBQUE7RUFDQSw4QkFBQTtBQUxGO0FBUUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFMRjtBQVFBO0VBQ0UsbUJBQUE7QUFMRjtBQVFBO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDRCxrQkFBQTtFQUNBLGFBQUE7QUFMRDtBQVNBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0UsV0FBQTtBQU5KO0FBU0E7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQU5GO0FBU0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFORjtBQVNBO0VBQ0UsZ0JBQUE7QUFORiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWRldGFpbCB7XG4gIC50aHVtYm5haWwtaW1hZ2Uge1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICB9XG4gIC5pbi1jYXRlZ29yaWVzIHtcbiAgICAuY29udGVudCB7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZykgIWltcG9ydGFudDtcbiAgICAgIC5pdGVtIHtcbiAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmcpICFpbXBvcnRhbnQ7XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1pb24tcGFkZGluZykgKiAyKSAhaW1wb3J0YW50O1xuICAgICAgICAgIFtkaXI9XCJydGxcIl0gJiB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZykgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1pb24tcGFkZGluZykgKiAyKSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZGlzcGxheS1kYXRlLXRpbWV7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uaHItZHtcblxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiByZ2IoOTcsIDk3LCA5NykgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuXG4ucmVsYXRlZC1wb3N0e1xuICBjb2xvcjogZ3JheTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ucG9zdC1pbWFnZSBpbWd7XG4gIGJvcmRlci1yYWRpdXM6MTBweDtcbn1cblxuLmNhdC1saXN0e1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDApO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gcGFkZGluZy1sZWZ0OiAyMHB4O1xuIGNvbG9yOnJnYigyNTUsIDI1NSwgMCk7XG4gXG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDEwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xM3B4O1xufVxuXG50ZCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50aCB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyNTUsIDApO1xuICBjb2xvcjogcmdiKDAsIDAsIDApO1xufVxuXG4uY29sdW1uLTR7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/detail/detail.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/detail/detail.page.ts ***!
  \*********************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/core.service */ "./src/app/services/core.service.ts");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/admob-free/ngx */ "./node_modules/@ionic-native/admob-free/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ "./node_modules/@ionic-native/firebase-analytics/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_components_html_content_html_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/html-content/html-content.component */ "./src/app/components/html-content/html-content.component.ts");
/* harmony import */ var src_app_services_utitlities_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/utitlities.service */ "./src/app/services/utitlities.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_classes_subsink__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/classes/subsink */ "./src/app/classes/subsink.ts");
/* harmony import */ var src_app_const_development__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/const/development */ "./src/app/const/development.ts");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/__ivy_ngcc__/ngx/index.js");

















let DetailPage = class DetailPage {
    constructor(route, translate, storage, core, platform, Toast, SocialSharing, ngZone, navCtrl, AdMobFree, FirebaseAnalytics, alertCtrl, utilities, tts) {
        this.storage = storage;
        this.core = core;
        this.platform = platform;
        this.Toast = Toast;
        this.SocialSharing = SocialSharing;
        this.ngZone = ngZone;
        this.navCtrl = navCtrl;
        this.AdMobFree = AdMobFree;
        this.FirebaseAnalytics = FirebaseAnalytics;
        this.alertCtrl = alertCtrl;
        this.utilities = utilities;
        this.tts = tts;
        // posts same categories
        this.posts = [];
        // set true show change font size panel
        this.isFont = false;
        // font size for settings
        this.fontsize = {
            value: 9,
            max: 12,
            min: 7
        };
        this.speaking = true;
        // rewards ads object
        this.rewards = {
            key: null,
            subs: new src_app_classes_subsink__WEBPACK_IMPORTED_MODULE_14__["SubSink"](),
        };
        translate.get('detail').subscribe(trans => {
            this.trans = trans;
            if (this.trans['_socialShare'] && this.trans['_socialShare'].length > 0) {
                this.socialShare = this.trans['_socialShare'];
            }
        });
        // get params
        route.snapshot.params = Object.assign({}, route.snapshot.params, route.snapshot.data);
        this.id = Number(route.snapshot.params['id']);
        this.type = route.snapshot.params['type'];
        this.slug = route.snapshot.params['slug'];
        this.viewMode = !!route.snapshot.params['viewMode'];
        this.setEndpoint();
        if (Number.isInteger(Number(this.id))) {
            // get bookmark of this post
            storage.get(src_app_const_development__WEBPACK_IMPORTED_MODULE_15__["BOOKMARK_PREFIX"] + this.id).then(detail => {
                if (detail && this.core.getHostname(detail['link']) == this.core.hostname) {
                    // if this post bookmarked
                    this.detail = detail;
                    this.getContent();
                    this.bookmarked = true;
                    this.prepareView();
                }
                else
                    this.getPosts();
            });
        }
        // get font size from storage
        storage.get('fontsize').then(fontsize => {
            if (!fontsize || fontsize < this.fontsize['min'] || fontsize > this.fontsize['max'])
                this.fontsize['value'] = this.fontsize['min'] + 2;
            else
                this.fontsize['value'] = fontsize;
        });
        // function when platform ready
        this.platformReady();
    }
    get loading() {
        return this._loading;
    }
    set loading(value) {
        this._loading = value;
        if (this.viewMode) {
            if (value) {
                this.core.showLoading();
            }
            else {
                this.core.hideLoading();
            }
        }
    }
    // *****************************************
    // Text to scpeech
    // *******************************************
    speak() {
        if (this.speaking == true) {
            this.speaking = false;
            let temp = this.post.replace(/(<([^>]+)>)/ig, '');
            let til = this.detail.title.rendered.replace(/(<([^>]+)>)/ig, '');
            let options = {
                text: "A cím " + til + "és a tartalom " + temp,
                locale: "hu_HU",
                rate: 1.5
            };
            this.tts.speak(options).then((val) => {
                this.speaking = true;
            }, (err) => {
                alert(JSON.stringify(err));
            });
        }
        else {
            this.speaking = true;
            this.tts.speak("").then((val) => {
            }, (err) => {
                alert(JSON.stringify(err));
            });
        }
    }
    // stop speech
    stopSpeak() {
        this.tts.stop();
    }
    ngOnInit() {
        this.speaking = true;
        this.tts.speak("").then((val) => {
        }, (err) => {
            alert(JSON.stringify(err));
        });
    }
    ngOnDestroy() {
        this.speaking = true;
        this.tts.speak("").then((val) => {
        }, (err) => {
            alert(JSON.stringify(err));
        });
        this.rewards['subs'].unsubscribe();
    }
    setEndpoint() {
        if (this.type) {
            if (this.id)
                this.endpoint = 'pages/' + this.id;
            else if (this.slug)
                this.endpoint = 'pages/?slug=' + this.slug;
        }
        else
            this.endpoint = 'posts/' + this.id;
    }
    platformReady() {
        this.platform.ready().then(() => {
            if (!this.platform.is('cordova'))
                return;
            // show Interstitial ads
            if (this.AdMobFree) {
                if (!this.core.getState('not_show_interstitial')) {
                    this.AdMobFree.interstitial.isReady().then(ready => {
                        if (ready)
                            this.AdMobFree.interstitial.show().catch(() => { });
                    }).catch(() => { });
                }
                else
                    this.core.setState('not_show_interstitial', false);
            }
        });
    }
    ionViewDidEnter() {
        this.platform.ready().then(() => {
            if (!this.platform.is('cordova'))
                return;
            if (this.AdMobFree) {
                if (Number(this.core.getConfig('ads_after')) <= Number(this.core.getConfig('detail_count'))) {
                    // reset detail_count
                    this.core.patchConfig('detail_count', 0);
                    if (window['AdMob'] && window['AdMob']['interstitial']['_config']['id'])
                        this.AdMobFree.interstitial.prepare().catch(() => { });
                }
            }
            // plus detail_count;
            if (this.core.getConfig('detail_count')) {
                this.core.patchConfig('detail_count', Number(this.core.getConfig('detail_count')) + 1);
            }
            else
                this.core.patchConfig('detail_count', 1);
        });
    }
    ionViewWillLeave() {
        // when leave Detail page
        this.stopMedia();
        // try prepare banner one more time
        if (window['AdMob'] && window['AdMob']['banner']['_config']['id'] && this.core.getState('banner_load_fail')) {
            this.AdMobFree.banner.prepare().catch(() => { });
        }
    }
    getPosts(endpoint, isRefresh) {
        if (!this.endpoint && !endpoint)
            return;
        this.core.request(endpoint || this.endpoint).subscribe(detail => {
            // if get data by slug
            if (!this.id && this.slug) {
                if (Array.isArray(detail) && detail.length) {
                    detail = detail[0];
                }
                else {
                    if (isRefresh)
                        this.loading = false;
                    this.error = true;
                    return;
                }
            }
            if (endpoint)
                this.type = endpoint.indexOf('pages/') == 0;
            console.log(JSON.stringify(detail));
            // if isn't bookmark request to website get post
            this.detail = detail;
            // after get data by slug successful switch to get data by id
            if (!this.id) {
                this.id = this.detail['id'];
                this.setEndpoint();
            }
            // prepare cotent
            this.getContent();
            if (isRefresh) {
                this.loading = false;
                if (this.bookmarked)
                    this.updateBookmark();
            }
            else
                this.prepareView();
            this.error = false;
        }, err => {
            if (!endpoint && err['error']['code'] == 'rest_post_invalid_id') {
                this.getPosts((this.endpoint.indexOf('pages/') != 0 ? 'pages/' : 'posts/') + this.id);
            }
            else
                this.error = true;
            if (isRefresh)
                this.loading = false;
        });
    }
    getContent() {
        // prepare content before show
        if (this.detail) {
            // if have setting required rewards ads
            // && window['AdMob']['rewardvideo']['_config']['id']
            if (!this.post && this.detail['required_rewards_ads'] && window['AdMob']) {
                let postRequired = this.detail['required_rewards_ads'];
                this.rewards['key'] = 'required_rewards_ads_' + this.detail['id'];
                this.storage.get(this.rewards['key']).then(required => {
                    if (!required)
                        required = postRequired;
                    if (required >= postRequired) {
                        this.showAlertRewards();
                    }
                    else {
                        this.storage.set(this.rewards['key'], required + 1);
                        this.setContent();
                    }
                });
            }
            else
                this.setContent();
        }
    }
    setContent() {
        // set content
        this.detail['encode_link'] = encodeURIComponent(this.detail['link']);
        this.post = this.detail['content']['rendered'];
        this.core.setState('last_detail', this.detail);
    }
    showAlertRewards() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: this.trans['rewards']['title'],
                message: this.trans['rewards']['message'],
                buttons: [
                    {
                        text: this.trans['rewards']['yes'],
                        handler: () => {
                            this.showRewards();
                        }
                    },
                    { text: this.trans['rewards']['no'] }
                ]
            });
            alert.present();
        });
    }
    showRewards() {
        if (!this.AdMobFree)
            return;
        // Event
        this.rewards['subs'] = this.AdMobFree.on(this.AdMobFree.events.REWARD_VIDEO_LOAD).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(() => {
            this.core.hideLoading();
            this.AdMobFree.rewardVideo.show().catch(() => { });
        });
        this.rewards['subs'] = this.AdMobFree.on(this.AdMobFree.events.REWARD_VIDEO_REWARD).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(() => {
            this.storage.set(this.rewards['key'], 1);
            this.ngZone.run(() => {
                this.setContent();
            });
        });
        this.rewards['subs'] = this.AdMobFree.on(this.AdMobFree.events.REWARD_VIDEO_LOAD_FAIL).subscribe(() => {
            this.core.hideLoading();
            this.ngZone.run(() => {
                // this.setContent();
            });
            this.rewards['subs'].unsubscribe();
        });
        this.AdMobFree.rewardVideo.isReady().then((ready) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (ready)
                this.AdMobFree.rewardVideo.show().catch(() => { });
            else {
                this.core.showLoading();
                this.AdMobFree.rewardVideo.prepare().catch(() => { });
            }
        })).catch(() => { });
    }
    prepareView() {
        if (this.platform.is('cordova')) {
            if (this.core.getState('agreed_terms'))
                this.FirebaseAnalytics.logEvent('app_detail_page', {
                    id: this.id,
                    title: this.detail['title']['rendered'],
                    link: this.detail['link']
                });
        }
        if (this.type)
            return;
        let params = {
            categories: this.detail['categories'].join(','),
            exclude: this.id
        };
        // get posts same category
        this.core.getPosts(params).subscribe(posts => {
            if (posts.length > 0) {
                this.posts = [];
                this.posts = this.posts.concat(posts);
            }
        }, err => { });
    }
    refresh(refresher) {
        if (refresher)
            refresher.target.complete();
        if (this.loading)
            return;
        // refresh post data
        this.loading = true;
        // update last_time over cache
        this.core.updateTime();
        this.getPosts(null, true);
    }
    stopMedia() {
        this.utilities.stopMedia();
    }
    updateBookmark() {
        // update bookmark on Storage
        this.storage.set(src_app_const_development__WEBPACK_IMPORTED_MODULE_15__["BOOKMARK_PREFIX"] + this.detail['id'], this.detail);
    }
    changeBookmark() {
        // bookmark or remove bookmark
        this.bookmarked = !this.bookmarked;
        if (this.bookmarked) {
            this.updateBookmark();
            this.Toast.showShortCenter(this.trans['bookmark']).subscribe(() => { }, () => { });
        }
        else {
            this.storage.remove(src_app_const_development__WEBPACK_IMPORTED_MODULE_15__["BOOKMARK_PREFIX"] + this.id).then(() => {
                this.Toast.showShortCenter(this.trans['unbookmark']).subscribe(() => { }, () => { });
            });
        }
    }
    share() {
        // when click share button
        let title = document.createElement('span');
        title.innerHTML = this.detail['title']['rendered'];
        let link = document.createElement('span');
        link.innerHTML = this.detail['link'];
        let message = title.textContent + '\r\n' + decodeURIComponent(link.textContent);
        this.SocialSharing.share(message, null, null, null);
    }
    shareBy(item) {
        if (!item)
            item = {};
        let app = this.platform.is('ios') ? item['ios'] : item['android'];
        if (app && this.detail['link']) {
            this.SocialSharing.canShareVia(app, null, null, null, this.detail['link']).then(() => {
                switch (app) {
                    case 'whatsapp':
                        this.SocialSharing.shareViaWhatsApp(null, null, this.detail['link']).catch(() => this.share());
                        break;
                    default:
                        this.SocialSharing.shareVia(app, null, null, null, this.detail['link']).catch(() => this.share());
                        break;
                }
            }).catch(() => {
                this.share();
            });
        }
        else
            this.share();
    }
    updateFont() {
        // update font size settings to Storage
        this.storage.set('fontsize', this.fontsize['value']);
    }
    previous() {
        // go to previous post
        if (!this.detail || !this.detail['m_previous_post']) {
            this.Toast.showLongCenter(this.trans['no_previous']).subscribe(() => { }, () => { });
            return;
        }
        this.navCtrl.navigateBack(['/detail', this.detail['m_previous_post']]);
    }
    next() {
        // go to next post
        if (!this.detail || !this.detail['m_next_post']) {
            this.Toast.showLongCenter(this.trans['no_next']).subscribe(() => { }, () => { });
            return;
        }
        this.navCtrl.navigateForward(['/detail', this.detail['m_next_post']]);
    }
};
DetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _services_core_service__WEBPACK_IMPORTED_MODULE_6__["CoreService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_9__["AdMobFree"] },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseAnalytics"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_utitlities_service__WEBPACK_IMPORTED_MODULE_12__["UtitlitiesService"] },
    { type: _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_16__["TextToSpeech"] }
];
DetailPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['content', { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], static: false },] }],
    htmlContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['htmlContent', { read: src_app_components_html_content_html_content_component__WEBPACK_IMPORTED_MODULE_11__["HtmlContentComponent"], static: false },] }]
};
DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail/detail.page.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        providers: [_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"], _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_9__["AdMobFree"], _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseAnalytics"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail.page.scss */ "./src/app/pages/detail/detail.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _services_core_service__WEBPACK_IMPORTED_MODULE_6__["CoreService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_9__["AdMobFree"],
        _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseAnalytics"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_utitlities_service__WEBPACK_IMPORTED_MODULE_12__["UtitlitiesService"],
        _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_16__["TextToSpeech"]])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-detail-detail-module-es2015.js.map