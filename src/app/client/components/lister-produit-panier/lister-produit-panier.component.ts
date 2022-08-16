import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'app-lister-produit-panier',
  templateUrl: './lister-produit-panier.component.html',
  styleUrls: ['./lister-produit-panier.component.css']
})
export class ListerProduitPanierComponent implements OnInit {

  @Input() produit!: Produit;

  constructor() { }

  ngOnInit(): void {
  }

}
