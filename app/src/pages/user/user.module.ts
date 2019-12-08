import { Routes } from 'angular-router';
import { UserPage } from './user';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from 'ionic-angular';


const routes: Routes = [
  {
    path: 'User',
    component: UserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPageModule.forChild(routes)
  ],
  declarations: [UserPage],
  entryComponents: [
    UserPage
  ],
})
export class UserPageModule {}
