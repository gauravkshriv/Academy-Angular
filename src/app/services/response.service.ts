import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  // private loginstatus: BehaviorSubject<boolean>;

  private examStatus = new BehaviorSubject<any>({});
  currentExamStatus = this.examStatus.asObservable();
  constructor() { }

changeExamStatus(data:any){
  this.examStatus.next(data);
}
 
  }
 

