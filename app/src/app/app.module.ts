import { Camera } from '@ionic-native/camera/ngx';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Spinner } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AlertProvider } from '../providers/alert/alert';
import { NetworkProvider } from '../providers/network/network';
import { HttpProvider } from '../providers/http/http';
import { SpinnerProvider } from '../providers/spinner/spinner';
import { CollectionProvider } from '../providers/collection/collection';
import { CollectorProvider } from '../providers/collector/collector';
import { PieceProvider } from '../providers/piece/piece';
import { PaleontSiteProvider } from '../providers/paleont-site/paleont-site';
import { UserProvider } from '../providers/user/user';
import { CameraProvider } from '../providers/camera/camera';
import { HttpClientModule } from '@angular/common/http';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Network } from '@ionic-native/network/ngx';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlertProvider,
    NetworkProvider,
    HttpProvider,
    SpinnerProvider,
    CollectionProvider,
    CollectorProvider,
    PieceProvider,
    PaleontSiteProvider,
    UserProvider,
    CameraProvider,
    Camera,
    OneSignal,
    Network,
    Spinner
  ],
  
})
export class AppModule {}
