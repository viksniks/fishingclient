(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-comment-comment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/comment/comment.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/comment/comment.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"['/detail', post_id]\"></ion-back-button>\n      <ion-button [routerLink]=\"['/detail', post_id]\" routerDirection=\"back\">\n        <ion-icon slot=\"icon-only\" name=\"home\"></ion-icon>\n      </ion-button>\n\t\t\t<ion-button *ngIf=\"status!='closed'\" (click)=\"viewMode=!viewMode\" [color]=\"viewMode?'success':null\">\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"eye\"></ion-icon>\n\t\t\t</ion-button>\n    </ion-buttons>\n    <!-- <ion-title>\n      <span *ngIf=\"!view?.id\">{{'comments.title'|translate}}</span>\n      <span *ngIf=\"view?.id\">{{'comments.reply'|translate}}</span>\n\t\t</ion-title> -->\n\t\t<ion-buttons *ngIf=\"status!='closed'\" slot=\"end\">\n\t\t\t<ion-button (click)=\"facebook()\" class=\"facebook\">\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"logo-facebook\" *ngIf=\"!loading\"></ion-icon>\n\t\t\t\t<ion-spinner name=\"lines\" *ngIf=\"loading\"></ion-spinner>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"logout()\">\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n\t<ion-toolbar [color]=\"status=='closed' ? 'place' : null\">\n\t\t<!-- From comment -->\n\t\t<div light *ngIf=\"status=='closed'\" class=\"ion-padding-vertical ion-text-center\">{{'comments.close'|translate}}</div>\n\t\t<ion-list *ngIf=\"status!='closed'\" class=\"ion-padding-horizontal ion-padding-bottom ion-no-margin\">\n\t\t\t<form [formGroup]=\"formComment\" [hidden]=\"viewMode\">\n\t\t\t\t<ion-item class=\"ion-no-padding\" *ngIf=\"needInfo\">\n\t\t\t\t\t<ion-input formControlName=\"author_name\" [placeholder]=\"'comments.name'|translate\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"ion-no-padding\" *ngIf=\"needInfo\">\n\t\t\t\t\t<ion-input type=\"email\" formControlName=\"author_email\" [placeholder]=\"'comments.email'|translate\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t<ion-textarea formControlName=\"content\" [placeholder]=\"'comments.content'|translate\"></ion-textarea>\n\t\t\t\t</ion-item>\n\t\t\t</form>\n\t\t\t<ion-button expand=\"block\" size=\"small\" [disabled]=\"!formComment.valid && !viewMode\" (click)=\"comment()\" class=\"ion-no-margin ion-margin-top\">\n\t\t\t\t<span>{{'comments.send'|translate}}</span>\n\t\t\t</ion-button>\n\t\t</ion-list>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n\t<!-- Refresh -->\n  <app-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event)\"></app-refresher>\n  <!-- Viewing -->\n  <app-item-comment *ngIf=\"view?.id\" [comment]=\"view\" hideView=\"true\" box-shadow></app-item-comment>\n  <!-- no data -->\n  <app-no-data *ngIf=\"loaded && (!comments || comments.length < 1)\" src=\"assets/imgs/no-data-comments.svg\" [inner]=\"view?.id\">\n    <div place class=\"ion-margin-bottom\">{{'comments.noData'|translate}}</div>\n  </app-no-data>\n  <!-- Loading -->\n  <app-loading *ngIf=\"!loaded || commenting\"></app-loading>\n  <!-- List comment -->\n\t<ion-list *ngIf=\"comments && comments.length > 0\">\n\t\t<app-item-comment *ngFor=\"let comment of comments\" [comment]=\"comment\" [status]=\"status\" (onView)=\"viewComment(comment)\"></app-item-comment>\n\t</ion-list>\n\t<!-- Load more -->\n\t<app-infinite-scroll threshold=\"45%\" (ionInfinite)=\"load($event)\" *ngIf=\"!over && comments?.length > 0\"></app-infinite-scroll>\n  <!-- Go to top -->\n  <app-goto-top slot=\"fixed\" [content]=\"content\"></app-goto-top>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/comment/comment-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/comment/comment-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CommentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPageRoutingModule", function() { return CommentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment.page */ "./src/app/pages/comment/comment.page.ts");




const routes = [
    {
        path: '',
        component: _comment_page__WEBPACK_IMPORTED_MODULE_3__["CommentPage"]
    }
];
let CommentPageRoutingModule = class CommentPageRoutingModule {
};
CommentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CommentPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/comment/comment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/comment/comment.module.ts ***!
  \*************************************************/
/*! exports provided: CommentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPageModule", function() { return CommentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _comment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment-routing.module */ "./src/app/pages/comment/comment-routing.module.ts");
/* harmony import */ var _comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comment.page */ "./src/app/pages/comment/comment.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");










let CommentPageModule = class CommentPageModule {
};
CommentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _comment_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommentPageRoutingModule"]
        ],
        declarations: [_comment_page__WEBPACK_IMPORTED_MODULE_6__["CommentPage"]]
    })
], CommentPageModule);



/***/ }),

/***/ "./src/app/pages/comment/comment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/comment/comment.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1lbnQvY29tbWVudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/comment/comment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/comment/comment.page.ts ***!
  \***********************************************/
/*! exports provided: CommentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPage", function() { return CommentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_services_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/core.service */ "./src/app/services/core.service.ts");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");










let CommentPage = class CommentPage {
    constructor(route, translate, storage, core, Toast, navCtrl, platform, InAppBrowser, ngZone, alertCtrl) {
        this.storage = storage;
        this.core = core;
        this.Toast = Toast;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.InAppBrowser = InAppBrowser;
        this.ngZone = ngZone;
        this.alertCtrl = alertCtrl;
        // page of posts
        this.page = 1;
        // get params
        this.post_id = route.snapshot.params['post_id'];
        this.parent = route.snapshot.params['parent'] || 0;
        this.status = route.snapshot.params['status'];
        this.post_data = this.core.getState('last_detail') || {};
        this.view = this.core.getState('comment_viewing') || {};
        this.viewMode = !!this.view['id'];
        if (this.view['id'])
            this.core.setState('comment_viewing', null);
        this.getComments();
        // get translate
        translate.get('comments').subscribe(trans => this.trans = trans);
        // setup form comment
        this.formComment = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({ content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]) });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // get user login
        this.storage.get('login').then(login => {
            this.login = login;
            if (login) {
                // if user logined
                this.needInfo = false;
                this.formComment.removeControl('author_name');
                this.formComment.removeControl('author_email');
            }
            else {
                // if Guest
                this.needInfo = true;
                // backup data form
                let data = this.formComment.value || {};
                // setup form comment if website settings require_name_email when comment
                if (this.core.getConfig('require_name_email')) {
                    this.formComment.setControl('author_name', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data['author_name'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
                    this.formComment.setControl('author_email', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data['author_email'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])));
                }
                else {
                    this.formComment.setControl('author_name', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data['author_name']));
                    this.formComment.setControl('author_email', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data['author_email'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email));
                }
            }
        });
    }
    facebook() {
        if (!this.platform.is('cordova') || this.loading || !this.post_data['encode_link'])
            return;
        let isShow;
        let link = 'https://www.facebook.com/plugins/feedback.php?href=' + this.post_data['encode_link'];
        let option = 'location=no,hardwareback=no,zoom=no,hidden=yes,useWideViewPort=no';
        let accept = [
            link,
            'facebook.com/dialog/plugin.optin',
            'facebook.com/login.php'
        ];
        let comment = this.InAppBrowser.create(link, '_blank', option);
        this.loading = true;
        comment.on('loadstart').subscribe(res => {
            let valid = false;
            accept.forEach(url => {
                if (res['url'].indexOf(url) != -1)
                    valid = true;
            });
            if (!valid) {
                let script = { code: 'location.href = "' + link + '";' };
                comment.executeScript(script);
            }
        });
        comment.on('loaderror').subscribe(res => {
            if (!isShow) {
                comment.close();
                // set comment to null, don't show inappbrowser
                comment = null;
                this.ngZone.run(() => this.loading = false);
            }
        });
        comment.on('loadstop').subscribe(res => {
            let code;
            code = 'document.body.style.padding="50px 0";';
            comment.executeScript({ code: code });
            if (res.url.indexOf('https://www.facebook.com/plugins/feedback.php') == 0) {
                code = 'var meta = document.createElement("meta");meta.setAttribute("name", "viewport");';
                code += 'meta.setAttribute("content", "user-scalable=no,initial-scale=1.0001,maximum-scale=1.0001,viewport-fit=cover");';
                code += 'document.head.appendChild(meta);';
                code += 'document.body.style.height="100px";document.body.style.overflowY="scroll";';
                code += 'window.open=function(url){location.href=url;};';
                comment.executeScript({ code: code });
            }
            // let meta = '<meta name="viewport" content="user-scalable=no,initial-scale=1.0001,maximum-scale=1.0001,viewport-fit=cover">';
            // let code = 'var div = document.createElement("div");';
            // code += "div.innerHTML='" + meta + "';";
            // code += 'document.getElementsByTagName("head")[0].appendChild(div.firstChild);';
            // let script = { code: code };
            // comment.executeScript(script);
            if (!isShow && comment) {
                isShow = true;
                this.ngZone.run(() => this.loading = false);
                setTimeout(() => { comment.show(); }, 300);
            }
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.platform.is('cordova') || this.loading)
                return;
            let alert = yield this.alertCtrl.create({
                header: this.trans['logout']['title'],
                message: this.trans['logout']['message'],
                buttons: [
                    {
                        text: this.trans['logout']['yes'],
                        handler: () => {
                            this.loading = true;
                            let option = 'hidden=yes';
                            let logout = this.InAppBrowser.create('https://graph.facebook.com/', '_blank', option);
                            logout.on('loadstop').subscribe(() => {
                                this.ngZone.run(() => this.loading = false);
                                let script = { code: 'document.cookie = "c_user=;Path=/;domain=.facebook.com;";' };
                                logout.executeScript(script);
                                logout.close();
                            });
                        }
                    },
                    { text: this.trans['logout']['no'] }
                ]
            });
            alert.present();
        });
    }
    getComments(refresher = null, infiniteScroll = null) {
        // get comments of post
        let params = { parent: this.parent, page: (refresher ? 1 : this.page) };
        this.core.request('m_comments/' + this.post_id, { params: params }).subscribe(comments => {
            if (refresher)
                this.page = 1;
            if (infiniteScroll) {
                this.comments = this.comments.concat(comments);
                infiniteScroll.target.complete();
            }
            else if (this.page == 1)
                this.comments = comments;
            if (comments.length > 0)
                this.page++;
            else
                this.over = true;
            this.loaded = true;
            if (refresher)
                refresher.target.complete();
        }, err => {
            this.loaded = true;
            if (refresher)
                refresher.target.complete();
            if (infiniteScroll)
                infiniteScroll.target.complete();
        });
    }
    doRefresh(refresher) {
        this.over = false;
        this.core.updateTime();
        this.getComments(refresher);
    }
    load(infiniteScroll) {
        this.getComments(null, infiniteScroll);
    }
    comment() {
        if (this.viewMode) {
            this.viewMode = false;
            return;
        }
        if (this.commenting)
            return;
        // when click comment button
        this.commenting = true;
        // prepare request
        let option = { method: 'POST' };
        let body = Object.assign(this.formComment.value, {
            parent: this.parent,
            post: this.post_id,
        });
        option['body'] = body;
        // request comment
        this.core.request('comments', option, false, true).subscribe(res => {
            this.commenting = false;
            // when success
            let data = res;
            this.formComment.reset();
            // if comment is approved then reload list comments
            if (data['status'] == 'approved') {
                let comment = {
                    content: body['content'],
                    date: data['date_gmt'] + '+00:00',
                    has_child: false,
                    id: data['id'],
                    name: data['author_name'],
                    user_id: data['author']
                };
                if (data['author_avatar_urls'])
                    comment['avatar'] = data['author_avatar_urls'][96];
                this.comments.unshift(comment);
            }
            else
                this.Toast.showLongCenter(this.trans['message']['hold']).subscribe(() => { }, () => { });
        }, err => {
            // when error
            this.commenting = false;
            // prepare message
            let message;
            if (!this.trans['message'])
                return;
            if (this.trans['message'][err['error']['code']])
                message = this.trans['message'][err['error']['code']];
            else
                message = this.trans['message']['default'];
            // show Toast
            this.Toast.showLongCenter(message).subscribe(() => { }, () => { });
            // if website require for comment and user is Guest
            if (err['error']['code'] == 'rest_comment_login_required')
                this.navCtrl.navigateForward('/login');
        });
    }
    viewComment(comment) {
        this.core.setState('comment_viewing', comment);
        this.navCtrl.navigateForward(['/comment', this.post_id, { status: this.status, parent: comment['id'] }]);
    }
};
CommentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: src_app_services_core_service__WEBPACK_IMPORTED_MODULE_6__["CoreService"] },
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
CommentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/comment/comment.page.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comment.page.scss */ "./src/app/pages/comment/comment.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        src_app_services_core_service__WEBPACK_IMPORTED_MODULE_6__["CoreService"],
        _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]])
], CommentPage);



/***/ })

}]);
//# sourceMappingURL=pages-comment-comment-module-es2015.js.map