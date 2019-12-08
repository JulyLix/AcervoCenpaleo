import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CollectionModel } from '../../app/models/collectionModel';
import { CollectionProvider } from '../../providers/collection/collection';

@IonicPage()
@Component({
  selector: 'app-adm-collection',
  templateUrl: './adm-collection.html',
  styleUrls: ['./adm-collection.scss'],
})
export class AdmCollectionPage {

  list: Array<CollectionModel> = new Array<CollectionModel>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private collectionSrv: CollectionProvider) {

    this._loadData();

  }
  
  private async _loadData(): Promise<void> {
    let collectionResult = await this.collectionSrv.get();
    if (collectionResult.success) {
      this.list = collectionResult.data as Array<CollectionModel>;
    }
  }

  addOrEdit(model?: CollectionModel): void {
    this.navCtrl.push('AdmCollectionPage', { _collection: model });
  }

}
