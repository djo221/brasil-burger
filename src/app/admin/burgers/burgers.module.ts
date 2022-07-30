import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BurgersRoutingModule } from './burgers-routing.module';
import { BIndexComponent } from './b-index/b-index.component';
import { BAddComponent } from './b-add/b-add.component';
import { BDeleteComponent } from './b-delete/b-delete.component';
import { BEditComponent } from './b-edit/b-edit.component';


@NgModule({
  declarations: [
    BIndexComponent,
    BAddComponent,
    BDeleteComponent,
    BEditComponent
  ],
  imports: [
    CommonModule,
    BurgersRoutingModule
  ]
})
export class BurgersModule { }
