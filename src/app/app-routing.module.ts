
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';
import { NotFoundErrorComponent } from './_utils/not-found-error/not-found-error.component';



const routes: Routes = [

  {
    path: '', loadChildren: () => import('./client/client.module')
      .then(m => m.ClientModule) // on a chargé toute les routes depuis client-routing.module.ts
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule), canActivate:[AuthGuard]
  },
  {
    path:'auth', loadChildren: () => import('./auth/auth.module')
    .then(m => m.AuthModule)
  }

  ,
  {
    path: '**', component: NotFoundErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
