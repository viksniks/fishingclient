import { Component, OnInit, Input, NgZone } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { SubSink } from 'src/app/classes/subsink';

@Component({
  selector: 'app-goto-top',
  templateUrl: './goto-top.component.html',
  host: {
    '[hidden]': '!show'
  },
  styleUrls: ['./goto-top.component.scss'],
})
export class GotoTopComponent implements OnInit {
  @Input() content: IonContent;
  @Input() slot: any;
  @Input() color: string;
  show: boolean;
  scrollElement;
  subs = new SubSink();

  constructor(
    private ngZone: NgZone,
  ) { }

  ngOnInit() {
    if (!this.slot) {
      console.error('Make sure you use: <app-goto-top slot="fixed">');
      return;
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  async ngAfterViewInit() {
    if (!this.content) return;
    this.content.scrollEvents = true;
    this.scrollElement = await this.content.getScrollElement();
    let div = document.createElement('div');
    div.setAttribute('style', 'padding-top: var(--ion-padding-goto-top)');
    this.scrollElement.appendChild(div);
    this.subs.sink = this.content.ionScrollEnd.subscribe(() => {
      if (!this.scrollElement) return;
      if (this.scrollElement.scrollTop > (this.scrollElement.clientHeight)) this.ngZone.run(() => this.show = true);
      else if (this.show) this.ngZone.run(() => this.show = false);
    });
  }

  gotoTop() {
    if (!this.content) return;
    this.content.scrollToTop();
    this.ngZone.run(() => this.show = false);
  }
}
