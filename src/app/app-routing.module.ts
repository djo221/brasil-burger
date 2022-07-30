import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './client/not-found/not-found.component';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./client/client.module')
     .then( m => m.ClientModule) // on a chargé toute les routes depuis client-routing.module.ts
  },
  
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module')
     .then( m => m.AdminModule)
  },

  {
    path: '**' , component: NotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
