import { Component, OnInit } from '@angular/core';
import {RequestOptions, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Router} from '@angular/router';
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
@Component({
  selector: 'app-changpass',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  showNav = true;
      oldpassword: any;// string, any,number,object data type
      newpassword:any;
      confirmPassword:any="";
       ipvalue:any;
       serverData:any;
       changepassword:any;
       serverDataLogin:any;
       invalidUser:any;
       isLoginSuccess: boolean;
       publicIP: string;
       res:any;
       uuid:any;
       jwttoken:any;
       
      constructor (private http: HttpClient, private router: Router)
      {
        this.uuid= localStorage.getItem("uuid");
        		this.jwttoken = localStorage.getItem("jwttoken");
        // 		this.sessiontoken = localStorage.getItem("sessiontoken");
      }
      ngOnInit() {
         }
  
        //  confirmpassword(){
        //  if (this.newpassword != this.confirmpassword){
        //    swal("password do not match");
        //    console.log("password do not match");
        //    return false;
        //  }
        //  return true;
        //        }
  
               validateInpus(){
               if(this.newpassword !== undefined || this.oldpassword !== undefined ||
                this.confirmPassword !==""){
                if (this.newpassword !== this.confirmPassword){
                    swal("password do not match");
                    //console.log("password do not match");
                    return false;
                  }
                  return true;
                }
                swal("Enter Valid Details");
                return false;
               }








      ChangePass(){

        if(this.validateInpus()){
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Token ' + this.jwttoken
            })
           };
           let body = {
           'oldpassword': this.oldpassword,
           'newpassword':this.newpassword,
           "uuid" : this.uuid
          };

          console.log("this is------>",body)
         console.log("jwt token is", this.jwttoken);
 
        if(this.oldpassword == undefined || this.newpassword==undefined)
        {
          swal({
                        title: "Field is Empty!",
                        text: "Please Type input Field !!",
                        icon: "info",
                      })
                      
                      
        }
        else{

           var self=this;
           this.http.post('https://api.rmehub.in/api/changePassword', body, httpOptions)
           .subscribe(
           (data) => {
            this.changepassword = data;
            console.log("successful verify", data);
            if(this.changepassword.exception==="INVALID_CREDENTIALS")
            {
              swal("Please Enter New Password");
            }
            else if(this.changepassword.exception==="OLD_PASSWORD_WRONG")
            {
              swal("Old Password is Wrong");
            } 
           //  else if(this.changepassword.successCode==="OTP_SEND_ON_EMAIL")
           //  {
           //    swal("success OTP send");
           //  }
            else if(this.changepassword.exception==="PASSWORD_SAME_AS_PREVIOUS")
            {
              swal("New Password is same as Old Password");
            }
            else if(this.changepassword.successCode==="CHANGE_PASSWORD_SUCCESS")
            {
              swal({
               title: "Thank You!",
               text: "Dear user your password has been changed Successfully",
               icon: "success",
               // button: false,
               //closeOnClickOutside: false
             })
             //  localStorage.clear();
             //  this.router.navigate(['/home']);
            }
               
                                 
             }, //For Success Response
                 (err) => {
                 console.log("got error",err)
                 self.serverDataLogin=err;
                // self.setLogin(false);
                // this.router.navigate(['/register']);
               } //For Error Response
             );
              }
        }



     
      }
  }
