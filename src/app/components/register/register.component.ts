import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  register: any;
  obj: any;
  msg: string;
  // obj: any;
  // msg: string;


  constructor(private formBuilder: FormBuilder, private registerservice : RegisterService, private router:Router
  ) {}
  

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      admin_fname: ['', Validators.required],
      admin_lname: ['', Validators.required],
      admin_email: ['', Validators.required],
      admin_password: ['', [Validators.required, Validators.minLength(6)]]
           
    });
  }

  get f() { return this.registerForm.controls; }

  

  getRegisterFromData(data:any)
  {
    console.log(data)
    // let data1={
    //   "admin_id": 55,
    //   "admin_name": "smonng",
    //   "admin_age": 21,
    //   "admin_email": "string@gmail.com",
    //   "admin_password": "string",
    //   "admin_phoneno": "9440254822",
    //   "admin_image": "string.jpg",
    //   "role_id": 1
    // }
    this.registerservice.postData(data)
    .subscribe(res=>{
      alert("Signup Succesfull");
      this.registerForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something went wrong")
    })

  }

  // onSubmit() {

    
  //   this.submitted = true;

  //   // stop here if form is invalid
    
  //   if (this.registerForm.invalid) {
  //     return;
  //   }
  // }

  // constructor(private register:RegisterService,formBuilder: FormBuilder){
  //   this.register.getData().subscribe(data=>{
  //     console.warn(data)
  //   })

  // }

  

  // post_api(data:any):void
  // {
  //   this.obj.createUser(data).subscribe(data=>{
  //   this.msg="Successfully created "+data.p_Name;
  //   //Logging the response received from web api.
  //   console.log(data);
  //   })
  // }

}
