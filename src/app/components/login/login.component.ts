import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup

  model: any = {};
  loading = false;
  // returnUrl: string;

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      admin_email:[''],
      admin_password:['']

    })
  }
  
  login() {
    this.loading = true;
    this.http.get<any>("https://localhost:7281/api/Admin/getfromdatabase").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.admin_email === this.loginForm.value.admin_email && a.admin_password === this.loginForm.value.admin_password

      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['home'])
      }else{
        alert("user not found !!");
      }
    },err=>{
      alert("something went wrong!!")
    })

  };

}
