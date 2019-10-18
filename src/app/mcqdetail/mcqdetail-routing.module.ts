import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McqdetailComponent }  from './mcqdetail.component';
const mcqRoutes: Routes = [
	{ 
	  path: '',
	  component: McqdetailComponent
	},

];

@NgModule({
  imports: [ RouterModule.forChild(mcqRoutes) ],
  exports: [ RouterModule ]
})
export class McqdetailRoutingModule{
	static components = [ 
		McqdetailComponent
	];

}
