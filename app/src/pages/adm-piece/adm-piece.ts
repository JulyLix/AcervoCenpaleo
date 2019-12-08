//import { CameraOriginal } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ActionSheetController, Platform } from 'ionic-angular';
import { PieceModel } from '../../app/models/pieceModel';
import { CollectorModel } from '../../app/models/collectorModel';
import { CollectionModel } from '../../app/models/collectionModel';
import { paleontSiteModel } from '../../app/models/paleontSiteModel';
import { PieceProvider } from '../../providers/piece/piece';
import { CollectorProvider } from '../../providers/collector/collector';
import { CollectionProvider } from '../../providers/collection/collection';
import { AlertProvider } from '../../providers/alert/alert';
import { PaleontSiteProvider } from '../../providers/paleont-site/paleont-site';
import { CameraProvider } from '../../providers/camera/camera';

@IonicPage ()
@Component({
  selector: 'page-adm-piece',
  templateUrl: 'adm-piece.html',
})
export class AdmPiecePage {

  piece: PieceModel;
  collector: Array<CollectorModel> = new Array<CollectorModel>();
  collection: Array<CollectionModel> = new Array<CollectionModel>();
  subCollection: Array<CollectionModel> = new Array<CollectionModel>();
  paleontSite: Array<paleontSiteModel> = new Array<paleontSiteModel>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ActionSheetCtrl: ActionSheetController,
    public platform: Platform,
    private pieceSrv: PieceProvider,
    private collectorSrv: CollectorProvider,
    private collectionSrv: CollectionProvider,
    private paleontSiteSrv: PaleontSiteProvider,
    private alertSrv: AlertProvider,
    private cameraSrv: CameraProvider
    ) {

      let _piece = this.navParams.get('_piece');
      if (_piece && _piece._id) {
        this.piece = <PieceModel>_piece;
        this.piece.collectionPiece = _piece.collectionPiece._id;
        this.piece.collectorPiece = _piece.collectorPeice._id;
        this.subCollection = _piece.subCollection._id;
        this.paleontSite = _piece.paleontSite._id;
      } else {
        this.piece = new PieceModel();
      }
      this.loadData();
  }

  async loadData(): Promise<void> {
    try {
      let collectionResult = await this.collectionSrv.get();
      let collectorResult = await this.collectorSrv.get();
      let paleontSiteResult = await this.paleontSiteSrv.get();
      let subCollectionResult = await this.collectionSrv.get();
      if(collectorResult.success && collectionResult.success && subCollectionResult.success && paleontSiteResult.success) {
        this.collection = <Array<CollectionModel>>collectionResult.data;
        this.collector = <Array<CollectorModel>>collectorResult.data;
        this.subCollection = <Array<CollectionModel>>subCollectionResult.data;
        this.paleontSite = <Array<paleontSiteModel>>paleontSiteResult.data;
      }
    } catch (error) {
      console.log('Erro ao carregar dependências', error);
    }
  }

  async delete(): Promise<void> {
    try {
      this.alertSrv.confirm('Remover?', `Deseja realmente remover a peça ${this.piece.namePiece}?`, 
      async () => {
        let deleteResult = await this.pieceSrv.delete(this.piece._id);
        if (deleteResult.success) {
          this.alertSrv.toast('Peça removida com sucesso!', 'center');
          this.navCtrl.setRoot('AdmPiecePage');
        }
      });
    } catch (error) {
      console.log('Erro ao remover', error);
    }
  }

  async save(): Promise<void> {
    let success = false
    if(!this.piece._id) {
      let registerResult = await this.pieceSrv.post(this.piece);
      success = registerResult.success;
    } else {
      let updateResult = await this.pieceSrv.put(this.piece._id, this.piece);
      success = updateResult.success;
    }
    if (success) {
      this.alertSrv.toast('Peça salva com sucesso!', 'center');
      this.navCtrl.setRoot('AdmPiecePage');
    }
  }

  getPictureOption(): void {
    let ActionSheet = this.ActionSheetCtrl.create({
      title: 'Adicinar  foto',
      buttons: [
        {
          text: 'Tirar Foto', handler: () => {
            this.cameraSrv.takePicture(photo => {
              this.piece.imagePiece = photo;
            });
          },
          icon: this.platform.is('ios') ? null : 'camera'
        },
        {
          text: 'Pegar galeria',
          handler: (() => {
            this.cameraSrv.getPictureFromGalery(photo => {
              this.piece.imagePiece = photo;
            });
          }),
          icon: this.platform.is('ios') ? null : 'images'
        },
        {
          text:'Cancelar',
          role: 'destructive',
          icon: this.platform.is('ios') ? null : 'close',
          handler: () => {

          }
        }
      ]
    });
    ActionSheet.present();
  }
}