import { PiecePage } from './piece';
import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { Routes } from 'angular-router';


const routes: Routes = [
  {
    path: 'Piece',
    component: PiecePage
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
  declarations: [PiecePage,],
  entryComponents: [
    PiecePage
  ],
})
export class PiecePageModule {}
