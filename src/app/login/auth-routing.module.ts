import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { McqpageComponent }  from '../mcqpage/mcqpage.component';
import { LoginComponent }  from './login.component';

const authRoutes: Routes = [
	{ 
	  path: '',
	  component: LoginComponent
	},
	
];

@NgModule({
  imports: [ RouterModule.forChild(authRoutes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule{ }
