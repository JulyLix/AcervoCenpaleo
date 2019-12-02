import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
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

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
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
    CameraProvider
  ]
})
export class AppModule {}
