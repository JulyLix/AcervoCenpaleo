import { CollectionProvider } from './../../providers/collection/collection';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Events } from 'ionic-angular';
import { CollectionModel } from '../../app/models/collectionModel';
import { ConfigHelper } from '../../app/helpers/configHelper';

@IonicPage()
@Component({
  selector: 'app-collection',
  templateUrl: './collection.html',
  styleUrls: ['./collection.scss'],
})
export class CollectionPage {

    collections: Array<CollectionModel> = new Array<CollectionModel>();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private collectionSrv: CollectionProvider,
    public actionSheetCtrl: ActionSheetController,
    public evt: Events) { }

  ionViewWillEnter() {
    this.load();
  }

  async load(): Promise<void> {
    try {
      let collectionsResult = await this.collectionSrv.get();
      if (collectionsResult.success) {
      this.collections = collectionsResult.data as Array<CollectionModel>;
      }
    } catch (error) {
      console.log('Não foi possível carregar as Coleções', error);
    }
  }

  adminOptions(): void {
    let action = this.actionSheetCtrl.create({
      title: 'Administração',
      buttons: [
        {text: 'Gerenciar Coleções', handler: () => {this.manageCollections(); } },
        {text: 'Cancelar', handler: () => {}, role: 'destructive'}
      ]
    });
    action.present();
  }

  private manageCollections(): void {
    this.navCtrl.push('AdmCollectionsPage');
  }

}
