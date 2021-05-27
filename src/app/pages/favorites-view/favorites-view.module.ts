import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesViewPageRoutingModule } from './favorites-view-routing.module';

import { FavoritesViewPage } from './favorites-view.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TranslateModule,
    FavoritesViewPageRoutingModule
  ],
  declarations: [FavoritesViewPage]
})
export class FavoritesViewPageModule { }
