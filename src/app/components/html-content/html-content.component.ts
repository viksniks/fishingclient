import { Component, Input, OnInit, NgZone, ElementRef, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { CoreService } from 'src/app/services/core.service';
import { DeeplinksService } from 'src/app/services/deeplinks.service';
import { UtitlitiesService } from 'src/app/services/utitlities.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { TranslateService } from '@ngx-translate/core';
import { SanitizerService } from 'src/app/services/sanitizer.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CONTACT_FORM_INVALID_CLASS } from 'src/app/const/development';

@Component({
  selector: 'app-html-content',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './html-content.component.html',
  providers: [PhotoViewer],
  styleUrls: ['./html-content.component.scss'],
})
export class HtmlContentComponent implements OnInit {
  // html content
  @Input() innerHTML: any;
  // set true sanitizer innerHTML
  @Input() makeSafe: boolean;
  // ion-content element
  @Input() content: any;
  // data
  @Input() data: any;
  // loading
  @Input() loading: boolean = false;
  @Output() loadingChange = new EventEmitter();
  // set true handle loading
  @Input() handleLoading: boolean = true;
  // loading control
  _loadingCtrl;
  // recatcha
  recaptcha: string;
  // translate for this component
  trans: Object;
  // content div element
  contentDiv: any;

  constructor(
    translate: TranslateService,
    public element: ElementRef,
    private core: CoreService,
    private utilities: UtitlitiesService,
    private deeplinks: DeeplinksService,
    private platform: Platform,
    private PhotoViewer: PhotoViewer,
    private InAppBrowser: InAppBrowser,
    private Toast: Toast,
    private ngZone: NgZone,
    private navCtrl: NavController,
    private san: DomSanitizer,
    private sanitizer: SanitizerService,
  ) {
    translate.get('components.htmlContent').subscribe(trans => this.trans = trans);
  }

  get _loading() {
    return this.loading;
  }

  set _loading(value: boolean) {
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

  ngOnInit() {
    if (typeof this.data != 'object') {
      if (this.data) console.error('data attribute tpye should be object');
      this.data = {};
    }
  }

  ngOnChanges(change) {
    if (change['innerHTML'] && this.makeSafe) this.innerHTML = this.san.bypassSecurityTrustHtml(this.sanitizer.get(this.innerHTML));
  }

  ngAfterViewInit() {
    this.contentDiv = this.element.nativeElement.children[0];
  }

  async click(event) {
    if (this._loading) return;
    // when click element on post content
    let target = event.target;
    // if target is child of A tag set target is A tag
    let parent = target.parentElement;
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
    let option;
    // switch target
    switch (target['nodeName']) {
      case 'A':
        // if have data-app-route attribute
        let route = target.getAttribute('data-app-route');
        if (route) {
          this.navCtrl.navigateForward(route);
          return;
        }
        // when click A tag
        let href = target.getAttribute('value');
        if (!href) return;
        if (this.data['link'] && (href.indexOf('#') === 0 || href.indexOf(this.data['link'] + '#') === 0) && this.content && this.contentDiv) {
          let _href = href.split('#');
          if (_href.length > 1) href = '#' + _href[1];
          let element;
          if (href.length > 1) element = this.contentDiv.querySelector(href);
          if (element) this.content.scrollToPoint(null, this.utilities.getOffsetTop(element) - 60).catch(() => { });
        } else {
          option = { params: { url: encodeURIComponent(href) } };
          this._loading = true;
          // get deeplinks
          this.core.request('m_tools/deeplinks', option).subscribe(res => {
            this._loading = false;
            // run deeplinks
            this.deeplinks.run(res, this.data['id'], href);
          }, err => this._loading = false);
        }
        break;
      case 'IMG':
        // when click IMG tag
        if (!this.platform.is('cordova')) return;
        this._loading = true;
        let src = target.getAttribute('src');
        option = { params: { url: encodeURIComponent(src) } };
        // get final url of image
        this.core.request('m_tools/final_url', option).subscribe(res => {
          this._loading = false;
          // show image on PhotoViewer
          if (res) this.PhotoViewer.show(res, (target.getAttribute('title') || target.getAttribute('alt') || ''));
        }, err => this._loading = false);
        break;
      case 'OPEN-CAPTCHA':
        if (!this.platform.is('cordova')) return;
        // when click recaptcha
        if (target.getAttribute('key')) {
          this._loading = true;
          let optionCaptcha = 'location=no,hardwareback=no,zoom=no,hidden=yes,useWideViewPort=no';
          let captcha = this.InAppBrowser.create(this.core.getConfig('root_endpoint') + '/stionic', '_blank', optionCaptcha);
          captcha.on('loadstart').subscribe(res => {
            if (res['url'].indexOf('http://success/') == 0) {
              this.recaptcha = res['url'].substr(15, res['url'].length - 15);
              this.Toast.showLongCenter(this.trans['captcha']).subscribe(() => { }, () => { });
            }
          });
          captcha.on('loaderror').subscribe(() => {
            captcha.close();
            this.ngZone.run(() => this._loading = false);
          });
          captcha.on('loadstop').subscribe(() => {
            let code = 'var div = document.createElement("div");';
            code += 'div.setAttribute("data-sitekey", "' + target.getAttribute('key') + '");'
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
            captcha.executeScript({ code: code });
            this.ngZone.run(() => this._loading = false);
            captcha.show();
          });
        }
        break;
      case 'INPUT':
        // when click input
        if (target.getAttribute('type') != 'submit') return;
        // check is contact form 7
        if (!target['classList'].contains('wpcf7-submit') || !target['form']) return;
        let data = new FormData(target['form']);
        if (data.has('_wpcf7')) {
          if (this.recaptcha) data['g-recaptcha-response'] = this.recaptcha;
          this._loading = true;
          option = {
            method: 'POST',
            body: data
          };
          this.core.request('contact-form-7/v1/contact-forms/' + data.get('_wpcf7') + '/feedback', option, true).subscribe(res => {
            this.recaptcha = null;
            let message: string;
            this.removeInvalid(res['into']);
            if (res['invalid_fields']) this.setInvalid(res['into'], res['invalid_fields']);
            if (res['status'] == 'spam') message = this.trans['spam'];
            else message = res['message'];
            this.Toast.showShortCenter(message).subscribe(() => { }, () => { });
            if (res['status'] == 'mail_sent') target['form'].reset();
            this._loading = false;
          }, err => {
            this.Toast.showShortCenter(this.trans['canNotSubmit']).subscribe(() => { }, () => { });
            this._loading = false;
          });
        }
        break;
    }
  }

  removeInvalid(form: string) {
    if (!form) return;
    let invalid = document.querySelectorAll(form + ' .' + CONTACT_FORM_INVALID_CLASS);
    invalid.forEach(element => {
      element.parentNode && element.parentNode.removeChild(element);
    });
  }

  setInvalid(form: string, invalid: Object[]) {
    let container;
    invalid.forEach(data => {
      let span = document.createElement('span');
      span.classList.add(CONTACT_FORM_INVALID_CLASS);
      span.innerText = data['message'];
      container = document.querySelector(form + ' ' + data['into']);
      container.appendChild(span);
    });
  }
}
