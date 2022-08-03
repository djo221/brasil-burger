import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemProduit } from '../../shared/models/itemProduit';
import { Produit } from '../../shared/models/produit';
import { DetailService } from '../../shared/services/detail.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
@Input() produit:Produit|null=null



  detail :Observable<ItemProduit>| null=null



  constructor( private activated: ActivatedRoute , private service:DetailService ) { }

  ngOnInit(): void {
    let detailId = this.activated.snapshot.paramMap.get('did')

    this.detail= this.service.getItem(detailId)


    //this.detail.subscribe()
    //ici on se branche sur le canal par lequel va passer les données
    //this.detail=this.service.getItem()
    /* this.DetailService.getItem().subscribe((data) => this.item = data) */
  }

}
