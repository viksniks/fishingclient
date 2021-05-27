(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js ***!
      \**************************************************************************/

    /*! exports provided: AppVersion */

    /***/
    function node_modulesIonicNativeAppVersion__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppVersion", function () {
        return AppVersion;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

      var AppVersion =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AppVersion, _super);

        function AppVersion() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        AppVersion.prototype.getAppName = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getAppName", {}, arguments);
        };

        AppVersion.prototype.getPackageName = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getPackageName", {}, arguments);
        };

        AppVersion.prototype.getVersionCode = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getVersionCode", {}, arguments);
        };

        AppVersion.prototype.getVersionNumber = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getVersionNumber", {}, arguments);
        };

        AppVersion.pluginName = "AppVersion";
        AppVersion.plugin = "cordova-plugin-app-version";
        AppVersion.pluginRef = "cordova.getAppVersion";
        AppVersion.repo = "https://github.com/whiteoctober/cordova-plugin-app-version";
        AppVersion.platforms = ["Android", "iOS", "Windows"];

        AppVersion.ɵfac = function AppVersion_Factory(t) {
          return ɵAppVersion_BaseFactory(t || AppVersion);
        };

        AppVersion.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: AppVersion,
          factory: function factory(t) {
            return AppVersion.ɵfac(t);
          }
        });

        var ɵAppVersion_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AppVersion);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppVersion, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return AppVersion;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvYXBwLXZlcnNpb24vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBSUUsSUE2QjhCLDhCQUFpQjtBQUFDO0FBRTlCO0FBRWhCO0FBQ0EsSUFDRiwrQkFBVTtBQUtjLElBSXhCLG1DQUFjO0FBS2MsSUFNNUIsbUNBQWM7QUFLSyxJQUluQixxQ0FBZ0I7QUFJbUI7QUFBMEM7QUFBc0Q7QUFBb0Q7QUFBb0Y7SUF2Q2hRLFVBQVUsd0JBRHRCLFVBQVUsRUFBRSxRQUNBLFVBQVU7Ozs7OzBCQUFFO0FBQUMscUJBbkMxQjtBQUFFLEVBbUM4QixpQkFBaUI7QUFDaEQsU0FEWSxVQUFVO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBcHAgVmVyc2lvblxuICogQHByZW1pZXIgYXBwLXZlcnNpb25cbiAqIEBkZXNjcmlwdGlvblxuICogUmVhZHMgdGhlIHZlcnNpb24gb2YgeW91ciBhcHAgZnJvbSB0aGUgdGFyZ2V0IGJ1aWxkIHNldHRpbmdzLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tYXBwLXZlcnNpb25gLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQ29yZG92YSBBcHAgVmVyc2lvbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vd2hpdGVvY3RvYmVyL2NvcmRvdmEtcGx1Z2luLWFwcC12ZXJzaW9uKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFwcFZlcnNpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcC12ZXJzaW9uL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhcHBWZXJzaW9uOiBBcHBWZXJzaW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5hcHBWZXJzaW9uLmdldEFwcE5hbWUoKTtcbiAqIHRoaXMuYXBwVmVyc2lvbi5nZXRQYWNrYWdlTmFtZSgpO1xuICogdGhpcy5hcHBWZXJzaW9uLmdldFZlcnNpb25Db2RlKCk7XG4gKiB0aGlzLmFwcFZlcnNpb24uZ2V0VmVyc2lvbk51bWJlcigpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FwcFZlcnNpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHAtdmVyc2lvbicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEuZ2V0QXBwVmVyc2lvbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vd2hpdGVvY3RvYmVyL2NvcmRvdmEtcGx1Z2luLWFwcC12ZXJzaW9uJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwVmVyc2lvbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGFwcCwgZS5nLjogXCJNeSBBd2Vzb21lIEFwcFwiXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFwcE5hbWUoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGFja2FnZSBuYW1lIG9mIHRoZSBhcHAsIGUuZy46IFwiY29tLmV4YW1wbGUubXlhd2Vzb21lYXBwXCJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UGFja2FnZU5hbWUoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYnVpbGQgaWRlbnRpZmllciBvZiB0aGUgYXBwLlxuICAgKiBJbiBpT1MgYSBzdHJpbmcgd2l0aCB0aGUgYnVpbGQgdmVyc2lvbiBsaWtlIFwiMS42MDk1XCJcbiAgICogSW4gQW5kcm9pZCBhIG51bWJlciBnZW5lcmF0ZWQgZnJvbSB0aGUgdmVyc2lvbiBzdHJpbmcsIGxpa2UgMTAyMDMgZm9yIHZlcnNpb24gXCIxLjIuM1wiXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZyB8IG51bWJlcj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFZlcnNpb25Db2RlKCk6IFByb21pc2U8c3RyaW5nIHwgbnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZlcnNpb24gb2YgdGhlIGFwcCwgZS5nLjogXCIxLjIuM1wiXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFZlcnNpb25OdW1iZXIoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar> \n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu-ic\"></ion-menu-button>\n      <!-- dont change this button, it seems make problem button offline in night mode -->\n      <ion-button clear (click)=\"changeTheme()\">\n        <ion-icon slot=\"icon-only\" name=\"sunny\" class=\"menu-sun\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"d-flex ion-justify-content-center ion-align-items-center app-name\" (click)=\"languages()\">\n        <span> <ion-icon slot=\"start\" name=\"location-outline\"></ion-icon> {{CityName}}</span>\n        \n      </div>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-chip [routerLink]=\"login.id ? '/profile' : '/login'\" [color]=\"login.id ? 'success' : null\"\n        class=\"ion-no-margin ion-margin-end ion-no-padding\" outline=\"true\" height-auto>\n        <ion-avatar class=\"ion-no-margin\">\n          <img [src]=\"login.avatar||'assets/imgs/person.png'\" />\n        </ion-avatar> -->\n        <!-- <ion-label text-ellipsis class=\"ion-text-nowrap\">\n          <strong *ngIf=\"!login.user_display_name\">{{'home.login'|translate}}</strong>\n          <strong *ngIf=\"login.user_display_name\">{{login.user_display_name}}</strong>\n        </ion-label> -->\n      <!-- </ion-chip> -->\n      <ion-button clear routerLink=\"/search\">\n        <ion-icon slot=\"icon-only\" name=\"search\" class=\"menu-search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content >\n  <!-- <div (click)=\"presentModal()\" class=\"float-location\">\n   \n  </div> -->\n\n  <ion-fab (click)=\"presentModal()\" vertical=\"bottom\" class=\"float-location\" horizontal=\"end\" slot=\"fixed\">\n     \n    <ion-icon class=\"loc-float\"  name=\"navigate-outline\"></ion-icon>\n  \n  </ion-fab>\n\n\n  <ion-tabs #homeTabs slot=\"fixed\" >\n    <!-- Display location -->\n    <!-- <div class=\" text-lov\">\n      <ion-icon slot=\"start\" name=\"location-outline\"></ion-icon> \n      {{geocodedAddress}}\n    </div> -->\n   \n    <ion-tab-bar slot=\"bottom\" >\n      <ion-tab-button tab=\"news\">\n        <ion-icon name=\"home-outline\"></ion-icon>\n      </ion-tab-button>\n      <ion-tab-button tab=\"favorites\">\n        <ion-icon name=\"star-outline\"></ion-icon>\n      </ion-tab-button>\n      <ion-tab-button tab=\"videos\">\n        <ion-icon name=\"play-circle-outline\"></ion-icon>\n      </ion-tab-button>\n      <ion-tab-button tab=\"images\">\n        <ion-icon name=\"image-outline\"></ion-icon>\n      </ion-tab-button>\n      <ion-tab-button tab=\"categories\">\n        <ion-icon name=\"copy-outline\"></ion-icon>\n      </ion-tab-button>\n      \n    </ion-tab-bar>\n  \n  </ion-tabs>\n\n  \n</ion-content>";
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"],
          children: [{
            path: 'terms',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-detail-detail-module */
              "pages-detail-detail-module").then(__webpack_require__.bind(null,
              /*! ../pages/detail/detail.module */
              "./src/app/pages/detail/detail.module.ts")).then(function (m) {
                return m.DetailPageModule;
              });
            },
            data: {
              id: 0,
              type: 1,
              slug: 'app-terms',
              viewMode: 1
            }
          }, {
            path: 'news',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-news-news-module */
              "pages-news-news-module").then(__webpack_require__.bind(null,
              /*! ../pages/news/news.module */
              "./src/app/pages/news/news.module.ts")).then(function (m) {
                return m.NewsPageModule;
              });
            }
          }, {
            path: 'favorites',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-favorites-favorites-module */
              "pages-favorites-favorites-module").then(__webpack_require__.bind(null,
              /*! ../pages/favorites/favorites.module */
              "./src/app/pages/favorites/favorites.module.ts")).then(function (m) {
                return m.FavoritesPageModule;
              });
            }
          }, {
            path: 'view',
            redirectTo: '/home/favorites/view',
            pathMatch: 'full'
          }, {
            path: 'setting',
            redirectTo: '/home/favorites/setting',
            pathMatch: 'full'
          }, {
            path: 'videos',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-videos-videos-module */
              "pages-videos-videos-module").then(__webpack_require__.bind(null,
              /*! ../pages/videos/videos.module */
              "./src/app/pages/videos/videos.module.ts")).then(function (m) {
                return m.VideosPageModule;
              });
            }
          }, {
            path: 'images',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-images-images-module */
              "pages-images-images-module").then(__webpack_require__.bind(null,
              /*! ../pages/images/images.module */
              "./src/app/pages/images/images.module.ts")).then(function (m) {
                return m.ImagesPageModule;
              });
            }
          }, {
            path: 'categories',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-categories-categories-module */
              "pages-categories-categories-module").then(__webpack_require__.bind(null,
              /*! ../pages/categories/categories.module */
              "./src/app/pages/categories/categories.module.ts")).then(function (m) {
                return m.CategoriesPageModule;
              });
            }
          }, {
            path: '',
            redirectTo: '/home/news',
            pathMatch: 'full'
          }]
        }])],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .header-ios ion-chip {\n  background: var(--ion-color-shade, #fff);\n  color: var(--ion-color-contrast, 255, 255, 255);\n}\n:host .header-ios ion-chip ion-label {\n  max-width: 100px;\n}\n.app-name {\n  color: white;\n}\n.location-display {\n  width: 100%;\n  background-color: white;\n  padding-left: 8px;\n  top: 12px;\n  position: relative;\n  font-weight: bold;\n  text-align: center;\n  color: #fff;\n  font-size: 12px;\n}\n.text-lov {\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  padding: 10px;\n  height: 30px;\n  font-size: 13px;\n  color: #fff;\n  text-align: center;\n}\n.float-location {\n  position: fixed;\n  width: 60px;\n  height: 60px;\n  bottom: 90px;\n  right: 10px;\n  background-color: #d7453b;\n  color: #FFF;\n  border-radius: 50px;\n  text-align: center;\n  box-shadow: 2px 2px 3px #999;\n  z-index: 1200;\n}\n.loc-float {\n  margin-top: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLHdDQUFBO0VBQ0EsK0NBQUE7QUFETjtBQUVNO0VBQ0UsZ0JBQUE7QUFBUjtBQUtBO0VBQ0UsWUFBQTtBQUZGO0FBTUE7RUFDRSxXQUFBO0VBRUEsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtBQUxGO0FBUUE7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFMRjtBQVlBO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0MsNEJBQUE7RUFDQSxhQUFBO0FBVEY7QUFZQTtFQUNDLGdCQUFBO0FBVEQiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuaGVhZGVyLWlvcyB7XG4gICAgaW9uLWNoaXAge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNoYWRlLCAjZmZmKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29udHJhc3QsIDI1NSwgMjU1LCAyNTUpO1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5hcHAtbmFtZXtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vLyBMb2NhdGlvbiBkaXNwbGF5XG4ubG9jYXRpb24tZGlzcGxheXtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIGhlaWdodDozMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHRvcDoxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gY29sb3I6IHJnYigyNTUsIDE3MSwgMTcxKTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRleHQtbG92IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OjMwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gXG59XG5cblxuLy8gZmxvYXQgaWNvblxuLmZsb2F0LWxvY2F0aW9ue1xuXHRwb3NpdGlvbjpmaXhlZDtcblx0d2lkdGg6NjBweDtcblx0aGVpZ2h0OjYwcHg7XG5cdGJvdHRvbTo5MHB4O1xuXHRyaWdodDoxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTUsIDY5LCA1OSk7XG5cdGNvbG9yOiNGRkY7XG5cdGJvcmRlci1yYWRpdXM6NTBweDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4ICM5OTk7XG4gIHotaW5kZXg6IDEyMDA7XG59XG5cbi5sb2MtZmxvYXR7XG5cdG1hcmdpbi10b3A6MjJweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/core.service */
      "./src/app/services/core.service.ts");
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_deeplinks_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/deeplinks.service */
      "./src/app/services/deeplinks.service.ts");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _const_general__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../const/general */
      "./src/app/const/general.ts");
      /* harmony import */


      var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/toast/ngx */
      "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _pages_notifications_notifications_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../pages/notifications/notifications.page */
      "./src/app/pages/notifications/notifications.page.ts");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _modal_modal_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../modal/modal.page */
      "./src/app/modal/modal.page.ts"); // Modal


      var HomePage = /*#__PURE__*/function () {
        function HomePage(translate, storage, platform, core, AppVersion, alertCtrl, OneSignal, Toast, navCtrl, deeplinks, ngZone, statusBar, menuCtrl, pickerCtrl, geolocation, http, modalController, loader) {
          var _this = this;

          _classCallCheck(this, HomePage);

          this.translate = translate;
          this.storage = storage;
          this.platform = platform;
          this.core = core;
          this.AppVersion = AppVersion;
          this.alertCtrl = alertCtrl;
          this.OneSignal = OneSignal;
          this.Toast = Toast;
          this.navCtrl = navCtrl;
          this.deeplinks = deeplinks;
          this.ngZone = ngZone;
          this.statusBar = statusBar;
          this.menuCtrl = menuCtrl;
          this.pickerCtrl = pickerCtrl;
          this.geolocation = geolocation;
          this.http = http;
          this.modalController = modalController;
          this.loader = loader; // settings detail page theme

          this.theme = _const_general__WEBPACK_IMPORTED_MODULE_10__["THEME_LIGHT"]; // login data from Storage

          this.login = {}; // location

          this.geocodedAddress = ""; // temperature

          this.temperature = "";

          this.handleDeeplinksNotMatch = function (not) {
            if (!not || !not.$link) return;

            _this.core.setState('not_show_interstitial', true);

            _this.core.request('m_tools/deeplinks', {
              params: {
                url: encodeURIComponent(not.$link['url'])
              }
            }).subscribe(function (res) {
              _this.ngZone.run(function () {
                return _this.deeplinks.run(res, null, /^https?:\/\//i.test(not.$link['url']) ? not.$link['url'] : null, true);
              });
            }, function (err) {});
          }; // get translate


          translate.get('home').subscribe(function (trans) {
            _this.trans = trans;

            _this.platformReady();

            _this.getLanguage();
          }); // get translate

          translate.get('menu').subscribe(function (trans) {
            return _this.trans = trans;
          });
        } // Show modal 
        // ********


        _createClass(HomePage, [{
          key: "presentModal",
          value: function presentModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_15__["ModalPage"],
                        cssClass: 'my-custom-class'
                      });

                    case 2:
                      this.modal = _context.sent;
                      _context.next = 5;
                      return this.modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modal.dismiss();
          } // **************************************
          // Get location
          // **************************************

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            //alert("location starts");
            window.home = this;
            this.geolocation.getCurrentPosition({}).then(function (position) {
              //alert("location received");
              _this2.getAddress(position.coords.latitude, position.coords.longitude);
            }, function (err) {//alert(JSON.stringify(err));
            });
          }
        }, {
          key: "getAddress",
          value: function getAddress(latitude, longitude) {
            var _this3 = this;

            this.loader.create({
              message: "please wait..."
            }).then(function (element) {
              element.present();
              var gps = latitude.toString() + "," + longitude.toString();
              var mode = "retrieveAddresses";
              var maxresults = "1";
              var apikey = "1uQem1CTeDWuoxzIU8sKBFa4Sc6OLBNirPbs_msbXS4";
              var url = "https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=" + gps + "&mode=" + mode + "&maxresults=" + maxresults + "&apiKey=" + apikey;

              _this3.http.get(url).subscribe(function (results) {
                _this3.geocodedAddress = results.Response.View[0].Result[0].Location.Address.Label;

                _this3.getWeather(latitude, longitude, element); //alert(this.geocodedAddress);

              }, function (err) {
                alert(JSON.stringify(err));
              });
            });
          } // **************************************
          // Get weather
          // **************************************

        }, {
          key: "getWeather",
          value: function getWeather(latitude, longitude, element) {
            var _this4 = this;

            var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude.toString() + "&lon=" + longitude.toString() + "&appid=494fb3293a018ab529297faade6c6d3d";
            this.http.get(url).subscribe(function (data) {
              var temp = (parseFloat(data.main.temp) - 273.15).toFixed(2);
              _this4.temperature = Math.round(temp).toString();
              element.dismiss(); //alert(this.temperature);
            }, function (err) {
              alert(JSON.stringify(err));
            });
          } // get languages

        }, {
          key: "languages",
          value: function languages() {
            var _this5 = this;

            var language = this.translate.getDefaultLang();
            this.translate.getTranslation('languages').subscribe(function (langTrans) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this6 = this;

                var columns, defaultIndex, picker;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!(langTrans['languages'] && langTrans['languages'].length > 0)) {
                          _context2.next = 9;
                          break;
                        }

                        // create picker
                        // add picker column
                        columns = {
                          name: 'language',
                          options: []
                        }; // add column options

                        langTrans['languages'].forEach(function (lang, index) {
                          columns.options.push({
                            text: lang['name'],
                            value: lang['value']
                          }); // find default index

                          if (lang['value'] == language) defaultIndex = index;
                        }); // set default index and add column

                        columns['selectedIndex'] = defaultIndex;
                        if (!language) language = langTrans['default'];
                        _context2.next = 7;
                        return this.pickerCtrl.create({
                          columns: [columns],
                          buttons: [{
                            text: this.trans['languages']['cancel'],
                            role: 'cancel'
                          }, {
                            text: this.trans['languages']['save'],
                            handler: function handler(data) {
                              if (data['language']['value'] == language) return;

                              _this6.storage.set('language', data['language']['value']).then(function () {
                                _this6.storage.remove('last_config').then(function () {
                                  _this6.refresh();
                                });
                              });
                            }
                          }]
                        });

                      case 7:
                        picker = _context2.sent;
                        // show picker
                        picker.present();

                      case 9:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          } // Refresh page after select

        }, {
          key: "refresh",
          value: function refresh(alert) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _alert;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!alert) {
                        _context3.next = 7;
                        break;
                      }

                      _context3.next = 3;
                      return this.alertCtrl.create({
                        header: this.trans['refresh']['title'],
                        message: this.trans['refresh']['message'],
                        buttons: [{
                          text: this.trans['refresh']['yes'],
                          handler: function handler() {
                            location.href = '/';
                          }
                        }, {
                          text: this.trans['refresh']['no']
                        }]
                      });

                    case 3:
                      _alert = _context3.sent;

                      _alert.present();

                      _context3.next = 8;
                      break;

                    case 7:
                      location.href = '/';

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // Display City In the Header
          // ************************

        }, {
          key: "getLanguage",
          value: function getLanguage() {
            var _this7 = this;

            var CityName = "";
            this.storage.get("language").then(function (language) {
              _this7.CityName = language; //console.log(language);

              var num = language;
              var stringForm = num.toString(); //console.log(stringForm);

              console.log(CityName);
            });
          }
        }, {
          key: "platformReady",
          value: function platformReady() {
            var _this8 = this;

            this.platform.ready().then(function () {
              if (!_this8.platform.is('cordova')) return; // subscribe OneSignal notification opened

              _this8.OneSignal.handleNotificationOpened().subscribe(function (res) {
                return _this8.clickedNotification(res);
              }); // handle deeplinks


              var route = typeof _this8.trans['_deeplinks'] == 'object' ? _this8.trans['_deeplinks'] : {};
              if (window['IonicDeeplink']) window['IonicDeeplink'].route(route, function (match) {}, _this8.handleDeeplinksNotMatch); // check update version

              if (_this8.AppVersion) {
                _this8.AppVersion.getVersionNumber().then(function (version) {
                  return _this8.checkAppVersion(version);
                });
              }
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this9 = this;

            // fire ionViewDidEnter event children tab activated
            if (this.homeTabs && this.homeTabs.outlet.activated) {
              var activeComponent = this.homeTabs.outlet.activated._component;

              if (typeof activeComponent.ionViewDidEnter == 'function') {
                activeComponent.ionViewDidEnter();
              }
            }

            this.storage.get('login').then(function (login) {
              if (login) _this9.login = login;else _this9.login = {};
            });
            this.storage.get('theme').then(function (theme) {
              if (theme) _this9.theme = theme;
            });

            if (this.platform.is('android')) {
              this.backButton = this.platform.backButton.subscribe(function () {
                _this9.menuCtrl.isOpen('root-menu').then(function (isOpen) {
                  if (isOpen) return;
                  if (_this9.backButtonPressed && window) window['navigator']['app'].exitApp();else {
                    _this9.backButtonPressed = true;
                    if (_this9.trans && _this9.trans['exitApp']) _this9.Toast.showShortBottom(_this9.trans['exitApp']).subscribe(function () {}, function () {});
                    setTimeout(function () {
                      _this9.backButtonPressed = false;
                    }, _const_general__WEBPACK_IMPORTED_MODULE_10__["BACK_BUTTON_EXIT_TIMEOUT"]);
                  }
                });
              });
            }
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            if (this.backButton && this.backButton.unsubscribe) this.backButton.unsubscribe();
          }
        }, {
          key: "clickedNotification",
          value: function clickedNotification(res) {
            var _this10 = this;

            // launch notification if have additionalData with key is link
            var payload = res.notification.payload; // get list notification from Storage

            this.storage.get('notifications').then(function (notifications) {
              if (!notifications) notifications = []; // add time to payload

              payload['time'] = new Date().getTime(); // unshift notification to list notifications and save to Storage

              notifications.unshift(payload);

              _this10.storage.set('notifications', notifications).then(function () {
                _this10.ngZone.run(function () {
                  _this10.core.setState('clicked_notification', payload);

                  var activeComponent = _this10.navCtrl['topOutlet'].activated._component;

                  if (activeComponent instanceof _pages_notifications_notifications_page__WEBPACK_IMPORTED_MODULE_12__["NotificationsPage"]) {
                    if (typeof activeComponent.ionViewDidEnter == 'function') activeComponent.ionViewDidEnter();
                  } else _this10.navCtrl.navigateForward(['/notifications']);
                });
              });
            });
          }
        }, {
          key: "checkAppVersion",
          value: function checkAppVersion(version) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this11 = this;

              var config_version, needUpdate, latest, i, _alert2;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      config_version = this.platform.is('ios') ? this.core.getConfig('version_ios') : this.core.getConfig('version');

                      if (config_version) {
                        _context4.next = 3;
                        break;
                      }

                      return _context4.abrupt("return");

                    case 3:
                      version = version.split('.');
                      latest = config_version.split('.');
                      i = 0;

                    case 6:
                      if (!(i < latest.length)) {
                        _context4.next = 15;
                        break;
                      }

                      if (!(Number(latest[i]) < Number(version[i]))) {
                        _context4.next = 9;
                        break;
                      }

                      return _context4.abrupt("break", 15);

                    case 9:
                      if (!(!version[i] || Number(latest[i]) > Number(version[i]))) {
                        _context4.next = 12;
                        break;
                      }

                      needUpdate = true;
                      return _context4.abrupt("break", 15);

                    case 12:
                      i++;
                      _context4.next = 6;
                      break;

                    case 15:
                      if (!needUpdate) {
                        _context4.next = 20;
                        break;
                      }

                      _context4.next = 18;
                      return this.alertCtrl.create({
                        header: this.trans['update']['title'],
                        message: this.trans['update']['message'],
                        buttons: [{
                          text: this.trans['update']['no']
                        }, {
                          text: this.trans['update']['yes'],
                          handler: function handler() {
                            _this11.core.openStore();
                          }
                        }]
                      });

                    case 18:
                      _alert2 = _context4.sent;

                      _alert2.present();

                    case 20:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "updateTheme",
          value: function updateTheme() {
            // update font size of view
            var html = document.querySelector('html');
            html.classList.remove(_const_general__WEBPACK_IMPORTED_MODULE_10__["THEME_LIGHT"]);
            html.classList.remove(_const_general__WEBPACK_IMPORTED_MODULE_10__["THEME_DARK"]);
            html.classList.add(this.theme || _const_general__WEBPACK_IMPORTED_MODULE_10__["THEME_LIGHT"]);

            if (this.theme == _const_general__WEBPACK_IMPORTED_MODULE_10__["THEME_DARK"]) {
              this.statusBar.backgroundColorByHexString('#000000');
              this.statusBar.styleLightContent();
            } else {
              this.statusBar.backgroundColorByHexString('#ffffff');
              this.statusBar.styleDefault();
            }
          }
        }, {
          key: "changeTheme",
          value: function changeTheme() {
            var _this12 = this;

            if (this.theme != _const_general__WEBPACK_IMPORTED_MODULE_10__["THEME_DARK"]) this.theme = _const_general__WEBPACK_IMPORTED_MODULE_10__["THEME_DARK"];else this.theme = _const_general__WEBPACK_IMPORTED_MODULE_10__["THEME_LIGHT"];
            this.storage.set('theme', this.theme).then(function () {
              _this12.updateTheme();
            });
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"]
        }, {
          type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_5__["AppVersion"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"]
        }, {
          type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__["Toast"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _services_deeplinks_service__WEBPACK_IMPORTED_MODULE_8__["DeeplinksService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PickerController"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__["Geolocation"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      HomePage.propDecorators = {
        homeTabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['homeTabs', {
            "static": true
          }]
        }]
      };
      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        providers: [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_5__["AppVersion"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_5__["AppVersion"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_deeplinks_service__WEBPACK_IMPORTED_MODULE_8__["DeeplinksService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PickerController"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__["Geolocation"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map