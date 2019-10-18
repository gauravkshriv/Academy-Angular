import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent }  from './login.component';
import { AuthRoutingModule }  from './auth-routing.module';
import {VerifyService} from '../verify.service';
// import { McqpageComponent }  from '../mcqpage/mcqpage.component';
@NgModule({
  imports: [     
        CommonModule,
		ReactiveFormsModule,
        AuthRoutingModule,
        FormsModule,ReactiveFormsModule,HttpClientModule
  ], 
  declarations: [
        LoginComponent
  ],
  providers: [VerifyService],
})
export class AuthModule { }