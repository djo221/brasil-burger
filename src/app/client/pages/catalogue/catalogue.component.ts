import { Component, Input, OnInit } from '@angular/core';
import { Observable , of } from 'rxjs';
import { Catalogue } from '../../shared/models/catalogue';
import { CatalogueService } from '../../shared/services/catalogue.service';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

   catalogue : Catalogue|undefined

   constructor(private CatalogueService : CatalogueService) { }

   ngOnInit(): void {

    this.CatalogueService.getCatalogue().subscribe((data) => this.catalogue = data)

   }

}
