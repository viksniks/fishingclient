import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements OnInit {
  @Input() threshold: any;

  constructor() { }

  ngOnInit() { }
}
