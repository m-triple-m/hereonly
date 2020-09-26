import { Component } from '@angular/core';
import { ExpressService } from './express.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'righthere';


  constructor(private service: ExpressService){

  }

  makeIt(){
    this.service.makeReq().subscribe((data) => {
      console.log(data);
    })
  }

}
