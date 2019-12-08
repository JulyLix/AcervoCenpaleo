import { Injectable } from '@angular/core';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';
import { Platform } from 'ionic-angular';


@Injectable()
export class CameraProvider {

  constructor(
    private camera: Camera,
    private platform: Platform) {
  }

  private _getPicture(source: number, callback): void {
    if (this.platform.is('cordova')) {
      this.platform.ready().then(() => {
        try {
          let options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: source,
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            correctOrientation: true
          }
          this.camera.getPicture(options).then(
            (imgData) => {
              let base64Image = `data:image/jpeg;base64,${imgData}`
              callback(base64Image);
            },
            err => {
              console.log('Não foi possível capturar a foto', err);
            });
        } catch (error) {
          console.log('Não foi possível tirar a foto', error);
        }
      });
    } else {
      alert('Funcionalidade disponível somente em dispositivos móveis.')
    }
  }

  public getPictureFromGalery(callback): void {
    this._getPicture(this.camera.PictureSourceType.CAMERA,
      photo => {
        callback(photo)
      });
  }

  public takePicture(callback): void {
    this._getPicture(this.camera.PictureSourceType.CAMERA,
      photo => {
        callback(photo)
      });
  }

}
