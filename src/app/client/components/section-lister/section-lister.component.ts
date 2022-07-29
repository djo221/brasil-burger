import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from '../../shared/models/Catalogue';
import { CatalogueService } from '../../shared/services/catalogue.service';

@Component({
  selector: 'lister-catalogue',
  templateUrl: './section-lister.component.html',
  styleUrls: ['./section-lister.component.css']
})
export class SectionListerComponent implements OnInit {

  produits$ : Observable<Catalogue>|null = null

  catalogue : Catalogue | null = null

  constructor(private serv:CatalogueService) { }

  ngOnInit(): void {
    this.serv.getCatalogue().subscribe((data)=>this.catalogue = data)
    this.produits$ = this.serv.getCatalogue()
    console.log(this.produits$)
  }

}
