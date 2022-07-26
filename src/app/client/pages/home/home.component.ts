import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BurgerApiService } from '../../shared/services/burger-api.service';
import { Catalogue } from '../../shared/models/catalogue';
import { Produit } from '../../shared/models/produit';
import { CatalogueService } from '../../shared/services/catalogue.service';
import { Router } from '@angular/router';
import { DetailService } from '../../shared/services/detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  //produits$: Observable<Catalogue> | null = null

  catalogue: Catalogue | undefined

  product: any



  /*   posts$ : Observable<Post[]> | null = null */

  constructor(
    private http: HttpClient,
    public burgerApiService: BurgerApiService,
    private CatalogueService: CatalogueService,
    private Router: Router,
    private DetailService : DetailService
  ) { }


  title = 'api-angular';
  private detail: any;

  ngOnInit(): void {

   
    /* //call api exterieur (rapidapi pour burger)
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'burgers1.p.rapidapi.com',
      'x-rapidapi-key': '16bf3be1d1msh32cfc0edbc754d8p1251e0jsnabe1ace1e839'
    });
    this.http
      .get<any>('https://burgers1.p.rapidapi.com/burgers', {
        headers: headers
      })
      .subscribe(data => {
        console.log(data);
      }); */


      this.CatalogueService.getCatalogue().subscribe((data) => this.catalogue = data)
    }// end ngOninit



  //fonction api exterieur
  getBurger(): any {
    this.burgerApiService.getBurger().subscribe(
      data => {
        console.log(data);
      }, err => {
        console.log(err)
      }
    )
  }









}
