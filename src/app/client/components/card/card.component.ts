import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../../shared/models/produit';
import { CartBetaService } from '../../shared/services/cart-beta.service';
import { CartService } from '../../shared/services/cart.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    @Input("produits") produit : Produit|null = null;

    /* items: any[]  = [] */


  constructor(private activated: ActivatedRoute , private cartService: CartService , private serviceBeta: CartBetaService) { }

  item$ = this.serviceBeta.item$;
  ngOnInit(): void {
    
  }


   addToCart(produit: Produit){

    this.serviceBeta.addToCart(produit)
    console.log(produit)

  }
}



























/* this.serviceBeta.item$.subscribe(
  (value) => {
   this.items = value
  }
 ) */
