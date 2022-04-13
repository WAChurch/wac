import { Injectable } from "@angular/core";
import { Option } from "./dto";
import { PopoverController } from "@ionic/angular";
import { SelectPopoverComponent } from "../component/select/select.popover.component";

@Injectable({ providedIn: 'root' })
export class Popover {
    constructor(private controller: PopoverController) { }

    public async present<V>(detail: (value: V) => void, event: MouseEvent, options: Option<V>[]) {
        const popover = await this.controller.create({
            component: SelectPopoverComponent,
            componentProps: { options: options, select: (option: V) => this.controller.dismiss(option) },
            event: event,
            mode: 'ios'
        });
        popover.onWillDismiss().then(onfulfilled => { if (onfulfilled.data) detail(onfulfilled.data) })
        await popover.present();
    }
}