import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ActionSheetController } from 'ionic-angular';
import { CollectorModel } from '../../app/models/collectorModel';
import { CollectorProvider } from '../../providers/collector/collector';

@IonicPage()
@Component({
  selector: 'page-collector',
  templateUrl: 'collector.html',
})
export class CollectorPage {

  collector: Array<CollectorModel> = new Array<CollectorModel>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public ect: Event,
    private collectorSrv: CollectorProvider) {
  }

  ionViewDidLoad() {
    this.load();
  }

  async load(): Promise<void> {
    try {
      let collectorResult = await this.collectorSrv.get();
      if (collectorResult.success)
      this.collector = <Array<CollectorModel>>collectorResult.data;
    } catch (error) {
      console.log('Não foi possível carregar os coletores', error);
    }
  }

  addOrEdit(model?: CollectorModel): void {
    this.navCtrl.push('AdmCollectorPage', { _collector: model });
  }

}
