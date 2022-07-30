import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { MIndexComponent } from './m-index/m-index.component';
import { MEditComponent } from './m-edit/m-edit.component';
import { MAddComponent } from './m-add/m-add.component';
import { MDeleteComponent } from './m-delete/m-delete.component';


@NgModule({
  declarations: [
    MIndexComponent,
    MEditComponent,
    MAddComponent,
    MDeleteComponent
  ],
  imports: [
    CommonModule,
    MenusRoutingModule
  ]
})
export class MenusModule { }
