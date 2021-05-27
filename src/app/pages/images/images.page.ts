import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {
  // page of posts
  page = 1;
  // array Play posts
  posts: Object[];
  // set true when loaded posts
  loaded: boolean;
  // true if haven't posts when load more disable infiniteScroll
  over: boolean;

  constructor(
    private core: CoreService,
  ) {
    this.getPosts();
  }

  ngOnInit() {
  }

  getPosts(refresher?, infiniteScroll?) {
    // get posts with page then concat to list post
    let params = { format: 'image', page: (refresher ? 1 : this.page) };
    this.core.getPosts(params).subscribe(posts => {
      if (refresher) this.page = 1;
      if (posts.length > 0) this.page++;
      else this.over = true;
      if (infiniteScroll) {
        this.posts = this.posts.concat(posts);
        infiniteScroll.target.complete();
      }
      else this.posts = posts;
      this.loaded = true;
      if (refresher) refresher.target.complete();
    }, err => {
      if (infiniteScroll) infiniteScroll.target.complete();
      if (refresher) refresher.target.complete();
      this.loaded = true;
    });
  }

  doRefresh(refresher) {
    // when refresh
    this.over = false;
    this.core.updateTime();
    this.getPosts(refresher);
  }

  load(infiniteScroll) {
    // when scroll to bottom
    this.getPosts(null, infiniteScroll);
  }
}
