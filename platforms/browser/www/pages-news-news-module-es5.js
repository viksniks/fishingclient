(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-news-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesNewsNewsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content #content>\n  <!-- Refresh -->\n  <app-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event)\"></app-refresher>\n  <!-- Sticky -->\n  <div *ngIf=\"sticky && sticky.length > 0\" class=\"slides-sticky ion-padding-horizontal ion-margin-bottom\">\n    <ion-slides #slides autoplay=\"3000\" pager=\"true\" [options]=\"slideOptions\" (click)=\"openStickySlide($event)\">\n      <ion-slide *ngFor=\"let post of sticky\" [ngClass]=\"post.format\">\n        <div padding-top-50 relative width-100>\n          <img [src]=\"post.image||'assets/imgs/no-image.png'\" absolute top start class=\"ion-float-start object-cover size-full\">\n        </div>\n        <div gradient absolute bottom width-100 padding-x2 place class=\"ion-text-left\">\n          <div [innerHTML]=\"post.title\"></div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <!-- no data -->\n  <app-no-data *ngIf=\"loaded && (!posts || posts.length < 1)\" [inner]=\"sticky && sticky.length > 0\"></app-no-data>\n  <!-- loading -->\n  <app-loading *ngIf=\"!loaded\"></app-loading>\n  <!-- 4 column posts -->\n  <app-list-posts *ngIf=\"colPosts\" [posts]=\"colPosts\" templates=\"column\"></app-list-posts>\n  <!-- List posts -->\n  <app-list-posts *ngIf=\"posts\" [posts]=\"posts\"></app-list-posts>\n  <!-- Load more -->\n  <app-infinite-scroll threshold=\"45%\" (ionInfinite)=\"load($event)\" *ngIf=\"!over && posts?.length > 0\"></app-infinite-scroll>\n  <!-- Go to top -->\n  <app-goto-top slot=\"fixed\" [content]=\"content\"></app-goto-top>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/const/slidesAnimations.ts":
    /*!*******************************************!*\
      !*** ./src/app/const/slidesAnimations.ts ***!
      \*******************************************/

    /*! exports provided: coverFlow */

    /***/
    function srcAppConstSlidesAnimationsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coverFlow", function () {
        return coverFlow;
      });

      var coverFlow = {
        slidesPerView: 3,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        on: {
          beforeInit: function beforeInit() {
            var swiper = this;
            swiper.classNames.push("".concat(swiper.params.containerModifierClass, "coverflow"));
            swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
            swiper.params.watchSlidesProgress = true;
            swiper.originalParams.watchSlidesProgress = true;
          },
          setTranslate: function setTranslate() {
            var swiper = this;
            var swiperWidth = swiper.width,
                swiperHeight = swiper.height,
                slides = swiper.slides,
                $wrapperEl = swiper.$wrapperEl,
                slidesSizesGrid = swiper.slidesSizesGrid,
                $ = swiper.$;
            var params = swiper.params.coverflowEffect;
            var isHorizontal = swiper.isHorizontal();
            var transform$$1 = swiper.translate;
            var center = isHorizontal ? -transform$$1 + swiperWidth / 2 : -transform$$1 + swiperHeight / 2;
            var rotate = isHorizontal ? params.rotate : -params.rotate;
            var translate = params.depth; // Each slide offset from center

            for (var i = 0, length = slides.length; i < length; i += 1) {
              var $slideEl = slides.eq(i);
              var slideSize = slidesSizesGrid[i];
              var slideOffset = $slideEl[0].swiperSlideOffset;
              var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
              var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
              var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

              var translateZ = -translate * Math.abs(offsetMultiplier);
              var translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
              var translateX = isHorizontal ? params.stretch * offsetMultiplier : 0; // Fix for ultra small values

              if (Math.abs(translateX) < 0.001) translateX = 0;
              if (Math.abs(translateY) < 0.001) translateY = 0;
              if (Math.abs(translateZ) < 0.001) translateZ = 0;
              if (Math.abs(rotateY) < 0.001) rotateY = 0;
              if (Math.abs(rotateX) < 0.001) rotateX = 0;
              var slideTransform = "translate3d(".concat(translateX, "px,").concat(translateY, "px,").concat(translateZ, "px)  rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)");
              $slideEl.transform(slideTransform);
              $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

              if (params.slideShadows) {
                // Set shadows
                var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                if ($shadowBeforeEl.length === 0) {
                  $shadowBeforeEl = swiper.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
                  $slideEl.append($shadowBeforeEl);
                }

                if ($shadowAfterEl.length === 0) {
                  $shadowAfterEl = swiper.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
                  $slideEl.append($shadowAfterEl);
                }

                if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
              }
            } // Set correct perspective for IE10


            if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
              var ws = $wrapperEl[0].style;
              ws.perspectiveOrigin = "".concat(center, "px 50%");
            }
          },
          setTransition: function setTransition(duration) {
            var swiper = this;
            swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
          }
        }
      };
      /***/
    },

    /***/
    "./src/app/pages/news/news-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/news/news-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: NewsPageRoutingModule */

    /***/
    function srcAppPagesNewsNewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsPageRoutingModule", function () {
        return NewsPageRoutingModule;
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


      var _news_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./news.page */
      "./src/app/pages/news/news.page.ts");

      var routes = [{
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_3__["NewsPage"]
      }];

      var NewsPageRoutingModule = function NewsPageRoutingModule() {
        _classCallCheck(this, NewsPageRoutingModule);
      };

      NewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/news/news.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/news/news.module.ts ***!
      \*******************************************/

    /*! exports provided: NewsPageModule */

    /***/
    function srcAppPagesNewsNewsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsPageModule", function () {
        return NewsPageModule;
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


      var _news_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./news-routing.module */
      "./src/app/pages/news/news-routing.module.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var _news_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./news.page */
      "./src/app/pages/news/news.page.ts");

      var NewsPageModule = function NewsPageModule() {
        _classCallCheck(this, NewsPageModule);
      };

      NewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _news_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewsPageRoutingModule"]],
        declarations: [_news_page__WEBPACK_IMPORTED_MODULE_8__["NewsPage"]]
      })], NewsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/news/news.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/news/news.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesNewsNewsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-news .slides-sticky {\n  --bullet-background: var(--ion-color-light);\n}\napp-news .slides-sticky ion-slides {\n  padding-bottom: 22px;\n}\napp-news .slides-sticky ion-slides .swiper-slide {\n  border-radius: 4px;\n  overflow: hidden;\n}\napp-news .slides-sticky ion-slides .swiper-pagination {\n  bottom: 2px;\n  white-space: nowrap;\n}\napp-news .slides-sticky ion-slides .swiper-pagination .swiper-pagination-bullet {\n  opacity: 1;\n  width: 10px;\n  border-radius: 4px;\n  margin: 0 2px;\n  transition: width 0.2s;\n}\napp-news .slides-sticky ion-slides .swiper-pagination .swiper-pagination-bullet-active {\n  width: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3cy9uZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDJDQUFBO0FBQUo7QUFDSTtFQUNFLG9CQUFBO0FBQ047QUFBTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQUFNO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBRVI7QUFEUTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFHVjtBQUZVO0VBQ0UsV0FBQTtBQUlaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3cy9uZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1uZXdzIHtcbiAgLnNsaWRlcy1zdGlja3kge1xuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgaW9uLXNsaWRlcyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjJweDtcbiAgICAgIC5zd2lwZXItc2xpZGUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDJweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xuICAgICAgICAgICYtYWN0aXZlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/news/news.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/news/news.page.ts ***!
      \*****************************************/

    /*! exports provided: NewsPage */

    /***/
    function srcAppPagesNewsNewsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsPage", function () {
        return NewsPage;
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


      var _services_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/core.service */
      "./src/app/services/core.service.ts");
      /* harmony import */


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/events.service */
      "./src/app/services/events.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_const_slidesAnimations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/const/slidesAnimations */
      "./src/app/const/slidesAnimations.ts");
      /* harmony import */


      var src_app_classes_subsink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/classes/subsink */
      "./src/app/classes/subsink.ts");

      var NewsPage = /*#__PURE__*/function () {
        function NewsPage(route, core, events, navCtrl) {
          var _this = this;

          _classCallCheck(this, NewsPage);

          this.core = core;
          this.navCtrl = navCtrl; // slideOptions

          this.slideOptions = Object.assign({}, src_app_const_slidesAnimations__WEBPACK_IMPORTED_MODULE_6__["coverFlow"], {
            loop: true,
            slidesPerView: 1
          }); // page of latest posts

          this.page = 1; // subsink

          this.subs = new src_app_classes_subsink__WEBPACK_IMPORTED_MODULE_7__["SubSink"]();
          this.categories = route.snapshot.params['categories'];
          this.getSticky();
          this.getPosts();
          this.subs.sink = events.watchOffline().subscribe(function () {
            if (_this.loaded && (!_this.posts || _this.posts.length < 1)) {
              _this.loaded = false;

              _this.getSticky();

              _this.getPosts();
            }
          });
        }

        _createClass(NewsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subs.unsubscribe();
          } // ionViewDidEnter() {
          //   if (this.slides) {
          //     this.slides.startAutoplay();
          //   }
          // }
          // ionViewWillLeave() {
          //   if (this.slides) {
          //     this.slides.stopAutoplay();
          //   }
          // }

        }, {
          key: "getSticky",
          value: function getSticky() {
            var _this2 = this;

            if (this.categories) return; // get sticky posts

            this.core.getPosts({
              sticky: true
            }).subscribe(function (posts) {
              // reset sticky data to remove element, setTimeout fix problem slide not update data when loop:true
              _this2.sticky = [];
              setTimeout(function () {
                return _this2.sticky = posts;
              });
            }, function (err) {});
          }
        }, {
          key: "getPosts",
          value: function getPosts() {
            var _this3 = this;

            var refresher = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var infiniteScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            // get posts with page then concat to list post
            var params = {
              page: refresher ? 1 : this.page
            };
            if (this.categories) params['categories'] = this.categories;
            this.core.getPosts(params).subscribe(function (posts) {
              if (refresher) _this3.page = 1;

              if (_this3.page == 1) {
                if (posts.length > 4) _this3.colPosts = posts.splice(0, 4);else _this3.colPosts = null;
              }

              if (posts.length > 0) _this3.page++;else _this3.over = true;

              if (infiniteScroll) {
                _this3.posts = _this3.posts.concat(posts);
                infiniteScroll.target.complete();
              } else _this3.posts = posts;

              _this3.loaded = true;
              if (refresher) refresher.target.complete();
            }, function (err) {
              if (infiniteScroll) infiniteScroll.target.complete();
              if (refresher) refresher.target.complete();
              _this3.loaded = true;
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(refresher) {
            // when refresh
            this.over = false;
            this.core.updateTime();
            this.getPosts(refresher);
            this.getSticky();
          }
        }, {
          key: "load",
          value: function load(infiniteScroll) {
            // when scroll to bottom
            this.getPosts(null, infiniteScroll);
          }
        }, {
          key: "openStickySlide",
          value: function openStickySlide(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var target, active, post;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(!this.slides || !this.sticky)) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return");

                    case 2:
                      target = event.target;

                      if (!(target.classList.contains('swiper-pagination') || target.classList.contains('swiper-pagination-bullet'))) {
                        _context.next = 5;
                        break;
                      }

                      return _context.abrupt("return");

                    case 5:
                      this.slides.stopAutoplay();
                      _context.next = 8;
                      return this.slides.getActiveIndex();

                    case 8:
                      active = _context.sent;
                      if (active === 0) active = this.sticky.length;
                      post = (active - 1) % this.sticky.length;

                      if (post >= 0 && this.sticky[post]) {
                        this.navCtrl.navigateForward(['/detail', this.sticky[post]['id']]);
                      }

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "slidesElement",
          set: function set(slides) {
            if (slides) {
              this.slides = slides;

              if (this.slides.update) {
                this.slides.update();
                this.slides.slideTo(1);
                this.slides.startAutoplay();
              }
            }
          }
        }]);

        return NewsPage;
      }();

      NewsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }];
      };

      NewsPage.propDecorators = {
        slidesElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['slides', {
            "static": false
          }]
        }]
      };
      NewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./news.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html"))["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./news.page.scss */
        "./src/app/pages/news/news.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"], src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], NewsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-news-news-module-es5.js.map