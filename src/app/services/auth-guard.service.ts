import { Injectable }       from '@angular/core';
import {Router,} from '@angular/router';


@Injectable()
export class AuthGuardService {
  	
  constructor(private router: Router) {
  }
  
}