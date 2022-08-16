import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'app-liste-panier',
  templateUrl: './liste-panier.component.html',
  styleUrls: ['./liste-panier.component.css']
})
export class ListePanierComponent implements OnInit {

  @Input() produit!: Produit;

  constructor() { }

  ngOnInit(): void {
   /*  console.table('liste de produits : ' + this.produit ) */
  }

}
