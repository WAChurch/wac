import { DetailComponent, DetailProperties } from "../component/page/detail.component"
import { Entity } from "./data"
import { ListComponent } from "../component/page/list/list.component"
import { ModalController } from "@ionic/angular"
import { ServiceComponent } from "../component/page/service.component"

export class Modal {
    public static async modal(component: any, controller: ModalController, props?: any) {
        await (await controller.create({
            component: component, componentProps: { properties: props }
        })).present();
    }
    public static async modalDetail<C extends DetailComponent<E, S>, E extends Entity, S extends ServiceComponent<E>>(component: { new(): C }, controller: ModalController, properties: DetailProperties<E>) { this.modal(component, controller, properties) }
}

export interface ModalProperties<E extends Entity> {
    detail?: (entity?: E) => void;
    getComponent: () => ListComponent<E>;
    getEntity?: () => E;
}