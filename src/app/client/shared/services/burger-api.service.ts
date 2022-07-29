import { Injectable } from '@angular/core';
//angular http client
import { HttpClient } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

//environement ( fima declarer samay constantes)
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
const API_HOST = environment.API_HOST;

@Injectable({
  providedIn: 'root'
})
export class BurgerApiService {

  constructor(private httpClient: HttpClient) { }

  //get burgers
  getBurger(): Observable<any> {
    return this.httpClient.get<any>(`${API_URL}`,
      {
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': API_HOST
        }
      })/* .pipe(catchError(this.errorHandle)); */
  }

  /* errorHandle(error): any {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      //get client side error
      errorMessage = error;
    } else {
      //get server side error
      errorMessage = error;
    }

    return throwError (errorMessage);
  } */
}
