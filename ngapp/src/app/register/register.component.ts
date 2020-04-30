import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerUserData = {} as any

  constructor(private _auth: AuthService,
              private _router: Router,
              private alertService: AlertService) { }

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        this.alertService.success('User successfully registered')
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/dietdiary'])
      },
      err => {
        this.alertService.danger('Error occurred while registering user')
        console.log(err)
      }
      )
  }

}
