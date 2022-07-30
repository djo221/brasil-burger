import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BAddComponent } from './b-add/b-add.component';
import { BDeleteComponent } from './b-delete/b-delete.component';
import { BEditComponent } from './b-edit/b-edit.component';
import { BIndexComponent } from './b-index/b-index.component';

const routes: Routes = [
  { path : '' , component: BIndexComponent },
  { path : 'edit/:id' , component: BEditComponent },
  { path : 'add' , component: BAddComponent },
  { path : 'delete/:id' , component: BDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BurgersRoutingModule { }
