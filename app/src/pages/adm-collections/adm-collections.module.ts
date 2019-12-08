import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmCollectionsPage } from './adm-collections';

@NgModule({
  declarations: [
    AdmCollectionsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdmCollectionsPage),
  ],
})
export class AdmCollectionsPageModule {}
