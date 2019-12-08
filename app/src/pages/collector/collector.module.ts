import { Routes } from 'angular-router';
import { CollectorPage } from './collector';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { PipesModule } from '../../pipes/pipes.module';


const routes: Routes = [
  {
    path: 'collector',
    component: CollectorPage
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
  declarations: [CollectorPage],
  entryComponents: [
    CollectorPage
  ],
})
export class CollectorPageModule {}
