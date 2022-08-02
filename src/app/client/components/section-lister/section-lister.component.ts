import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit';
import { CatalogueService } from '../../shared/services/catalogue.service';


@Component({
  selector: 'lister-catalogue',
  templateUrl: './section-lister.component.html',
  styleUrls: ['./section-lister.component.css']
})
export class SectionListerComponent implements OnInit {


  @Input()  produits:Produit[]|undefined=[]



  constructor(private serv:CatalogueService) { }

  ngOnInit(): void {
  }

}
