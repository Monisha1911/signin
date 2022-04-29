import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Register } from '../Model/register';
//import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url1="https://localhost:7281/api/Admin/getfromdatabase";
  registers:Register[]=[];
  // register:Register;
 

  constructor(private http:HttpClient) { }
   getData()
  {    
    return this.http.get(this.url1);
  }

 url="https://localhost:7281/api/Admin/inserttodatabase";


  postData(data:any)
  {
    alert()
    console.log(data)
    return this.http.post(this.url,data);
  }

   // createUser(register:Register):Observable<Register>
  // {
  //   return this.http.post<Register>(this.req,register,{
  //     headers:new HttpHeaders({
  //       'Content-Type':'application/json;charset=UTF-8',
  //       'Access-Control-Allow-Origin':'*',
  //       'Access-Control-Allow-Method':'*'
        
  //     })
  //   });
  // }

  // req:string="https://localhost:7071/api/Admin";
  
  // //Method to get the list of all players from the API.
  // getData():Observable<Register[]>
  // {
  //   return this.http.get<Register[]>(this.req);
  // }


}

