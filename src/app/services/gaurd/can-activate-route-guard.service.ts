import { Injectable } from "@angular/core";
import * as _swal from "sweetalert";
import { SweetAlert } from "sweetalert/typings/core";
const swal: SweetAlert = _swal as any;
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { CheckloginService } from "../auth/checklogin.service";
@Injectable({
  providedIn: "root"
})
export class CanActivateRouteGuardService implements CanActivate {
  activdata: any;
   
  constructor(private authService: CheckloginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("in auth");
    if (!this.isUserDataPresent()) {
      console.log("no data to auth");
      swal(
        "Authentication Error!!!",
        "Kindly Login to view this page",
        "error"
      ).then(data => {
        this.router.navigate(["/dashboard"], { replaceUrl: true });
      });
      return false;
    }

 this.authService.checkLoggedInUser().subscribe(
      (data: any) => {
        console.log("successful verify", data);
        if(data.exception==="USER_NOT_FOUND")
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
        else if(data.exception==="SESSION_NOT_FOUND")
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
  else if(data.exception==="JWT_NOT_VALID")
        {
 swal({
   title: "Warning",
   text: "Please login again !!",
   icon: "info",
   closeOnEsc: false,
   closeOnClickOutside: false,
   
   })
  this.router.navigate(['/dashboard'],{replaceUrl:true});
  } 
  else if(data.exception==="JWT_FORMATE_INVALID")
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
  else if(data.exception==="io.jsonwebtoken.ExpiredJwtException")
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
  else if(data.exception==="SESSION_EXPIRED")
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
  else if(data.exception==="SESSION_DEAD")
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
  else if(data.successCode==="SESSION_ACTIVE")
        {
          return true;
//   swal("Login Successfully");
        } 


        
         else return false;
      //  swal("");
      }, //For Success Response
      err => {
        console.log("got error", err);
        return false;
      } //For Error Response
    );
    return true;
  }


  isUserDataPresent() {
    if (
      localStorage.getItem("Userdetails") == null &&
      localStorage.getItem("jwttoken") == null &&
      localStorage.getItem("sessiontoken") == null
    ) {
      console.log("NOT present");

      return false;
    } else return true;
  }
}
