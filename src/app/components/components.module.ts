import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NoDataComponent } from './no-data/no-data.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { LoadingComponent } from './loading/loading.component';
import { RefresherComponent } from './refresher/refresher.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { ItemCommentComponent } from './item-comment/item-comment.component';
import { GotoTopComponent } from './goto-top/goto-top.component';
import { HtmlContentComponent } from './html-content/html-content.component';

@NgModule({
  declarations: [
    NoDataComponent,
    ListPostsComponent,
    LoadingComponent,
    RefresherComponent,
    InfiniteScrollComponent,
    ItemCommentComponent,
    GotoTopComponent,
    HtmlContentComponent,
  ],
  imports: [
    IonicModule,
    PipesModule,
    CommonModule,
    TranslateModule,
  ],
  exports: [
    NoDataComponent,
    ListPostsComponent,
    LoadingComponent,
    RefresherComponent,
    InfiniteScrollComponent,
    ItemCommentComponent,
    GotoTopComponent,
    HtmlContentComponent,
  ]
})
export class ComponentsModule { }
