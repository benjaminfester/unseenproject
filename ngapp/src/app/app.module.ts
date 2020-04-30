import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NumberPickerModule } from 'ng-number-picker';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DietdiaryComponent } from './dietdiary/dietdiary.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './auth.service';
import { DietService } from './diet.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    DietdiaryComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}),
    NumberPickerModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule
    
    
  ],
  providers: [AuthService, DietService],
  bootstrap: [AppComponent]
})
export class AppModule { }
