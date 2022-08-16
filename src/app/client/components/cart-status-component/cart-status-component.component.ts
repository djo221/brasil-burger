import { Component, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit';
import { CartBetaService } from '../../shared/services/cart-beta.service';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cart-status-component',
  templateUrl: './cart-status-component.component.html',
  styleUrls: ['./cart-status-component.component.css']
})
export class CartStatusComponentComponent implements OnInit {

  public produit : Produit[] = []

  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  public totalItem: number = 0
  constructor(private cartService: CartService  ,private serviceBeta: CartBetaService) { }

  ngOnInit(): void {
    this.updateCartStatus();
    console.log(this.updateCartStatus())

   /*  this.serviceBeta.getProduit()
     .subscribe(res =>{
       this.produit = res
    })not working */
  }


  updateCartStatus() {

  /*   //subscribe pour le montant total du panier
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    //subscribe pour la quantite du panier
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
 */
  }

}
