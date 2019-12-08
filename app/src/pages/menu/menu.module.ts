import { Routes } from 'angular-router';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      { 
        path: 'MyAccount', 
        loadChildrenurl: '../my-account/my-account.module#MyAccountPageModule',
      },
      { 
        path: 'Piece', 
        loadChildren: '../piece/piece.module#PiecePageModule'
      },
      { 
        path: 'Collection', 
        loadChildren: '../collection/collection.module#CollectionPageModule'
      },
      { 
        path: 'Collector', 
        loadChildren: '../collector/collector.module#CollectorPageModule'
      },
      { 
        path: 'PaleontSite', 
        loadChildren: '../paleont-site/paleont-site.module#PaleontSitePageModule'
      },

    ]
  },
  {
    path: '',
    redirectTo: 'menu/Piece'
  }
];

@NgModule({
  declarations: [
    MenuPage,
  ],
  entryComponents: [
    MenuPage
  ],
  imports: [
    IonicPageModule.forChild(routes),
  ],
})
export class MenuPageModule {}
