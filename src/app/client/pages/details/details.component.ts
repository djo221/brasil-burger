import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemProduit } from '../../shared/models/itemProduit';
import { Produit } from '../../shared/models/produit';
import { CartBetaService } from '../../shared/services/cart-beta.service';
import { DetailService } from '../../shared/services/detail.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {



  detail$ :Observable<ItemProduit>| undefined = undefined



  constructor( private activated: ActivatedRoute , private service:DetailService , private cartServiceBeta: CartBetaService  ) { }

/*   item$ : Observable<any> = this.cartServiceBeta.item$; */

  ngOnInit(): void {
    let detailId = this.activated.snapshot.paramMap.get('did')
    this.detail$= this.service.getItem(detailId)
   /*  this.item$.subscribe(
      value => console.log(value , 'value de item$')
    ) */
  }

  addToCart(produit: Produit) {
    this.cartServiceBeta.addToCart(produit)
  }

}

/*  this.cartServiceBeta.addItem(produit) */
