import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlayoutComponent } from "./alayout/alayout.component";
import { SidemenuComponent } from "./components/sidemenu/sidemenu.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";



@NgModule({
  declarations: [
    AlayoutComponent,
    DashboardComponent,
    SidemenuComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
