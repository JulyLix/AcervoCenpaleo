import { Routes } from 'angular-router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterPage } from './register';
import { IonicModule, IonicPageModule } from 'ionic-angular';

const routes: Routes = [
  {
    path: 'Register',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPageModule.forChild(routes)
  ],
  declarations: [RegisterPage],
  entryComponents: [
    RegisterPage
  ],
})
export class RegisterPageModule {}
