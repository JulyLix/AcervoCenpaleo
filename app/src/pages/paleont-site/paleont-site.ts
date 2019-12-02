import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ActionSheetController, ModalController } from 'ionic-angular';
import { paleontSiteModel } from '../../app/models/paleontSiteModel';
import { PaleontSiteProvider } from '../../providers/paleont-site/paleont-site';

@IonicPage()
@Component({
  selector: 'page-paleont-site',
  templateUrl: 'paleont-site.html',
})
export class PaleontSitePage {
  paleontSite: Array<paleontSiteModel> = new Array<paleontSiteModel>();
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private paleontSiteSrv: PaleontSiteProvider,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.load();
  }

  async load(): Promise<void> {
    try{
      let paleotSiteResult = await this.paleontSiteSrv.get();
      if (paleotSiteResult.success)
      this.paleontSite = <Array<paleontSiteModel>>paleotSiteResult.data;
    } catch (error) {
      console.log('Não foi possível carregar os Sítios Paleontológicos', error);
    }
  }

  visualizePaleontSite(item: paleontSiteModel) {
    let modal = this.modalCtrl.create('VisualizePaleontSite', {prod: item});
    modal.present();
  }

}
