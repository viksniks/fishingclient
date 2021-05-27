import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  host: {
    '[class.is-inner]': 'inner',
  },
  styleUrls: ['./no-data.component.scss'],
})
export class NoDataComponent implements OnInit {
  @Input() src: string;
  @Input() inner: boolean;
  @Input() noImage: boolean;
  @Input() noText: boolean;

  constructor() { }

  ngOnInit() { }

}
