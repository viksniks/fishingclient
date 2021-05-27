import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesPage } from './favorites.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritesPage,
    children: [
      {
        path: 'view',
        loadChildren: () => import('../favorites-view/favorites-view.module').then(m => m.FavoritesViewPageModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('../favorites-setting/favorites-setting.module').then(m => m.FavoritesSettingPageModule)
      },
      {
        path: '',
        redirectTo: '/home/favorites/view',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesPageRoutingModule { }
