import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit';
import { CartBetaService } from '../../shared/services/cart-beta.service';
import { CatalogueService } from '../../shared/services/catalogue.service';


@Component({
  selector: 'lister-catalogue',
  templateUrl: './section-lister.component.html',
  styleUrls: ['./section-lister.component.css']
})
export class SectionListerComponent implements OnInit {


  @Input() produits: Produit[]|undefined=[]



  constructor(private serv:CatalogueService , private serviceBeta: CartBetaService) { }

  ngOnInit(): void {
    this.produits!.forEach( (a:any) => {
      Object.assign(a , {quantity:1, total: a.prix});
    });
  }

  addToCart(produit : any){
    this.serviceBeta.addToCart(produit);
  }

}
