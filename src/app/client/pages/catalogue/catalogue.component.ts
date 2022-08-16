import { Component, Input, OnInit } from '@angular/core';
import { Catalogue } from '../../shared/models/catalogue';
import { CatalogueService } from '../../shared/services/catalogue.service';
import { Router } from '@angular/router'
import { Produit } from '../../shared/models/produit';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  catalogue: Produit[] | undefined


  constructor(private CatalogueService: CatalogueService, private router: Router) { }



  ngOnInit(): void {
    this.CatalogueService.getCatalogue().subscribe((data) => this.catalogue = data?.produits )
  }


  goTopage(type: string) {
    this.CatalogueService.getCatalogue()
    .subscribe((data) => this.catalogue = data?.produits?.filter(prod => prod['@type'] == type) )

    console.log('test ===> '
    + this.CatalogueService.getCatalogue().subscribe((data) =>console.log(data?.produits) ) )
  }

}
