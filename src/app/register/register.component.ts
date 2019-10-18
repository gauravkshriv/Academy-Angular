import { Component, OnInit, Input } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Router} from '@angular/router';
import {VerifyService} from '../verify.service';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-registration',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
 
title="Registration Form";
uname :any;
 email:any;
 fname:string;
 lname:string;
 id:any;
 mobileno:number;
 serverdata:any; 
 serverDataUName:any;
 model: any = {};
  
 emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private http: HttpClient, private verifyService: VerifyService, private router: Router, ) { }
  ngOnInit() {
      
  }


  /////////////////// Verify UserName Beaing //////////////////
//   checkUser() {
//     this.verifyService.checkUser(this.uname, function(data) {
//       console.log("username checked successfully")
//     }, function(error) {
//       console.log("have some error");
//     }
//   );
// }


  ///////////////////// Verify UserName End  /////////////

  

  ValidateRegistration(){

    console.log("User Valid Registration ..........")
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'})
    let options = new RequestOptions({ headers: headers});
    let body = {
     'uname': this.uname,
     'email':this.email,
     'fname':this.fname,
     'lname':this.lname,
     'mobileno':this.mobileno,
   };

 	var self=this;
		 	this.http.post('http://academy.us-east-2.elasticbeanstalk.com/enter', body)
		 	.subscribe(
 	    (data) => {
        localStorage.clear();
           console.log("successful Register", data)
          self.serverdata=data;
          localStorage.setItem('saveid',this.serverdata.id);
          this.router.navigate(['/mcqpage']);
					
	 	    }, //For Success Response
			 	    (err) => {
						 console.log("got error",err)
						
		 	    } //For Error Response
			 	);    
  }
 
}
