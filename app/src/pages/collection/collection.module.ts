import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollectionPage } from './collection';
import { IonicModule } from 'ionic-angular';

const routes: Routes = [
  {
    path: '',
    component: CollectionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CollectionPage]
})
export class CollectionPageModule {}
