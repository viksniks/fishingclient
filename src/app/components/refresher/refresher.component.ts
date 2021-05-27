import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.component.html',
  styleUrls: ['./refresher.component.scss'],
})
export class RefresherComponent implements OnInit {
  @Input() disabled: any;
  @Input() slot: any;

  constructor() { }

  ngOnInit() {
    if (!this.slot) {
      console.error('Make sure you use: <app-refresher slot="fixed">');
      return;
    }
  }
}
