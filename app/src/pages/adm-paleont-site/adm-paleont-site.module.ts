import { Routes } from 'angular-router';
import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { AdmPaleontSitePage } from './adm-paleont-site';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: 'AdmPaleontSite',
    component: AdmPaleontSitePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPageModule.forChild(routes)
  ],
  declarations: [AdmPaleontSitePage],
  entryComponents: [
    AdmPaleontSitePage
  ],
})
export class AdmPaleontSitePageModule {}
