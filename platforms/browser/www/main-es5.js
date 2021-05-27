(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Intro slide -->\n<div absolute size-full top start index-100 light-bg *ngIf=\"intro\">\n\t<ion-button absolute bottom end index-100 fill=\"clear\" size=\"large\" color=\"success\" (click)=\"skipIntro()\" class=\"ion-margin-vertical\">\n\t\t<ion-icon slot=\"icon-only\" name=\"close-circle\"></ion-icon>\n\t</ion-button>\n\t<ion-slides centeredSlides=\"true\" pager=\"true\" height-100 class=\"slides-intro\">\n\t\t<ion-slide padding-x2><img src=\"assets/imgs/intro/1.png\" /></ion-slide>\n\t\t<ion-slide padding-x2><img src=\"assets/imgs/intro/2.png\" /></ion-slide>\n\t\t<ion-slide padding-x2><img src=\"assets/imgs/intro/3.png\" /></ion-slide>\n\t</ion-slides>\n</div>\n<!-- App -->\n<ion-app *ngIf=\"rooted\" [class.isOffline]=\"isOffline\">\n  <app-menus></app-menus>\n</ion-app>\n<!-- Offline button -->\n<ion-button expand=\"full\" absolute start width-100 class=\"button-offline ion-no-margin\" [hidden]=\"!isOffline\" (click)=\"getConfig()\">\n\t<span>{{'general.offlineText'|translate}}</span>\n</ion-button>\n<!-- Loading landing -->\n<ion-row *ngIf=\"!intro && !loaded\" absolute top start size-full light-bg class=\"ion-align-items-center\">\n\t<div width-100 class=\"ion-text-center connecting-text\">\n\t\t<ion-spinner color=\"dark\" [name]=\"'general._infiniteSpinner'|translate\"></ion-spinner>\n\t\t<!-- <img src=\"assets/imgs/loader.gif\"/> -->\n\t\t<br>\n\t\tConnectin to the database... \n\n\t</div>\n</ion-row>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/goto-top/goto-top.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/goto-top/goto-top.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsGotoTopGotoTopComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-button (click)=\"gotoTop()\" class=\"ion-no-padding ion-no-margin size-full ion-float-start\" fill=\"clear\">\n  <ion-icon slot=\"icon-only\" size=\"small\" name=\"chevron-up\" color=\"place\"></ion-icon>\n</ion-button>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/html-content/html-content.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/html-content/html-content.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsHtmlContentHtmlContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [innerHTML]=\"innerHTML\" tappable (click)=\"click($event)\" class=\"html-content\"></div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/infinite-scroll/infinite-scroll.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/infinite-scroll/infinite-scroll.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsInfiniteScrollInfiniteScrollComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-infinite-scroll [threshold]=\"threshold\">\n  <ion-infinite-scroll-content loadingSpinner=\"{{'general._infiniteSpinner'|translate}}\"></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-comment/item-comment.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-comment/item-comment.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsItemCommentItemCommentComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item lines=\"none\" class=\"ion-margin-top ion-padding-top\">\n  <ion-avatar slot=\"start\">\n    <img [src]=\"comment.avatar||'assets/imgs/person.png'\" />\n  </ion-avatar>\n  <ion-label class=\"ion-no-margin\" place>\n    <p class=\"d-flex item-aligns-center ion-text-wrap\">\n      <span [innerHTML]=\"comment.name||('comments.guest'|translate)\"></span>\n      <ion-icon *ngIf=\"comment.user_id\" primary name=\"person\" class=\"ion-margin-start\"></ion-icon>\n    </p>\n    <small>{{comment.date|time}}</small>\n  </ion-label>\n  <ion-button *ngIf=\"!hideView && (status=='open' || comment.has_child)\" slot=\"end\" fill=\"clear\" (click)=\"viewComment(comment)\">\n    <span *ngIf=\"!comment.has_child\">{{'comments.reply'|translate}}</span>\n    <span *ngIf=\"comment.has_child\">{{'comments.view'|translate}}</span>\n  </ion-button>\n</ion-item>\n<ion-item lines=\"none\" comment-content>\n  <ion-avatar slot=\"start\"></ion-avatar>\n  <ion-label class=\"ion-text-wrap ion-no-margin\" [innerHTML]=\"comment.content\"></ion-label>\n</ion-item>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-posts/list-posts.component.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-posts/list-posts.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsListPostsListPostsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list *ngIf=\"templates\" [ngClass]=\"templates\">\n  <!-- foreach posts and add class by templates of post-->\n  <div *ngIf=\"square[templates]\" class=\"content\">\n    <ion-item *ngFor=\"let post of posts\" lines=\"none\" (click)=\"openPost(post)\" [ngClass]=\"post.format\">\n      <!-- thumbnail image -->\n      <ion-thumbnail relative slot=\"start\" *ngIf=\"templates!='reverse'\">\n        <img [src]=\"post.image_square||'assets/imgs/no-image-square.png'\" />\n        <ion-icon *ngIf=\"icons[post.format]\" [name]=\"icons[post.format]\"></ion-icon>\n      </ion-thumbnail>\n      <ion-label>\n        <!-- title post -->\n        <div class=\"ion-text-wrap ion-margin-bottom\"><strong [innerHTML]=\"post.title\"></strong></div>\n        <!-- date created post -->\n        <div overflow place>\n          <small class=\"ion-float-start\">{{post.date|time}}</small>\n          <small class=\"ion-float-end d-flex ion-align-items-center\">\n            <ion-icon *ngIf=\"post.comment\" name=\"chatbubbles\" class=\"ion-float-start\"></ion-icon>\n            <span *ngIf=\"post.comment\">{{post.comment}}</span>\n          </small>\n        </div>\n      </ion-label>\n      <!-- thumbnail image reverse -->\n      <ion-thumbnail relative slot=\"end\" *ngIf=\"templates=='reverse'\">\n        <img [src]=\"post.image_square||'assets/imgs/no-image-square.png'\" />\n        <ion-icon *ngIf=\"icons[post.format]\" [name]=\"icons[post.format]\"></ion-icon>\n      </ion-thumbnail>\n    </ion-item>\n  </div>\n  <div *ngIf=\"!square[templates]\" class=\"content\">\n    <ion-card *ngFor=\"let post of posts\" (click)=\"openPost(post)\" [ngClass]=\"post.format + (templates=='column'?' ion-no-margin':'')\" class=\"item\">\n      <div class=\"thumbnail\" relative>\n        <img [src]=\"post.image||'assets/imgs/no-image.png'\" width-100 />\n        <ion-icon *ngIf=\"icons[post.format]\" [name]=\"icons[post.format]\"></ion-icon>\n      </div>\n      <ion-card-content [ngClass]=\"templates=='column'?'ion-no-padding ion-padding-end ion-margin-vertical':null\">\n        <div class=\"ion-text-wrap ion-margin-bottom\"><strong [innerHTML]=\"post.title\"></strong></div>\n        <div overflow place>\n          <small class=\"ion-float-start\">{{post.date|time}}</small>\n          <small class=\"ion-float-end d-flex ion-align-items-center\">\n            <ion-icon *ngIf=\"post.comment\" name=\"chatbubbles\" class=\"ion-float-start\"></ion-icon>\n            <span *ngIf=\"post.comment\">{{post.comment}}</span>\n          </small>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-list>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/loading.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/loading.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoadingLoadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div padding-x2>\n  <ion-spinner name=\"{{'general._infiniteSpinner'|translate}}\" margin-auto class=\"ion-margin-top\"></ion-spinner>\n  <ion-row class=\"ion-align-items-center\">\n    <div width-100 class=\"ion-text-center\">\t\n      Please wait...\n    </div>\n  </ion-row>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menus/menus.component.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menus/menus.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsMenusMenusComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-menu side=\"start\" menu-id=\"root-menu\" content-id=\"root-router\" type=\"overlay\" swipeGesture=\"false\" class=\"root-menu\">\n  <ion-header>\n    <div class=\"container-test\">\n    <img src=\"assets/imgs/menu.jpg\" class=\"ion-float-start\" />\n    <div class=\"text-test text-cont\"><ion-icon slot=\"start\" name=\"location-outline\"></ion-icon> {{CityName}}</div>\n    <ion-searchbar class=\"text-kereso text-cont\"   placeholder=\"Search city..\" (ionChange)=\"getItems($event)\">\n      <!-- <ion-icon name=\"mic-outline\" size=\"large\" (click)=\"askPermission()\"></ion-icon> -->\n    </ion-searchbar>\n    <!-- <ion-icon name=\"mic-circle-outline\" size=\"large\" (click)=\"askPermission()\"></ion-icon> -->\n    </div>\n  </ion-header>\n \n  <ion-content transparent>\n    <!-- Refresh -->\n    <app-refresher slot=\"fixed\" (ionRefresh)=\"getPages($event)\" color=\"truewhite\"></app-refresher>\n    <!-- List functions -->\n    <ion-list class=\"ion-no-margin ion-margin-top\">\n\n      <!-- <ion-searchbar class=\"text-kereso\" placeholder=\"Search city..\" (ionChange)=\"getItems($event)\">\n      </ion-searchbar> -->\n      <ion-list class=\"results-list\" *ngIf=\"isItemAvailable\">\n        <ion-item class=\"item-list-res\" (click)=\"tempCall(item)\" *ngFor=\"let item of items\">  <ion-icon slot=\"start\" name=\"business-outline\"></ion-icon> {{ item.value}}</ion-item>\n        <ion-label class=\"no-city-found\">{{str}}</ion-label>   \n      \n      </ion-list>\n\n     \n      <!-- List voice results -->\n      <div id=\"ctc\">\n    \n      </div>\n    \n\n      <!-- Voice search -->\n      <ion-item detail=\"false\" lines=\"none\" (click)=\"askPermission()\">\n      <ion-icon slot=\"start\" name=\"mic-circle-outline\" size=\"large\" ></ion-icon>\n        <span class=\"telepules-voice\">Seach City by voice</span>\n      </ion-item>\n\n\n      <!-- new -->\n      <hr color=\"white\">\n      \n        <ion-item detail=\"false\" lines=\"none\" (click)=\"languages()\">\n          <ion-icon slot=\"start\" name=\"location-outline\"></ion-icon>\n          <span class=\"telepules\">Choose Your Area</span>        \n        </ion-item>\n        \n      \n      <hr color=\"white\">\n\n   \n\n           <!-- AUTO COMPLETE -->\n           <!-- <ion-item (click)=\"clickedSearchIcon($event)\">\n            <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n            \n            <ion-label>Search City</ion-label>\n          \n          </ion-item>\n  \n        <ion-searchbar *ngIf=\"showSearchBar\" (ionChange)=\"getItems($event)\">\n        </ion-searchbar>\n        \n        <ion-list class=\"results-list\" *ngIf=\"isItemAvailable\">\n          <ion-item class=\"item-list-res\" (click)=\"tempCall(item)\" *ngFor=\"let item of items\">  <ion-icon slot=\"start\" name=\"location-outline\"></ion-icon> {{ item.value}}</ion-item>\n          <ion-label class=\"no-city-found\">{{str}}</ion-label>\n          \n        </ion-list> -->\n\n        <!-- Jobs nav -->\n        <!-- <ion-menu-toggle>\n          <ion-item [routerLink]=\"['/detail-category','7']\" detail=\"false\"§ lines=\"none\">\n            <ion-icon slot=\"start\" name=\"people-outline\"></ion-icon>\n            <span>Jobs</span>\n          </ion-item>\n        </ion-menu-toggle> -->\n\n      <!-- new end -->\n      <ion-menu-toggle>\n        <ion-item detail=\"false\" lines=\"none\" routerLink=\"/bookmarks\">  \n          <ion-icon slot=\"start\" name=\"bookmarks\"></ion-icon>\n          <span>{{'menu.bookmarks'|translate}}</span>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle>\n        <ion-item detail=\"false\" lines=\"none\" routerLink=\"/notifications\">\n          <ion-icon slot=\"start\" name=\"notifications\"></ion-icon>\n          <span>{{'menu.notifications'|translate}}</span>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle>\n        <ion-item detail=\"false\" lines=\"none\" (click)=\"settings()\">\n          <ion-icon slot=\"start\" name=\"settings\"></ion-icon>\n          <span>{{'menu.settings.title'|translate}}</span>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <!-- <ion-menu-toggle>\n        <ion-item detail=\"false\" lines=\"none\" (click)=\"share()\">\n          <ion-icon slot=\"start\" name=\"share\"></ion-icon>\n          <span>{{'menu.share'|translate}}</span>\n        </ion-item>\n      </ion-menu-toggle> -->\n      <!-- <ion-menu-toggle>\n        <ion-item detail=\"false\" lines=\"none\" (click)=\"rate()\">\n          <ion-icon slot=\"start\" name=\"star\"></ion-icon>\n          <span>{{'menu.rate'|translate}}</span>\n        </ion-item>\n      </ion-menu-toggle> -->\n      <ion-menu-toggle>\n        <ion-item detail=\"false\" lines=\"none\" (click)=\"refresh(true)\">\n          <ion-icon slot=\"start\" name=\"refresh\"></ion-icon>\n          <span>{{'menu.refresh.title'|translate}}</span>\n        \n        </ion-item>\n      </ion-menu-toggle>\n\n\n    \n    </ion-list>\n    \n    <!-- List page -->\n    <ion-list class=\"ion-no-margin\" *ngIf=\"pages && pages.length > 0\">\n      <ion-menu-toggle *ngFor=\"let page of pages\">\n        <ion-item detail=\"false\" lines=\"none\" [routerLink]=\"['/detail', page.id, {type:1}]\">\n          <ion-icon slot=\"start\" name=\"pricetag\"></ion-icon>\n          <span [innerHTML]=\"page.title\"></span>\n        </ion-item>\n      </ion-menu-toggle>\n    </ion-list>\n    <div padding-x2></div>\n    <div class=\"m-ma-vedve\">© Cork County</div>\n  </ion-content>\n  \n</ion-menu>  \n<ion-router-outlet id=\"root-router\"></ion-router-outlet>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/no-data/no-data.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/no-data/no-data.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsNoDataNoDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"no-data-content\">\n  <img *ngIf=\"!noImage\" [src]=\"src||'assets/imgs/no-data.svg'\" margin-auto />\n  <div #inner class=\"no-data-inner width-100\">\n    <ng-content></ng-content>\n  </div>\n  <div *ngIf=\"!noText && !inner.childNodes.length\">\n    <strong>{{'general.noData'|translate}}</strong>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/refresher/refresher.component.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/refresher/refresher.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsRefresherRefresherComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-refresher [slot]=\"slot\" [disabled]=\"disabled\">\n  <ion-refresher-content [pullingIcon]=\"'general._pullingIcon'|translate\" [pullingText]=\"'general._pullToRefresh'|translate\"\n    [refreshingSpinner]=\"'general._refreshingSpinner'|translate\" [refreshingText]=\"'general._refreshing'|translate\">\n    <ion-row class=\"ion-align-items-center\">\n      <div width-100 class=\"ion-text-center\">\t\n        Please wait...\n      </div>\n    </ion-row>\n  </ion-refresher-content>\n</ion-refresher>";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home-home-module */
          [__webpack_require__.e("default~home-home-module~modal-modal-module"), __webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'news',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-news-news-module */
          "pages-news-news-module").then(__webpack_require__.bind(null,
          /*! ./pages/news/news.module */
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
          /*! ./pages/favorites/favorites.module */
          "./src/app/pages/favorites/favorites.module.ts")).then(function (m) {
            return m.FavoritesPageModule;
          });
        }
      }, {
        path: 'videos',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-videos-videos-module */
          "pages-videos-videos-module").then(__webpack_require__.bind(null,
          /*! ./pages/videos/videos.module */
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
          /*! ./pages/images/images.module */
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
          /*! ./pages/categories/categories.module */
          "./src/app/pages/categories/categories.module.ts")).then(function (m) {
            return m.CategoriesPageModule;
          });
        }
      }, {
        path: 'detail/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-detail-detail-module */
          "pages-detail-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/detail/detail.module */
          "./src/app/pages/detail/detail.module.ts")).then(function (m) {
            return m.DetailPageModule;
          });
        }
      }, {
        path: 'comment/:post_id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-comment-comment-module */
          "pages-comment-comment-module").then(__webpack_require__.bind(null,
          /*! ./pages/comment/comment.module */
          "./src/app/pages/comment/comment.module.ts")).then(function (m) {
            return m.CommentPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "./src/app/pages/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'bookmarks',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-bookmarks-bookmarks-module */
          "pages-bookmarks-bookmarks-module").then(__webpack_require__.bind(null,
          /*! ./pages/bookmarks/bookmarks.module */
          "./src/app/pages/bookmarks/bookmarks.module.ts")).then(function (m) {
            return m.BookmarksPageModule;
          });
        }
      }, {
        path: 'detail-category/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-detail-category-detail-category-module */
          "pages-detail-category-detail-category-module").then(__webpack_require__.bind(null,
          /*! ./pages/detail-category/detail-category.module */
          "./src/app/pages/detail-category/detail-category.module.ts")).then(function (m) {
            return m.DetailCategoryPageModule;
          });
        }
      }, {
        path: 'favorites-view',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-favorites-view-favorites-view-module */
          "favorites-view-favorites-view-module").then(__webpack_require__.bind(null,
          /*! ./pages/favorites-view/favorites-view.module */
          "./src/app/pages/favorites-view/favorites-view.module.ts")).then(function (m) {
            return m.FavoritesViewPageModule;
          });
        }
      }, {
        path: 'favorites-setting',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-favorites-setting-favorites-setting-module */
          "favorites-setting-favorites-setting-module").then(__webpack_require__.bind(null,
          /*! ./pages/favorites-setting/favorites-setting.module */
          "./src/app/pages/favorites-setting/favorites-setting.module.ts")).then(function (m) {
            return m.FavoritesSettingPageModule;
          });
        }
      }, {
        path: 'search',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-search-search-module */
          "pages-search-search-module").then(__webpack_require__.bind(null,
          /*! ./pages/search/search.module */
          "./src/app/pages/search/search.module.ts")).then(function (m) {
            return m.SearchPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-profile-profile-module */
          "pages-profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./pages/profile/profile.module */
          "./src/app/pages/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'notifications',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-notifications-notifications-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-notifications-notifications-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/notifications/notifications.module */
          "./src/app/pages/notifications/notifications.module.ts")).then(function (m) {
            return m.NotificationsPageModule;
          });
        }
      }, {
        path: 'modal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-modal-module */
          [__webpack_require__.e("default~home-home-module~modal-modal-module"), __webpack_require__.e("modal-modal-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/modal.module */
          "./src/app/modal/modal.module.ts")).then(function (m) {
            return m.ModalPageModule;
          });
        }
      }];
      routes.push({
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      });

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-app.isOffline {\n  height: auto;\n  bottom: 30px;\n  transition: 0.5s;\n}\n\n.button-offline {\n  height: 30px;\n  font-size: 12px;\n  bottom: var(--ion-safe-area-bottom);\n}\n\n.slides-intro .swiper-pagination {\n  text-align: start;\n  margin-bottom: 15px;\n  padding: 0 20px;\n}\n\n.slides-intro .swiper-pagination .swiper-pagination-bullet {\n  opacity: 0.5;\n}\n\n.route-path-detail ion-alert.alert-terms {\n  visibility: hidden;\n}\n\n.connecting-text {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL3NoYXJlZF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxZQ0pvQjtFREtwQixnQkFBQTtBQURGOztBQUdBO0VBQ0UsWUNSb0I7RURTcEIsZUNSdUI7RURTdkIsbUNBQUE7QUFBRjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBQ0k7RUFDRSxZQUFBO0FBQ047O0FBS0k7RUFDRSxrQkFBQTtBQUZOOztBQU1BO0VBQ0UsaUJBQUE7QUFIRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi90aGVtZS9zaGFyZWRfdmFyaWFibGVzLnNjc3NcIjtcblxuaW9uLWFwcC5pc09mZmxpbmUge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvdHRvbTogJG9mZmxpbmUtbW9kZS1oZWlnaHQ7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4uYnV0dG9uLW9mZmxpbmUge1xuICBoZWlnaHQ6ICRvZmZsaW5lLW1vZGUtaGVpZ2h0O1xuICBmb250LXNpemU6ICRvZmZsaW5lLW1vZGUtZm9udC1zaXplO1xuICBib3R0b206IHZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tKTtcbn1cbi5zbGlkZXMtaW50cm8ge1xuICAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxufVxuLnJvdXRlLXBhdGgge1xuICAmLWRldGFpbCB7XG4gICAgaW9uLWFsZXJ0LmFsZXJ0LXRlcm1zIHtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gIH1cbn1cbi5jb25uZWN0aW5nLXRleHR7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIiwiJG9mZmxpbmUtbW9kZS1oZWlnaHQ6IDMwcHg7XG4kb2ZmbGluZS1tb2RlLWZvbnQtc2l6ZTogMTJweDtcbiRsaXN0LXBvc3RzLWNvbHVtbi10aXRsZS1saW5lOiAzO1xuJGxpc3QtcG9zdHMtY29sdW1uLXRpdGxlLWxpbmUtaGVpZ2h0OiAyMHB4O1xuJGNvbnRlbnQtcGFkZGluZzogOHB4ICFkZWZhdWx0O1xuJGhhaXJsaW5lcy13aWR0aDogMXB4ICFkZWZhdWx0O1xuJGxpc3QtaW9zLWJvcmRlci1jb2xvcjogI2VlZSAhZGVmYXVsdDtcbiRpdGVtLWlvcy1wYWRkaW5nLWVuZDogMTZweCAhZGVmYXVsdDtcbiRjaGVja2JveC1pb3MtaXRlbS1zdGFydC1tYXJnaW4tc3RhcnQ6IDJweCAhZGVmYXVsdDtcbiRjaGVja2JveC1pb3MtaXRlbS1zdGFydC1tYXJnaW4tZW5kOiAxNnB4ICFkZWZhdWx0O1xuJGdvdG8tdG9wLXNpemU6IDMwcHg7XG4kZ290by10b3AtYm90dG9tOiAyMHB4OyJdfQ== */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _services_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/core.service */
      "./src/app/services/core.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/toast/ngx */
      "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/events.service */
      "./src/app/services/events.service.ts");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/admob-free/ngx */
      "./node_modules/@ionic-native/admob-free/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      "./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/firebase-analytics/ngx */
      "./node_modules/@ionic-native/firebase-analytics/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _const_general__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./const/general */
      "./src/app/const/general.ts");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "./node_modules/@ionic-native/screen-orientation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_utitlities_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./services/utitlities.service */
      "./src/app/services/utitlities.service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, translate, storage, splashScreen, core, utilities, http, alertCtrl, Toast, events, statusBar, OneSignal, AdMobFree, Keyboard, router, FirebaseAnalytics, ScreenOrientation) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.translate = translate;
          this.storage = storage;
          this.splashScreen = splashScreen;
          this.core = core;
          this.utilities = utilities;
          this.http = http;
          this.alertCtrl = alertCtrl;
          this.Toast = Toast;
          this.events = events;
          this.statusBar = statusBar;
          this.OneSignal = OneSignal;
          this.AdMobFree = AdMobFree;
          this.Keyboard = Keyboard;
          this.router = router;
          this.FirebaseAnalytics = FirebaseAnalytics;
          this.ScreenOrientation = ScreenOrientation; // // show intro image, if enable it then remove line 63-64
          // storage.get('intro').then(intro => {
          //   if (intro) this.getLanguage();
          //   else this.intro = true;
          // });
          // not show intro image

          this.getLanguage();
          this.updateTheme();
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              if (_this.platform.is('cordova')) {
                _this.ScreenOrientation.lock(_this.ScreenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
              } // subscribe pause application event to stop Media


              _this.platform.pause.subscribe(function () {
                _this.utilities.stopMedia();
              });

              _this.statusBar.styleDefault();

              setTimeout(function () {
                _this.splashScreen.hide();
              }, 1500);
            }); // add class name current route path

            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_14__["NavigationEnd"]) {
                if (event.urlAfterRedirects) {
                  var path = event.urlAfterRedirects.split('/');
                  var html = document.querySelector('html');
                  html.classList.forEach(function (className) {
                    if (className.indexOf('route-path-') == 0) html.classList.remove(className);
                  });
                  if (path[1]) html.classList.add('route-path-' + encodeURIComponent(path[1]));
                }
              }
            });
          }
        }, {
          key: "skipIntro",
          value: function skipIntro() {
            var _this2 = this;

            this.storage.set('intro', true).then(function () {
              _this2.intro = false;

              _this2.getLanguage();
            });
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            var _this3 = this;

            // get setting language from Storage
            this.storage.get('language').then(function (language) {
              if (language) {
                // check if exists language
                _this3.translate.getTranslation(language).subscribe(function (res) {
                  _this3.translate.setDefaultLang(language);

                  _this3.load();
                }, function (err) {
                  // if not exists language file remove from Storage and show chose language
                  _this3.storage.remove('language').then(function () {
                    _this3.getLanguage();
                  });
                });
              } else {
                // set language first time open app, load config from ./assets/i18n/languages.json
                _this3.translate.getTranslation('languages').subscribe(function (langTrans) {
                  // function: set language is default
                  var setDefault = function setDefault() {
                    _this3.translate.setDefaultLang(langTrans['default']);

                    _this3.storage.set('language', langTrans['default']);

                    _this3.load();

                    console.log('done: set default language');
                  }; // get device language


                  var deviceLanguage = window.navigator.language ? window.navigator.language.slice(0, 2) : null;

                  if (deviceLanguage && Array.isArray(langTrans['languages']) && langTrans['languages'].length > 1) {
                    // set true if found device language in list
                    var hasDeviceLanguage;
                    langTrans['languages'].forEach(function (lang) {
                      if (lang['value'] == deviceLanguage) {
                        hasDeviceLanguage = true;

                        _this3.translate.setDefaultLang(lang['value']);

                        _this3.storage.set('language', lang['value']);

                        _this3.load();

                        console.log('done: set device language');
                      }
                    });
                    if (!hasDeviceLanguage) setDefault();
                  } else setDefault();
                });
              }
            });
          }
        }, {
          key: "updateTheme",
          value: function updateTheme() {
            var _this4 = this;

            this.storage.get('theme').then(function (theme) {
              // update font size of view
              var html = document.querySelector('html');
              html.classList.remove(_const_general__WEBPACK_IMPORTED_MODULE_16__["THEME_LIGHT"]);
              html.classList.remove(_const_general__WEBPACK_IMPORTED_MODULE_16__["THEME_DARK"]);
              html.classList.add(theme || _const_general__WEBPACK_IMPORTED_MODULE_16__["THEME_LIGHT"]);

              if (theme == _const_general__WEBPACK_IMPORTED_MODULE_16__["THEME_DARK"]) {
                _this4.statusBar.backgroundColorByHexString('#000000');

                _this4.statusBar.styleLightContent();
              } else {
                _this4.statusBar.backgroundColorByHexString('#ffffff');

                _this4.statusBar.styleDefault();
              }
            });
          }
        }, {
          key: "load",
          value: function load() {
            var _this5 = this;

            this.storage.get('login').then(function (login) {
              if (login && login['token']) _this5.token = login['token']; // start load config from website

              _this5.core.setTrans(); // get translate


              _this5.translate.get('general.config').subscribe(function (trans) {
                _this5.trans = trans;

                if (!_this5.trans['url']) {
                  console.log('error: missing config general.config.url');
                  return;
                } // load config from storage


                _this5.storage.get('last_config').then(function (config) {
                  if (config) {
                    if (_this5.token) config['user_token'] = _this5.token;

                    _this5.core.setConfig(config);

                    _this5.setRoot();

                    _this5.getConfig();
                  } else _this5.getConfig(true);
                });
              });
            });
          }
        }, {
          key: "getConfig",
          value: function getConfig(notOffline) {
            var _this6 = this;

            // request get config
            this.http.get(this.trans['url'] + (this.trans['url'].endsWith('/') ? '' : '/') + 'wp-json/wp/v2/m_config?t=' + new Date().getTime()).subscribe(function (res) {
              // when success
              var config = Object.assign({}, res); // if maintenance settings is checked on website

              if (config['maintenance']) {
                var buttons = [{
                  text: _this6.trans['try'],
                  handler: function handler() {
                    _this6.getConfig(notOffline);
                  }
                }];

                if (!notOffline) {
                  buttons.unshift({
                    text: _this6.trans['offline'],
                    handler: function handler() {
                      _this6.offline();
                    }
                  });
                }

                _this6.alertCtrl.create({
                  header: _this6.trans['title'],
                  message: config['maintenance'],
                  buttons: buttons,
                  backdropDismiss: false
                }).then(function (alert) {
                  alert.present();
                });
              } else {
                // save config to storage
                _this6.storage.set('last_config', res);

                if (_this6.token) config['user_token'] = _this6.token; // if config is valid

                _this6.core.setConfig(config);

                _this6.events.updateConfig(config);

                _this6.validateToken(_this6.token); // prepare view


                _this6.setRoot();

                console.log('done: updated config');

                if (_this6.trans['_terms'] && _this6.trans['_terms']['slug']) {
                  _this6.storage.get('terms').then(function (terms) {
                    if (terms) {
                      _this6.core.setState('agreed_terms', true);

                      _this6.preparePlugin();
                    } else _this6.showTerms();
                  });
                } else _this6.preparePlugin();
              }
            }, function () {
              var buttons = [{
                text: _this6.trans['try'],
                handler: function handler() {
                  _this6.getConfig(notOffline);
                }
              }];

              if (!notOffline) {
                buttons.unshift({
                  text: _this6.trans['offline'],
                  handler: function handler() {
                    _this6.offline();
                  }
                });
              } // when error


              _this6.alertCtrl.create({
                header: _this6.trans['title'],
                message: _this6.trans['message'],
                buttons: buttons,
                backdropDismiss: false
              }).then(function (alert) {
                alert.present();
              });
            });
          }
        }, {
          key: "showTerms",
          value: function showTerms() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        message: this.trans['_terms']['message'],
                        cssClass: 'alert-terms',
                        backdropDismiss: false,
                        buttons: [{
                          text: this.trans['_terms']['read'],
                          handler: function handler() {
                            _this7.router.navigate(['/detail', 0, {
                              type: 1,
                              slug: _this7.trans['_terms']['slug']
                            }]);

                            return false;
                          }
                        }, {
                          text: this.trans['_terms']['agree'],
                          handler: function handler() {
                            _this7.storage.set('terms', true).then(function () {
                              _this7.core.setState('agreed_terms', true);

                              _this7.preparePlugin();
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "preparePlugin",
          value: function preparePlugin() {
            var _this8 = this;

            // when platform ready
            this.platform.ready().then(function () {
              if (!_this8.platform.is('cordova')) return; // firebase analytics

              _this8.FirebaseAnalytics.setEnabled(true);

              _this8.router.events.subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_14__["NavigationEnd"]) {
                  _this8.FirebaseAnalytics.logEvent('app_page_view', {
                    url: event['urlAfterRedirects']
                  });
                }
              }); // AdMob ads


              if (_this8.AdMobFree) {
                // Ads banner
                var id_banner;
                if (_this8.platform.is('android')) id_banner = _this8.core.getConfig('android_banner');else if (_this8.platform.is('ios')) id_banner = _this8.core.getConfig('ios_banner');

                if (id_banner) {
                  _this8.AdMobFree.banner.config({
                    id: id_banner,
                    isTesting: _this8.core.getConfig('is_testing_ads') ? true : false,
                    autoShow: true
                  });

                  _this8.AdMobFree.on(_this8.AdMobFree.events.BANNER_LOAD_FAIL).subscribe(function () {
                    _this8.core.setState('banner_load_fail', true);
                  });

                  _this8.AdMobFree.on(_this8.AdMobFree.events.BANNER_LOAD).subscribe(function () {
                    _this8.core.setState('banner_load_fail', false);
                  });

                  _this8.AdMobFree.banner.prepare()["catch"](function () {});
                } // show Admob Interstitial


                var id_interstitial;
                if (_this8.platform.is('android')) id_interstitial = _this8.core.getConfig('android_interstitial');else if (_this8.platform.is('ios')) id_interstitial = _this8.core.getConfig('ios_interstitial');

                if (id_interstitial) {
                  // show interstitial
                  _this8.AdMobFree.interstitial.config({
                    id: id_interstitial,
                    isTesting: _this8.core.getConfig('is_testing_ads') ? true : false,
                    autoShow: false
                  });

                  _this8.AdMobFree.interstitial.prepare()["catch"](function () {});
                } // show Admob Rewards ads


                var id_rewards;
                if (_this8.platform.is('android')) id_rewards = _this8.core.getConfig('android_rewards');else if (_this8.platform.is('ios')) id_rewards = _this8.core.getConfig('ios_rewards');

                if (id_rewards) {
                  _this8.AdMobFree.rewardVideo.config({
                    id: id_rewards,
                    isTesting: _this8.core.getConfig('is_testing_ads') ? true : false,
                    autoShow: false
                  });
                } // hide banner when keyboard show


                _this8.Keyboard.onKeyboardWillShow().subscribe(function () {
                  _this8.AdMobFree.banner.hide()["catch"](function () {});
                });

                _this8.Keyboard.onKeyboardDidHide().subscribe(function () {
                  _this8.AdMobFree.banner.show()["catch"](function () {});
                }); // hide banner when reward show fix bug banner overlap ion-footer


                _this8.AdMobFree.on(_this8.AdMobFree.events.REWARD_VIDEO_OPEN).subscribe(function () {
                  _this8.AdMobFree.banner.hide()["catch"](function () {});
                });

                _this8.AdMobFree.on(_this8.AdMobFree.events.REWARD_VIDEO_CLOSE).subscribe(function () {
                  _this8.AdMobFree.banner.show()["catch"](function () {});
                });
              } // subscribe OneSignal for notification


              if (_this8.core.getConfig('onesignal_app_id') && _this8.OneSignal) {
                _this8.OneSignal.startInit(_this8.core.getConfig('onesignal_app_id'));

                _this8.OneSignal.inFocusDisplaying(_this8.OneSignal.OSInFocusDisplayOption.Notification);

                _this8.OneSignal.endInit();
              }
            });
          }
        }, {
          key: "setRoot",
          value: function setRoot() {
            var _this9 = this;

            var isOffline = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.isOffline != undefined && isOffline != this.isOffline) {
              this.Toast.showShortCenter(this.trans['refreshData']).subscribe(function () {}, function () {});
            }

            this.events.updateOffline(isOffline);
            this.isOffline = isOffline;
            this.rooted = true;
            setTimeout(function () {
              _this9.loaded = true;
            }, 300);
          }
        }, {
          key: "offline",
          value: function offline() {
            this.core.patchConfig('offline', true);
            this.setRoot(true);
          }
        }, {
          key: "validateToken",
          value: function validateToken(token) {
            var _this10 = this;

            if (!token) return;
            this.core.request('jwt-auth/v1/token/validate', {
              method: 'POST'
            }, true, true).subscribe(function (res) {}, function (err) {
              if (err['status'] != 403) return;

              _this10.storage.remove('login');

              _this10.core.patchConfig('user_token', null);

              if (_this10.trans && _this10.trans['tokenInvalid']) _this10.Toast.showLongCenter(_this10.trans['tokenInvalid']).subscribe(function () {}, function () {});
            });
          }
        }, {
          key: "fullscreenchange",
          value: function fullscreenchange(event) {
            if (!this.platform.is('cordova')) return;

            if (document['fullscreen'] || document['fullscreenElement']) {
              if (this.platform.is('android')) this.ScreenOrientation.unlock();
              this.AdMobFree.banner.hide()["catch"](function () {});
            } else {
              if (this.platform.is('android')) this.ScreenOrientation.lock(this.ScreenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
              this.AdMobFree.banner.show()["catch"](function () {});
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"]
        }, {
          type: _services_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"]
        }, {
          type: _services_utitlities_service__WEBPACK_IMPORTED_MODULE_18__["UtitlitiesService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__["Toast"]
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_10__["EventsService"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__["OneSignal"]
        }, {
          type: _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_12__["AdMobFree"]
        }, {
          type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_13__["Keyboard"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]
        }, {
          type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_15__["FirebaseAnalytics"]
        }, {
          type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_17__["ScreenOrientation"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        providers: [_ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__["OneSignal"], _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_12__["AdMobFree"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_13__["Keyboard"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_17__["ScreenOrientation"], _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_15__["FirebaseAnalytics"]],
        host: {
          '(document:fullscreenchange)': 'fullscreenchange($event)',
          '(document:webkitfullscreenchange)': 'fullscreenchange($event)',
          '(document:mozfullscreenchange)': 'fullscreenchange($event)'
        },
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"], _services_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"], _services_utitlities_service__WEBPACK_IMPORTED_MODULE_18__["UtitlitiesService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__["Toast"], _services_events_service__WEBPACK_IMPORTED_MODULE_10__["EventsService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__["OneSignal"], _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_12__["AdMobFree"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_13__["Keyboard"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_15__["FirebaseAnalytics"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_17__["ScreenOrientation"]])], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: createTranslateLoader, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/toast/ngx */
      "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _components_menus_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/menus.module */
      "./src/app/components/menus.module.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/speech-recognition/ngx */
      "./node_modules/@ionic-native/speech-recognition/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/text-to-speech/ngx */
      "./node_modules/@ionic-native/text-to-speech/__ivy_ngcc__/ngx/index.js");

      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
          backButtonText: '',
          backButtonIcon: 'arrow-back',
          swipeBackEnabled: false,
          mode: 'ios'
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
          }
        }), _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot({
          name: 'stionic_hala_application'
        }), _components_menus_module__WEBPACK_IMPORTED_MODULE_15__["MenusModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_17__["SpeechRecognition"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__["Geolocation"], _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_19__["TextToSpeech"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/classes/subsink.ts":
    /*!************************************!*\
      !*** ./src/app/classes/subsink.ts ***!
      \************************************/

    /*! exports provided: SubSink */

    /***/
    function srcAppClassesSubsinkTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubSink", function () {
        return SubSink;
      });

      var isFunction = function isFunction(fn) {
        return typeof fn === 'function';
      };
      /**
       * Subscription sink that holds Observable subscriptions
       * until you call unsubscribe on it in ngOnDestroy.
       */


      var SubSink = /*#__PURE__*/function () {
        /**
         * Subscription sink that holds Observable subscriptions
         * until you call unsubscribe on it in ngOnDestroy.
         *
         * @example
         * In Angular:
         * ```
         *   private subs = new SubSink();
         *   ...
         *   this.subs.sink = observable$.subscribe(
         *   this.subs.add(observable$.subscribe(...));
         *   ...
         *   ngOnDestroy() {
         *     this.subs.unsubscribe();
         *   }
         * ```
         */
        function SubSink() {
          _classCallCheck(this, SubSink);

          this._subs = [];
        }
        /**
         * Add subscriptions to the tracked subscriptions
         * @example
         *  this.subs.add(observable$.subscribe(...));
         */


        _createClass(SubSink, [{
          key: "add",
          value: function add() {
            for (var _len = arguments.length, subscriptions = new Array(_len), _key = 0; _key < _len; _key++) {
              subscriptions[_key] = arguments[_key];
            }

            this._subs = this._subs.concat(subscriptions);
          }
          /**
           * Assign subscription to this sink to add it to the tracked subscriptions
           * @example
           *  this.subs.sink = observable$.subscribe(...);
           */

        }, {
          key: "unsubscribe",

          /**
           * Unsubscribe to all subscriptions in ngOnDestroy()
           * @example
           *   ngOnDestroy() {
           *     this.subs.unsubscribe();
           *   }
           */
          value: function unsubscribe() {
            this._subs.forEach(function (sub) {
              return sub && isFunction(sub.unsubscribe) && sub.unsubscribe();
            });

            this._subs = [];
          }
        }, {
          key: "sink",
          set: function set(subscription) {
            this._subs.push(subscription);
          }
        }]);

        return SubSink;
      }();
      /***/

    },

    /***/
    "./src/app/components/components.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _no_data_no_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./no-data/no-data.component */
      "./src/app/components/no-data/no-data.component.ts");
      /* harmony import */


      var _list_posts_list_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./list-posts/list-posts.component */
      "./src/app/components/list-posts/list-posts.component.ts");
      /* harmony import */


      var _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./loading/loading.component */
      "./src/app/components/loading/loading.component.ts");
      /* harmony import */


      var _refresher_refresher_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./refresher/refresher.component */
      "./src/app/components/refresher/refresher.component.ts");
      /* harmony import */


      var _infinite_scroll_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./infinite-scroll/infinite-scroll.component */
      "./src/app/components/infinite-scroll/infinite-scroll.component.ts");
      /* harmony import */


      var _item_comment_item_comment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./item-comment/item-comment.component */
      "./src/app/components/item-comment/item-comment.component.ts");
      /* harmony import */


      var _goto_top_goto_top_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./goto-top/goto-top.component */
      "./src/app/components/goto-top/goto-top.component.ts");
      /* harmony import */


      var _html_content_html_content_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./html-content/html-content.component */
      "./src/app/components/html-content/html-content.component.ts");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_6__["NoDataComponent"], _list_posts_list_posts_component__WEBPACK_IMPORTED_MODULE_7__["ListPostsComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], _refresher_refresher_component__WEBPACK_IMPORTED_MODULE_9__["RefresherComponent"], _infinite_scroll_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollComponent"], _item_comment_item_comment_component__WEBPACK_IMPORTED_MODULE_11__["ItemCommentComponent"], _goto_top_goto_top_component__WEBPACK_IMPORTED_MODULE_12__["GotoTopComponent"], _html_content_html_content_component__WEBPACK_IMPORTED_MODULE_13__["HtmlContentComponent"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]],
        exports: [_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_6__["NoDataComponent"], _list_posts_list_posts_component__WEBPACK_IMPORTED_MODULE_7__["ListPostsComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], _refresher_refresher_component__WEBPACK_IMPORTED_MODULE_9__["RefresherComponent"], _infinite_scroll_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollComponent"], _item_comment_item_comment_component__WEBPACK_IMPORTED_MODULE_11__["ItemCommentComponent"], _goto_top_goto_top_component__WEBPACK_IMPORTED_MODULE_12__["GotoTopComponent"], _html_content_html_content_component__WEBPACK_IMPORTED_MODULE_13__["HtmlContentComponent"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "./src/app/components/goto-top/goto-top.component.scss":
    /*!*************************************************************!*\
      !*** ./src/app/components/goto-top/goto-top.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsGotoTopGotoTopComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  width: 30px;\n  height: 30px;\n  margin-top: -15px;\n  margin-left: -15px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: var(--ion-color-light);\n  box-shadow: 0 0 5px var(--ion-color-dark);\n}\n:host .button {\n  border-radius: 50%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb3RvLXRvcC9nb3RvLXRvcC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9zaGFyZWRfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLFlDT2dCO0VETmhCLFNBQUE7RUFDQSxXQ0ljO0VESGQsWUNHYztFREZkLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5Q0FBQTtBQURGO0FBRUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dvdG8tdG9wL2dvdG8tdG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL3NoYXJlZF92YXJpYWJsZXMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAkZ290by10b3AtYm90dG9tO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAkZ290by10b3Atc2l6ZTtcbiAgaGVpZ2h0OiAkZ290by10b3Atc2l6ZTtcbiAgbWFyZ2luLXRvcDogLSN7JGdvdG8tdG9wLXNpemUgLyAyfTtcbiAgbWFyZ2luLWxlZnQ6IC0jeyRnb3RvLXRvcC1zaXplIC8gMn07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIC5idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59IiwiJG9mZmxpbmUtbW9kZS1oZWlnaHQ6IDMwcHg7XG4kb2ZmbGluZS1tb2RlLWZvbnQtc2l6ZTogMTJweDtcbiRsaXN0LXBvc3RzLWNvbHVtbi10aXRsZS1saW5lOiAzO1xuJGxpc3QtcG9zdHMtY29sdW1uLXRpdGxlLWxpbmUtaGVpZ2h0OiAyMHB4O1xuJGNvbnRlbnQtcGFkZGluZzogOHB4ICFkZWZhdWx0O1xuJGhhaXJsaW5lcy13aWR0aDogMXB4ICFkZWZhdWx0O1xuJGxpc3QtaW9zLWJvcmRlci1jb2xvcjogI2VlZSAhZGVmYXVsdDtcbiRpdGVtLWlvcy1wYWRkaW5nLWVuZDogMTZweCAhZGVmYXVsdDtcbiRjaGVja2JveC1pb3MtaXRlbS1zdGFydC1tYXJnaW4tc3RhcnQ6IDJweCAhZGVmYXVsdDtcbiRjaGVja2JveC1pb3MtaXRlbS1zdGFydC1tYXJnaW4tZW5kOiAxNnB4ICFkZWZhdWx0O1xuJGdvdG8tdG9wLXNpemU6IDMwcHg7XG4kZ290by10b3AtYm90dG9tOiAyMHB4OyJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/goto-top/goto-top.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/goto-top/goto-top.component.ts ***!
      \***********************************************************/

    /*! exports provided: GotoTopComponent */

    /***/
    function srcAppComponentsGotoTopGotoTopComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GotoTopComponent", function () {
        return GotoTopComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_classes_subsink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/classes/subsink */
      "./src/app/classes/subsink.ts");

      var GotoTopComponent = /*#__PURE__*/function () {
        function GotoTopComponent(ngZone) {
          _classCallCheck(this, GotoTopComponent);

          this.ngZone = ngZone;
          this.subs = new src_app_classes_subsink__WEBPACK_IMPORTED_MODULE_3__["SubSink"]();
        }

        _createClass(GotoTopComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.slot) {
              console.error('Make sure you use: <app-goto-top slot="fixed">');
              return;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subs.unsubscribe();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this11 = this;

              var div;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.content) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 2:
                      this.content.scrollEvents = true;
                      _context2.next = 5;
                      return this.content.getScrollElement();

                    case 5:
                      this.scrollElement = _context2.sent;
                      div = document.createElement('div');
                      div.setAttribute('style', 'padding-top: var(--ion-padding-goto-top)');
                      this.scrollElement.appendChild(div);
                      this.subs.sink = this.content.ionScrollEnd.subscribe(function () {
                        if (!_this11.scrollElement) return;
                        if (_this11.scrollElement.scrollTop > _this11.scrollElement.clientHeight) _this11.ngZone.run(function () {
                          return _this11.show = true;
                        });else if (_this11.show) _this11.ngZone.run(function () {
                          return _this11.show = false;
                        });
                      });

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "gotoTop",
          value: function gotoTop() {
            var _this12 = this;

            if (!this.content) return;
            this.content.scrollToTop();
            this.ngZone.run(function () {
              return _this12.show = false;
            });
          }
        }]);

        return GotoTopComponent;
      }();

      GotoTopComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      GotoTopComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        slot: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      GotoTopComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-goto-top',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./goto-top.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/goto-top/goto-top.component.html"))["default"],
        host: {
          '[hidden]': '!show'
        },
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./goto-top.component.scss */
        "./src/app/components/goto-top/goto-top.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], GotoTopComponent);
      /***/
    },

    /***/
    "./src/app/components/html-content/html-content.component.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/components/html-content/html-content.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsHtmlContentHtmlContentComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\napp-html-content {\n  display: block;\n}\napp-html-content .html-content {\n  font-size: 110%;\n  line-height: 150%;\n}\napp-html-content .html-content .hide-app-detail,\napp-html-content .html-content [id*=div-gpt-ad],\napp-html-content .html-content ins.adsbygoogle {\n  display: none !important;\n}\napp-html-content .html-content :first-child {\n  margin-top: 0;\n}\napp-html-content .html-content * {\n  max-width: 100%;\n}\napp-html-content .html-content h1,\napp-html-content .html-content h2,\napp-html-content .html-content h3,\napp-html-content .html-content h4,\napp-html-content .html-content h5,\napp-html-content .html-content h6 {\n  font-size: 1.5rem;\n  margin: 10px 0;\n}\napp-html-content .html-content img,\napp-html-content .html-content iframe {\n  display: block;\n  margin: 0 auto;\n}\napp-html-content .html-content img {\n  height: auto;\n}\napp-html-content .html-content figure {\n  margin: 0 auto;\n}\napp-html-content .html-content figure figcaption {\n  width: 100%;\n  padding: 10px;\n}\napp-html-content .html-content .wp-video {\n  margin: 0 auto;\n}\napp-html-content .html-content ul li {\n  line-height: 150%;\n}\napp-html-content .wpcf7-form .wpcf7-text,\napp-html-content .wpcf7-form .wpcf7-textarea,\napp-html-content .wpcf7-form .wpcf7-date,\napp-html-content .wpcf7-form .wpcf7-select,\napp-html-content .wpcf7-form .wpcf7-quiz,\napp-html-content .wpcf7-form .wpcf7-file {\n  border-radius: 5px;\n  border: 1px solid #eee;\n  padding: 5px;\n  margin: 4px 0;\n  width: 100%;\n}\napp-html-content .wpcf7-form .wpcf7-file {\n  line-height: 12px;\n  padding: 10px 5px;\n}\napp-html-content .wpcf7-form .wpcf7-checkbox .wpcf7-list-item,\napp-html-content .wpcf7-form .wpcf7-radio .wpcf7-list-item {\n  display: block;\n}\napp-html-content .wpcf7-form .wpcf7-checkbox .wpcf7-list-item label,\napp-html-content .wpcf7-form .wpcf7-radio .wpcf7-list-item label {\n  display: block;\n}\napp-html-content .wpcf7-form .wpcf7-checkbox .wpcf7-list-item input,\napp-html-content .wpcf7-form .wpcf7-radio .wpcf7-list-item input {\n  position: absolute;\n  opacity: 0;\n  width: 20px;\n  height: 26px;\n}\napp-html-content .wpcf7-form .wpcf7-checkbox .wpcf7-list-item input:checked ~ .wpcf7-list-item-label:before,\napp-html-content .wpcf7-form .wpcf7-radio .wpcf7-list-item input:checked ~ .wpcf7-list-item-label:before {\n  color: var(--ion-color-primary);\n}\napp-html-content .wpcf7-form .wpcf7-checkbox .wpcf7-list-item .wpcf7-list-item-label,\napp-html-content .wpcf7-form .wpcf7-radio .wpcf7-list-item .wpcf7-list-item-label {\n  line-height: 3.1rem;\n  min-height: 3.1rem;\n  display: block;\n  font-size: 20px;\n}\napp-html-content .wpcf7-form .wpcf7-checkbox .wpcf7-list-item .wpcf7-list-item-label:before,\napp-html-content .wpcf7-form .wpcf7-radio .wpcf7-list-item .wpcf7-list-item-label:before {\n  font-family: \"Ionicons\";\n  margin: 0, 16px, 0, 2px;\n}\napp-html-content .wpcf7-form .wpcf7-checkbox .wpcf7-list-item input:checked ~ .wpcf7-list-item-label:before {\n  content: \"\";\n}\napp-html-content .wpcf7-form .wpcf7-checkbox .wpcf7-list-item .wpcf7-list-item-label:before {\n  content: \"\";\n}\napp-html-content .wpcf7-form .wpcf7-radio .wpcf7-list-item input:checked ~ .wpcf7-list-item-label:before {\n  content: \"\";\n}\napp-html-content .wpcf7-form .wpcf7-radio .wpcf7-list-item .wpcf7-list-item-label:before {\n  content: \"\";\n}\napp-html-content .wpcf7-form .wpcf7-acceptance-custom {\n  float: left;\n  position: relative;\n}\napp-html-content .wpcf7-form .wpcf7-acceptance-custom .wpcf7-acceptance {\n  opacity: 0;\n  width: 20px;\n  margin: 0, 16px, 0, 0;\n}\napp-html-content .wpcf7-form .wpcf7-acceptance-custom .wpcf7-acceptance ~ .wpcf7-acceptance-checked {\n  position: absolute;\n  left: 2px;\n  top: -4px;\n  font-size: 20px;\n}\napp-html-content .wpcf7-form .wpcf7-acceptance-custom .wpcf7-acceptance ~ .wpcf7-acceptance-checked:before {\n  content: \"\";\n  font-family: \"Ionicons\";\n}\napp-html-content .wpcf7-form .wpcf7-acceptance-custom .wpcf7-acceptance:checked ~ .wpcf7-acceptance-checked:before {\n  content: \"\";\n  color: var(--ion-color-primary);\n}\napp-html-content .wpcf7-form .wpcf7-submit,\napp-html-content .wpcf7-form open-captcha {\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  border: 0;\n  border-radius: 4px;\n  height: 2.8em;\n  font-size: 15px;\n  color: var(--ion-color-light);\n  background-color: var(--ion-color-primary);\n  margin: 4px 0;\n  padding: 0 1em;\n  display: block;\n  clear: both;\n  width: 100%;\n  contain: strict;\n}\napp-html-content .wpcf7-form open-captcha {\n  color: var(--ion-color-primary);\n  background: url(\"/assets/imgs/recaptcha.png\");\n  background-size: auto 100%;\n}\napp-html-content .wpcf7-form .wpcf7-not-valid-tip {\n  font-size: 80%;\n  color: var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9odG1sLWNvbnRlbnQvaHRtbC1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2h0bWwtY29udGVudC93cGNmNy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGNBQUE7QUFFRjtBQURFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBR0o7QUFGSTs7O0VBR0Usd0JBQUE7QUFJTjtBQUZJO0VBQ0UsYUFBQTtBQUlOO0FBRkk7RUFDRSxlQUFBO0FBSU47QUFGSTs7Ozs7O0VBTUUsaUJBQUE7RUFDQSxjQUFBO0FBSU47QUFGSTs7RUFFRSxjQUFBO0VBQ0EsY0FBQTtBQUlOO0FBRkk7RUFDRSxZQUFBO0FBSU47QUFGSTtFQUNFLGNBQUE7QUFJTjtBQUhNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFLUjtBQUZJO0VBQ0UsY0FBQTtBQUlOO0FBRE07RUFDRSxpQkFBQTtBQUdSO0FDN0NFOzs7Ozs7RUFNRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FEK0NKO0FDN0NFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBRCtDSjtBQzNDSTs7RUFDRSxjQUFBO0FEOENOO0FDN0NNOztFQUNFLGNBQUE7QURnRFI7QUM5Q007O0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURpRFI7QUMvQ1U7O0VBQ0UsK0JBQUE7QURrRFo7QUM5Q007O0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEaURSO0FDaERROztFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7QURtRFY7QUMzQ1E7RUFDRSxZQUFBO0FENkNWO0FDekNRO0VBQ0UsWUFBQTtBRDJDVjtBQ25DUTtFQUNFLFlBQUE7QURxQ1Y7QUNqQ1E7RUFDRSxZQUFBO0FEbUNWO0FDOUJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FEZ0NKO0FDL0JJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRGlDTjtBQ2hDTTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FEa0NSO0FDakNRO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FEbUNWO0FDL0JRO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0FEaUNWO0FDNUJFOztFQUVFLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBRDhCSjtBQzVCRTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7RUFDQSwwQkFBQTtBRDhCSjtBQzVCRTtFQUNFLGNBQUE7RUFDQSw4QkFBQTtBRDhCSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaHRtbC1jb250ZW50L2h0bWwtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1odG1sLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLmh0bWwtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxMTAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgIC5oaWRlLWFwcC1kZXRhaWwsXG4gICAgW2lkKj1cImRpdi1ncHQtYWRcIl0sXG4gICAgaW5zLmFkc2J5Z29vZ2xlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICAgICoge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBoMSxcbiAgICBoMixcbiAgICBoMyxcbiAgICBoNCxcbiAgICBoNSxcbiAgICBoNiB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgIH1cbiAgICBpbWcsXG4gICAgaWZyYW1lIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICAgIGZpZ3VyZSB7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGZpZ2NhcHRpb24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLndwLXZpZGVvIHtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICB1bCB7XG4gICAgICBsaSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpbXBvcnQgXCIuL3dwY2Y3LnNjc3NcIjtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9zaGFyZWRfdmFyaWFibGVzLnNjc3NcIjtcblxuLndwY2Y3LWZvcm0ge1xuICAud3BjZjctdGV4dCxcbiAgLndwY2Y3LXRleHRhcmVhLFxuICAud3BjZjctZGF0ZSxcbiAgLndwY2Y3LXNlbGVjdCxcbiAgLndwY2Y3LXF1aXosXG4gIC53cGNmNy1maWxlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGxpc3QtaW9zLWJvcmRlci1jb2xvcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiA0cHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAud3BjZjctZmlsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG4gIH1cbiAgLndwY2Y3LWNoZWNrYm94LFxuICAud3BjZjctcmFkaW8ge1xuICAgIC53cGNmNy1saXN0LWl0ZW0ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgaW5wdXQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICY6Y2hlY2tlZCB+IC53cGNmNy1saXN0LWl0ZW0tbGFiZWwge1xuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAud3BjZjctbGlzdC1pdGVtLWxhYmVsIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMuMXJlbTtcbiAgICAgICAgbWluLWhlaWdodDogMy4xcmVtO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiSW9uaWNvbnNcIjtcbiAgICAgICAgICBtYXJnaW46IDAsICRjaGVja2JveC1pb3MtaXRlbS1zdGFydC1tYXJnaW4tZW5kLCAwLCAkY2hlY2tib3gtaW9zLWl0ZW0tc3RhcnQtbWFyZ2luLXN0YXJ0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC53cGNmNy1jaGVja2JveCB7XG4gICAgLndwY2Y3LWxpc3QtaXRlbSB7XG4gICAgICBpbnB1dDpjaGVja2VkIH4gLndwY2Y3LWxpc3QtaXRlbS1sYWJlbCB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlxcZjJiOVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAud3BjZjctbGlzdC1pdGVtLWxhYmVsIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMzgwXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLndwY2Y3LXJhZGlvIHtcbiAgICAud3BjZjctbGlzdC1pdGVtIHtcbiAgICAgIGlucHV0OmNoZWNrZWQgfiAud3BjZjctbGlzdC1pdGVtLWxhYmVsIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMzYxXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC53cGNmNy1saXN0LWl0ZW0tbGFiZWwge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJcXGYzNjBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAud3BjZjctYWNjZXB0YW5jZS1jdXN0b20ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAud3BjZjctYWNjZXB0YW5jZSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBtYXJnaW46IDAsICRjaGVja2JveC1pb3MtaXRlbS1zdGFydC1tYXJnaW4tZW5kLCAwLCAwO1xuICAgICAgJiB+IC53cGNmNy1hY2NlcHRhbmNlLWNoZWNrZWQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgdG9wOiAtNHB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlxcZjM4MFwiO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIklvbmljb25zXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICY6Y2hlY2tlZCB+IC53cGNmNy1hY2NlcHRhbmNlLWNoZWNrZWQge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJcXGYyYjlcIjtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC53cGNmNy1zdWJtaXQsXG4gIG9wZW4tY2FwdGNoYSB7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGhlaWdodDogMi44ZW07XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW46IDRweCAwO1xuICAgIHBhZGRpbmc6IDAgMWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbnRhaW46IHN0cmljdDtcbiAgfVxuICBvcGVuLWNhcHRjaGEge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWdzL3JlY2FwdGNoYS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gIH1cbiAgLndwY2Y3LW5vdC12YWxpZC10aXAge1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/html-content/html-content.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/html-content/html-content.component.ts ***!
      \*******************************************************************/

    /*! exports provided: HtmlContentComponent */

    /***/
    function srcAppComponentsHtmlContentHtmlContentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HtmlContentComponent", function () {
        return HtmlContentComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/core.service */
      "./src/app/services/core.service.ts");
      /* harmony import */


      var src_app_services_deeplinks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/deeplinks.service */
      "./src/app/services/deeplinks.service.ts");
      /* harmony import */


      var src_app_services_utitlities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/utitlities.service */
      "./src/app/services/utitlities.service.ts");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/toast/ngx */
      "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var src_app_services_sanitizer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/sanitizer.service */
      "./src/app/services/sanitizer.service.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var src_app_const_development__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/const/development */
      "./src/app/const/development.ts");

      var HtmlContentComponent = /*#__PURE__*/function () {
        function HtmlContentComponent(translate, element, core, utilities, deeplinks, platform, PhotoViewer, InAppBrowser, Toast, ngZone, navCtrl, san, sanitizer) {
          var _this13 = this;

          _classCallCheck(this, HtmlContentComponent);

          this.element = element;
          this.core = core;
          this.utilities = utilities;
          this.deeplinks = deeplinks;
          this.platform = platform;
          this.PhotoViewer = PhotoViewer;
          this.InAppBrowser = InAppBrowser;
          this.Toast = Toast;
          this.ngZone = ngZone;
          this.navCtrl = navCtrl;
          this.san = san;
          this.sanitizer = sanitizer; // loading

          this.loading = false;
          this.loadingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // set true handle loading

          this.handleLoading = true;
          translate.get('components.htmlContent').subscribe(function (trans) {
            return _this13.trans = trans;
          });
        }

        _createClass(HtmlContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (typeof this.data != 'object') {
              if (this.data) console.error('data attribute tpye should be object');
              this.data = {};
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(change) {
            if (change['innerHTML'] && this.makeSafe) this.innerHTML = this.san.bypassSecurityTrustHtml(this.sanitizer.get(this.innerHTML));
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.contentDiv = this.element.nativeElement.children[0];
          }
        }, {
          key: "click",
          value: function click(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this14 = this;

              var target, parent, option, route, href, _href, element, src, optionCaptcha, captcha, data;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!this._loading) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 2:
                      // when click element on post content
                      target = event.target; // if target is child of A tag set target is A tag

                      parent = target.parentElement;

                      if (parent) {
                        do {
                          if (parent['nodeName'] == 'A') {
                            target = parent;
                            parent = null;
                          } else {
                            parent = parent.parentElement;
                          }
                        } while (parent);
                      }

                      _context3.t0 = target['nodeName'];
                      _context3.next = _context3.t0 === 'A' ? 8 : _context3.t0 === 'IMG' ? 17 : _context3.t0 === 'OPEN-CAPTCHA' ? 24 : _context3.t0 === 'INPUT' ? 28 : 35;
                      break;

                    case 8:
                      // if have data-app-route attribute
                      route = target.getAttribute('data-app-route');

                      if (!route) {
                        _context3.next = 12;
                        break;
                      }

                      this.navCtrl.navigateForward(route);
                      return _context3.abrupt("return");

                    case 12:
                      // when click A tag
                      href = target.getAttribute('value');

                      if (href) {
                        _context3.next = 15;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 15:
                      if (this.data['link'] && (href.indexOf('#') === 0 || href.indexOf(this.data['link'] + '#') === 0) && this.content && this.contentDiv) {
                        _href = href.split('#');
                        if (_href.length > 1) href = '#' + _href[1];
                        if (href.length > 1) element = this.contentDiv.querySelector(href);
                        if (element) this.content.scrollToPoint(null, this.utilities.getOffsetTop(element) - 60)["catch"](function () {});
                      } else {
                        option = {
                          params: {
                            url: encodeURIComponent(href)
                          }
                        };
                        this._loading = true; // get deeplinks

                        this.core.request('m_tools/deeplinks', option).subscribe(function (res) {
                          _this14._loading = false; // run deeplinks

                          _this14.deeplinks.run(res, _this14.data['id'], href);
                        }, function (err) {
                          return _this14._loading = false;
                        });
                      }

                      return _context3.abrupt("break", 35);

                    case 17:
                      if (this.platform.is('cordova')) {
                        _context3.next = 19;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 19:
                      this._loading = true;
                      src = target.getAttribute('src');
                      option = {
                        params: {
                          url: encodeURIComponent(src)
                        }
                      }; // get final url of image

                      this.core.request('m_tools/final_url', option).subscribe(function (res) {
                        _this14._loading = false; // show image on PhotoViewer

                        if (res) _this14.PhotoViewer.show(res, target.getAttribute('title') || target.getAttribute('alt') || '');
                      }, function (err) {
                        return _this14._loading = false;
                      });
                      return _context3.abrupt("break", 35);

                    case 24:
                      if (this.platform.is('cordova')) {
                        _context3.next = 26;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 26:
                      // when click recaptcha
                      if (target.getAttribute('key')) {
                        this._loading = true;
                        optionCaptcha = 'location=no,hardwareback=no,zoom=no,hidden=yes,useWideViewPort=no';
                        captcha = this.InAppBrowser.create(this.core.getConfig('root_endpoint') + '/stionic', '_blank', optionCaptcha);
                        captcha.on('loadstart').subscribe(function (res) {
                          if (res['url'].indexOf('http://success/') == 0) {
                            _this14.recaptcha = res['url'].substr(15, res['url'].length - 15);

                            _this14.Toast.showLongCenter(_this14.trans['captcha']).subscribe(function () {}, function () {});
                          }
                        });
                        captcha.on('loaderror').subscribe(function () {
                          captcha.close();

                          _this14.ngZone.run(function () {
                            return _this14._loading = false;
                          });
                        });
                        captcha.on('loadstop').subscribe(function () {
                          var code = 'var div = document.createElement("div");';
                          code += 'div.setAttribute("data-sitekey", "' + target.getAttribute('key') + '");';
                          code += 'div.setAttribute("data-callback", "onCallback");';
                          code += 'div.className = "g-recaptcha";';
                          code += 'document.body.innerHTML = div.outerHTML;';
                          code += 'var callback = document.createElement("script");';
                          code += 'callback.innerHTML = "var onCallback = function(){';
                          code += 'var data = document.getElementById(\'g-recaptcha-response\').value;';
                          code += 'location.href = \'http://success/\'+data';
                          code += '}";';
                          code += 'document.head.appendChild(callback);';
                          code += 'var api = document.createElement("script");';
                          code += 'api.src = "https://www.google.com/recaptcha/api.js";';
                          code += 'document.head.appendChild(api);';
                          captcha.executeScript({
                            code: code
                          });

                          _this14.ngZone.run(function () {
                            return _this14._loading = false;
                          });

                          captcha.show();
                        });
                      }

                      return _context3.abrupt("break", 35);

                    case 28:
                      if (!(target.getAttribute('type') != 'submit')) {
                        _context3.next = 30;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 30:
                      if (!(!target['classList'].contains('wpcf7-submit') || !target['form'])) {
                        _context3.next = 32;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 32:
                      data = new FormData(target['form']);

                      if (data.has('_wpcf7')) {
                        if (this.recaptcha) data['g-recaptcha-response'] = this.recaptcha;
                        this._loading = true;
                        option = {
                          method: 'POST',
                          body: data
                        };
                        this.core.request('contact-form-7/v1/contact-forms/' + data.get('_wpcf7') + '/feedback', option, true).subscribe(function (res) {
                          _this14.recaptcha = null;
                          var message;

                          _this14.removeInvalid(res['into']);

                          if (res['invalid_fields']) _this14.setInvalid(res['into'], res['invalid_fields']);
                          if (res['status'] == 'spam') message = _this14.trans['spam'];else message = res['message'];

                          _this14.Toast.showShortCenter(message).subscribe(function () {}, function () {});

                          if (res['status'] == 'mail_sent') target['form'].reset();
                          _this14._loading = false;
                        }, function (err) {
                          _this14.Toast.showShortCenter(_this14.trans['canNotSubmit']).subscribe(function () {}, function () {});

                          _this14._loading = false;
                        });
                      }

                      return _context3.abrupt("break", 35);

                    case 35:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "removeInvalid",
          value: function removeInvalid(form) {
            if (!form) return;
            var invalid = document.querySelectorAll(form + ' .' + src_app_const_development__WEBPACK_IMPORTED_MODULE_12__["CONTACT_FORM_INVALID_CLASS"]);
            invalid.forEach(function (element) {
              element.parentNode && element.parentNode.removeChild(element);
            });
          }
        }, {
          key: "setInvalid",
          value: function setInvalid(form, invalid) {
            var container;
            invalid.forEach(function (data) {
              var span = document.createElement('span');
              span.classList.add(src_app_const_development__WEBPACK_IMPORTED_MODULE_12__["CONTACT_FORM_INVALID_CLASS"]);
              span.innerText = data['message'];
              container = document.querySelector(form + ' ' + data['into']);
              container.appendChild(span);
            });
          }
        }, {
          key: "_loading",
          get: function get() {
            return this.loading;
          },
          set: function set(value) {
            this.loading = value;
            this.loadingChange.emit(this.loading);

            if (this.handleLoading) {
              if (value) {
                this.core.showLoading();
              } else {
                this.core.hideLoading();
              }
            }
          }
        }]);

        return HtmlContentComponent;
      }();

      HtmlContentComponent.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: src_app_services_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"]
        }, {
          type: src_app_services_utitlities_service__WEBPACK_IMPORTED_MODULE_5__["UtitlitiesService"]
        }, {
          type: src_app_services_deeplinks_service__WEBPACK_IMPORTED_MODULE_4__["DeeplinksService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__["PhotoViewer"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]
        }, {
          type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]
        }, {
          type: src_app_services_sanitizer_service__WEBPACK_IMPORTED_MODULE_10__["SanitizerService"]
        }];
      };

      HtmlContentComponent.propDecorators = {
        innerHTML: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        makeSafe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        loadingChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        handleLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      HtmlContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-html-content',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./html-content.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/html-content/html-content.component.html"))["default"],
        providers: [_ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__["PhotoViewer"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./html-content.component.scss */
        "./src/app/components/html-content/html-content.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], src_app_services_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"], src_app_services_utitlities_service__WEBPACK_IMPORTED_MODULE_5__["UtitlitiesService"], src_app_services_deeplinks_service__WEBPACK_IMPORTED_MODULE_4__["DeeplinksService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__["PhotoViewer"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], src_app_services_sanitizer_service__WEBPACK_IMPORTED_MODULE_10__["SanitizerService"]])], HtmlContentComponent);
      /***/
    },

    /***/
    "./src/app/components/infinite-scroll/infinite-scroll.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/components/infinite-scroll/infinite-scroll.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsInfiniteScrollInfiniteScrollComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5maW5pdGUtc2Nyb2xsL2luZmluaXRlLXNjcm9sbC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/infinite-scroll/infinite-scroll.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/infinite-scroll/infinite-scroll.component.ts ***!
      \*************************************************************************/

    /*! exports provided: InfiniteScrollComponent */

    /***/
    function srcAppComponentsInfiniteScrollInfiniteScrollComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfiniteScrollComponent", function () {
        return InfiniteScrollComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var InfiniteScrollComponent = /*#__PURE__*/function () {
        function InfiniteScrollComponent() {
          _classCallCheck(this, InfiniteScrollComponent);
        }

        _createClass(InfiniteScrollComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InfiniteScrollComponent;
      }();

      InfiniteScrollComponent.ctorParameters = function () {
        return [];
      };

      InfiniteScrollComponent.propDecorators = {
        threshold: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      InfiniteScrollComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-infinite-scroll',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./infinite-scroll.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/infinite-scroll/infinite-scroll.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./infinite-scroll.component.scss */
        "./src/app/components/infinite-scroll/infinite-scroll.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], InfiniteScrollComponent);
      /***/
    },

    /***/
    "./src/app/components/item-comment/item-comment.component.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/components/item-comment/item-comment.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsItemCommentItemCommentComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtLWNvbW1lbnQvaXRlbS1jb21tZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pdGVtLWNvbW1lbnQvaXRlbS1jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/item-comment/item-comment.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/item-comment/item-comment.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ItemCommentComponent */

    /***/
    function srcAppComponentsItemCommentItemCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemCommentComponent", function () {
        return ItemCommentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ItemCommentComponent = /*#__PURE__*/function () {
        function ItemCommentComponent() {
          _classCallCheck(this, ItemCommentComponent);

          this.comment = {};
          this.status = {};
          this.onView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(ItemCommentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "viewComment",
          value: function viewComment(comment) {
            // event when click view/reply button
            this.onView.emit(comment);
          }
        }]);

        return ItemCommentComponent;
      }();

      ItemCommentComponent.ctorParameters = function () {
        return [];
      };

      ItemCommentComponent.propDecorators = {
        comment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        status: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hideView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      ItemCommentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-comment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./item-comment.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-comment/item-comment.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./item-comment.component.scss */
        "./src/app/components/item-comment/item-comment.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ItemCommentComponent);
      /***/
    },

    /***/
    "./src/app/components/list-posts/list-posts.component.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/components/list-posts/list-posts.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsListPostsListPostsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: block;\n}\n:host.horizontal-scroll .column .content {\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\n:host.horizontal-scroll .column .content .item {\n  flex: 0 0 48%;\n}\n:host.horizontal-scroll .column .content .item:last-child {\n  padding-right: var(--ion-padding);\n}\n:host .item {\n  --color: var(--ion-color-step-950);\n}\n:host .item ion-thumbnail ion-icon,\n:host .item .thumbnail ion-icon {\n  font-size: 48px;\n  color: var(--ion-color-light);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -24px;\n  margin-left: -24px;\n}\n:host .list .item,\n:host .reverse .item {\n  --padding-start: 0;\n}\n:host .list .item ion-thumbnail,\n:host .reverse .item ion-thumbnail {\n  --size: 80px;\n  min-width: var(--size);\n  min-height: var(--size);\n  margin: 10px !important;\n  overflow: hidden;\n  border-radius: 4px;\n}\n:host .list .item ion-label,\n:host .reverse .item ion-label {\n  margin-right: 2px;\n  margin-left: 2px;\n}\n:host .reverse .item {\n  --padding-start: 8px;\n  --inner-padding-end: 0;\n}\n:host .card .item {\n  margin: var(--ion-margin);\n}\n:host .column .content {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 4px;\n}\n:host .column .item {\n  display: block;\n  width: 50%;\n  padding: 0 4px;\n  box-shadow: none;\n  top: 8px;\n}\n:host .column .item .thumbnail {\n  padding-left: 100%;\n  padding-top: 50%;\n}\n:host .column .item .thumbnail img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n}\n:host .column .item .card-content-ios .ion-text-wrap {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-height: 60px;\n  line-height: 20px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LXBvc3RzL2xpc3QtcG9zdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvc2hhcmVkX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtBQURGO0FBSU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBRlI7QUFHUTtFQUNFLGFBQUE7QUFEVjtBQUVVO0VBQ0UsaUNBQUE7QUFBWjtBQU1FO0VBQ0Usa0NBQUE7QUFKSjtBQU9NOztFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSlI7QUFVSTs7RUFDRSxrQkFBQTtBQVBOO0FBUU07O0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFMUjtBQU9NOztFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQVNJO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQVBOO0FBV0k7RUFDRSx5QkFBQTtBQVROO0FBYUk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFYTjtBQWFJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0FBWE47QUFZTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFWUjtBQVdRO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FBVFY7QUFZTTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQ3hGOEI7RUR5RjlCLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkM1RnVCO0FEa0YvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1wb3N0cy9saXN0LXBvc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL3NoYXJlZF92YXJpYWJsZXMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAmLmhvcml6b250YWwtc2Nyb2xsIHtcbiAgICAuY29sdW1uIHtcbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICBmbGV4OiAwIDAgNDglO1xuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5pdGVtIHtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC05NTApO1xuICAgIGlvbi10aHVtYm5haWwsXG4gICAgLnRodW1ibmFpbCB7XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTI0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmxpc3QsXG4gIC5yZXZlcnNlIHtcbiAgICAuaXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgLS1zaXplOiA4MHB4O1xuICAgICAgICBtaW4td2lkdGg6IHZhcigtLXNpemUpO1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1zaXplKTtcbiAgICAgICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIH1cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAucmV2ZXJzZSB7XG4gICAgLml0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAjeyRpdGVtLWlvcy1wYWRkaW5nLWVuZCAvIDJ9O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICB9XG4gIH1cbiAgLmNhcmQge1xuICAgIC5pdGVtIHtcbiAgICAgIG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbik7XG4gICAgfVxuICB9XG4gIC5jb2x1bW4ge1xuICAgIC5jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBwYWRkaW5nOiAwICRjb250ZW50LXBhZGRpbmcvMjtcbiAgICB9XG4gICAgLml0ZW0ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZzogMCAkY29udGVudC1wYWRkaW5nLzI7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgdG9wOjhweDtcbiAgICAgIC50aHVtYm5haWwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1MCU7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5jYXJkLWNvbnRlbnQtaW9zIC5pb24tdGV4dC13cmFwIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIG1heC1oZWlnaHQ6ICRsaXN0LXBvc3RzLWNvbHVtbi10aXRsZS1saW5lICogJGxpc3QtcG9zdHMtY29sdW1uLXRpdGxlLWxpbmUtaGVpZ2h0O1xuICAgICAgICBsaW5lLWhlaWdodDogJGxpc3QtcG9zdHMtY29sdW1uLXRpdGxlLWxpbmUtaGVpZ2h0O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGlzdC1wb3N0cy1jb2x1bW4tdGl0bGUtbGluZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRvZmZsaW5lLW1vZGUtaGVpZ2h0OiAzMHB4O1xuJG9mZmxpbmUtbW9kZS1mb250LXNpemU6IDEycHg7XG4kbGlzdC1wb3N0cy1jb2x1bW4tdGl0bGUtbGluZTogMztcbiRsaXN0LXBvc3RzLWNvbHVtbi10aXRsZS1saW5lLWhlaWdodDogMjBweDtcbiRjb250ZW50LXBhZGRpbmc6IDhweCAhZGVmYXVsdDtcbiRoYWlybGluZXMtd2lkdGg6IDFweCAhZGVmYXVsdDtcbiRsaXN0LWlvcy1ib3JkZXItY29sb3I6ICNlZWUgIWRlZmF1bHQ7XG4kaXRlbS1pb3MtcGFkZGluZy1lbmQ6IDE2cHggIWRlZmF1bHQ7XG4kY2hlY2tib3gtaW9zLWl0ZW0tc3RhcnQtbWFyZ2luLXN0YXJ0OiAycHggIWRlZmF1bHQ7XG4kY2hlY2tib3gtaW9zLWl0ZW0tc3RhcnQtbWFyZ2luLWVuZDogMTZweCAhZGVmYXVsdDtcbiRnb3RvLXRvcC1zaXplOiAzMHB4O1xuJGdvdG8tdG9wLWJvdHRvbTogMjBweDsiXX0= */";
      /***/
    },

    /***/
    "./src/app/components/list-posts/list-posts.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/components/list-posts/list-posts.component.ts ***!
      \***************************************************************/

    /*! exports provided: ListPostsComponent */

    /***/
    function srcAppComponentsListPostsListPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPostsComponent", function () {
        return ListPostsComponent;
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


      var _services_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/core.service */
      "./src/app/services/core.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _const_general__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../const/general */
      "./src/app/const/general.ts");

      var ListPostsComponent = /*#__PURE__*/function () {
        function ListPostsComponent(storage, core, navCtrl) {
          _classCallCheck(this, ListPostsComponent);

          this.storage = storage;
          this.core = core;
          this.navCtrl = navCtrl;
          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.square = {
            'list': true,
            'reverse': true
          };
          this.icons = {
            'image': 'image',
            'play': 'play-circle'
          };
        }

        _createClass(ListPostsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            if (!this.templates) {
              if (this.core.getConfig('templates')) this.setTemplates(this.core.getConfig('templates'));else this.storage.get('templates').then(function (templates) {
                return _this15.setTemplates(templates);
              });
            }
          }
        }, {
          key: "setTemplates",
          value: function setTemplates(templates) {
            if (templates) this.templates = templates;else this.templates = _const_general__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_LIST_POSTS_TEMPLATE"];
          }
        }, {
          key: "openPost",
          value: function openPost(post) {
            if (this.onClick.observers.length < 1) {
              this.navCtrl.navigateForward(['/detail', post['id']]);
            } // event when click to posts


            this.onClick.emit(post);
          }
        }]);

        return ListPostsComponent;
      }();

      ListPostsComponent.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }, {
          type: _services_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      ListPostsComponent.propDecorators = {
        posts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      ListPostsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-posts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./list-posts.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-posts/list-posts.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./list-posts.component.scss */
        "./src/app/components/list-posts/list-posts.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _services_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], ListPostsComponent);
      /***/
    },

    /***/
    "./src/app/components/loading/loading.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/components/loading/loading.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLoadingLoadingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/loading/loading.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/loading/loading.component.ts ***!
      \*********************************************************/

    /*! exports provided: LoadingComponent */

    /***/
    function srcAppComponentsLoadingLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
        return LoadingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LoadingComponent = /*#__PURE__*/function () {
        function LoadingComponent() {
          _classCallCheck(this, LoadingComponent);
        }

        _createClass(LoadingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoadingComponent;
      }();

      LoadingComponent.ctorParameters = function () {
        return [];
      };

      LoadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./loading.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/loading.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./loading.component.scss */
        "./src/app/components/loading/loading.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LoadingComponent);
      /***/
    },

    /***/
    "./src/app/components/menus.module.ts":
    /*!********************************************!*\
      !*** ./src/app/components/menus.module.ts ***!
      \********************************************/

    /*! exports provided: MenusModule */

    /***/
    function srcAppComponentsMenusModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenusModule", function () {
        return MenusModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _menus_menus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./menus/menus.component */
      "./src/app/components/menus/menus.component.ts");
      /* harmony import */


      var _components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var MenusModule = function MenusModule() {
        _classCallCheck(this, MenusModule);
      };

      MenusModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_menus_menus_component__WEBPACK_IMPORTED_MODULE_5__["MenusComponent"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]],
        exports: [_menus_menus_component__WEBPACK_IMPORTED_MODULE_5__["MenusComponent"]]
      })], MenusModule);
      /***/
    },

    /***/
    "./src/app/components/menus/menus.component.scss":
    /*!*******************************************************!*\
      !*** ./src/app/components/menus/menus.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsMenusMenusComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .root-menu {\n  --background: var(--ion-color-primary);\n  --background: -moz-linear-gradient(top, var(--ion-color-primary) 0%, #1b3288 100%);\n  --background: -webkit-linear-gradient(top, var(--ion-color-primary) 0%, #1b3288 100%);\n  --background: linear-gradient(to bottom, var(--ion-color-primary) 0%, #1b3288 100%);\n}\n.detail-dark :host .root-menu {\n  --background: var(--ion-color-trueblack);\n  --background: -moz-linear-gradient(top, var(--ion-color-trueblack-tint) 0%, var(--ion-color-trueblack) 100%);\n  --background: -webkit-linear-gradient(top, var(--ion-color-trueblack-tint) 0%, var(--ion-color-trueblack) 100%);\n  --background: linear-gradient(to bottom, var(--ion-color-trueblack-tint) 0%, var(--ion-color-trueblack) 100%);\n}\n.detail-dark :host .root-menu ion-header img {\n  filter: brightness(0.5);\n}\n:host .root-menu app-refresher {\n  position: relative;\n  display: block;\n  margin-top: var(--ion-margin);\n}\n:host .root-menu ion-list {\n  background: transparent;\n}\n:host .root-menu ion-list ion-item {\n  --min-height: 50px;\n  --background: transparent;\n  --color: var(--ion-color-truewhite);\n}\n.telepules {\n  font-weight: bold;\n}\n.telepules-voice {\n  font-weight: bold;\n}\n.hr-line {\n  color: white;\n  height: 1px;\n}\n.m-ma-vedve {\n  color: white;\n  padding: 16px;\n}\n.text-cont {\n  background: rgba(0, 0, 0, 0.4);\n  width: 100%;\n  padding: 20px;\n}\n.container-test {\n  position: relative;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n}\n.text-test {\n  left: 0;\n  position: absolute;\n  text-align: center;\n  top: 70px;\n  width: 100%;\n  font-size: 20x;\n  padding: 5px;\n}\n.text-kereso {\n  left: 10px;\n  position: absolute;\n  text-align: left;\n  top: 150px;\n  width: 93%;\n  font-size: 20x;\n  border: 1px solid white;\n  border-radius: 20px;\n  padding: 0px;\n}\n.no-city-found {\n  color: red;\n  padding: 10px;\n  font-weight: bold;\n  text-align: center;\n}\n.results-list {\n  max-height: 170px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 120;\n}\n.item-list-res {\n  font-size: 15px;\n}\n.Spar {\n  color: white;\n  padding: 8px;\n  font-size: 12px;\n}\n.Spar-img {\n  padding: 8px;\n}\n.myCard {\n  position: relative;\n}\n.myOverlay {\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  z-index: 99;\n  bottom: 0px;\n  opacity: 0.5;\n  background: #000;\n  color: #fff;\n}\nion-searchbar {\n  --placeholder-color: white;\n  --placeholder-opacity: 0.7;\n  --icon-color: white;\n  color: white;\n}\n#ctc {\n  left: 10px;\n  position: relative;\n  text-align: center;\n  color: white;\n  font-size: 18px;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51cy9tZW51cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNDQUFBO0VBQ0Esa0ZBQUE7RUFDQSxxRkFBQTtFQUNBLG1GQUFBO0FBQUo7QUFDSTtFQUNFLHdDQUFBO0VBQ0EsNEdBQUE7RUFDQSwrR0FBQTtFQUNBLDZHQUFBO0FBQ047QUFHUTtFQUNFLHVCQUFBO0FBRFY7QUFLSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBSE47QUFLSTtFQUNFLHVCQUFBO0FBSE47QUFJTTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtBQUZSO0FBT0E7RUFFRSxpQkFBQTtBQUxGO0FBUUE7RUFDRSxpQkFBQTtBQUxGO0FBUUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUxGO0FBUUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUxGO0FBU0E7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBTkY7QUFTQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTkY7QUFTQTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQU5GO0FBVUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBUEY7QUFZQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVRGO0FBYUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBVko7QUFjQTtFQUNFLGVBQUE7QUFYRjtBQWNBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBWEY7QUFhQTtFQUVFLFlBQUE7QUFYRjtBQWNBO0VBQ0Usa0JBQUE7QUFYRjtBQWVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVpKO0FBaUJBO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWRGO0FBbUJBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBaEJGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51cy9tZW51cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLnJvb3QtbWVudSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAwJSwgIzFiMzI4OCAxMDAlKTtcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDAlLCAjMWIzMjg4IDEwMCUpO1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDAlLCAjMWIzMjg4IDEwMCUpO1xuICAgIC5kZXRhaWwtZGFyayAmIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRydWVibGFjayk7XG4gICAgICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgdmFyKC0taW9uLWNvbG9yLXRydWVibGFjay10aW50KSAwJSwgdmFyKC0taW9uLWNvbG9yLXRydWVibGFjaykgMTAwJSk7XG4gICAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgdmFyKC0taW9uLWNvbG9yLXRydWVibGFjay10aW50KSAwJSwgdmFyKC0taW9uLWNvbG9yLXRydWVibGFjaykgMTAwJSk7XG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWlvbi1jb2xvci10cnVlYmxhY2stdGludCkgMCUsIHZhcigtLWlvbi1jb2xvci10cnVlYmxhY2spIDEwMCUpO1xuICAgIH1cbiAgICBpb24taGVhZGVyIHtcbiAgICAgIGltZyB7XG4gICAgICAgIC5kZXRhaWwtZGFyayAmIHtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBhcHAtcmVmcmVzaGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbik7XG4gICAgfVxuICAgIGlvbi1saXN0IHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci10cnVld2hpdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLnRlbGVwdWxlc3tcbiAgLy8gY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZWxlcHVsZXMtdm9pY2V7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaHItbGluZXtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDFweDtcbn1cblxuLm0tbWEtdmVkdmV7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuXG4udGV4dC1jb250IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmNvbnRhaW5lci10ZXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0gXG5cbi50ZXh0LXRlc3R7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgdG9wOiA3MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyMHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLy8ga2VyZXNvIGJveFxuLnRleHQta2VyZXNve1xuICBsZWZ0OiAxMHB4O1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjpsZWZ0O1xuICB0b3A6IDE1MHB4O1xuICB3aWR0aDogOTMlO1xuICBmb250LXNpemU6IDIweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgXG4gIFxufVxuXG4ubm8tY2l0eS1mb3VuZHtcbiAgY29sb3I6IHJlZDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4vLyByZXN1bHRzIGxpc3Rcbi5yZXN1bHRzLWxpc3R7XG4gICAgbWF4LWhlaWdodDogMTcwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgei1pbmRleDogMTIwO1xuICAgIFxufVxuXG4uaXRlbS1saXN0LXJlc3tcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uU3BhcntcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5TcGFyLWltZ3tcbiAgXG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLm15Q2FyZHtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG5cbn1cblxuLm15T3ZlcmxheXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIGNvbG9yOiAjZmZmO1xuXG59XG5cbi8vIHNlYXJjaCBib3ggY3NzIG9uIG1lbnVcbmlvbi1zZWFyY2hiYXJ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHdoaXRlO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNztcbiAgLS1pY29uLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5cbi8vIGxpc3Qgdm9pc2UgcmVzdWx0IGNzc1xuI2N0Y3tcbiAgbGVmdDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOztcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/menus/menus.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/components/menus/menus.component.ts ***!
      \*****************************************************/

    /*! exports provided: MenusComponent */

    /***/
    function srcAppComponentsMenusMenusComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenusComponent", function () {
        return MenusComponent;
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


      var src_app_services_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/core.service */
      "./src/app/services/core.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/toast/ngx */
      "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/events.service */
      "./src/app/services/events.service.ts");
      /* harmony import */


      var _const_general__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../const/general */
      "./src/app/const/general.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/speech-recognition/ngx */
      "./node_modules/@ionic-native/speech-recognition/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // open jobs cat 


      var MenusComponent = /*#__PURE__*/function () {
        function MenusComponent(translate, core, platform, SocialSharing, alertCtrl, Toast, storage, pickerCtrl, http, events, speech, loadingController, toastController, router) {
          var _this16 = this;

          _classCallCheck(this, MenusComponent);

          this.translate = translate;
          this.core = core;
          this.platform = platform;
          this.SocialSharing = SocialSharing;
          this.alertCtrl = alertCtrl;
          this.Toast = Toast;
          this.storage = storage;
          this.pickerCtrl = pickerCtrl;
          this.http = http;
          this.speech = speech;
          this.loadingController = loadingController;
          this.toastController = toastController;
          this.router = router;
          this.showSearchBar = false;
          this.items = [];
          this.itemstemp = [];
          this.str = "";
          this.itemss = [];
          this.asds = "";
          this.speakingStart = false; // *************************
          // auto search
          // *************************

          this.isItemAvailable = false;
          window.menus = this; // get translate

          translate.get('menu').subscribe(function (trans) {
            return _this16.trans = trans;
          }); // call get pages function

          this.getPages(); // get templates from storage

          storage.get('templates').then(function (templates) {
            if (!templates) templates = _const_general__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_LIST_POSTS_TEMPLATE"];
            _this16.templates = templates;
          });
          events.watchOffline().subscribe(function () {
            if (!_this16.pages || _this16.pages.length < 1) {
              _this16.getPages();
            }
          });
          this.getLanguage(); // Get the list of supported languages
          // this.speech.getSupportedLanguages()
          // .then(
          //   (languages: Array<string>) => console.log(languages),
          //   (error) => console.log(error)
          // )
        } // *********************************************************
        // Voice search - No City found
        // *********************************************************


        _createClass(MenusComponent, [{
          key: "ifNoResFound",
          value: function ifNoResFound() {
            var _this17 = this;

            this.alertCtrl.create({
              message: "No city found.",
              buttons: [{
                text: "Try again",
                handler: function handler() {
                  _this17.speech.hasPermission().then(function (hasPermission) {
                    if (hasPermission) {
                      _this17.openSpeech();
                    } else {
                      _this17.speech.requestPermission().then(function () {
                        _this17.openSpeech();
                      });
                    }
                  }, function (err) {
                    _this17.speech.requestPermission().then(function () {
                      _this17.openSpeech();
                    });
                  });
                }
              }, {
                text: "Cancel"
              }]
            }).then(function (element) {
              element.present();
            });
          } // *********************************************************
          // Voice search from here - Ask User permission to acces Mic
          // *********************************************************

        }, {
          key: "askPermission",
          value: function askPermission() {
            var _this18 = this;

            if (this.speakingStart == false) {
              this.alertCtrl.create({
                message: "<ion-icon name='mic-outline' size='large'></ion-icon> Click Ok and say a City you looking for.",
                buttons: [{
                  text: "OK",
                  handler: function handler() {
                    _this18.speech.hasPermission().then(function (hasPermission) {
                      if (hasPermission) {
                        _this18.openSpeech();
                      } else {
                        _this18.speech.requestPermission().then(function () {
                          _this18.openSpeech();
                        });
                      }
                    }, function (err) {
                      _this18.speech.requestPermission().then(function () {
                        _this18.openSpeech();
                      });
                    });
                  }
                }, {
                  text: "Cancel"
                }]
              }).then(function (element) {
                element.present();
              });
            }
          } // ***********************************
          // Loading before show results - voice
          // ***********************************

        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Loading matches… ',
                        duration: 1000
                      });

                    case 2:
                      loading = _context4.sent;
                      _context4.next = 5;
                      return loading.present();

                    case 5:
                      _context4.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context4.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      console.log('Loading dismissed!');

                    case 11:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // ***********************************
          // Show toast when user need to talk
          // ************************************

        }, {
          key: "presentToast",
          value: function presentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var toast;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toastController.create({
                        message: 'Talk now... <ion-icon name="mic-outline"></ion-icon>',
                        duration: 2000,
                        color: 'danger' // position: 'middle'

                      });

                    case 2:
                      toast = _context5.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // *************************
          // Call speech search 
          // **************************

        }, {
          key: "openSpeech",
          value: function openSpeech() {
            var _this19 = this;

            this.speakingStart = true; // call talk now toast

            this.presentToast();
            var options = {
              showPartial: true,
              matches: 1
            };
            var ref = this;
            var sub = this.speech.startListening(options).subscribe(function (data) {
              if (data.length > 0) {
                document.getElementById("ctc").innerHTML = "";

                _this19.speech.stopListening();

                sub.unsubscribe();
                _this19.speakingStart = false;
                var node = document.createElement("p");
                var found = false;

                for (var i = 0; i < _this19.itemstemp.length; i++) {
                  if (data[0].trim() == _this19.itemstemp[i].value.trim()) {
                    // loading
                    _this19.presentLoading();

                    found = true; // Show results after a 1 sec

                    setTimeout(function () {
                      var textnode = document.createTextNode(data[0].trim() + ">>"); // Create a text node

                      node.appendChild(textnode);

                      node.onclick = function () {
                        ref.tempCalll(data[0].trim());
                      }; // Append the text to <div>


                      document.getElementById("ctc").appendChild(node);
                    }, 1000);
                  }
                }

                if (found == false) {
                  //alert("No City found!");
                  // Call no city found method
                  _this19.ifNoResFound();
                } // Create a <li> node

              } else {
                alert("no records found!");
                var para = document.createElement("P");
                var t = document.createTextNode("no records found!");
                para.appendChild(t);
                document.getElementById("ctc").appendChild(para);
              }
            }, function (err) {
              //alert(JSON.stringify(err));
              //this.speech.stopListening();
              //this.openSpeech()
              _this19.ifNoResFound();
            });
          } // Show resukt of voice search

        }, {
          key: "tempCalll",
          value: function tempCalll(dat) {
            //alert(dat);
            for (var i = 0; i < this.itemstemp.length; i++) {
              if (dat == this.itemstemp[i].value) {
                //alert("matched");
                this.tempCall(this.itemstemp[i]);
                return;
              }
            }
          }
        }, {
          key: "getItemsVoice",
          value: function getItemsVoice(str) {
            // Reset items back to all of the items     
            //console.log(this.getCities());
            // set val to the value of the searchbar
            //this.isItemAvailable = true;
            var val = str;
            console.log(val);
            this.items = this.itemstemp; //  // if the value is an empty string don't filter the items

            if (val && val.trim() !== '') {
              this.isItemAvailable = true;
              this.items = this.items.filter(function (item) {
                return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
              });

              if (this.items.length > 0) {
                this.str = "";
              } else {
                this.str = "No City found";
              }
            } else {
              this.isItemAvailable = false;
            }
          } // *************************
          // Show search input
          // *************************

        }, {
          key: "clickedSearchIcon",
          value: function clickedSearchIcon(event) {
            this.showSearchBar = !this.showSearchBar;
          }
        }, {
          key: "readJsonData",
          value: function readJsonData() {
            var _this20 = this;

            //this.items = ["Test", "Test1", "Test2"].subscribe(data => {
            this.http.get("assets/i18n/languages.json").subscribe(function (data) {
              _this20.items = data.languages;
              _this20.itemstemp = _this20.items; //this.isItemAvailable = true;
            });
          } // *************************
          // Get autocomplete items
          // *************************∏

        }, {
          key: "getItems",
          value: function getItems(ev) {
            // Reset items back to all of the items     
            //console.log(this.getCities());
            // set val to the value of the searchbar
            //this.isItemAvailable = true;
            document.getElementById("ctc").innerHTML = "";
            var val = ev.target.value;
            console.log(val);
            this.items = this.itemstemp; //  // if the value is an empty string don't filter the items

            if (val && val.trim() !== '') {
              this.isItemAvailable = true;
              this.items = this.items.filter(function (item) {
                return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
              });

              if (this.items.length > 0) {
                this.str = "";
              } else {
                this.str = "No City found";
              }
            } else {
              this.isItemAvailable = false;
            }
          } // Display City In the Header
          // ************************

        }, {
          key: "getLanguage",
          value: function getLanguage() {
            var _this21 = this;

            var CityName = "";
            this.storage.get("language").then(function (language) {
              _this21.CityName = language; //console.log(language);

              var num = language;
              var stringForm = num.toString(); //console.log(stringForm);

              console.log(CityName);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            //this.loadData();
            this.readJsonData();
          }
        }, {
          key: "getPages",
          value: function getPages(refresher) {
            var _this22 = this;

            // function get list pages
            this.core.request('m_pages').subscribe(function (pages) {
              _this22.pages = pages;
              if (refresher) refresher.target.complete();
            }, function (err) {
              if (refresher) refresher.target.complete();
            });
          }
        }, {
          key: "settings",
          value: function settings() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this23 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertCtrl.create({
                        header: this.trans['settings']['title'],
                        cssClass: 'alert-buttons-no-border',
                        buttons: [// {
                        //   text: this.trans['languages']['title'],
                        //   handler: () => { this.languages(); }
                        // },
                        {
                          text: this.trans['templates']['title'],
                          handler: function handler() {
                            _this23.updateTemplates();
                          }
                        }, {
                          text: this.trans['cache']['title'],
                          handler: function handler() {
                            _this23.clearCache();
                          }
                        }, {
                          text: this.trans['settings']['cancel'],
                          cssClass: 'place'
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } // get languages

        }, {
          key: "languages",
          value: function languages() {
            var _this24 = this;

            var language = this.translate.getDefaultLang();
            this.translate.getTranslation('languages').subscribe(function (langTrans) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this24, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var _this25 = this;

                var columns, defaultIndex, picker;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        if (!(langTrans['languages'] && langTrans['languages'].length > 0)) {
                          _context7.next = 9;
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
                        _context7.next = 7;
                        return this.pickerCtrl.create({
                          columns: [columns],
                          buttons: [{
                            text: this.trans['languages']['cancel'],
                            role: 'cancel'
                          }, {
                            text: this.trans['languages']['save'],
                            handler: function handler(data) {
                              if (data['language']['value'] == language) return;

                              _this25.storage.set('language', data['language']['value']).then(function () {
                                _this25.storage.remove('last_config').then(function () {
                                  _this25.refresh();
                                });
                              });
                            }
                          }]
                        });

                      case 7:
                        picker = _context7.sent;
                        // show picker
                        picker.present();

                      case 9:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));
            });
          } // *********************************
          // Call city set after click on item
          // *********************************

        }, {
          key: "tempCall",
          value: function tempCall(obj) {
            var _this26 = this;

            //alert(obj);
            //alert(JSON.stringify(obj));
            var data = {};
            data['language'] = obj.value; //alert(obj.value);

            this.storage.set('language', data['language']).then(function () {
              _this26.storage.remove('last_config').then(function () {
                // alert("refresh call 1");
                _this26.refresh();
              }, function (err) {
                // alert("refresh call 2");
                _this26.refresh();
              });
            }, function (err) {
              //alert("refresh call 3");
              _this26.refresh();
            });
          } // Update template

        }, {
          key: "updateTemplates",
          value: function updateTemplates() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this27 = this;

              var buttons, alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (Array.isArray(this.trans['templates']['options'])) {
                        _context8.next = 2;
                        break;
                      }

                      return _context8.abrupt("return");

                    case 2:
                      buttons = []; // when click templates

                      this.trans['templates']['options'].forEach(function (option) {
                        var button = {
                          text: option['text'],
                          cssClass: option['_value'] == _this27.templates ? 'danger' : '',
                          handler: function handler() {
                            if (option['_value'] == _this27.templates) return;

                            _this27.storage.set('templates', option['_value']).then(function () {
                              _this27.refresh();
                            });
                          }
                        };
                        buttons.push(button);
                      });
                      buttons.push({
                        text: this.trans['templates']['cancel'],
                        cssClass: 'place'
                      });
                      _context8.next = 7;
                      return this.alertCtrl.create({
                        header: this.trans['templates']['title'],
                        message: this.trans['templates']['message'],
                        cssClass: 'alert-buttons-no-border',
                        buttons: buttons
                      });

                    case 7:
                      alert = _context8.sent;
                      alert.present();

                    case 9:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "clearCache",
          value: function clearCache() {
            var _this28 = this;

            // when click clear cache
            this.platform.ready().then(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this28, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                var _this29 = this;

                var alert;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        _context9.next = 2;
                        return this.alertCtrl.create({
                          header: this.trans['cache']['title'],
                          message: this.trans['cache']['message'],
                          buttons: [{
                            text: this.trans['cache']['yes'],
                            handler: function handler() {
                              if (window && window['CacheClear']) window['CacheClear'](function (status) {
                                _this29.Toast.showShortCenter(_this29.trans['cache']['success']).subscribe(function () {}, function () {});
                              }, function (err) {
                                _this29.Toast.showShortCenter(_this29.trans['cache']['error']).subscribe(function () {}, function () {});
                              });
                            }
                          }, {
                            text: this.trans['cache']['no']
                          }]
                        });

                      case 2:
                        alert = _context9.sent;
                        alert.present();

                      case 4:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, this);
              }));
            });
          }
        }, {
          key: "rate",
          value: function rate() {
            // function open application on store
            this.core.openStore();
          }
        }, {
          key: "share",
          value: function share() {
            // function share application
            var share = this.platform.is('ios') ? this.core.getConfig('share_ios') : this.core.getConfig('share_android');
            this.SocialSharing.share(share, null, null, null);
          }
        }, {
          key: "refresh",
          value: function refresh(alert) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _alert;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (!alert) {
                        _context10.next = 7;
                        break;
                      }

                      _context10.next = 3;
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
                      _alert = _context10.sent;

                      _alert.present();

                      _context10.next = 8;
                      break;

                    case 7:
                      location.href = '/';

                    case 8:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }]);

        return MenusComponent;
      }();

      MenusComponent.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: src_app_services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__["Toast"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PickerController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"]
        }, {
          type: _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_11__["SpeechRecognition"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
        }];
      };

      MenusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menus',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./menus.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menus/menus.component.html"))["default"],
        providers: [_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./menus.component.scss */
        "./src/app/components/menus/menus.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], src_app_services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__["Toast"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PickerController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], src_app_services_events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"], _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_11__["SpeechRecognition"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]])], MenusComponent);
      /***/
    },

    /***/
    "./src/app/components/no-data/no-data.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/components/no-data/no-data.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsNoDataNoDataComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  text-align: center;\n}\n:host .no-data-content {\n  width: 100%;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n:host.is-inner {\n  position: unset;\n  height: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uby1kYXRhL25vLWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm8tZGF0YS9uby1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAubm8tZGF0YS1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIH1cbiAgJi5pcy1pbm5lciB7XG4gICAgcG9zaXRpb246IHVuc2V0O1xuICAgIGhlaWdodDogdW5zZXQ7XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/no-data/no-data.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/no-data/no-data.component.ts ***!
      \*********************************************************/

    /*! exports provided: NoDataComponent */

    /***/
    function srcAppComponentsNoDataNoDataComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoDataComponent", function () {
        return NoDataComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NoDataComponent = /*#__PURE__*/function () {
        function NoDataComponent() {
          _classCallCheck(this, NoDataComponent);
        }

        _createClass(NoDataComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NoDataComponent;
      }();

      NoDataComponent.ctorParameters = function () {
        return [];
      };

      NoDataComponent.propDecorators = {
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inner: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        noImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        noText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      NoDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-no-data',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./no-data.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/no-data/no-data.component.html"))["default"],
        host: {
          '[class.is-inner]': 'inner'
        },
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./no-data.component.scss */
        "./src/app/components/no-data/no-data.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NoDataComponent);
      /***/
    },

    /***/
    "./src/app/components/refresher/refresher.component.scss":
    /*!***************************************************************!*\
      !*** ./src/app/components/refresher/refresher.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsRefresherRefresherComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  position: unset;\n}\n:host[color=truewhite] {\n  --color: var(--ion-color-truewhite);\n  --ion-text-color: var(--ion-color-truewhite);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWZyZXNoZXIvcmVmcmVzaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGO0FBQUU7RUFDRSxtQ0FBQTtFQUNBLDRDQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZnJlc2hlci9yZWZyZXNoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiB1bnNldDtcbiAgJltjb2xvcj1cInRydWV3aGl0ZVwiXSB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRydWV3aGl0ZSk7XG4gICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRydWV3aGl0ZSk7XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/refresher/refresher.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/components/refresher/refresher.component.ts ***!
      \*************************************************************/

    /*! exports provided: RefresherComponent */

    /***/
    function srcAppComponentsRefresherRefresherComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RefresherComponent", function () {
        return RefresherComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RefresherComponent = /*#__PURE__*/function () {
        function RefresherComponent() {
          _classCallCheck(this, RefresherComponent);
        }

        _createClass(RefresherComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.slot) {
              console.error('Make sure you use: <app-refresher slot="fixed">');
              return;
            }
          }
        }]);

        return RefresherComponent;
      }();

      RefresherComponent.ctorParameters = function () {
        return [];
      };

      RefresherComponent.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        slot: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      RefresherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-refresher',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./refresher.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/refresher/refresher.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./refresher.component.scss */
        "./src/app/components/refresher/refresher.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], RefresherComponent);
      /***/
    },

    /***/
    "./src/app/const/development.ts":
    /*!**************************************!*\
      !*** ./src/app/const/development.ts ***!
      \**************************************/

    /*! exports provided: CONTACT_FORM_INVALID_CLASS, CACHE_PREFIX, BOOKMARK_PREFIX */

    /***/
    function srcAppConstDevelopmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONTACT_FORM_INVALID_CLASS", function () {
        return CONTACT_FORM_INVALID_CLASS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CACHE_PREFIX", function () {
        return CACHE_PREFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BOOKMARK_PREFIX", function () {
        return BOOKMARK_PREFIX;
      });

      var CONTACT_FORM_INVALID_CLASS = 'wpcf7-not-valid-tip';
      var CACHE_PREFIX = '_cache_';
      var BOOKMARK_PREFIX = 'bookmark_';
      /***/
    },

    /***/
    "./src/app/const/general.ts":
    /*!**********************************!*\
      !*** ./src/app/const/general.ts ***!
      \**********************************/

    /*! exports provided: DEFAULT_LIST_POSTS_TEMPLATE, BACK_BUTTON_EXIT_TIMEOUT, THEME_LIGHT, THEME_DARK */

    /***/
    function srcAppConstGeneralTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_LIST_POSTS_TEMPLATE", function () {
        return DEFAULT_LIST_POSTS_TEMPLATE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BACK_BUTTON_EXIT_TIMEOUT", function () {
        return BACK_BUTTON_EXIT_TIMEOUT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "THEME_LIGHT", function () {
        return THEME_LIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "THEME_DARK", function () {
        return THEME_DARK;
      });

      var DEFAULT_LIST_POSTS_TEMPLATE = 'list';
      var BACK_BUTTON_EXIT_TIMEOUT = 1000;
      var THEME_LIGHT = 'detail-light';
      var THEME_DARK = 'detail-dark';
      /***/
    },

    /***/
    "./src/app/pipes/pipes.module.ts":
    /*!***************************************!*\
      !*** ./src/app/pipes/pipes.module.ts ***!
      \***************************************/

    /*! exports provided: PipesModule */

    /***/
    function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
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


      var _time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./time.pipe */
      "./src/app/pipes/time.pipe.ts");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_time_pipe__WEBPACK_IMPORTED_MODULE_2__["TimePipe"]],
        imports: [],
        exports: [_time_pipe__WEBPACK_IMPORTED_MODULE_2__["TimePipe"]]
      })], PipesModule);
      /***/
    },

    /***/
    "./src/app/pipes/time.pipe.ts":
    /*!************************************!*\
      !*** ./src/app/pipes/time.pipe.ts ***!
      \************************************/

    /*! exports provided: TimePipe */

    /***/
    function srcAppPipesTimePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimePipe", function () {
        return TimePipe;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var TimePipe = /*#__PURE__*/function () {
        function TimePipe(translate, datePipe) {
          var _this30 = this;

          _classCallCheck(this, TimePipe);

          this.datePipe = datePipe; // get translate

          translate.get('general.time').subscribe(function (trans) {
            return _this30.trans = trans;
          });
        }

        _createClass(TimePipe, [{
          key: "transform",
          value: function transform(value) {
            // return time ago or date_format set in language.json
            var _value;

            var ago = (new Date().getTime() - new Date(value).getTime()) / 1000;
            if (ago > 2592000) _value = this.datePipe.transform(value, this.trans['_date_format']);else if (ago < 60 && this.trans['now']) {
              _value = this.trans['now'];
            } else if (ago < 3600 && this.trans['minute'] && this.trans['minutes']) {
              _value = Math.floor(ago / 60);
              if (_value < 2) _value += this.trans['minute'];else _value += this.trans['minutes'];
            } else if (ago < 86400 && this.trans['hour'] && this.trans['hours']) {
              _value = Math.floor(ago / 3600);
              if (_value < 2) _value += this.trans['hour'];else _value += this.trans['hours'];
            } else if (ago < 2592000 && this.trans['day'] && this.trans['days']) {
              _value = Math.floor(ago / 86400);
              if (_value < 2) _value += this.trans['day'];else _value += this.trans['days'];
            }
            return _value;
          }
        }]);

        return TimePipe;
      }();

      TimePipe.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }];
      };

      TimePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'time'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])], TimePipe);
      /***/
    },

    /***/
    "./src/app/services/core.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/core.service.ts ***!
      \******************************************/

    /*! exports provided: CoreService */

    /***/
    function srcAppServicesCoreServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreService", function () {
        return CoreService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/toast/ngx */
      "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _crypto_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./crypto.service */
      "./src/app/services/crypto.service.ts");
      /* harmony import */


      var _const_development__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../const/development */
      "./src/app/const/development.ts");

      var CoreService = /*#__PURE__*/function () {
        function CoreService(http, Toast, translate, platform, storage, loadingCtrl, crypto) {
          _classCallCheck(this, CoreService);

          this.http = http;
          this.Toast = Toast;
          this.translate = translate;
          this.platform = platform;
          this.storage = storage;
          this.loadingCtrl = loadingCtrl;
          this.crypto = crypto;
          this.config = {};
          this.state = {};
        }

        _createClass(CoreService, [{
          key: "setTrans",
          value: function setTrans() {
            var _this31 = this;

            // get translate
            this.translate.get('general.error').subscribe(function (trans) {
              return _this31.trans = trans;
            });
          }
        }, {
          key: "setConfig",
          value: function setConfig(value) {
            this.hostname = this.getHostname(value['root_endpoint']);
            this.config = value;
          }
        }, {
          key: "getConfig",
          value: function getConfig(name) {
            return this.config ? this.config[name] : null;
          }
        }, {
          key: "patchConfig",
          value: function patchConfig(name, value) {
            if (this.config) this.config[name] = value;
          }
        }, {
          key: "getState",
          value: function getState(name) {
            return this.state ? this.state[name] : null;
          }
        }, {
          key: "setState",
          value: function setState(name, value) {
            if (this.state) this.state[name] = value;
          }
        }, {
          key: "request",
          value: function request(endpoint) {
            var _this32 = this;

            var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var authentication = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var root_url = arguments.length > 4 ? arguments[4] : undefined;

            if (!root_url) {
              root_url = this.getConfig('root_endpoint');
            }

            if (!this.getConfig('offline') && !root_url) return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observable) {
              observable.error(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]({
                error: {
                  code: 'root_endpoint_notfound',
                  message: 'Not found root endpoint config',
                  data: {
                    status: 400
                  }
                }
              }));
              observable.complete();
            }); // pre endpoint

            if (!root) endpoint = 'wp/v2/' + endpoint;
            if (root_url && !root_url.endsWith('/')) endpoint = '/' + endpoint; // create cache key with '_cache' prefix before add t params

            var cache = null;
            var isGet = !option['method'] || option['method'].toLowerCase() == 'get'; // pre request

            if (isGet) {
              cache = _const_development__WEBPACK_IMPORTED_MODULE_9__["CACHE_PREFIX"] + this.crypto.SHA1(encodeURIComponent(root_url + endpoint + '_' + JSON.stringify(option['params']))); // add param 't' for over cache function

              if (!option['params']) option['params'] = {
                t: this.getConfig('last_time')
              };else if (!option['params']['t']) option['params']['t'] = this.getConfig('last_time');
            }

            if (option['method'] && option['method'].toLowerCase() == 'post') {
              if (Object.prototype.toString.call(option['body']) === '[object Object]') option['body'] = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: option['body']
              });
            }

            if (authentication && this.config['user_token'] && (!option['headers'] || !option['headers']['Authorization'])) {
              if (!option['headers']) {
                var headers = {
                  'Authorization': 'Bearer ' + this.config['user_token']
                };
                option['headers'] = headers;
              } else {
                option['headers']['Authorization'] = 'Bearer ' + this.config['user_token'];
              }

              option['withCredentials'] = true;
            } // return request after prepare


            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observable) {
              // check offline mode
              if (cache && _this32.getConfig('offline')) {
                // get cache from Storage
                _this32.storage.get(cache).then(function (res) {
                  if (res != null) {
                    observable.next(res);
                    observable.complete();
                  } else {
                    observable.error(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]({
                      error: {
                        code: 'cache_not_found',
                        message: 'Cache not found in Offline mode',
                        data: {
                          status: 404
                        }
                      }
                    }));
                    observable.complete();
                  }
                });
              } else {
                // set timeout for request
                var timeout = setTimeout(function () {
                  if (ing) ing.unsubscribe();
                  observable.error(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]({
                    error: {
                      code: 'timeout',
                      message: 'Request timeout',
                      data: {
                        status: 408
                      }
                    }
                  }));
                  observable.complete();
                  if (_this32.trans) _this32.Toast.showShortCenter(_this32.trans['request_timeout']).subscribe(function () {}, function () {});
                }, _this32.getConfig('request_timeout') || 30000); // request http

                var ing = _this32.http['request'](option['method'] || 'get', root_url + endpoint, option).subscribe(function (response) {
                  // when success
                  clearTimeout(timeout);
                  if (cache) _this32.storage.set(cache, response);
                  observable.next(response);
                  observable.complete();
                }, function (err) {
                  // when error
                  if (err.error && err.error['code'] == 'maintenance' && _this32.trans) {
                    _this32.Toast.showShortCenter(_this32.trans['maintenance']).subscribe(function () {}, function () {});
                  }

                  clearTimeout(timeout);
                  observable.error(err);
                  observable.complete();
                });
              }
            });
          }
        }, {
          key: "getPosts",
          value: function getPosts() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            // get posts of website and return array
            return this.request('m_posts', {
              params: params
            });
          }
        }, {
          key: "updateTime",
          value: function updateTime() {
            if (this.getConfig('offline')) return;
            this.patchConfig('last_time', Date.now());
          }
        }, {
          key: "openStore",
          value: function openStore() {
            // run deeplinks to store in device with apple_id and package config in website
            var ios = "itms-apps://itunes.apple.com/app/id" + this.getConfig('apple_id') + "?mt=8";
            var android = "market://details?id=" + this.getConfig('package');
            window['cordova'].InAppBrowser.open(this.platform.is('ios') ? ios : android, '_system');
          }
        }, {
          key: "showLoading",
          value: function showLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      // disable back button
                      if (this.platform.is('android')) {
                        this.backButton = this.platform.backButton.subscribeWithPriority(110, function () {});
                      }

                      _context11.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context11.sent;

                      if (!(this.loading && this.loading['present'])) {
                        _context11.next = 7;
                        break;
                      }

                      _context11.next = 7;
                      return this.loading.present();

                    case 7:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "hideLoading",
          value: function hideLoading() {
            var _this33 = this;

            // setTimeout make sure if showLoading function called
            setTimeout(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this33, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        if (!(this.loading && this.loading['dismiss'])) {
                          _context12.next = 3;
                          break;
                        }

                        _context12.next = 3;
                        return this.loading.dismiss();

                      case 3:
                        // enable back button
                        if (this.backButton && this.backButton.unsubscribe) this.backButton.unsubscribe();

                      case 4:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));
            }, 100);
          }
        }, {
          key: "getHostname",
          value: function getHostname(url) {
            var hostname;

            try {
              hostname = new URL(url).hostname;
            } catch (e) {}

            return hostname;
          }
        }]);

        return CoreService;
      }();

      CoreService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_5__["Toast"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _crypto_service__WEBPACK_IMPORTED_MODULE_8__["CryptoService"]
        }];
      };

      CoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_5__["Toast"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _crypto_service__WEBPACK_IMPORTED_MODULE_8__["CryptoService"]])], CoreService);
      /***/
    },

    /***/
    "./src/app/services/crypto.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/crypto.service.ts ***!
      \********************************************/

    /*! exports provided: CryptoService */

    /***/
    function srcAppServicesCryptoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CryptoService", function () {
        return CryptoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CryptoService = /*#__PURE__*/function () {
        function CryptoService() {
          _classCallCheck(this, CryptoService);
        }

        _createClass(CryptoService, [{
          key: "SHA1",
          value: function SHA1(msg) {
            function rotate_left(n, s) {
              var t4 = n << s | n >>> 32 - s;
              return t4;
            }

            ;

            function lsb_hex(val) {
              var str = '';
              var i;
              var vh;
              var vl;

              for (i = 0; i <= 6; i += 2) {
                vh = val >>> i * 4 + 4 & 0x0f;
                vl = val >>> i * 4 & 0x0f;
                str += vh.toString(16) + vl.toString(16);
              }

              return str;
            }

            ;

            function cvt_hex(val) {
              var str = '';
              var i;
              var v;

              for (i = 7; i >= 0; i--) {
                v = val >>> i * 4 & 0x0f;
                str += v.toString(16);
              }

              return str;
            }

            ;

            function Utf8Encode(string) {
              string = string.replace(/\r\n/g, '\n');
              var utftext = '';

              for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);

                if (c < 128) {
                  utftext += String.fromCharCode(c);
                } else if (c > 127 && c < 2048) {
                  utftext += String.fromCharCode(c >> 6 | 192);
                  utftext += String.fromCharCode(c & 63 | 128);
                } else {
                  utftext += String.fromCharCode(c >> 12 | 224);
                  utftext += String.fromCharCode(c >> 6 & 63 | 128);
                  utftext += String.fromCharCode(c & 63 | 128);
                }
              }

              return utftext;
            }

            ;
            var blockstart;
            var i, j;
            var W = new Array(80);
            var H0 = 0x67452301;
            var H1 = 0xEFCDAB89;
            var H2 = 0x98BADCFE;
            var H3 = 0x10325476;
            var H4 = 0xC3D2E1F0;
            var A, B, C, D, E;
            var temp;
            msg = Utf8Encode(msg);
            var msg_len = msg.length;
            var word_array = new Array();

            for (i = 0; i < msg_len - 3; i += 4) {
              j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 | msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3);
              word_array.push(j);
            }

            switch (msg_len % 4) {
              case 0:
                i = 0x080000000;
                break;

              case 1:
                i = msg.charCodeAt(msg_len - 1) << 24 | 0x0800000;
                break;

              case 2:
                i = msg.charCodeAt(msg_len - 2) << 24 | msg.charCodeAt(msg_len - 1) << 16 | 0x08000;
                break;

              case 3:
                i = msg.charCodeAt(msg_len - 3) << 24 | msg.charCodeAt(msg_len - 2) << 16 | msg.charCodeAt(msg_len - 1) << 8 | 0x80;
                break;
            }

            word_array.push(i);

            while (word_array.length % 16 != 14) {
              word_array.push(0);
            }

            word_array.push(msg_len >>> 29);
            word_array.push(msg_len << 3 & 0x0ffffffff);

            for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
              for (i = 0; i < 16; i++) {
                W[i] = word_array[blockstart + i];
              }

              for (i = 16; i <= 79; i++) {
                W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
              }

              A = H0;
              B = H1;
              C = H2;
              D = H3;
              E = H4;

              for (i = 0; i <= 19; i++) {
                temp = rotate_left(A, 5) + (B & C | ~B & D) + E + W[i] + 0x5A827999 & 0x0ffffffff;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp;
              }

              for (i = 20; i <= 39; i++) {
                temp = rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1 & 0x0ffffffff;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp;
              }

              for (i = 40; i <= 59; i++) {
                temp = rotate_left(A, 5) + (B & C | B & D | C & D) + E + W[i] + 0x8F1BBCDC & 0x0ffffffff;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp;
              }

              for (i = 60; i <= 79; i++) {
                temp = rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6 & 0x0ffffffff;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp;
              }

              H0 = H0 + A & 0x0ffffffff;
              H1 = H1 + B & 0x0ffffffff;
              H2 = H2 + C & 0x0ffffffff;
              H3 = H3 + D & 0x0ffffffff;
              H4 = H4 + E & 0x0ffffffff;
            }

            temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
            return temp.toLowerCase();
          }
        }]);

        return CryptoService;
      }();

      CryptoService.ctorParameters = function () {
        return [];
      };

      CryptoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CryptoService);
      /***/
    },

    /***/
    "./src/app/services/deeplinks.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/deeplinks.service.ts ***!
      \***********************************************/

    /*! exports provided: DeeplinksService */

    /***/
    function srcAppServicesDeeplinksServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeeplinksService", function () {
        return DeeplinksService;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

      var DeeplinksService = /*#__PURE__*/function () {
        function DeeplinksService(router, InAppBrowser) {
          _classCallCheck(this, DeeplinksService);

          this.router = router;
          this.InAppBrowser = InAppBrowser;
        }

        _createClass(DeeplinksService, [{
          key: "run",
          value: function run(data) {
            var exclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var href = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var inapp = arguments.length > 3 ? arguments[3] : undefined;
            href = (href || '').trim(); // switch type deeplinks

            if (data) switch (data['type']) {
              case 'post':
                if (data['id'] == exclude) return; // open Detail page for post

                this.router.navigate(['/detail', data['id']]);
                break;

              case 'page':
                if (data['id'] == exclude) return; // open Detail page with type: 1 for Page

                this.router.navigate(['/detail', data['id'], {
                  type: 1
                }]);
                break;

              case 'category':
                this.router.navigate(['/detail-category', data['id']]);
                break;
              // open detail category
            } else if (href) {
              if (inapp && /^https?:\/\//i.test(href)) {
                // open inappbrowser
                var browser = this.InAppBrowser.create(href, '_blank');
                browser.show();
              } else {
                // open system browser
                window['cordova'].InAppBrowser.open(href, "_system");
              }
            }
          }
        }]);

        return DeeplinksService;
      }();

      DeeplinksService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]
        }];
      };

      DeeplinksService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]])], DeeplinksService);
      /***/
    },

    /***/
    "./src/app/services/events.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/events.service.ts ***!
      \********************************************/

    /*! exports provided: EventsService */

    /***/
    function srcAppServicesEventsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsService", function () {
        return EventsService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var EventsService = /*#__PURE__*/function () {
        function EventsService() {
          _classCallCheck(this, EventsService);

          this.offline$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.config$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(EventsService, [{
          key: "watchOffline",
          value: function watchOffline() {
            return this.offline$;
          }
        }, {
          key: "updateOffline",
          value: function updateOffline(value) {
            this.offline$.next(value);
          }
        }, {
          key: "watchConfig",
          value: function watchConfig() {
            return this.config$;
          }
        }, {
          key: "updateConfig",
          value: function updateConfig(value) {
            this.config$.next(value);
          }
        }]);

        return EventsService;
      }();

      EventsService.ctorParameters = function () {
        return [];
      };

      EventsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EventsService);
      /***/
    },

    /***/
    "./src/app/services/sanitizer.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/sanitizer.service.ts ***!
      \***********************************************/

    /*! exports provided: SanitizerService */

    /***/
    function srcAppServicesSanitizerServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SanitizerService", function () {
        return SanitizerService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SanitizerService = /*#__PURE__*/function () {
        function SanitizerService() {
          _classCallCheck(this, SanitizerService);
        }

        _createClass(SanitizerService, [{
          key: "get",
          value: function get(html) {
            var i; // prepare html from content of detail post

            if (!html) return;
            var tmp = document.createElement('div');
            tmp.innerHTML = html; // a tag

            var a = tmp.querySelectorAll('a');

            for (i = 0; i < a.length; i++) {
              a[i].setAttribute('value', (a[i].getAttribute('href') || '').trim());
              a[i].removeAttribute('href');
            } // form tag


            var form = tmp.querySelectorAll('form');
            var recaptcha, buttonCaptcha, acceptance, acceptanceSpan, j;

            for (i = 0; i < form.length; i++) {
              form[i].setAttribute('onsubmit', 'return false');
              recaptcha = form[i].querySelectorAll('div[data-sitekey].g-recaptcha')[0];

              if (recaptcha) {
                buttonCaptcha = document.createElement('open-captcha');
                buttonCaptcha.setAttribute('key', recaptcha.getAttribute('data-sitekey'));
                recaptcha['parentElement'].appendChild(buttonCaptcha);
              }

              acceptance = form[i].querySelectorAll('input[type=checkbox].wpcf7-acceptance');

              if (acceptance.length > 0) {
                acceptanceSpan = document.createElement('span');
                acceptanceSpan.className = "wpcf7-acceptance-checked";

                for (j = 0; j < acceptance.length; j++) {
                  acceptance[j]['parentElement'].className += ' wpcf7-acceptance-custom';
                  acceptance[j]['parentElement'].appendChild(acceptanceSpan);
                }
              }
            } // iframe tag


            var iframe = tmp.querySelectorAll('iframe');

            for (i = 0; i < iframe.length; i++) {
              // enable api for stop video when leave Detail page
              if (iframe[i].src) {
                if (iframe[i].src.split('?').length > 1) iframe[i].src += "&enablejsapi=1&api=postMessage";else iframe[i].src += "?enablejsapi=1&api=postMessage";
              }

              if (Number(iframe[i].width) > window.innerWidth) {
                iframe[i].height = Number(iframe[i].height) / (Number(iframe[i].width) / window.innerWidth) + 'px';
              }
            }

            html = tmp.innerHTML;
            return html;
          }
        }]);

        return SanitizerService;
      }();

      SanitizerService.ctorParameters = function () {
        return [];
      };

      SanitizerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SanitizerService);
      /***/
    },

    /***/
    "./src/app/services/utitlities.service.ts":
    /*!************************************************!*\
      !*** ./src/app/services/utitlities.service.ts ***!
      \************************************************/

    /*! exports provided: UtitlitiesService */

    /***/
    function srcAppServicesUtitlitiesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtitlitiesService", function () {
        return UtitlitiesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UtitlitiesService = /*#__PURE__*/function () {
        function UtitlitiesService() {
          _classCallCheck(this, UtitlitiesService);

          this.getOffsetTop = function (element) {
            var offsetTop = 0;

            while (element) {
              offsetTop += element.offsetTop;
              element = element.offsetParent;
            }

            return offsetTop;
          };
        }

        _createClass(UtitlitiesService, [{
          key: "stopMedia",
          value: function stopMedia() {
            var i; // iframe

            var iframe = document.querySelectorAll('iframe');

            for (i = 0; i < iframe.length; i++) {
              // youtube
              if (iframe[i]['contentWindow']) {
                // for Youtube
                iframe[i].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'); // for Vimeo

                iframe[i].contentWindow.postMessage('{"method":"pause"}', '*'); // for Dailymotion

                iframe[i].contentWindow.postMessage('{"command":"pause","parameters":[]}', "*");
              }
            } // video html5


            var video = document.querySelectorAll('video');

            for (i = 0; i < video.length; i++) {
              video[i].pause();
            } // audio html5


            var audio = document.querySelectorAll('audio');

            for (i = 0; i < audio.length; i++) {
              audio[i].pause();
            }
          }
        }]);

        return UtitlitiesService;
      }();

      UtitlitiesService.ctorParameters = function () {
        return [];
      };

      UtitlitiesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], UtitlitiesService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/krisztianbalogh/Desktop/Cork County New Update/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map