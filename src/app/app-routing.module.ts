import { DashboardComponent } from './dashboard/dashboard.component';
import { BasiccourseComponent } from './basiccourse/basiccourse.component';
import { BrowseComponent } from './browse/browse.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { McqpageComponent } from './mcqpage/mcqpage.component';
import { DashboardLayoutComponent }  from './layout/dashboard.layout.component';
import { AwardsComponent } from './awards/awards.component';
import { ThanksComponent } from './thanks/thanks.component';
import { McqdetailComponent } from './mcqdetail/mcqdetail.component';
import { ResultComponent } from './result/result.component';
import { CanActivateRouteGuardService } from './services/gaurd/can-activate-route-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
const routes: Routes = [
                
    { path: '', pathMatch:'full', redirectTo: '/dashboard' },

    {
      path: '',
      component: DashboardLayoutComponent,
 
      children: [
    { path: 'basic', component: BasiccourseComponent, canActivate: [CanActivateRouteGuardService]},
    { path: 'result', component: ResultComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'browse', component: BrowseComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'awards', component: AwardsComponent},

    {
      path: 'user',
      children: [
         {path: 'profile', component: ProfileComponent, canActivate: [CanActivateRouteGuardService]},
         {path: 'change-password', component: ChangepasswordComponent, canActivate: [CanActivateRouteGuardService]},
                   
        ]
    },
      ]		
   },



   {
    path: 'login',
      loadChildren: './login/auth.module#AuthModule'
 },
 {
  path: 'mcqdetail',
    loadChildren: './mcqdetail/mcqdetail.module#McqdetailModule'
},
 {
  path: 'mcqpage',
    loadChildren: './mcqpage/mcq.module#McqModule'
},
{
  path: 'thanks',
    loadChildren: './thanks/thk.module#ThkModule'
},
{path: '**', component: NotfoundComponent},
{path: '**', redirectTo: '/404'}


];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })

  export class AppRoutingModule {
    static components = [ 
     DashboardComponent,  McqdetailComponent, ChangepasswordComponent, ResultComponent, ProfileComponent, AwardsComponent, ThanksComponent, RegisterComponent, BrowseComponent, FooterComponent, BasiccourseComponent, BrowseComponent, LoginComponent, McqpageComponent
    ];
  }