import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesSettingPageRoutingModule } from './favorites-setting-routing.module';

import { FavoritesSettingPage } from './favorites-setting.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TranslateModule,
    FavoritesSettingPageRoutingModule
  ],
  declarations: [FavoritesSettingPage]
})
export class FavoritesSettingPageModule {}
