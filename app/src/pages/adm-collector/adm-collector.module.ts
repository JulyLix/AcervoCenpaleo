import { Routes } from 'angular-router';
import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { AdmCollectorPage } from './adm-collector';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'AdmCollector',
    component: AdmCollectorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPageModule.forChild(routes)
  ],
  declarations: [AdmCollectorPage],
  entryComponents: [
    AdmCollectorPage
  ],
})
export class AdmCollectorPageModule {}
