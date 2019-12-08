import { Routes } from 'angular-router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollectionPage } from './collection';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { PipesModule } from '../../pipes/pipes.module';

const routes: Routes = [
  {
    path: 'Collection',
    component: CollectionPage
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
  declarations: [CollectionPage],
  entryComponents: [
    CollectionPage
  ],
})
export class CollectionPageModule {}
