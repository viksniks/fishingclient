import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { HomePage } from './home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: 'terms',
            loadChildren: () => import('../pages/detail/detail.module').then(m => m.DetailPageModule),
            data: { id: 0, type: 1, slug: 'app-terms', viewMode: 1 }
          },
          {
            path: 'news',
            loadChildren: () => import('../pages/news/news.module').then(m => m.NewsPageModule)
          },
          {
            path: 'favorites',
            loadChildren: () => import('../pages/favorites/favorites.module').then(m => m.FavoritesPageModule)
          },
          {
            path: 'view',
            redirectTo: '/home/favorites/view',
            pathMatch: 'full'
          },
          {
            path: 'setting',
            redirectTo: '/home/favorites/setting',
            pathMatch: 'full'
          },
          {
            path: 'videos',
            loadChildren: () => import('../pages/videos/videos.module').then(m => m.VideosPageModule)
          },
          {
            path: 'images',
            loadChildren: () => import('../pages/images/images.module').then(m => m.ImagesPageModule)
          },
          {
            path: 'categories',
            loadChildren: () => import('../pages/categories/categories.module').then(m => m.CategoriesPageModule)
          },
          {
            path: '',
            redirectTo: '/home/news',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule { 

}
