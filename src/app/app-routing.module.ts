import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeLoginComponent} from './employee-login/employee-login.component';
import {CompanyLoginComponent} from './company-login/company-login.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  // Home
  {
    path: '',
    component: HomeComponent
  },
  // Employee Login
  {
    path: 'employee-login',
    component: EmployeeLoginComponent
  },
  // Company Login
  {
    path: 'company-login',
    component: CompanyLoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
