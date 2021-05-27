(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'profile.title'|translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"login && login.id\" padding-x2>\n    <div padding-x2 >\n      <img border-round margin-auto [src]=\"login.avatar||'assets/imgs/person.png'\" width=\"96px\" />\n    </div>\n    <ion-list padding-x2 margin-auto class=\"ion-no-margin ion-padding-top content\">\n      <form *ngIf=\"formUpdate\" [formGroup]=\"formUpdate\" class=\"ion-padding-bottom\">\n        <ion-item class=\"ion-no-padding\">\n          <ion-label position=\"stacked\">{{'profile.name'|translate}}</ion-label>\n          <ion-input formControlName=\"name\"></ion-input>\n        </ion-item>\n        <ion-item class=\"ion-no-padding\">\n          <ion-label position=\"stacked\">{{'profile.email'|translate}}</ion-label>\n          <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n      </form>\n      <ion-button expand=\"block\" [disabled]=\"!formUpdate.valid\" (click)=\"update()\" class=\"ion-no-margin\">\n        <span>{{'profile.update'|translate}}</span>\n        <ion-spinner *ngIf=\"updating\" spinner-load absolute end name=\"lines\" color=\"light\" class=\"ion-margin-end\"></ion-spinner>\n      </ion-button>\n      <!-- Change password button -->\n      <ion-button margin-auto (click)=\"password()\" fill=\"clear\">\n        <span>{{'profile.password.title'|translate}}</span>\n      </ion-button>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar *ngIf=\"login && login.id\" class=\"ion-no-padding\">\n    <ion-button expand=\"full\" (click)=\"keep()\" fill=\"clear\" class=\"ion-no-margin\">\n      <span>{{'profile.keep.title'|translate}}</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_services_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/core.service */ "./src/app/services/core.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");








let ProfilePage = class ProfilePage {
    constructor(storage, core, Toast, translate, alertCtrl, routerOutlet, navCtrl) {
        this.storage = storage;
        this.core = core;
        this.Toast = Toast;
        this.alertCtrl = alertCtrl;
        this.routerOutlet = routerOutlet;
        this.navCtrl = navCtrl;
        // get translate
        translate.get('profile').subscribe(trans => this.trans = trans);
        // constructor form update
        this.formUpdate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]))
        });
        // get login data
        storage.get('login').then(login => {
            this.login = login;
            if (!this.login)
                return;
            this.reset();
        });
    }
    ngOnInit() {
    }
    reset() {
        // reset form update
        this.formUpdate.patchValue({
            name: this.login['user_display_name'],
            email: this.login['user_email']
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // when click logout
            let alert = yield this.alertCtrl.create({
                header: this.trans['logout']['title'],
                message: this.trans['logout']['message'],
                buttons: [
                    {
                        text: this.trans['logout']['yes'],
                        handler: () => {
                            this.storage.remove('login').then(() => {
                                this.core.patchConfig('user_token', null);
                                if (this.routerOutlet.canGoBack())
                                    this.navCtrl.pop();
                                else
                                    this.navCtrl.navigateRoot('/home');
                            });
                        }
                    },
                    { text: this.trans['logout']['no'] }
                ]
            });
            alert.present();
        });
    }
    update() {
        if (this.updating || !this.login || !this.login['id'] || !this.login['token'])
            return;
        // when click update profile
        this.updating = true;
        let option = {
            method: 'POST',
            body: this.formUpdate.value,
        };
        // request update profile
        this.core.request('users/' + this.login['id'], option, false, true).subscribe(res => {
            // when request success
            this.login['user_display_name'] = res['name'];
            this.login['user_email'] = res['email'];
            this.reset();
            this.Toast.showShortCenter(this.trans['success']).subscribe(() => { }, () => { });
            this.save();
            this.updating = false;
        }, err => {
            // when request error
            this.updating = false;
            this.getError(err['error']['code']);
        });
    }
    getError(code) {
        // catch error show Toast when update profile error
        let message;
        if (this.trans['errors'][code])
            message = this.trans['errors'][code];
        else
            message = this.trans['errors']['default'];
        this.Toast.showLongCenter(message).subscribe(() => { }, () => { });
    }
    save() {
        // update login data on Storage
        this.storage.set('login', this.login);
    }
    password() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: this.trans['password']['title'],
                inputs: [
                    {
                        name: 'password',
                        type: 'password',
                        placeholder: this.trans['password']['new_password']
                    },
                    {
                        name: 'repass',
                        type: 'password',
                        placeholder: this.trans['password']['confirm_password']
                    }
                ],
                buttons: [
                    {
                        text: this.trans['password']['yes'],
                        role: 'send-password',
                        handler: data => {
                            if (!data['password'] || !data['repass'])
                                return false;
                            if (data['password'] != data['repass']) {
                                this.Toast.showLongCenter(this.trans['errors']['password_mismatch']).subscribe(() => { }, () => { });
                                return false;
                            }
                            this.handlerPassword(data);
                        }
                    },
                    { text: this.trans['password']['no'] }
                ],
                backdropDismiss: false
            });
            alert.present();
        });
    }
    handlerPassword(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // if request change password
            this.core.showLoading();
            let option = {
                method: 'POST',
                body: data,
            };
            // request change password
            this.core.request('users/' + this.login['id'], option, false, true).subscribe(res => {
                // when request success
                this.core.hideLoading();
                this.Toast.showShortCenter(this.trans['password']['success']).subscribe(() => { }, () => { });
            }, err => {
                // when request error
                this.core.hideLoading();
                this.getError(err['error']['code']);
            });
        });
    }
    keep() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // removing other session
            let alert = yield this.alertCtrl.create({
                header: this.trans['keep']['title'],
                message: this.trans['keep']['message'],
                buttons: [
                    {
                        text: this.trans['keep']['yes'],
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            let option = { method: 'POST' };
                            this.core.showLoading();
                            // request removing other session
                            this.core.request('m_users/keep', option, false, true).subscribe(res => {
                                // when request success
                                let message;
                                if (res)
                                    message = this.trans['keep']['success'];
                                else
                                    message = this.trans['keep']['error'];
                                this.core.hideLoading();
                                this.Toast.showShortCenter(message).subscribe(() => { }, () => { });
                            }, err => {
                                // when request error
                                this.core.hideLoading();
                                this.getError(err['error']['code']);
                            });
                        })
                    },
                    { text: this.trans['keep']['no'] }
                ]
            });
            alert.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: src_app_services_core_service__WEBPACK_IMPORTED_MODULE_6__["CoreService"] },
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_5__["Toast"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        src_app_services_core_service__WEBPACK_IMPORTED_MODULE_6__["CoreService"],
        _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_5__["Toast"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map