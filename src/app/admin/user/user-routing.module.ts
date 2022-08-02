import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UAddComponent } from './u-add/u-add.component';
import { UDeleteComponent } from './u-delete/u-delete.component';
import { UEditComponent } from './u-edit/u-edit.component';
import { UIndexComponent } from './u-index/u-index.component';

const routes: Routes = [

  { path: '', component: UIndexComponent }, // ici ça veut dire qu'on a /admin/user
  { path: 'edit/:id', component: UEditComponent }, // on aura des parametres ici ( a chaque que je recois qlq chose il sera dans la variable id)
  { path: 'add', component: UAddComponent },
  { path: 'delete', component: UDeleteComponent } //on aura des parametres ici ( a chaque que je recois qlq chose il sera dans la variable id)

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
