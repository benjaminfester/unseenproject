import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUserData = {} as any

  constructor() { }

  ngOnInit(): void {
  }

  loginUser() {
    console.log()
  }

}
