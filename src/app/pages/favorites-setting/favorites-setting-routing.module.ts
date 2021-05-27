import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesSettingPage } from './favorites-setting.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritesSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesSettingPageRoutingModule {}
