import { Component, OnInit } from '@angular/core';
import * as _swal from 'sweetalert';
import { Encryptor } from '../services/encryption.service';
import {SweetAlert} from 'sweetalert/typings/core';
import { Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const swal: SweetAlert = _swal as any;
declare var $ :any;
@Component({
  selector: 'app-basiccourse',
  templateUrl: './basiccourse.component.html',
  styleUrls: ['./basiccourse.component.css']
})
export class BasiccourseComponent implements OnInit {
  uuid:any;
  jwttoken:any;
  username:any;
  sessiontoken:any;
  show: boolean = localStorage.getItem("userLoginStatus")  == "true" ? true : false;
  basicstatus: boolean = localStorage.getItem("BasicStatus") == "true" ? true : false;
  constructor(private router: Router, private http: HttpClient,private encryptor: Encryptor) { 
    this.uuid = localStorage.getItem("uuid");
    this.jwttoken = localStorage.getItem("jwttoken");
    this.username = localStorage.getItem("username");
    this.sessiontoken = localStorage.getItem("sessiontoken");
  }

  ngOnInit( ) {
  }
  openExam(){
    // window.open ("http://academy.rmehub.in/mcqdetail","mywindow","status=1,toolbar=0,width=100%,height=auto,resizable=yes");
    // this.router.navigate(["/mcqdetail"]);
    swal({
      title:"All The Best",
      text: "Our Exam will be held online on 25 August 2019",
      icon: "info",
    });
  }
  notlogin(){
    swal({
     title:"Authentication Error!!!",
     text: "Please complete your Personal profile and Kyc Detail on our Portal",
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
         text: "Complete Information",
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

 SendLoadData() {
  var dataencript = [
    { jwttoken: localStorage.getItem("jwttoken") },
    { uuid: localStorage.getItem("uuid") },
    { sessiontoken: localStorage.getItem("sessiontoken") }
  ]
  let enc = this.encryptor;
  var ciphertext = (enc.encrypt(JSON.stringify(dataencript)));
  window.location.href = 'http://account.rmehub.in/personalinformation?referral=academy&&redirect=http://academy.rmehub.in/dashboard&&_ct=' + btoa(ciphertext);
  // console.log("=======================>ciphertext", ciphertext);
}


 
}
