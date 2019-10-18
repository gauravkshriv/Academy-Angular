import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { McqpageComponent }  from './mcqpage.component';
import { McqRoutingModule }  from './mcq-routing.module';

@NgModule({
  imports: [     
        CommonModule,
		ReactiveFormsModule,
        McqRoutingModule,
        FormsModule,ReactiveFormsModule,HttpClientModule
  ], 
  declarations: [
    McqpageComponent,
  ],
  providers: [],
})
export class McqModule { }