import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FritesRoutingModule } from './frites-routing.module';
import { FDeleteComponent } from './f-delete/f-delete.component';
import { FEditComponent } from './f-edit/f-edit.component';
import { FAddComponent } from './f-add/f-add.component';
import { FIndexComponent } from './f-index/f-index.component';




@NgModule({
  declarations: [
    FDeleteComponent,
    FEditComponent,
    FAddComponent,
    FIndexComponent,
  ],
  imports: [
    CommonModule,
    FritesRoutingModule
  ]
})
export class FritesModule { }
