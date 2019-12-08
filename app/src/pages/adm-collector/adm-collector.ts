import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, Platform } from 'ionic-angular';
import { CollectorModel } from '../../app/models/collectorModel';
import { AlertProvider } from '../../providers/alert/alert';
import { CollectorProvider } from '../../providers/collector/collector';


@IonicPage()
@Component({
  selector: 'page-adm-collector',
  templateUrl: 'adm-collector.html',
})
export class AdmCollectorPage {

  list: Array<CollectorModel> = new Array<CollectorModel>();

  collector: CollectorModel;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    private collectorSrv: CollectorProvider,
    private alertSrv: AlertProvider) {

      this._loadData();

  }

  private async _loadData(): Promise<void> {
    let collectorResult = await this.collectorSrv.get();
    if (collectorResult.success) {
      this.list = <Array<CollectorModel>>collectorResult.data;
    }
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

  addOrEdit(model?: CollectorModel): void {
    this.navCtrl.push('AdmCollectorPage', { _collector: model });
  }

}
