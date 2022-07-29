import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClayoutComponent } from './clayout/clayout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { PanierComponent } from './pages/panier/panier.component';



const routes: Routes = [

 {
  path: '', component: ClayoutComponent, children: [

    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'catalogue', component: CatalogueComponent },
    { path: 'panier', component: PanierComponent  },

    { path: '**' , component: NotFoundComponent}
  ]
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
