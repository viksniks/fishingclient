import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MenusComponent } from './menus/menus.component';
import { ComponentsModule } from './components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MenusComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    ComponentsModule,
    RouterModule,
    TranslateModule,
  ],
  exports: [
    MenusComponent,
  ]
})
export class MenusModule { }
