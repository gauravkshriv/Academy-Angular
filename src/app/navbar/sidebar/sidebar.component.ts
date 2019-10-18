import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
 profiledata:any;
  uuid: any;
  _kst:any;
  jwttoken: any;
  username:any;
  serverData:any;
  logout:any;
  sessiontoken: any;
  showprofile: boolean = localStorage.getItem("userLoginProfile") == "true" ? true : false;
  show: boolean = localStorage.getItem("userLoginStatus")  == "true" ? true : false;
   showkyc: boolean = localStorage.getItem("kycstatus") == "true" ? true : false;
  basicstatus: boolean = localStorage.getItem("BasicStatus") == "true" ? true : false;


  constructor(private router: Router, private http: HttpClient) {
  
    this.username = localStorage.getItem("username");
     this.uuid = localStorage.getItem("uuid");
    this.jwttoken = localStorage.getItem("jwttoken");
    this.username = localStorage.getItem("username");
    this.sessiontoken = localStorage.getItem("sessiontoken");
    
  }

  ngOnInit() {

  }

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


    awardspop()
    {
      swal({
        title: "Achievement Update",
        text: "You have don't have achievement yet, you have to participate and complete exam",
        icon: "info",
      })
    }

  awards(){
    swal({
			title: "Under Development",
			icon: "info",
		})
  }



}
