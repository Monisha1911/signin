import { Component } from '@angular/core';
import { RegisterService } from './Services/register.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'signin';
  data:any;


  constructor(private register:RegisterService){
    this.register.getData().subscribe(data=>{
      console.warn(data)
    }) 
  }

  post_api(data:any)
  {
    console.warn(data)
    this.register.postData(data).subscribe((result)=>{
      console.warn(result)

    })

  }


}

