import { Routes } from 'angular-router';
import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { AdmPiecePage } from './adm-piece';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'AdmPiece',
    component: AdmPiecePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPageModule.forChild(routes)
  ],
  declarations: [AdmPiecePage],
  entryComponents: [
    AdmPiecePage
  ],
})
export class AdmPiecePageModule {}