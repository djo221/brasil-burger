import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ItemProduit } from '../models/itemProduit';

const API_URL = environment.DETAIL_URL

@Injectable({
  providedIn: 'root'
})

export class DetailService {

  constructor(private http: HttpClient) {
    //console.log("in the constructor")
   }

   getItem(did : any) : Observable<ItemProduit>{
     // console.log(" in the function itemProduit")
     return this.http.get<any>(API_URL+'/'+did)
    }


}
