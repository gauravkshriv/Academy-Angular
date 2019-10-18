import { Component, OnInit} from '@angular/core';
import { Encryptor } from '../services/encryption.service';
import { Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
@Component({
  selector: 'app-login',
  templateUrl: './dashboard.layout.component.html',
})
export class DashboardLayoutComponent implements OnInit {
 uuid: any;
  _kst:any;
  profiledata:any;
  jwttoken: any;
  username:any;
  serverData:any;
  logout:any;
  sessiontoken: any;
showprofile: boolean = localStorage.getItem("userLoginProfile") == "true" ? true : false;
  showkyc: boolean = localStorage.getItem("kycstatus") == "true" ? true : false;
 
  
    constructor(private router: Router, private http: HttpClient,private encryptor: Encryptor) { 
     this.uuid = localStorage.getItem("uuid");
    this.jwttoken = localStorage.getItem("jwttoken");
    this.username = localStorage.getItem("username");
    this.sessiontoken = localStorage.getItem("sessiontoken");
    }
  
    ngOnInit() {
    }
  

 


  }
  