import { Http } from "src/app/tool/http";
import { Injectable } from "@angular/core";
import { ServiceComponent } from "src/app/component/page/service.component";
import { Event, Person } from "src/app/tool/data";
import { Tool } from "src/app/tool/static";

@Injectable({ providedIn: 'root' })
export class PersonService extends ServiceComponent<Person>{
    protected url: string = Http.ENDPOINT_PERSON;

    protected toastCreate(element: Person): string { return 'Se creó a ' + Tool.personLabel(element) }
    protected toastUpdate(element: Person): string { return 'Se actualizó a ' + Tool.personLabel(element) }
    protected toastPostDelete(element: Person): string { return 'Se eliminó a ' + Tool.personLabel(element) }
    protected toastPreDelete(element: Person): string { return '¿Eliminar a ' + Tool.personLabel(element) + ' definitivamente?' }

    public read(next: (elements: Person[]) => void, extra: string = ''): void { super.read(elements => next(Tool.personSort(elements)), extra); }
    public readCandidateAssistance(event: Event, next: (persons: Person[]) => void) { this.read(persons => next(Tool.personSort(persons)), 'candidate/assistance/' + event.id) }
    public readCandidateRelationship(person: Person, next: (persons: Person[]) => void) { this.read(persons => next(Tool.personSort(persons)), 'candidate/relationship/' + person.id) }
}