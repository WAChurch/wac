import { Http } from "src/app/tool/http";
import { Injectable } from "@angular/core";
import { Person, Relationship } from "src/app/tool/data";
import { ServiceComponent } from "src/app/component/page/service.component";
import { Tool } from "src/app/tool/static";

@Injectable({ providedIn: 'root' })
export class RelationshipService extends ServiceComponent<Relationship>{
    protected url: string = Http.ENDPOINT_RELATIONSHIP;

    protected toastCreate(element: Relationship): string { return Tool.personLabel(element.dominant) + ' ahora es ' + Tool.relationship(element.dominant.gender, 'DOMINANT', element.type) + ' de ' + Tool.personLabel(element.recessive) }
    protected toastUpdate(element: Relationship): string { return Tool.personLabel(element.dominant) + ' ahora es ' + Tool.relationship(element.dominant.gender, 'DOMINANT', element.type) + ' de ' + Tool.personLabel(element.recessive) }
    protected toastPostDelete(element: Relationship): string { return Tool.personLabel(element.dominant) + ' dejó de ser ' + Tool.relationship(element.dominant.gender, 'DOMINANT', element.type) + ' de ' + Tool.personLabel(element.recessive) }
    protected toastPreDelete(element: Relationship): string { return Tool.personLabel(element.dominant) + ' dejará de ser ' + Tool.relationship(element.dominant.gender, 'DOMINANT', element.type) + ' de ' + Tool.personLabel(element.recessive) }

    public readByPerson(person: Person, next: (elements: Relationship[]) => void) { this.read(elements => next(Tool.relationshipSort(elements, person.id)), 'person/' + person.id) }
}