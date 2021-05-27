import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCategoryPageRoutingModule } from './detail-category-routing.module';

import { DetailCategoryPage } from './detail-category.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ComponentsModule,
    DetailCategoryPageRoutingModule
  ],
  declarations: [DetailCategoryPage]
})
export class DetailCategoryPageModule {}
