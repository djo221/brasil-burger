import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './pages/details/details.component';
import { ClientRoutingModule } from './client-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutModule } from '../layout/layout.module';

import { AsideComponent } from './components/aside/aside.component';
import { CardComponent } from './components/card/card.component';
import { SectionListerComponent } from './components/section-lister/section-lister.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { PanierComponent } from './pages/panier/panier.component';

import { HttpClientModule } from '@angular/common/http';
import { ClayoutComponent } from './clayout/clayout.component';
import { CheaderComponent } from './cheader/cheader.component';
import { CfooterComponent } from './cfooter/cfooter.component';







@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    NotFoundComponent,
    AsideComponent,
    CardComponent,
    SectionListerComponent,
    CatalogueComponent,
    PanierComponent,
    ClayoutComponent,
    CheaderComponent,
    CfooterComponent,

  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutModule,

    HttpClientModule // on ajouter l'appel à l'API dans n'importe quel composant de l'application
  ]
})
export class ClientModule { }
