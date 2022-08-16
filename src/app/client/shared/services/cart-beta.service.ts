import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class CartBetaService {

  cartItems: Produit[] = [];
  public Listproduit = new BehaviorSubject<any[]>([]);

  constructor() {
    let existingCartItem = JSON.parse(localStorage.getItem('produits') || '[]');

    if (!existingCartItem) {
      existingCartItem = [];
    }
    this.itemSubject.next(existingCartItem);

   }

  private itemSubject =  new BehaviorSubject<any[]>([]);
  item$ : Observable<any> = this.itemSubject.asObservable();

  addToCart(produit: any){
    this.item$.pipe(
      take(1),
      map(
        (items) => {
       /* const el = items.find(el => el.id === produit.id) */
        if(!this.isExistProduit(items, produit.id)){
          console.log(produit)
           produit.quantity = 1;
          items.push(produit)
        }else{
          produit.quantity!++
        }
        localStorage.setItem('produits', JSON.stringify(items) )

        }
      )
    ).subscribe();
  }

  deleteCartItem(){
    
  }
  isExistProduit(tableau: any, idprod: number) {
    return tableau.find((pro: any) => {
      // console.log(pro.id);

      return pro.id === idprod;
    });

  }
}
