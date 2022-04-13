import { Http } from "src/app/tool/http";
import { Injectable } from "@angular/core";
import { ServiceComponent } from "src/app/component/page/service.component";
import { Observation } from "src/app/tool/data";

@Injectable({ providedIn: 'root' })
export class ObservationService extends ServiceComponent<Observation>{
    protected url: string = Http.ENDPOINT_OBSERVATION;

    protected toastCreate(element: Observation): string { return 'Se creó la observación ' + element.name }
    protected toastUpdate(element: Observation): string { return 'Se actualizó la observación ' + element.name }
    protected toastPostDelete(element: Observation): string { return 'Se eliminó la observación ' + element.name }
    protected toastPreDelete(element: Observation): string { return '¿Eliminar la observación ' + element.name + ' definitivamente?' }
}