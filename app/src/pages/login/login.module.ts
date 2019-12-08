import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes } from 'angular-router';
import { LoginPage } from './login';
import { IonicModule, IonicPageModule } from 'ionic-angular';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPageModule.forChild(routes)
  ],
  declarations: [LoginPage],
  entryComponents: [
    LoginPage
  ],
})
export class LoginPageModule {}
