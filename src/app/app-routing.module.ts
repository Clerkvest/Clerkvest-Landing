import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeLoginComponent} from './content/employee-login/employee-login.component';
import {CompanyLoginComponent} from './content/company-login/company-login.component';
import {HomeComponent} from './content/home/home.component';


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
