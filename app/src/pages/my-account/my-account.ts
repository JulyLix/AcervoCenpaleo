import { CameraProvider } from './../../providers/camera/camera';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ActionSheetController } from 'ionic-angular';
import { userModel } from '../../app/models/userModel';
import { UserProvider } from '../../providers/user/user';
import { AlertProvider } from '../../providers/alert/alert';
import { ConfigHelper } from '../../app/helpers/configHelper';

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {
  LogedUser: userModel = new userModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cameraSrv: CameraProvider,
    private userSrv: UserProvider,
    public ActionSheetCtrl: ActionSheetController,
    private alertSrv: AlertProvider) {
  }

  ionViewDidLoad() {
    this.LoadData();
  }

  changePicture(): void {
    let action = this.ActionSheetCtrl.create({
      title: 'Foto',
      buttons: [
        { text: 'Limpar', handler: () => {this.LogedUser.photoUser = ConfigHelper.photo;}},
        { text: 'Tirar foto', handler: () => { this.cameraSrv.getPictureFromGalery(photo => {
            this.LogedUser.photoUser = photo; });
        } },
      { text: 'Cancelar', handler: () => { }, role: 'destructive' }
      ]
    });
    action.present();
  }

  async save(): Promise<void> {
    try {
      let saveResult = await this.userSrv.put(this.LogedUser.id,this.LogedUser);
      if (saveResult.success) {
        this.alertSrv.toast('Dados atualizados com sucesso!', 'bottom');
      }
    } catch (error) {
      console.log('Não foi possível atuaizar os dados. ', error);
    }
  }

  async LoadData(): Promise<void> {
    try {
      let user = <userModel>JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.selectCategory.user));
      let userResult = await this.userSrv.getByUid(user.id);
      if(userResult.success) {
        this.LogedUser = <userModel>userResult.data;
        if(!this.LogedUser.photoUser)
        this.LogedUser.photoUser = ConfigHelper.photo;
      }
    } catch (error) {
      console.log('Não foi possível carregar os dados do Usuário');
    }
  }

}
