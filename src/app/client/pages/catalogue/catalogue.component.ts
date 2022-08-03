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

    
   /*  this.CatalogueService.getCatalogue().subscribe((data) => this.catalogue = data ) */
    this.CatalogueService.getCatalogue().subscribe((data) => this.catalogue = data?.produits )
    //this.product = data.produits
  }


  goTopage(type: string) {
    //this.router.navigate([`${pageName}`]);

    this.CatalogueService.getCatalogue().subscribe((data) => this.catalogue = data?.produits?.filter(prod => prod.type == type) )

  }

}
