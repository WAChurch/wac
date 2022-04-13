import { Asynchronous } from "./asynchronous";
import { Camera, PictureSourceType } from "@ionic-native/camera/ngx";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CameraW {
    constructor(private asyn: Asynchronous, private camera: Camera) { }
    public image(type: PictureSourceType, next: (s: any) => void) {
        this.asyn.then(type === PictureSourceType.CAMERA ? 'No se pudo usar la cámara' : 'No se pudo obtener la imágen', this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 100,
            saveToPhotoAlbum: true,
            sourceType: type
        }), { next: n => next(n) })
    }
}