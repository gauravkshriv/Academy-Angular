import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Router} from '@angular/router';
import {RequestOptions, Request, RequestMethod, Headers} from '@angular/http';
import {Encryptor} from '../services/encryption.service';
import {ActivatedRoute, Params} from '@angular/router';
import {LoadingService} from '../services/load.service';
import {ResponseService} from '../services/response.service';
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
declare var jquery:any;
declare var $:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imageUrl : string  = "./assets/images/upload.png";
  selectedFile:null;
  serverData:any;
  occup=[];
  particip=[];
  market=[];
  headers:any;
   sessionToken:any;
   serverDataLogin:any;
   lod:any;
   lod1:any;
   invalidUser:any;
   isLoginSuccess: boolean;
   profiledata:any;
   res:any;
   uuid:any;
   occ:any;
   username:any;
   sessiontoken:any;
   _pic:any;
   profileimage:any;
   profilestatus:any = true;
   jwttoken:any;
   deletedata:any;
   deleteDataResponse:any;
   showprofile: any = localStorage.getItem("userLoginProfile");
   Picstatus: any = localStorage.getItem("ProfilePicStatus");

  


  constructor (private http: HttpClient, private router: Router, private Loading:LoadingService, private activatedRoute: ActivatedRoute, private encryptor:Encryptor, private responsepro : ResponseService)
  {
    this.username= localStorage.getItem("username");
    this.uuid= localStorage.getItem("uuid");
    this.sessiontoken = localStorage.getItem("sessiontoken");
    this.jwttoken = localStorage.getItem("jwttoken");
    this.GetUSer();
  }


ngOnInit() 
{ 

  this.lod= this.Loading._loading=true;


// this.propop();


}

// propop(){

// }

SendLoadData() {
  var dataencript = [
    { jwttoken: localStorage.getItem("jwttoken") },
    { uuid: localStorage.getItem("uuid") },
    { sessiontoken: localStorage.getItem("sessiontoken") }
  ]
  let enc = this.encryptor;
  var ciphertext = (enc.encrypt(JSON.stringify(dataencript)));
  window.location.href = 'http://account.rmehub.in/personalinformation?referral=community&&redirect=http://community.rmehub.in/home&&_ct=' + btoa(ciphertext);
  // console.log("=======================>ciphertext", ciphertext);
}


edit()
{
  swal({
    title: "Under Development",
    icon: "info",
  })
}


handleFileInput(event){
  this.lod1= this.Loading._loading=true;
  this.selectedFile = event.target.files[0];
  console.log("pic================>", this.selectedFile);
  // console.log("User Valid profile ..........")
     const httpOptions = {
      headers: new HttpHeaders({
        //  'Content-Type': 'multipart/form-data',
        'Authorization': 'Token ' + this.jwttoken,
        
      }),
     };
  // console.log("=====================>",formData)
  let body = new FormData();
  body.append('pic', this.selectedFile)
  body.append('uuid', this.uuid)
     console.log("this is------>",body)
   
     this.http.post('https://api.rmehub.in/api/profilePic/upload',body, httpOptions,)
     .subscribe(
     (data) => {
      this.lod1= this.Loading._loading=false;
         this.profileimage = data;
         console.log("=============================>",this.profileimage);
        
       //  localStorage.setItem("fullname", this.profiledata.fullname);
         if(this.profileimage.exception=="FIELD_CAN_NOT_BE_EMPTY")
         {
          swal("This Field Cannot be empty");
         }
        else if(this.profileimage.exception=="UUID_CANNOT_BE_EMPTY")
        {
          swal("UUID cannot be empty");
             }
             else if(this.profileimage.exception=="PROFILE_PICTURE_FORMAT_INVALID"){
              swal("Accept only .jpg .png");
             }

             else if(this.profileimage.exception=="FILE_SIZE_LIMIT_EXCEED"){
              swal("File Size Is Limit Exceed");
             }
             else if(this.profileimage.exception=="JWT_NOT_VALID"){
              swal("JWT Not Valid");
             }
             else if(this.profileimage.exception=="SESSION_EXPIRED"){
              swal("Your Session has Expired"); 
             }
             else if(this.profileimage.exception=="PROFILE_PICTURE_UPLOAD_FAILED"){
              swal("Profile Picture Upload Failed");
             }
             
             else if (this.profileimage.successCode=="PROFILE_PIC_UPLOAD_SUCCESS"){
              this.GetUSer();
              swal({
                title: "Thank You!",
                text: "PROFILE PICTURE UPLOADED SUCCESSFULLY!",
                icon: "success",
                // button: false,
                //closeOnClickOutside: false
              })
              // .then(()=>{
             
              //   });
              // window.location.reload();
              // this.router.navigate(['/user/profile'])
            // $("#prof_chang_img").attr("src",this.profileimage.profilepicture);
             }
             else{
               
             }
            
    }, //For Success Response
           (err) => {
           console.log("got error",err)
          //  self.serverDataLogin=err;
         } //For Error Response
       );
  // show image preview
  var reader = new FileReader();
  reader.onload = (event:any) =>{
  this.imageUrl = event.target.result;
  
  }
    reader.readAsDataURL(this.selectedFile);
  }

  ///////////////////////////////////////////////////////////////////////

  RemovePic(){
    this.lod= this.Loading._loading=true;
      const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type':  'application/json',
        'Authorization': 'Token ' + this.jwttoken,
      }),
     };

let qparam = this.uuid

  console.log("this is------>",qparam);
this.http.delete('https://api.rmehub.in/api/removepropic?uuid='+qparam,httpOptions)
.subscribe(
  (data) => {
    this.lod= this.Loading._loading=false;
      this.deletedata = data;
      console.log("========================>",data);
      if(this.deletedata.exception=="FIELD_CAN_NOT_BE_EMPTY")
      {
       swal("This Field Cannot be empty");
      }
     else if(this.deletedata.exception=="UUID_CANNOT_BE_EMPTY")
     {
       swal("UUID cannot be empty");
          }
          else if(this.deletedata.exception=="USER_NOT_FOUND"){
           swal("user Not Found");
          }

          else if(this.deletedata.exception=="FILE_SIZE_LIMIT_EXCEED"){
           swal("File Size Is Limit Exceed");
          }
          else if(this.deletedata.exception=="JWT_NOT_VALID"){
           swal("JWT is not Valid");
          }
          else if(this.deletedata.exception=="SESSION_EXPIRED"){
           swal("Your Session has Expired"); 
          }
          else if(this.deletedata.exception=="PROFILE_PICTURE_UPLOAD_FAILED"){
           swal("Profile Picture Upload Failed");
          }
          
          else if (this.deletedata.successCode=="PROFILE_PICTURE_DELETED"){
          //  swal("PROFILE PICTURE DELETED SUCCESSFULLY!");
           window.location.reload();
           this.router.navigate(['/user/profile']);
          }
    });
  }

  /////////////////////////////////////////////////////////////////////


GetUSer(){
  console.log("User Valid profile ..........")
     const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Token ' + this.jwttoken
      })
     };
     let body = {
     'uuid': this.uuid,
     "sessionToken" : this.sessiontoken
    };
    console.log("this is------>",body)
 
     var self=this;
     this.http.post('https://api.rmehub.in/api/getuser', body, httpOptions)
     .subscribe(
     (data) => {
      this.lod= this.Loading._loading=false;
         this.profiledata = data;
         console.log("=============================>",this.profiledata)
         localStorage.setItem("fullname", this.profiledata.fullname);
        // var tempArray=[];
        this.profiledata._occ.forEach(v => {
          this.occup.push(kytname.get(v))
          console.log("v",v);
        });

        this.profiledata._ptype.forEach(v => {
          this.particip.push(kytname.get(v))
        });

        this.profiledata.market.forEach(v => {
          this.market.push(kytname.get(v))
        });

        this.profiledata._occ.forEach(v => {
          this.occup.push(kytname.get(v))
        });


        // console.log('tempArray',occup);
        //  this.occ = this.profiledata._occ.split(",");
        //  console.log("=====occupatoin",this.occ);


         if (this.profiledata.profilepicture !=  null) {
          localStorage.setItem("ProfilePicStatus", "true");
          this.Picstatus = true;}
          else
          {
            localStorage.setItem("ProfilePicStatus", "false");
            this.Picstatus = false;
          }

          if (this.profiledata.firstname === null) {
            swal({
              title: "Thank You!!!",
              text: "Please complete information Detail on our Portal.",
              icon: "success",
              // button: false,
              closeOnClickOutside: false
            })
              .then(() => {
                this.SendLoadData();
              });
            // console.log("get full name--> if condition")
          }

          // else if(this.profiledata.profilepicture ==  null){
          //   localStorage.setItem("ProfilePicStatus", "false");
          //   this.Picstatus = false;}
         
        
  else
  {
         
      } }, //For Success Response
           (err) => {
           console.log("got error",err)
           self.serverDataLogin=err;
         } //For Error Response
       );
}

}



var kytname = new Map([ 

  ["BUILDER" , "Builder KYT"],
 
  ["LAND_UPLOAD" , "Land owner KYT"],
 
  ["END_USER_BUYER" , "Buyer KYT"],
 
  ["END_USER_INVESTOR" , "Buyer Investor KYT"],
 
  ["LAND_DEVELOPER" , "Land Developer KYT"],

  ["LAND_OWNER" , "Land Owner"],
 
  ["BROKING_HOUSE" , "Broking House KYT"],
    
  ["PROJECT_PARTICIPANT" , "Project Participant"],
 
  ["CONSULTANT" , "Consultant KYT"],
 
  ["PROJECT_INVESTOR" , "Project Investor KYT"],
 
  ["PROJECT_MENTOR" , "Project Mentor KYT"],

  ["PRIMARY_MARKET" , "Primary Market"],

  ["SECONDARY_MARKET" , "Secondary Market"],
 
  ["PROJECT_HEAD" , "Project Head KYT"],
 
  ["LEGAL_CONSULATANT" , "Legal Consultant KYT"],
 
  ["DATA_MANAGEMENT_CONSULTANT" , "Database Mng. Consultant KYT"],
 
  ["INVESTMENT_BROKING_CONSULTANT" , "Broking Consultant KYT"],
 
  ["PROJECT_MENTOR_LAND_UPLOAD" , "Project Mentor Land Upload"]
 
  ]);