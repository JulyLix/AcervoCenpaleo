import { Routes } from 'angular-router';
import { MyAccountPage } from './my-account';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from 'ionic-angular';


const routes: Routes = [
  {
    path: 'MyAccount',
    component: MyAccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPageModule.forChild(routes)
  ],
  declarations: [MyAccountPage],
  entryComponents: [
    MyAccountPage
  ],
})
export class MyAccountPageModule {}
