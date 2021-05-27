(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-search-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSearchSearchPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"toolbar-searchbar-common\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-searchbar [(ngModel)]=\"_keyword\" (search)=\"doSearch()\" (ionClear)=\"_keyword=''; doSearch()\"\n      [placeholder]=\"'search.search'|translate\" class=\"ion-text-start\">\n      </ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"show=!show\" [color]=\"show?'success':'primary'\" [disabled]=\"!search || search.length < 1\">\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"time-outline\"></ion-icon>\n\t\t\t</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n  <!-- history -->\n  <div slot=\"fixed\" absolute top start size-full light-bg overflow *ngIf=\"show && search && search.length > 0\">\n    <h5 place class=\"ion-text-center\">{{'search.history'|translate}}</h5>\n    <ion-button *ngFor=\"let item of search\" fill=\"clear\" expand=\"block\" (click)=\"onSearch(item)\" text-ellipsis>\n      <span>{{item}}</span>\n    </ion-button>\n  </div>\n  <ion-button *ngIf=\"show && search && search.length > 0\"slot=\"fixed\" absolute bottom end (click)=\"clear()\" fill=\"clear\" color=\"danger\">\n    <ion-icon slot=\"icon-only\" src=\"assets/svg/icon-clean.svg\"></ion-icon>\n  </ion-button>\n  <!-- no data -->\n  <app-no-data *ngIf=\"searched && !searching && (!posts || posts.length < 1)\"></app-no-data>\n  <!-- searching -->\n  <app-loading *ngIf=\"searching\"></app-loading>\n  <!-- List posts -->\n  <app-list-posts *ngIf=\"posts\" [posts]=\"posts\"></app-list-posts>\n  <app-infinite-scroll threshold=\"45%\" (ionInfinite)=\"load($event)\" *ngIf=\"!over && posts?.length > 0\"></app-infinite-scroll>\n  <!-- Go to top -->\n  <app-goto-top slot=\"fixed\" [content]=\"content\"></app-goto-top>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/search/search-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/search/search-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: SearchPageRoutingModule */

    /***/
    function srcAppPagesSearchSearchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function () {
        return SearchPageRoutingModule;
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


      var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search.page */
      "./src/app/pages/search/search.page.ts");

      var routes = [{
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
      }];

      var SearchPageRoutingModule = function SearchPageRoutingModule() {
        _classCallCheck(this, SearchPageRoutingModule);
      };

      SearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/search/search.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/search/search.module.ts ***!
      \***********************************************/

    /*! exports provided: SearchPageModule */

    /***/
    function srcAppPagesSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPageModule", function () {
        return SearchPageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search-routing.module */
      "./src/app/pages/search/search-routing.module.ts");
      /* harmony import */


      var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search.page */
      "./src/app/pages/search/search.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var SearchPageModule = function SearchPageModule() {
        _classCallCheck(this, SearchPageModule);
      };

      SearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"]],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
      })], SearchPageModule);
      /***/
    },

    /***/
    "./src/app/pages/search/search.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/search/search.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSearchSearchPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/search/search.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/search/search.page.ts ***!
      \*********************************************/

    /*! exports provided: SearchPage */

    /***/
    function srcAppPagesSearchSearchPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPage", function () {
        return SearchPage;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var SearchPage = /*#__PURE__*/function () {
        function SearchPage(storage, core, alertCtrl, translate, route) {
          var _this = this;

          _classCallCheck(this, SearchPage);

          this.storage = storage;
          this.core = core;
          this.alertCtrl = alertCtrl; // search history from Storage

          this.search = []; // set true show History

          this.show = false; // page of search results

          this.page = 1; // get translate

          translate.get('search').subscribe(function (trans) {
            _this.trans = trans;
          }); // get params for search global or search in category

          this.id = route.snapshot.params['id']; // get search history

          storage.get('search').then(function (search) {
            if (search) _this.search = search;
          });
        }

        _createClass(SearchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "doSearch",
          value: function doSearch() {
            if (!this._keyword) {
              this.page = 1;
              this.over = false;
              this.posts = [];
            } else this.onSearch(this._keyword);
          }
        }, {
          key: "onSearch",
          value: function onSearch(keyword, infiniteScroll) {
            var _this2 = this;

            // search
            // hide history
            this.show = false; // if isn't load more reset search results for new search

            if (!infiniteScroll) {
              this.page = 1;
              this.over = false;
              this.posts = []; // show searching spinner

              this.searching = true;
            } // prepare keyword


            if (keyword) {
              this.keyword = keyword;
              this._keyword = keyword;
            }

            if (!this.keyword) return; // prepare add to history

            if (this.search.indexOf(this.keyword) == -1) {
              this.search.unshift(this.keyword); // limit store 20 history
              // this.search = this.search.slice(0, 20);
            }

            this.searched = true; // update history to Storage

            this.storage.set('search', this.search).then(function () {
              // prepare params request
              var params = {
                search: _this2.keyword.toLowerCase(),
                t: Date.now(),
                page: _this2.page
              };
              if (_this2.id) params['categories'] = _this2.id; // request search posts with keyword

              _this2.core.getPosts(params).subscribe(function (posts) {
                // when request success
                if (posts.length > 0) {
                  _this2.page++;
                  _this2.posts = _this2.posts.concat(posts);
                } else _this2.over = true;

                if (infiniteScroll) infiniteScroll.target.complete();
                _this2.searching = false;
              }, function (err) {
                // when request error
                _this2.searching = false;
                if (infiniteScroll) infiniteScroll.target.complete();
              });
            }, function (err) {
              return _this2.searching = false;
            });
          }
        }, {
          key: "load",
          value: function load(infiniteScroll) {
            // when scroll to bottom
            this.onSearch(this.keyword, infiniteScroll);
          }
        }, {
          key: "clear",
          value: function clear() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: this.trans['clear']['title'],
                        message: this.trans['clear']['message'],
                        buttons: [{
                          text: this.trans['clear']['yes'],
                          handler: function handler() {
                            _this3.storage.remove('search').then(function () {
                              _this3.search = [];
                              _this3.show = false;
                            });
                          }
                        }, {
                          text: this.trans['clear']['no']
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
        }]);

        return SearchPage;
      }();

      SearchPage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: src_app_services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      };

      SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./search.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html"))["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./search.page.scss */
        "./src/app/pages/search/search.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], src_app_services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])], SearchPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-search-search-module-es5.js.map