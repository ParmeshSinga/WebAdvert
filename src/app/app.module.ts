import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { ErrorInterceptorProvider } from './interceptors/error.interceptor';
import { TasksComponent } from './tasks/tasks.component';
import { ProfileComponent } from './profile/profile.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgChartsModule } from 'ng2-charts';
import { StockanalysisComponent } from './stockanalysis/stockanalysis.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TasksComponent,
    ProfileComponent,
    StockanalysisComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgApexchartsModule,
    NgChartsModule
  ],
  providers: [
    AuthInterceptorProvider,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
