import { Component, ViewChild, OnInit, AfterContentInit } from '@angular/core';
import { NavController, NavParams, IonicPage, ActionSheetController, Platform } from 'ionic-angular';
import { AlertProvider } from '../../providers/alert/alert';
import { paleontSiteModel } from '../../app/models/paleontSiteModel';
import { PaleontSiteProvider } from '../../providers/paleont-site/paleont-site';
declare var google;

@IonicPage()
@Component({
  selector: 'page-adm-paleont-site',
  templateUrl: 'adm-paleont-site.html',
})
export class AdmPaleontSitePage implements OnInit, AfterContentInit {
  
  map;
  @ViewChild('mapElement', {static: false}) mapElement;

  paleontSite: paleontSiteModel;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionsSheetCtrl: ActionSheetController,
    public platform: Platform,
    private paleontSiteSrv: PaleontSiteProvider,
    private alertSrv: AlertProvider
    ) {
  }

  ngOnInit(): void{
  }

  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      {
        center: { lat: -26.132794, lng: -49.809546},
        zoom: 8
      });
  }

  async save(): Promise<void> {
    let success = false;
    if(!this.paleontSite.id) {
      let paleontSiteResult = await this.paleontSiteSrv.post(this.paleontSite);
      success = paleontSiteResult.success;
    } else {
      let updateResult = await this.paleontSiteSrv.put(this.paleontSite.id, this.paleontSite);
      success = updateResult.success;
    }
    if(success) {
      this.alertSrv.toast('Sítio Paleontológico salvo com sucesso!', 'bottom');
      this.navCtrl.setRoot('AdmPaleontSitePage');
    }
  }

}
