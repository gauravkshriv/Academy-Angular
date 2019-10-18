import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { McqdetailComponent }  from './mcqdetail.component';
import { McqdetailRoutingModule }  from './mcqdetail-routing.module';

@NgModule({
  imports: [     
        CommonModule,
		ReactiveFormsModule,
        McqdetailRoutingModule,
        FormsModule,ReactiveFormsModule,HttpClientModule
  ], 
  declarations: [
    McqdetailComponent,
  ],
  providers: [],
})
export class McqdetailModule { }