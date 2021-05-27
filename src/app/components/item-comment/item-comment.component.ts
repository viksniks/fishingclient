import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-comment',
  templateUrl: './item-comment.component.html',
  styleUrls: ['./item-comment.component.scss'],
})
export class ItemCommentComponent implements OnInit {
  @Input() comment: any = {};
  @Input() status: any = {};
  @Input() hideView: boolean;
  @Output() onView = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() { }

  viewComment(comment: Object) {
    // event when click view/reply button
    this.onView.emit(comment);
  }
}
