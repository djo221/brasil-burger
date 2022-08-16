import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICredential } from '../_interface/credential';
import { IToken } from '../_interface/token';

const LOGIN_URL = environment.LOGIN_URL

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor( private http: HttpClient) { }

  login(credentials: ICredential): Observable<IToken  >{
    return this.http.post<IToken>(LOGIN_URL, credentials)
  }

}
