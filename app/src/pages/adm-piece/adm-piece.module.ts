import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmPiecePage } from './adm-piece';

@NgModule({
  declarations: [
    AdmPiecePage,
  ],
  imports: [
    IonicPageModule.forChild(AdmPiecePage),
  ],
})
export class AdmPiecePageModule {}
