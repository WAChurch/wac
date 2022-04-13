import { AlertController } from '@ionic/angular';
import { Button, Notification } from './dto';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class Alert {
    constructor(private controller: AlertController) { }
    private static SHOWING = false;
    public async present(properties: AlertProperties) {
        if (!Alert.SHOWING) {
            Alert.SHOWING = true;
            let alert = await this.controller.create({
                backdropDismiss: !properties.backdrop,
                buttons: (properties.buttons || []).map(b => ({ cssClass: b.color, handler: () => b.click(), text: b.text })),
                message: '<strong>' + properties.message + '</strong>',
                mode: 'ios'
            });
            alert.onDidDismiss().finally(() => Alert.SHOWING = false);
            await alert.present();
        }
    }
    public presentNotification(notification: Notification) {
        this.present({ message: notification.notifications.reduce((p, c) => p + ' <hr> ' + c) });
    }
}
export interface AlertProperties {
    backdrop?: boolean;
    buttons?: Button[];
    message?: string;
}