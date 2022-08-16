import { Component, OnInit } from '@angular/core';
import { ICredential } from 'src/app/_interface/credential';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: ICredential = {
    login: '' ,
    password: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form)
    this.authService.login(this.form).subscribe(
      data => console.log(data.token),
      err => console.log(err)
    )
  }

}
