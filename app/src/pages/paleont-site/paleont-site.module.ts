import { Routes } from 'angular-router';
import { PaleontSitePage } from './paleont-site';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { PipesModule } from './../../pipes/pipes.module';


const routes: Routes = [
  {
    path: 'PaleontSite',
    component: PaleontSitePage
  }
];

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPageModule.forChild(routes)
  ],
  declarations: [PaleontSitePage],
  entryComponents: [
    PaleontSitePage
  ],
})
export class PaleontSitePageModule {}
