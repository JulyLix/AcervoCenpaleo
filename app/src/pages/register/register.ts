import { Component } from '@angular/core';
import { userModel } from '../../app/models/userModel';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { AlertProvider } from '../../providers/alert/alert';

@Component({
  selector: 'page-register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class RegisterPage {

  user: userModel = new userModel();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userSrv: UserProvider,
    private alertSrv: AlertProvider
  ) { }

  async register(): Promise<void> {
    let registerResult = await this.userSrv.register(this.user);
    if (registerResult.success) {
      this.alertSrv.toast('Cadastro realizado com sucesso!', 'bottom');
      this.navCtrl.setRoot('LoginPage');
    }
  }

  cancel() {
    this.navCtrl.setRoot('LoginPage');
  }

}
