import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BurgerRoutingModule } from './burger-routing.module';
import { BIndexComponent } from './b-index/b-index.component';
import { BEditComponent } from './b-edit/b-edit.component';
import { BAddComponent } from './b-add/b-add.component';
import { BDeleteComponent } from './b-delete/b-delete.component';


@NgModule({
  declarations: [
    BIndexComponent,
    BEditComponent,
    BAddComponent,
    BDeleteComponent
  ],
  imports: [
    CommonModule,
    BurgerRoutingModule
  ]
})
export class BurgerModule { }
