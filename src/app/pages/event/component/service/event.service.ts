import { Http } from "src/app/tool/http";
import { Injectable } from "@angular/core";
import { ServiceComponent } from "src/app/component/page/service.component";
import { Event, Person } from "src/app/tool/data";

@Injectable({ providedIn: 'root' })
export class EventService extends ServiceComponent<Event>{
    protected url: string = Http.ENDPOINT_EVENT;

    protected toastCreate(element: Event): string { return 'Se creó el evento ' + element.name }
    protected toastUpdate(element: Event): string { return 'Se actualizó el evento ' + element.name }
    protected toastPostDelete(element: Event): string { return 'Se eliminó el evento ' + element.name }
    protected toastPreDelete(element: Event): string { return '¿Eliminar el evento ' + element.name + ' definitivamente?' }

    public readCandidateAssistance(person: Person, next: (events: Event[]) => void) { this.read(events => next(events), 'candidate/assistance/' + person.id) }
}