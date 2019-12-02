import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmPaleontSitePage } from './adm-paleont-site';


@NgModule({
  declarations: [
    AdmPaleontSitePage,
  ],
  imports: [
    IonicPageModule.forChild(AdmPaleontSitePage),
  ],
})
export class AdmPaleontSitePageModule {}
