import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  // returnUrl: string;

  constructor() { }

  ngOnInit(): void {
  }
  
  login() {
    this.loading = true;

  };

}
