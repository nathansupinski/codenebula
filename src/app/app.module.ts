//import angular core and angular features
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import angular materials components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

//import components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './common/components/alert/alert.component';

//import modules
import { BlogModule } from './blog/blog.module';

//import providers
import { AuthGuard } from './common/guards/auth.guard';
import { AlertService } from './common/services/alert.service';
import { AuthenticationService } from './common/services/authentication.service';
import { UserService } from './common/services/user.service';
import { JwtInterceptor } from './common/helpers/jwt.interceptor';
import { ErrorInterceptor } from './common/helpers/error.interceptor';
import { ParallaxComponent } from './parallax/parallax.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ParallaxComponent
  ],
  imports: [
    BrowserModule,
    BlogModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}

    // provider used to create fake backend - uncomment below line to enable
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
