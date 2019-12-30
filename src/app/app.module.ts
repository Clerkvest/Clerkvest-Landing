import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyLoginComponent } from './content/company-login/company-login.component';
import { EmployeeLoginComponent } from './content/employee-login/employee-login.component';
import { HomeComponent } from './content/home/home.component';
import { NavigatorComponent } from './sub/navigator/navigator.component';
import { FooterComponent } from './sub/footer/footer.component';
import { HeaderComponent } from './sub/header/header.component';
import { ReasonsComponent } from './sub/reasons/reasons.component';
import { FeaturesComponent } from './sub/features/features.component';
import { TitleComponent } from './sub/title/title.component';
import { ContactComponent } from './sub/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyLoginComponent,
    EmployeeLoginComponent,
    HomeComponent,
    NavigatorComponent,
    FooterComponent,
    HeaderComponent,
    ReasonsComponent,
    FeaturesComponent,
    TitleComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
