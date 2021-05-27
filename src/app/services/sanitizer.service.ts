import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SanitizerService {

  constructor() { }

  get(html: string): string {
    var i;
    // prepare html from content of detail post
    if (!html) return;
    let tmp = document.createElement('div');
    tmp.innerHTML = html;
    // a tag
    let a = tmp.querySelectorAll('a');
    for (i = 0; i < a.length; i++) {
      a[i].setAttribute('value', (a[i].getAttribute('href') || '').trim());
      a[i].removeAttribute('href');
    }
    // form tag
    let form = tmp.querySelectorAll('form');
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
    }
    // iframe tag
    let iframe = tmp.querySelectorAll('iframe');
    for (i = 0; i < iframe.length; i++) {
      // enable api for stop video when leave Detail page
      if (iframe[i].src) {
        if (iframe[i].src.split('?').length > 1) iframe[i].src += "&enablejsapi=1&api=postMessage";
        else iframe[i].src += "?enablejsapi=1&api=postMessage";
      }
      if (Number(iframe[i].width) > window.innerWidth) {
        iframe[i].height = Number(iframe[i].height) / (Number(iframe[i].width) / window.innerWidth) + 'px';
      }
    }

    html = tmp.innerHTML;
    return html;
  }
}
