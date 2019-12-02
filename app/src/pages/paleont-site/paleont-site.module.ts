import { Routes, RouterModule } from 'angular/router';
import { PaleontSitePage } from './paleont-site';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';


const routes: Routes = [
  {
    path: 'PaleontSite',
    component: PaleontSitePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaleontSitePage]
})
export class PaleontSitePageModule {}
