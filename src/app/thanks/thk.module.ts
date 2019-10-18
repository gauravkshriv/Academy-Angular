import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThkRoutingModule }  from './thk-routing.module';
import { ThanksComponent } from '../thanks/thanks.component';
@NgModule({
  imports: [     
        CommonModule,
		ReactiveFormsModule,
        ThkRoutingModule,
        FormsModule,ReactiveFormsModule,HttpClientModule
  ], 
  declarations: [
    ThanksComponent
  ],
  providers: [],
})
export class ThkModule { }