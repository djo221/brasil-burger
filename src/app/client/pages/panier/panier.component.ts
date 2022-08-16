import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../../shared/models/produit';
import { CartBetaService } from '../../shared/services/cart-beta.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  produits: Produit[]|undefined=[]

  constructor(private serviceBeta : CartBetaService) { }

  item$ = this.serviceBeta.item$

  ngOnInit(): void {

  }

}
