import {Injectable} from '@angular/core';
import {RME_URL_MAPPING} from './RME_URL_MAPPING';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders } from '@angular/common/http';

interface Location
{
  latitude:string;
  longitude:string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    jwttoken:any;
    httpOptions:any;
    constructor(private http: HttpClient) {
      this.jwttoken = localStorage.getItem("jwttoken");
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + this.jwttoken
        })
  
      };
    }

getuserdata(body)
{
   return this.http.post(RME_URL_MAPPING.GET_USER_DATA,body,this.httpOptions);
}


}