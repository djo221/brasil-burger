import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Catalogue } from '../models/Catalogue';


@Injectable({
  providedIn: 'root'
})


export class CatalogueService {

  private url = "https://127.0.0.1:8000/api/burgers";

  constructor(private http:HttpClient) {
  }



  getCatalogue():Observable<Catalogue> {
    return this.http.get<Catalogue>(this.url).pipe(

      map(
        data => {
          data.produits = [...data.menu,...data.burger]
          return data
         }
       )
    )

  }

}

/* all():Observable<Catalogue[]> {
  return this.http.get<Catalogue[]>(this.url).pipe(
    map(data=>{
      data.produits=[...data.burger , ...data.menu]
    })
  )
}
 */
