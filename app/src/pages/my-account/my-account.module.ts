import { Routes, RouterModule } from 'angular/router';
import { MyAccountPage } from './my-account';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';


const routes: Routes = [
  {
    path: 'myAccount',
    component: MyAccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyAccountPage]
})
export class MyAccountPageModule {}
