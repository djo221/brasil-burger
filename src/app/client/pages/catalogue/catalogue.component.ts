import { Component, Input, OnInit } from '@angular/core';
import { Observable , of } from 'rxjs';
import { Catalogue } from '../../shared/models/Catalogue';
import { Produit } from '../../shared/models/produit';
import { CatalogueService } from '../../shared/services/catalogue.service';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {



   produits$ : Observable<Catalogue>|null = null

   catalogue : Catalogue | null = null

   constructor(private serv:CatalogueService) { }

   ngOnInit(): void {
       this.serv.getCatalogue().subscribe((data)=>this.catalogue = data)
       this.produits$ = this.serv.getCatalogue()
       console.log(this.produits$)
   }

}
