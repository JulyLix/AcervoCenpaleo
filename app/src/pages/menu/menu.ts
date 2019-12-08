import { RouterEvent, Router } from 'angular-router';
import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  pages = [
    {
      title: 'Minha Conta',
      url: '/menu/MyAccount'
    },
    {
      title: 'Peças',
      url: '/menu/Piece'
    },
    {
      title: 'Coleções',
      url: '/menu/Collection'
    },
    {
      title: 'Coletores',
      url: '/menu/Collector'
    },
    {
      title: 'Sítios Paleontológicos',
      url: '/menu/PaleontSite'
    }
  ];

  selectedPath = '';


  constructor(private router : Router) {
    this.router.events.subscribe((event: RouterEvent) =>{
      this.selectedPath = event.url;
    });
  }


}
