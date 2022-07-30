import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit';
import { CatalogueService } from '../../shared/services/catalogue.service';


@Component({
  selector: 'lister-catalogue',
  templateUrl: './section-lister.component.html',
  styleUrls: ['./section-lister.component.css']
})
export class SectionListerComponent implements OnInit {

/*   produits$ : Observable<Catalogue>|null = null */

  @Input()  produits:Produit[]|undefined=[]



  constructor(private serv:CatalogueService) { }

  ngOnInit(): void {

 /*    this.produits = this.serv.getCatalogue() */
    // console.log(this.produits$)
  }

}
