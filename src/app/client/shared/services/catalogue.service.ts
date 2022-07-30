import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Catalogue } from '../models/catalogue';


@Injectable({
  providedIn: 'root'
})


export class CatalogueService {

  private url = "http://localhost:3000/catalogue";


  constructor(private http:HttpClient) {
  }



  getCatalogue():Observable<Catalogue> {
    return this.http.get<any>(this.url).pipe( //il connait le format on met any

      map(
        data => {
          let catalogue: Catalogue = {
            menu:data ['hydra:member'][0].menu ,
            burger: data ['hydra:member'][1].burger ,
            produits : data= [...data['hydra:member'][0].menu,...data['hydra:member'][1].burger]
          }
          console.log(data)
          return catalogue
         }
       )
    )

  }

}

