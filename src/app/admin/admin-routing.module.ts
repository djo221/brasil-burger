import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlayoutComponent } from "./alayout/alayout.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";


const routes: Routes = [

  {
    path: '', component: AlayoutComponent, children: [

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'dashboard', component: DashboardComponent },

      {
        path: 'user', loadChildren: () => import('./user/user.module')
          .then(m => m.UserModule)
      },

      {
        path: 'menus', loadChildren: () => import('./menus/menus.module')
          .then(m => m.MenusModule)
      },

      {
        path: 'frites', loadChildren: () => import('./frites/frites.module')
          .then(m => m.FritesModule)
      },

      {
        path: 'burgers', loadChildren: () => import('./burgers/burgers.module')
          .then(m => m.BurgersModule)
      },

      {
        path: 'boissons', loadChildren: () => import('./boissons/boissons.module')
          .then(m => m.BoissonsModule)
      },
      /*  { path: '**' , component: NotFoundComponent} */
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
