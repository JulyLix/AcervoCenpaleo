import { PiecePage } from './piece';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'Piece',
    component: PiecePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PiecePage]
})
export class PiecePageModule {}
