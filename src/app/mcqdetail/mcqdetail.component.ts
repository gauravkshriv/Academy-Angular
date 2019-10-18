import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-mcqdetail',
  templateUrl: './mcqdetail.component.html',
  styleUrls: ['./mcqdetail.component.css']
})
export class McqdetailComponent implements OnInit {
  messageSuccess:any;
  submitData:any;
  username:any;
 

  constructor() { 
    this.username = localStorage.getItem("username");
  }


  ngOnInit() {
  }

  GoDashboard(){
    window.close();
   };

}
