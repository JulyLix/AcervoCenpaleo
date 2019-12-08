import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CollectionModel } from '../../app/models/collectionModel';
import { PieceModel } from '../../app/models/pieceModel';
import { CollectorModel } from '../../app/models/collectorModel';
import { paleontSiteModel } from '../../app/models/paleontSiteModel';
import { ConfigHelper } from '../../app/helpers/configHelper';
import { PieceProvider } from '../../providers/piece/piece';

@IonicPage()
@Component({
  selector: 'page-piece',
  templateUrl: 'piece.html',
})
export class PiecePage {

  collectionSelect: CollectionModel = new CollectionModel();
  subCollectionSelect: CollectionModel = new CollectionModel();
  collectorSelect: CollectorModel = new CollectorModel();
  paleontSiteSelect: paleontSiteModel = new paleontSiteModel();
  piece: Array<PieceModel> = new Array<PieceModel>();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private pieceSrv: PieceProvider) {
  }

  ionViewWillEnter() {
    
    this.subCollectionSelect = <CollectionModel>JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.selectCategory));
    this.collectionSelect = <CollectionModel>JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.selectCategory));
    this.collectorSelect = <CollectorModel>JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.selectCategory));
    this.paleontSiteSelect = <paleontSiteModel>JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.selectCategory));
    this.load();
  }

  async load(): Promise<void> {
    try {
      let pieceResult = await this.pieceSrv.pieceCollectionID(this.collectionSelect.id);
      this.pieceSrv.pieceCollectorID(this.collectorSelect._id);
      this.pieceSrv.pieceSubCollectionID(this.subCollectionSelect.id);
      this.pieceSrv.piecePaleontSiteID(this.paleontSiteSelect.id);
      if (pieceResult.success){
        this.piece = <Array<PieceModel>>pieceResult.data;
      } else {
        console.log(pieceResult);
      } 
      }catch (error) {
        console.log('Não foi possível carregar as peças', error);
    }
  }

  addOrEdit(model?: PieceModel): void {
    this.navCtrl.push('AdmPiecePage', { _piece: model });
  }

}
