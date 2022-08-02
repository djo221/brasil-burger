import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: AlayoutComponent, children: [
      { path: '' , redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'dashboard' , component: DashboardComponent},

      {
        path: 'user' , loadChildren: () => import('./user/user.module')
        .then(m => m.UserModule)
      },
      {
        path: 'burger', loadChildren: () => import('./burger/burger.module')
        .then(m => m.BurgerModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
