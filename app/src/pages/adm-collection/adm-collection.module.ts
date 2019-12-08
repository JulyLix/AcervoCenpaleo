import { Routes } from 'angular-router';
import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { AdmCollectionPage } from './adm-collection';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'AdmCollection',
    component: AdmCollectionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPageModule.forChild(routes)
  ],
  declarations: [AdmCollectionPage],
  entryComponents: [
    AdmCollectionPage
  ],
})
export class AdmCollectionPageModule {}
