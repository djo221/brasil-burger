import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './pages/details/details.component';
import { ClientRoutingModule } from './client-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';


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
import { CardTabsComponent } from './components/card-tabs/card-tabs.component';
import { ListerComplementsComponent } from './components/lister-complements/lister-complements.component';
import { BouttonQuantityComponent } from './components/boutton-quantity/boutton-quantity.component';
import { CartStatusComponentComponent } from './components/cart-status-component/cart-status-component.component';
import { ListerProduitPanierComponent } from './components/onents/lister-produit-panier/lister-produit-panier.component';
import { RouterModule } from '@angular/router';
import { ListePanierComponent } from './pages/liste-panier/liste-panier.component';


import { BrowserAnimationsModule }
from '@angular/platform-browser/animations';
import { TabsModule} from 'ngx-bootstrap/tabs'




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
    CardTabsComponent,
    ListerComplementsComponent,
    BouttonQuantityComponent,
    CartStatusComponentComponent,
    ListerProduitPanierComponent,
    ListePanierComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    RouterModule,
    HttpClientModule ,
    TabsModule.forRoot()// ajouter l'appel à l'API dans n'importe quel composant de l'application
  ],
  exports:[
    ListerProduitPanierComponent
  ]
})
export class ClientModule { }
