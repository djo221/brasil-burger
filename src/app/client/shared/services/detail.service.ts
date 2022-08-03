import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Catalogue } from '../models/catalogue';
import { ItemProduit } from '../models/itemProduit';


@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private detailUrl = "https://127.0.0.1:8000/api/details";

  constructor(private http: HttpClient) {
    //console.log("in the constructor")
   }

  getItem(did : any) : Observable<ItemProduit>{
    // console.log(" in the function itemProduit")
    return this.http.get<any>(this.detailUrl+'/'+did)
  }


}
