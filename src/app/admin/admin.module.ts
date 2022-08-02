import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';


@NgModule({
  declarations: [
    AlayoutComponent,
    DashboardComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
