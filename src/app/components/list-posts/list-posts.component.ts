import { Component, OnInit, Input, Output } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CoreService } from '../../services/core.service';
import { EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DEFAULT_LIST_POSTS_TEMPLATE } from '../../const/general';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss'],
})
export class ListPostsComponent implements OnInit {
  @Input() posts: Object[];
  @Input() templates: string;
  @Output() onClick = new EventEmitter<Object>();
  square: Object = {
    'list': true,
    'reverse': true,
  };
  icons: any = {
    'image': 'image',
    'play': 'play-circle',
  };

  constructor(
    private storage: Storage,
    private core: CoreService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    if (!this.templates) {
      if (this.core.getConfig('templates')) this.setTemplates(this.core.getConfig('templates'));
      else this.storage.get('templates').then(templates => this.setTemplates(templates));
    }
  }

  setTemplates(templates: string) {
    if (templates) this.templates = templates;
    else this.templates = DEFAULT_LIST_POSTS_TEMPLATE;
  }

  openPost(post: Object) {
    if (this.onClick.observers.length < 1) {
      this.navCtrl.navigateForward(['/detail', post['id']]);
    }
    // event when click to posts
    this.onClick.emit(post);
  }
}
