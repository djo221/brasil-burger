import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoissonsRoutingModule } from './boissons-routing.module';
import { BsEditComponent } from './bs-edit/bs-edit.component';
import { BsIndexComponent } from './bs-index/bs-index.component';
import { BsAddComponent } from './bs-add/bs-add.component';
import { BsDeleteComponent } from './bs-delete/bs-delete.component';


@NgModule({
  declarations: [
    BsEditComponent,
    BsIndexComponent,
    BsAddComponent,
    BsDeleteComponent
  ],
  imports: [
    CommonModule,
    BoissonsRoutingModule
  ]
})
export class BoissonsModule { }
