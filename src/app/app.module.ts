import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DashboardLayoutComponent }  from './layout/dashboard.layout.component';
import { AuthGuardService } from './services/auth-guard.service';
import {VerifyService} from './verify.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './navbar/sidebar/sidebar.component';
import { TopbarComponent } from './navbar/topbar/topbar.component';
import { BasiccourseComponent } from './basiccourse/basiccourse.component';
import { BrowseComponent } from './browse/browse.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { HumanresourceComponent } from './pages/humanresource/humanresource.component';
import { AwardsComponent } from './awards/awards.component';
import {McqService} from './services/mcq.service';
import { ResultComponent } from './result/result.component';
import {Encryptor} from './services/encryption.service';
import { CheckloginService } from './services/auth/checklogin.service';
import {CanActivateRouteGuardService} from './services/gaurd/can-activate-route-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/tokeninterceptor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    BasiccourseComponent,
    BrowseComponent,
    FooterComponent,
    RegisterComponent,
    DashboardLayoutComponent,
    HumanresourceComponent,
    AwardsComponent,
    ResultComponent,
    ProfileComponent,
    NotfoundComponent,
    ChangepasswordComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,NgbModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },AuthGuardService, VerifyService, McqService, Encryptor, CheckloginService, CanActivateRouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
