import { Http } from "src/app/tool/http";
import { Injectable } from "@angular/core";
import { Observation, ObservationType, Particular, Person } from "src/app/tool/data";
import { ServiceComponent } from "src/app/component/page/service.component";
import { Tool } from "src/app/tool/static";

@Injectable({ providedIn: 'root' })
export class ParticularService extends ServiceComponent<Particular>{
    protected url: string = Http.ENDPOINT_PARTICULAR;

    protected toastCreate(element: Particular): string { return 'Se creó un caso de ' + ObservationType[element.observation.type] + ' para ' + Tool.personLabel(element.person) }
    protected toastUpdate(element: Particular): string { return 'Se actualizó un caso de ' + ObservationType[element.observation.type] + ' para ' + Tool.personLabel(element.person) }
    protected toastPostDelete(element: Particular): string { return 'Se eliminó un caso de ' + ObservationType[element.observation.type] + ' para ' + Tool.personLabel(element.person) }
    protected toastPreDelete(element: Particular): string { return 'Se eliminará un caso de ' + ObservationType[element.observation.type] + ' para ' + Tool.personLabel(element.person) }

    public readByObservation(observation: Observation, next: (elements: Particular[]) => void) {
        this.read(elements => {
            elements.forEach(callbackfn => callbackfn.observation = observation);
            next(elements);
        }, 'observation/' + observation.id)
    }
    public readByPerson(person: Person, next: (elements: Particular[]) => void) {
        this.read(elements => {
            elements.forEach(callbackfn => callbackfn.person = person);
            next(elements);
        }, 'person/' + person.id)
    }
}