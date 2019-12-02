import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmCollectorPage } from './adm-collector';

@NgModule({
  declarations: [
    AdmCollectorPage,
  ],
  imports: [
    IonicPageModule.forChild(AdmCollectorPage),
  ],
})
export class AdmCollectorPageModule {}
