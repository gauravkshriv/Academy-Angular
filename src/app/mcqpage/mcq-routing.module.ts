import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McqpageComponent }  from './mcqpage.component';
import { ThanksComponent } from '../thanks/thanks.component';
const mcqRoutes: Routes = [
	{ 
	  path: '',
	  component: McqpageComponent
	},

];

@NgModule({
  imports: [ RouterModule.forChild(mcqRoutes) ],
  exports: [ RouterModule ]
})
export class McqRoutingModule{
	static components = [ 
		McqpageComponent, ThanksComponent
	];

}
