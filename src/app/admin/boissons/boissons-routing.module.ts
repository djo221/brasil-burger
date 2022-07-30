import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsAddComponent } from './bs-add/bs-add.component';
import { BsDeleteComponent } from './bs-delete/bs-delete.component';
import { BsEditComponent } from './bs-edit/bs-edit.component';
import { BsIndexComponent } from './bs-index/bs-index.component';

const routes: Routes = [
  { path : '' , component: BsIndexComponent },
  { path : 'edit/:id' , component: BsEditComponent },
  { path : 'add' , component: BsAddComponent },
  { path : 'delete/:id' , component: BsDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoissonsRoutingModule { }
