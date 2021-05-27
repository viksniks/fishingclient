import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { CoreService } from '../../services/core.service';
import { EventsService } from 'src/app/services/events.service';
import { ActivatedRoute } from '@angular/router';
import { IonSlides, NavController } from '@ionic/angular';
import { coverFlow } from 'src/app/const/slidesAnimations';
import { SubSink } from 'src/app/classes/subsink';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  // Slides sticky posts
  slides: IonSlides;
  // slideOptions
  slideOptions = Object.assign({}, coverFlow, {
    loop: true,
    slidesPerView: 1,
  });
  // array sticky posts
  sticky: Object[];
  // page of latest posts
  page = 1;
  // array 4 posts for templates column
  colPosts: Object[];
  // array latest posts
  posts: Object[];
  // set true when first load finish hide loading spinner
  loaded: boolean;
  // true if haven't posts when load more disable infiniteScroll
  over: boolean;
  // categories param
  categories: string;
  // subsink
  subs = new SubSink();

  constructor(
    route: ActivatedRoute,
    private core: CoreService,
    events: EventsService,
    private navCtrl: NavController,
  ) {
    this.categories = route.snapshot.params['categories'];
    this.getSticky();
    this.getPosts();
    this.subs.sink = events.watchOffline().subscribe(() => {
      if (this.loaded && (!this.posts || this.posts.length < 1)) {
        this.loaded = false;
        this.getSticky();
        this.getPosts();
      }
    });
  }

  @ViewChild('slides', { static: false }) set slidesElement(slides) {
    if (slides) {
      this.slides = slides;
      if (this.slides.update) {
        this.slides.update();
        this.slides.slideTo(1);
        this.slides.startAutoplay();
      }
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  // ionViewDidEnter() {
  //   if (this.slides) {
  //     this.slides.startAutoplay();
  //   }
  // }

  // ionViewWillLeave() {
  //   if (this.slides) {
  //     this.slides.stopAutoplay();
  //   }
  // }

  getSticky() {
    if (this.categories) return;
    // get sticky posts
    this.core.getPosts({ sticky: true }).subscribe(posts => {
      // reset sticky data to remove element, setTimeout fix problem slide not update data when loop:true
      this.sticky = [];
      setTimeout(() => this.sticky = posts);
    }, err => { });
  }

  getPosts(refresher = null, infiniteScroll = null) {
    // get posts with page then concat to list post
    let params = { page: (refresher ? 1 : this.page) };
    if (this.categories) params['categories'] = this.categories;
    this.core.getPosts(params).subscribe(posts => {
      if (refresher) this.page = 1;
      if (this.page == 1) {
        if (posts.length > 4) this.colPosts = posts.splice(0, 4);
        else this.colPosts = null;
      }
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
    this.getSticky();
  }

  load(infiniteScroll) {
    // when scroll to bottom
    this.getPosts(null, infiniteScroll);
  }

  async openStickySlide(event) {
    if (!this.slides || !this.sticky) return;
    let target: HTMLElement = event.target;
    if (target.classList.contains('swiper-pagination') || target.classList.contains('swiper-pagination-bullet')) return;
    this.slides.stopAutoplay();
    let active = await this.slides.getActiveIndex();
    if (active === 0) active = this.sticky.length;
    let post = (active - 1) % this.sticky.length;
    if (post >= 0 && this.sticky[post]) {
      this.navCtrl.navigateForward(['/detail', this.sticky[post]['id']]);
    }
  }
}
