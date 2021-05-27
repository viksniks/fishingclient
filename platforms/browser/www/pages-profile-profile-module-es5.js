(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'profile.title'|translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"login && login.id\" padding-x2>\n    <div padding-x2 >\n      <img border-round margin-auto [src]=\"login.avatar||'assets/imgs/person.png'\" width=\"96px\" />\n    </div>\n    <ion-list padding-x2 margin-auto class=\"ion-no-margin ion-padding-top content\">\n      <form *ngIf=\"formUpdate\" [formGroup]=\"formUpdate\" class=\"ion-padding-bottom\">\n        <ion-item class=\"ion-no-padding\">\n          <ion-label position=\"stacked\">{{'profile.name'|translate}}</ion-label>\n          <ion-input formControlName=\"name\"></ion-input>\n        </ion-item>\n        <ion-item class=\"ion-no-padding\">\n          <ion-label position=\"stacked\">{{'profile.email'|translate}}</ion-label>\n          <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n      </form>\n      <ion-button expand=\"block\" [disabled]=\"!formUpdate.valid\" (click)=\"update()\" class=\"ion-no-margin\">\n        <span>{{'profile.update'|translate}}</span>\n        <ion-spinner *ngIf=\"updating\" spinner-load absolute end name=\"lines\" color=\"light\" class=\"ion-margin-end\"></ion-spinner>\n      </ion-button>\n      <!-- Change password button -->\n      <ion-button margin-auto (click)=\"password()\" fill=\"clear\">\n        <span>{{'profile.password.title'|translate}}</span>\n      </ion-button>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar *ngIf=\"login && login.id\" class=\"ion-no-padding\">\n    <ion-button expand=\"full\" (click)=\"keep()\" fill=\"clear\" class=\"ion-no-margin\">\n      <span>{{'profile.keep.title'|translate}}</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/pages/profile/profile-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/profile/profile-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function srcAppPagesProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/pages/profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/profile/profile.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.module.ts ***!
      \*************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function srcAppPagesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "./src/app/pages/profile/profile-routing.module.ts");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/pages/profile/profile.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "./src/app/pages/profile/profile.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/profile/profile.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/profile/profile.page.ts ***!
      \***********************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppPagesProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/toast/ngx */
      "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_services_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/core.service */
      "./src/app/services/core.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(storage, core, Toast, translate, alertCtrl, routerOutlet, navCtrl) {
          var _this = this;

          _classCallCheck(this, ProfilePage);

          this.storage = storage;
          this.core = core;
          this.Toast = Toast;
          this.alertCtrl = alertCtrl;
          this.routerOutlet = routerOutlet;
          this.navCtrl = navCtrl; // get translate

          translate.get('profile').subscribe(function (trans) {
            return _this.trans = trans;
          }); // constructor form update

          this.formUpdate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]))
          }); // get login data

          storage.get('login').then(function (login) {
            _this.login = login;
            if (!_this.login) return;

            _this.reset();
          });
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "reset",
          value: function reset() {
            // reset form update
            this.formUpdate.patchValue({
              name: this.login['user_display_name'],
              email: this.login['user_email']
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: this.trans['logout']['title'],
                        message: this.trans['logout']['message'],
                        buttons: [{
                          text: this.trans['logout']['yes'],
                          handler: function handler() {
                            _this2.storage.remove('login').then(function () {
                              _this2.core.patchConfig('user_token', null);

                              if (_this2.routerOutlet.canGoBack()) _this2.navCtrl.pop();else _this2.navCtrl.navigateRoot('/home');
                            });
                          }
                        }, {
                          text: this.trans['logout']['no']
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
          key: "update",
          value: function update() {
            var _this3 = this;

            if (this.updating || !this.login || !this.login['id'] || !this.login['token']) return; // when click update profile

            this.updating = true;
            var option = {
              method: 'POST',
              body: this.formUpdate.value
            }; // request update profile

            this.core.request('users/' + this.login['id'], option, false, true).subscribe(function (res) {
              // when request success
              _this3.login['user_display_name'] = res['name'];
              _this3.login['user_email'] = res['email'];

              _this3.reset();

              _this3.Toast.showShortCenter(_this3.trans['success']).subscribe(function () {}, function () {});

              _this3.save();

              _this3.updating = false;
            }, function (err) {
              // when request error
              _this3.updating = false;

              _this3.getError(err['error']['code']);
            });
          }
        }, {
          key: "getError",
          value: function getError(code) {
            // catch error show Toast when update profile error
            var message;
            if (this.trans['errors'][code]) message = this.trans['errors'][code];else message = this.trans['errors']['default'];
            this.Toast.showLongCenter(message).subscribe(function () {}, function () {});
          }
        }, {
          key: "save",
          value: function save() {
            // update login data on Storage
            this.storage.set('login', this.login);
          }
        }, {
          key: "password",
          value: function password() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: this.trans['password']['title'],
                        inputs: [{
                          name: 'password',
                          type: 'password',
                          placeholder: this.trans['password']['new_password']
                        }, {
                          name: 'repass',
                          type: 'password',
                          placeholder: this.trans['password']['confirm_password']
                        }],
                        buttons: [{
                          text: this.trans['password']['yes'],
                          role: 'send-password',
                          handler: function handler(data) {
                            if (!data['password'] || !data['repass']) return false;

                            if (data['password'] != data['repass']) {
                              _this4.Toast.showLongCenter(_this4.trans['errors']['password_mismatch']).subscribe(function () {}, function () {});

                              return false;
                            }

                            _this4.handlerPassword(data);
                          }
                        }, {
                          text: this.trans['password']['no']
                        }],
                        backdropDismiss: false
                      });

                    case 2:
                      alert = _context2.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "handlerPassword",
          value: function handlerPassword(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var option;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      // if request change password
                      this.core.showLoading();
                      option = {
                        method: 'POST',
                        body: data
                      }; // request change password

                      this.core.request('users/' + this.login['id'], option, false, true).subscribe(function (res) {
                        // when request success
                        _this5.core.hideLoading();

                        _this5.Toast.showShortCenter(_this5.trans['password']['success']).subscribe(function () {}, function () {});
                      }, function (err) {
                        // when request error
                        _this5.core.hideLoading();

                        _this5.getError(err['error']['code']);
                      });

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "keep",
          value: function keep() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertCtrl.create({
                        header: this.trans['keep']['title'],
                        message: this.trans['keep']['message'],
                        buttons: [{
                          text: this.trans['keep']['yes'],
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                              var _this7 = this;

                              var option;
                              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                while (1) {
                                  switch (_context4.prev = _context4.next) {
                                    case 0:
                                      option = {
                                        method: 'POST'
                                      };
                                      this.core.showLoading(); // request removing other session

                                      this.core.request('m_users/keep', option, false, true).subscribe(function (res) {
                                        // when request success
                                        var message;
                                        if (res) message = _this7.trans['keep']['success'];else message = _this7.trans['keep']['error'];

                                        _this7.core.hideLoading();

                                        _this7.Toast.showShortCenter(message).subscribe(function () {}, function () {});
                                      }, function (err) {
                                        // when request error
                                        _this7.core.hideLoading();

                                        _this7.getError(err['error']['code']);
                                      });

                                    case 3:
                                    case "end":
                                      return _context4.stop();
                                  }
                                }
                              }, _callee4, this);
                            }));
                          }
                        }, {
                          text: this.trans['keep']['no']
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: src_app_services_core_service__WEBPACK_IMPORTED_MODULE_6__["CoreService"]
        }, {
          type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_5__["Toast"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/pages/profile/profile.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], src_app_services_core_service__WEBPACK_IMPORTED_MODULE_6__["CoreService"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_5__["Toast"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], ProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-profile-profile-module-es5.js.map