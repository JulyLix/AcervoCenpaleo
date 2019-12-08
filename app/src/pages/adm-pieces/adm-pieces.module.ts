import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmPiecesPage } from './adm-pieces';

@NgModule({
  declarations: [
    AdmPiecesPage,
  ],
  imports: [
    IonicPageModule.forChild(AdmPiecesPage),
  ],
})
export class AdmPiecesPageModule {}
