import { Component, OnInit } from '@angular/core';
import { Encryptor } from '../../services/encryption.service';
import { Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
import {ApiService} from '../../services/api.service';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  profiledata:any;
  uuid: any;
  fullname:any;
  _kst:any;
  jwttoken: any;
  username:any;
  serverData:any;
  logout:any;
  sessiontoken: any;
  show: boolean = localStorage.getItem("userLoginStatus")  == "true" ? true : false;
  showprofile: boolean = localStorage.getItem("userLoginProfile") == "true" ? true : false;
  showkyc: boolean = localStorage.getItem("kycstatus") == "true" ? true : false;
  constructor(private router: Router, private http: HttpClient,private encryptor: Encryptor, public apiservice:ApiService) { 
    this.uuid = localStorage.getItem("uuid");
    this.jwttoken = localStorage.getItem("jwttoken");
    this.fullname = localStorage.getItem("fullname");
    this.username = localStorage.getItem("username");
    this.sessiontoken = localStorage.getItem("sessiontoken");
   
  }

  ngOnInit() {
    this.GetUSer();
    this.ValidateLogin();
  
  }


  
/////////////////////////////////////////////

  GetUSer() {
if (this.uuid==null || this.sessiontoken==null || this.jwttoken==null)
{    console.log("not working",localStorage.getItem("userLoginProfile"),localStorage.getItem("kycstatus"));
     localStorage.clear();
          }
else{
  let body = {
    'uuid': this.uuid,
    "sessionToken": this.sessiontoken
  };
    var self = this;
    this.apiservice.getuserdata(body)
      .subscribe(
        (data) => {
          this.profiledata = data;
          console.log("=============================>", this.profiledata);
        if(this.profiledata._upst === "COMPLETE")  {
           localStorage.setItem("BasicStatus", "true");
         };

          if(this.profiledata.firstname == null) {
            localStorage.setItem("userLoginProfile", "true");
            console.log("check red bar issue",);
            this.showprofile = true
          }
          else if (this.profiledata._kst == "PENDING")  {
            localStorage.setItem("kycstatus", "true");
            this.showkyc = true;
          }

          
        }, //For Success Response
        (err) => {
          console.log("got error", err)
          //  self.serverDataLogin=err;
        } //For Error Response
      );
  }
};


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

  SendDataKyc() {
    var dataencript = [
      { jwttoken: localStorage.getItem("jwttoken") },
      { uuid: localStorage.getItem("uuid") },
      { sessiontoken: localStorage.getItem("sessiontoken") }
    ]
    let enc = this.encryptor;
    var ciphertext = (enc.encrypt(JSON.stringify(dataencript)));
    window.location.href = 'http://account.rmehub.in/kycdetails?referral=academy&&redirect=http://academy.rmehub.in/dashboard&&_ct=' + btoa(ciphertext);
    // console.log("=======================>ciphertext", ciphertext);
  }



ValidateLogin()
  {
     const httpOptions = {
      headers: new HttpHeaders({
         'Content-Type':  'application/json',
         'Authorization': 'Token ' + this.jwttoken})
        };
      let body = {
       'uuid': this.uuid,
       'sessionToken':this.sessiontoken,
      };
      if (this.uuid==null || this.sessiontoken==null || this.jwttoken==null)
      {
        console.log("not working");
      }
      else{
      // console.log("this is------>",body)
      var self=this;
      this.http.post('https://api.rmehub.in/api/user/getSession', body, httpOptions)
      .subscribe(
      (data) => {
           console.log("successful verify", data);
           self.serverData=data;
        if(this.serverData.exception==="USER_NOT_FOUND")
               {
        swal({
          title: "Warning",
          text: "Please login again !!",
          icon: "info",
          closeOnEsc: false,
          closeOnClickOutside: false,
          
          }),
          localStorage.clear();
          window.location.reload();
          this.router.navigate(['/dashboard']);
               }
               else if(this.serverData.exception==="SESSION_NOT_FOUND")
               {
        swal({
          title: "Warning",
          text: "Please login again !!",
          icon: "info",
          closeOnEsc: false,
          closeOnClickOutside: false,
          
          }),
         localStorage.clear();
         window.location.reload();
         this.router.navigate(['/dashboard']);
         } 
         else if(this.serverData.exception==="JWT_NOT_VALID")
               {
        swal({
          title: "Warning",
          text: "Please login again !!",
          icon: "info",
          closeOnEsc: false,
          closeOnClickOutside: false,
          
          }),
          localStorage.clear();
         window.location.reload();
         this.router.navigate(['/dashboard'],{replaceUrl:true});
         } 
         else if(this.serverData.exception==="JWT_FORMATE_INVALID")
         {
  swal({
    title: "Warning",
    text: "Please login again !!",
    icon: "info",
    closeOnEsc: false,
    closeOnClickOutside: false,
    
    }),
    localStorage.clear();
   window.location.reload();
   this.router.navigate(['/dashboard'],{replaceUrl:true});
   } 
         else if(this.serverData.exception==="JWT_EXPIRED")
         {
        swal({
          title: "Warning",
          text: "Please login again !!",
          icon: "info",
          closeOnEsc: false,
          closeOnClickOutside: false,
          
          }),
          localStorage.clear();
        window.location.reload();
        this.router.navigate(['/dashboard'],{replaceUrl:true});
        } 

         else if(this.serverData.exception==="io.jsonwebtoken.ExpiredJwtException")
         {
        swal({
          title: "Warning",
          text: "Please login again !!",
          icon: "info",
          closeOnEsc: false,
          closeOnClickOutside: false,
          
          }),
        localStorage.clear();
        window.location.reload();
        this.router.navigate(['/dashboard']);
         }
         else if(this.serverData.exception==="SESSION_EXPIRED")
               {
        swal({
          title: "Warning",
          text: "Please login again !!",
          icon: "info",
          closeOnEsc: false,
          closeOnClickOutside: false,
          
          }),
          localStorage.clear();
          window.location.reload();
         this.router.navigate(['/dashboard'],{replaceUrl:true});
         } 
         else if(this.serverData.exception==="SESSION_DEAD")
               {
        swal({
          title: "Warning",
          text: "You have Logout, Please Login again !!",
          icon: "info",
          closeOnEsc: false,
          closeOnClickOutside: false,
          
          }),
          localStorage.clear();
          window.location.reload();
         this.router.navigate(['/dashboard'],{replaceUrl:true});
         } 
        
        
        }, //For Success Response
            (err) => {
             console.log("got error",err)
            
          } //For Error Response
        );
        }
  }





//////////////////////////////////////////////////////
  Logout() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + this.jwttoken
      })
    };
    let body = {
      'uuid': this.uuid,
      "sessionToken": this.sessiontoken
    };
    console.log("this is------>", body)

    var self = this;
    this.http.post('https://api.rmehub.in/api/logout', body, httpOptions)
      .subscribe(
        (data) => {
          this.logout = data;
          console.log("=============================>", this.logout);
              if(this.logout.exception==="FIELD_CAN_NOT_BE_EMPTY")
        {
 swal({
   title: "Warning",
   text: "Field con not be empty !!",
   icon: "info",
   closeOnEsc: false,
   closeOnClickOutside: false,
   
   }),
   localStorage.clear();
   window.location.reload();
   this.router.navigate(['/dashboard']);
        }
        else if(this.logout.exception==="SESSION_NOT_FOUND")
        {
 swal({
   title: "Warning",
   text: "Please login again !!",
   icon: "info",
   closeOnEsc: false,
   closeOnClickOutside: false,
   
   }),
  localStorage.clear();
  window.location.reload();
  this.router.navigate(['/dashboard']);
  } 
  else if(this.logout.exception==="USER_NOT_FOUND")
        {
 swal({
   title: "Warning",
   text: "User does not Exist !!",
   icon: "info",
   closeOnEsc: false,
   closeOnClickOutside: false,
   
   }),
  localStorage.clear();
  window.location.reload();
  this.router.navigate(['/dashboard']);
  } 
  else if(this.logout.exception==="JWT_NOT_VALID")
  {
 swal({
   title: "Warning",
   text: "Jwt is not valid for this user !!",
   icon: "info",
   closeOnEsc: false,
   closeOnClickOutside: false,
   
   }),
 localStorage.clear();
 window.location.reload();
 this.router.navigate(['/login']);
  }
  else if(this.logout.exception==="io.jsonwebtoken.ExpiredJwtException")
  {
 swal({
   title: "Warning",
   text: "Please login again !!",
   icon: "info",
   closeOnEsc: false,
   closeOnClickOutside: false,
   
   }),
 localStorage.clear();
 window.location.reload();
 this.router.navigate(['/login']);
  }
  else if(this.logout.exception==="SESSION_EXPIRED")
        {
 swal({
   title: "Warning",
   text: "Please login again !!",
   icon: "info",
   closeOnEsc: false,
   closeOnClickOutside: false,
   
   }),
   localStorage.clear();
   window.location.reload();
  this.router.navigate(['/dashboard'],{replaceUrl:true});
  } 
  else if(this.logout.successCode==="LOGOUT_SUCCESS")
  {
    localStorage.clear();
    window.location.reload();
  this.router.navigate(['/dashboard'],{replaceUrl:true});
} 


}, //For Success Response
(err) => {
console.log("got error",err)

          } //For Error Response
);
}

   alertswal(){
  swal("UNDER DEVELOPMENT");
  }
}
