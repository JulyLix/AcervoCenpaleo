import { Routes, RouterModule } from 'angular/router';
import { CollectorPage } from './collector';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';


const routes: Routes = [
  {
    path: 'collector',
    component: CollectorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CollectorPage]
})
export class CollectorPageModule {}
