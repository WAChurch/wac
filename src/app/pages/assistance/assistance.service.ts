import { Http } from "src/app/tool/http";
import { Injectable } from "@angular/core";
import { Assistance, Event, Person, Relationship } from "src/app/tool/data";
import { ServiceComponent } from "src/app/component/page/service.component";
import { Tool } from "src/app/tool/static";

@Injectable({ providedIn: 'root' })
export class AssistanceService extends ServiceComponent<Assistance>{
    protected url: string = Http.ENDPOINT_ASSISTANCE;

    protected toastCreate(element: Assistance): string { return Tool.personLabel(element.person) + ' asistirá a ' + element.event.name }
    protected toastUpdate(element: Assistance): string { return Tool.personLabel(element.person) + ' actualizado para ' + element.event.name }
    protected toastPostDelete(element: Assistance): string { return Tool.personLabel(element.person) + ' ya no asistirá a ' + element.event.name }
    protected toastPreDelete(element: Assistance): string { return Tool.personLabel(element.person) + ' ya no asistirá a ' + element.event.name }

    public readByEvent(event: Event, next: (elements: Assistance[]) => void) {
        this.read(elements => {
            elements.forEach(callbackfn => callbackfn.event = event);
            next(Tool.assistanceSort(elements));
        }, 'event/' + event.id)
    }
    public readByPerson(person: Person, next: (elements: Assistance[]) => void) {
        this.read(elements => {
            elements.forEach(callbackfn => callbackfn.person = person);
            next(elements);
        }, 'person/' + person.id)
    }
}