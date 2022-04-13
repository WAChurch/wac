import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({ providedIn: 'root' })
export class Toast {
    constructor(private controller: ToastController) { }

    public async present(header: string) {
        await (await this.controller.create({
            duration: 3000,
            header: header,
            mode: 'ios'
        })).present();
    }
}