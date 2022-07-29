import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of} from 'rxjs';
import { Post } from '../models/post';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url:string = "http://localhost:3000/posts"

  constructor(private http:HttpClient) {}

      all():Observable<Post[]> {
        return this.http.get<Post[]>(this.url)
      }

      post$ = (id:number) => {
        return this.http.get<Post>(`${this.url}/${id}`)
      }

}
