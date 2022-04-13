import { Button, Image, Param } from "./dto";
import { CameraW } from "./camera";
import { Injectable } from "@angular/core";
import { Parameter } from "./static";
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { PictureSourceType } from "@ionic-native/camera/ngx";
import { Sheet } from "./sheet";
import { timer } from "rxjs";
import { Alert } from "./alert";

@Injectable({ providedIn: 'root' })
export class Avatar {
    private param: Param;

    constructor(private alert: Alert, private camera: CameraW, private sheet: Sheet, private viewer: PhotoViewer) { Parameter.getParam().subscribe(p => this.param = p) }

    private photo(type: PictureSourceType, process: (p: string) => void) { this.camera.image(type, p => timer(1).subscribe(() => process(p))); }
    private view(path: string) { this.viewer.show(this.param.photos + path) }

    public image(process: (p?: string) => void, image: Image = {}) {
        if (image.readonly) { if (image.url) this.view(image.url) }
        else {
            let buttons: Button[] = image.url ? [{ click: () => this.view(image.url), icon: 'image-outline', text: 'Ver foto' }] : [];
            buttons.push(
                { click: () => this.photo(PictureSourceType.CAMERA, process), icon: 'camera-outline', text: 'Camara' },
                { click: () => this.photo(PictureSourceType.PHOTOLIBRARY, process), icon: 'folder-open-outline', text: 'Subir imagen' }
            );
            if (image.url || image.src) buttons.push({
                click: () => this.alert.present({
                    buttons: [{
                        click: () => process(),
                        color: 'danger',
                        text: 'Eliminar'
                    }],
                    message: '¿Eliminar imagen?'
                }), color: 'danger', icon: 'close-outline', text: 'Eliminar'
            });
            this.sheet.present(buttons, 'Foto de perfil');
        }
    }
}