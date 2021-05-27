import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesViewPage } from './favorites-view.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritesViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesViewPageRoutingModule {}
