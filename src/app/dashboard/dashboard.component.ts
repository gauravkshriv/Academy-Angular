import { Component, OnInit } from '@angular/core';
declare var jquery:any;
import { Router} from '@angular/router';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
declare var $ :any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
    profiledata:any;
    serverdata:any; 
    jwttoken:any;
    uuid:any;
    _kst:any;
    serverData:any;   
    profileimg:any;
    username:any;
    sessiontoken:any;
    messageSuccess:any;
    email:any;
    show: boolean = localStorage.getItem("userLoginStatus")  == "true" ? true : false;
    showprofile: boolean = localStorage.getItem("userLoginProfile") == "true" ? true : false;
    showkyc: boolean = localStorage.getItem("kycstatus") == "true" ? true : false;
     basicstatus: boolean = localStorage.getItem("BasicStatus") == "true" ? true : false;
  constructor(private http: HttpClient, private router: Router) { 
  this.uuid= localStorage.getItem("uuid");
  this.jwttoken = localStorage.getItem("jwttoken");
  this.sessiontoken = localStorage.getItem("sessiontoken");
  // this.username = localStorage.getItem("username");
  // this.email = localStorage.getItem("email");
  }

  ngOnInit(){
  //  this.GetUSer();
  //  this.ValidateLogin();

 };

 notlogin(){
  swal({
   title:"Authentication Error!!!",
   text: "Kindly Login to view this page",
   icon: "error",
   buttons: {
     cancel: {
       text: "Cancel",
       value: false,
       visible: true,
       className: "",
       closeModal: true,
     },
     confirm: {
       text: "Login Now",
       value: true,
       visible: true,
       className: "",
       closeModal: true,
     }
     
   },
   // button: false,
   //closeOnClickOutside: false
 }) .then(data => {
   if(data)
     window.location.href="http://account.rmehub.in/?referral=academy";
 });

}

}
