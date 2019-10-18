import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThanksComponent } from './thanks.component';
const mcqRoutes: Routes = [
	{ 
	  path: '',
	  component: ThanksComponent
	},

];

@NgModule({
  imports: [ RouterModule.forChild(mcqRoutes) ],
  exports: [ RouterModule ]
})
export class ThkRoutingModule{
	

}
