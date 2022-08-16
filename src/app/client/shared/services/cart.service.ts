import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemProduit } from '../models/itemProduit';
import { Produit } from '../models/produit';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  //tableau d'objects
 /*  cartItems: Produit[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();
 */
  constructor() {


  }

/*   computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity! * currentCartItem.prix!;
      totalQuantityValue += currentCartItem.quantity!;
    }

    //publier les nouvelles données , pour que ceux qui souscrivent recoivent les nouvelles donées
    // publie les evenements à tous les abonnés
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);


  } */
  /* addToCart(theCartItem: Produit) {

    //Pour savoir si on a déja des items dans notre cart
    let alreadyExistInCart: boolean = false;
    let existingCartItem: Produit;

    if (this.cartItems.length > 0) {
      //trouve l'article dans la carte en se basant sur l'id

      for (let tempCartItem of this.cartItems) {
        if (tempCartItem.id == theCartItem.id) {
          existingCartItem = tempCartItem;
          break;
        }
      }
       //(existingCartItem != undefined) cette valeur revoie true si c'est pas defini
      alreadyExistInCart = (existingCartItem! != undefined)
    }

    if (alreadyExistInCart) {
      existingCartItem!.quantity!++;
    } else {
      this.cartItems.push(theCartItem);
    }

    //calculatrice quantité des du panier et total panier
    this.computeCartTotals();
  } */
}
