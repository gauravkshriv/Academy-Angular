import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
import {McqService} from '../services/mcq.service';
import { ResponseService } from '../services/response.service';
@Component({
  selector: 'app-mcqpage',
  templateUrl: './mcqpage.component.html',
  styleUrls: ['./mcqpage.component.css']
})
export class McqpageComponent implements OnInit {
    questionvalue:any;
    option:any;
    options:any;
    marks:any;
    mcq:any;
    profiledata:any;
    quest:any;
    objectKeys: any;
    name:string;
    count:number;  
    frm:any;
    sid:any;
    id:any;
    timeoutHandle:any;
    serverdata:any; 
    jwttoken:any;
    uuid:any;
    username:any;
    sessiontoken:any;
    messageSuccess:any;
    email:any;
    fullname:any;
  //  Example2:any;
  constructor(private http: HttpClient,private dataService:ResponseService, private router: Router, public mcqservice : McqService) { 
    this.objectKeys = Object.keys;
  //  this.marks=mcqservice.marks;
  this.uuid= localStorage.getItem("uuid");
  this.jwttoken = localStorage.getItem("jwttoken");
  this.sessiontoken = localStorage.getItem("sessiontoken");
  this.username = localStorage.getItem("username");
  this.email = localStorage.getItem("email");
  }
 
  // <input id="{{quest.id}}" type="checkbox" [(ngModel)]="quest.selected"/> {{quest.options}}
ngOnInit () {
///###############################

this.mcqservice.Getpost().subscribe(
  (data:any)=> {
  this.questionvalue=data;
        // console.log("question load success fully question value",this.questionvalue);
       }, function(error) {
         console.log("have some error");
       }
     );

  this.count=3;
  window.onblur = this.checkPageBlur.bind(this);


    ///////////////////////// Calling timer here
    this.mytest();  
///////////////////////////////////////

  
  }// ngOnInit close



  //setInterval( checkPageFocus,100);
    
   checkPageBlur(){
   this.count--;
   if(this.count==0)
   {
     this.count--;
     console.log("errorlog------->>>" ,this.count);
     //swal("YOU HAVE CROSSED YOUR LIMIT","If you attempt to cheat again, your test will be autosubmitted.","info");
     swal({
      title: "YOU HAVE VIOLATED THE TEST GUIEDLINES.",
      text:"Your exam's response is now being auto-submitted.",
      icon:"info", 
      closeOnClickOutside:false,
     closeOnEsc:false,
     })
     
     
     this.submitQData();
   }
    if(this.count>0)
   {
   // swal("CHEATING ATTEMPT DETECTED","If you attempt to cheat again, your test will be autosubmitted.","info");
      swal({
        title: "CHEATING ATTEMPT DETECTED",
        text:"You are not allowed to leave the screen, before submitting the exam. You have " + this.count + "attempts left.",
        icon:"info",
        closeOnClickOutside:false,
        closeOnEsc: false,
      })




    //       console.log("your Remanning Attempt left", this.count);
   }
     // console.log('Got focus',this.count);
  }
 
/////////////////////////////////////////////////////////////


  updateAnswer(queIndex, answerIndex) {
    // alert("Question Updated");
   var answer =  this.questionvalue[queIndex].options[answerIndex];
   this.questionvalue[queIndex]["answer"] = Object.keys(answer)[0]; 
  }




  submitQData()
  {
    this.mcqservice.submitData(this.questionvalue).subscribe(
      data =>{
        this.marks = data;
        console.log("sucess",this.marks);
        this.dataService.changeExamStatus(data);
        // window.location.reload();
        this.router.navigate(['/thanks']);
      },
      error =>
        console.log("error", error)
    );
  
  }

///////////////////////////////// Timmer is here 

mytest(){
  var timeoutHandle;
  var that = this;
  function countdown(minutes) {
      var seconds = 60;
      var mins = minutes
      var self=that;
          function tick() {
          var counter = document.getElementById("timer");
          var current_minutes = mins-1
          seconds--;
          counter.innerHTML =
          current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
          if( seconds > 0 ) {
              timeoutHandle=setTimeout(tick, 1000);
            
          } else {
          
            // alert("thanks you have completed exam");
              if(mins > 1){
                 // countdown(mins-1);   never reach “00? issue solved:Contributed by Victor Streithorst
                 setTimeout(function () { countdown(mins - 1); }, 1000);               
              }
              else
              self.submitQData();

          }
      }
      tick();
  }
  
  countdown(20);
  
  }
//////////////////////////////////////////

}
