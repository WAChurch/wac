import { ActionSheetController } from "@ionic/angular";
import { Button } from "./dto";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class Sheet {
    constructor(private controller: ActionSheetController) { }
    public async present(buttons: Button[] = [], header: string) {
        await (await this.controller.create({
            buttons: buttons.map(b => ({
                cssClass: b.color,
                handler: b.click,
                icon: b.icon,
                text: b.text
            })),
            header: header,
            mode: 'md'
        })).present();
    }
}