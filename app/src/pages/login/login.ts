import { Component, OnInit } from '@angular/core';
import { UserProvider } from '../../providers/user/user';
import { NavParams, NavController } from 'ionic-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {

  form: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userSrv: UserProvider) { }

    async login(): Promise<void> {
      let result = await this.userSrv.autenticate(this.form.email, this.form.passwd);
      if (result.success) {
        UserProvider.RegisterLogin(result.data);
        this.navCtrl.setRoot('PiecePage');
      }
      console.log(result);
    }

    register(): void {
      this.navCtrl.setRoot('RegisterPage');
    }


}
