import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {McqService} from '../services/mcq.service';
import { ResponseService } from '../services/response.service';
@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {
  marks:any;
  questionvalue:any;
  passStatus:any;
  constructor(private router: Router,  public mcqservice : McqService,private dataService:ResponseService) { }

  ngOnInit() {
    this.dataService.currentExamStatus.subscribe(data=>{
      this.marks = data.marks;
      this.passStatus = data.pass;
      console.log(this.marks);
    });
  }

  GoDashboard(){
    
   ////  window.location.reload();
   window.close();
     this.router.navigate(['/dashboard']);
      //  this.reloadtodash();
  };
  // reloadtodash(){
  // }


  
 

}
