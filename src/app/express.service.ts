import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpressService {

  url = "http://localhost:3000"
  constructor(private http: HttpClient) { }


  makeReq(){
    return this.http.get(this.url+'/');
  }
}
