import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ActionSheetController, Platform } from 'ionic-angular';
import { CollectorModel } from '../../app/models/collectorModel';
import { AlertProvider } from '../../providers/alert/alert';
import { CollectorProvider } from '../../providers/collector/collector';


@IonicPage()
@Component({
  selector: 'page-adm-collector',
  templateUrl: 'adm-collector.html',
})
export class AdmCollectorPage {

  collector: CollectorModel;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    private collectorSrv: CollectorProvider,
    private alertSrv: AlertProvider) {

      let _coll = this.navParams.get('_collector');
      if (_coll && _coll.id) 
        this.collector = <CollectorModel>_coll;
      else
        this.collector = new CollectorModel();
  }

  async delete(): Promise<void>{
    try {
      this.alertSrv.confirm('Remover?', `Deseja realmente Remover o coletor ${this.collector.nameCollector}?`,
      async () => {
        let deleteResult = await this.collectorSrv.delete(this.collector._id);
        if (deleteResult.success) {
          this.alertSrv.toast('Coletor removido com sucesso!', 'bottom');
          this.navCtrl.setRoot('AdmCollectorPage');
        }
      });
    } catch (error) {
      console.log('Erro ao remover: ', error);
    }
  }

  async save(): Promise<void> {
    let success = false;
    if(!this.collector._id) {
      let collectorResult = await this.collectorSrv.post(this.collector);
      success = collectorResult.success;
    } else {
      let updateResult = await this.collectorSrv.put(this.collector._id, this.collector);
      success = updateResult.success;
    }
    if(success) {
      this.alertSrv.toast('Coletor salvo com sucesso!', 'bottom');
      this.navCtrl.setRoot('AdmCollectorPage');
    }
  }

}
