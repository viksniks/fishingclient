import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class DeeplinksService {

  constructor(
    private router: Router,
    private InAppBrowser: InAppBrowser,
  ) { }

  run(data: Object, exclude: Number = null, href: string = null, inapp?: boolean) {
    href = (href || '').trim();
    // switch type deeplinks
    if (data) switch (data['type']) {
      case 'post':
        if (data['id'] == exclude) return;
        // open Detail page for post
        this.router.navigate(['/detail', data['id']]);
        break;
      case 'page':
        if (data['id'] == exclude) return;
        // open Detail page with type: 1 for Page
        this.router.navigate(['/detail', data['id'], { type: 1 }]);
        break;
      case 'category': this.router.navigate(['/detail-category', data['id']]); break; // open detail category
    } else if (href) {
      if (inapp && /^https?:\/\//i.test(href)) {
        // open inappbrowser
        let browser = this.InAppBrowser.create(href, '_blank');
        browser.show();
      } else {
        // open system browser
        window['cordova'].InAppBrowser.open(href, "_system");
      }
    }
  }
}
