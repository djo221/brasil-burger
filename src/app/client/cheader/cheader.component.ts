import { Component, OnInit } from '@angular/core';
import { CartBetaService } from '../shared/services/cart-beta.service';


@Component({
  selector: 'app-cheader',
  templateUrl: './cheader.component.html',
  styleUrls: ['./cheader.component.css']
})
export class CheaderComponent implements OnInit {

  constructor(private serviceBeta: CartBetaService) { }

  ngOnInit(): void {

  }

}
