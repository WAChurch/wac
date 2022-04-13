import { Button, Item } from "src/app/tool/dto"
import { Assistance, Contact, Entity, Event, Media, Observation, ObservationType, Particular, Person, Relationship, Role } from "../../../tool/data"
import { Filter, FilterTool } from "src/app/tool/filter"
import { Injectable } from "@angular/core"
import { ListProperties } from "./list.component"
import { Modal, ModalProperties } from "src/app/tool/modal"
import { ModalController } from "@ionic/angular"
import { PersonService } from "src/app/pages/person/component/service/person.service"
import { RelationshipService } from "src/app/pages/relationship/relationship.service"
import { Tool } from "../../../tool/static"
import { ContactService } from "src/app/pages/contact/service/contact.service"
import { EventService } from "src/app/pages/event/component/service/event.service"
import { AssistanceService } from "src/app/pages/assistance/assistance.service"
import { ObservationService } from "src/app/pages/observation/component/service/observation.service"
import { ParticularService } from "src/app/pages/particular/service/particular.service"

@Injectable({ providedIn: 'root' })
export class ListModal {
    constructor(private assistanceService: AssistanceService, private contactService: ContactService, private eventService: EventService, private observationService: ObservationService, private personService: PersonService, private particularService: ParticularService, private relationshipService: RelationshipService, private controller: ModalController) { }

    private item<E extends Entity>(entity: E, properties: ListModalProperties<E>): Item<E> {
        return {
            buttons: properties.buttons,
            detail: () => properties.detail(entity),
            entity: entity,
            label: ''
        }
    }
    private fill<E extends Entity>(properties: ListModalProperties<E>, elements: E[]) {
        properties.getComponent().fill(elements)
        if (properties.count) properties.count(elements.length);
    }
    public assistanceEvent(eventDetailComponent: any, properties: ListModalProperties<Assistance>): ListProperties<Assistance> {
        properties.detail = assistance => this.detailEvent(eventDetailComponent, () => properties.back(), assistance.event);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements: Assistance[], filters: Filter[]) => FilterTool.assistance(elements, filters),
            initialize: () => this.assistanceService.readByPerson(properties.getEntity(), elements => this.fill(properties, elements)),
            items: elements => {
                return elements.map(callbackfn => {
                    let future = Tool.isFuture(new Date(callbackfn.event.date));
                    let item = this.item(callbackfn, properties);
                    item.buttons = future ? [(callbackfn.role ? properties.buttons[0] : properties.buttons[1])] : [];
                    item.icon = 'calendar' + (future ? '-outline' : '');
                    item.label = callbackfn.event.name;
                    item.small = Tool.dateLabel(callbackfn.event);
                    item.sub = callbackfn.role ? Role[callbackfn.role] : 'No ' + (future ? 'asistirá' : 'asistió');
                    item.subcolor = callbackfn.role ? 'success' : 'danger';
                    return item;
                })
            },
            readonly: true,
            service: this.assistanceService
        }
    }
    public assistancePerson(personDetailComponent: any, properties: ListModalProperties<Assistance>): ListProperties<Assistance> {
        properties.detail = assistance => this.detailEvent(personDetailComponent, () => properties.back(), assistance.person);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements: Assistance[], filters: Filter[]) => FilterTool.assistancePerson(elements, filters),
            initialize: () => this.assistanceService.readByEvent(properties.getEntity(), elements => this.fill(properties, elements)),
            items: elements => {
                return elements.map(callbackfn => {
                    let future = Tool.isFuture(new Date(callbackfn.event.date));
                    let item = this.item(callbackfn, properties);
                    item.buttons = future ? [(callbackfn.role ? properties.buttons[0] : properties.buttons[1])] : [];
                    item.image = callbackfn.person.photo;
                    item.label = Tool.personLabel(callbackfn.person)
                    item.small = callbackfn.person.identification;
                    item.sub = callbackfn.role ? Role[callbackfn.role] : 'No ' + (future ? 'asistirá' : 'asistió');
                    item.subcolor = callbackfn.role ? 'success' : 'danger';
                    return item;
                })
            },
            readonly: true,
            service: this.assistanceService
        }
    }
    public contact(go: (contact: Contact) => void, properties: ListModalProperties<Contact>): ListProperties<Contact> {
        properties.detail = contact => go(contact);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements: Contact[], filters: Filter[]) => elements,
            initialize: () => this.contactService.readByPerson(properties.getEntity(), elements => this.fill(properties, elements)),
            items: elements => elements.map(callbackfn => {
                let item = this.item(callbackfn, properties);
                item.icon = Tool.iconMedia(Media[callbackfn.media]);
                item.label = callbackfn.value;
                item.sub = Media[callbackfn.media];
                return item;
            }),
            readonly: properties.readonly,
            service: this.personService
        }
    }
    public event(eventDetailComponent: any, properties: LMNotificationProperties<Event>): ListProperties<Event> {
        properties.detail = event => this.detailEvent(eventDetailComponent, () => properties.back(), event);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements: Event[], filters: Filter[]) => FilterTool.event(elements, filters),
            items: elements => elements.map(callbackfn => {
                let item = this.item(callbackfn, properties);
                item.icon = 'calendar' + (Tool.isFuture(new Date(callbackfn.date)) ? '-outline' : '');
                item.label = callbackfn.name;
                item.notification = properties.notification ? Tool.eventNotification(callbackfn.date) : null;
                item.sub = Tool.dateLabel(callbackfn);
                return item;
            }),
            readonly: properties.readonly,
            service: this.eventService
        }
    }
    public observation(observationDetailComponent: any, properties: ListModalProperties<Observation>): ListProperties<Observation> {
        properties.detail = observation => this.detailEvent(observationDetailComponent, () => properties.back(), observation);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements: Observation[], filters: Filter[]) => FilterTool.observation(elements, filters),
            items: elements => elements.map(callbackfn => {
                let item = this.item(callbackfn, properties);
                item.label = callbackfn.name;
                item.sub = ObservationType[callbackfn.type];
                item.icon = Tool.iconObservationType(ObservationType[callbackfn.type]);
                return item;
            }),
            readonly: properties.readonly,
            service: this.observationService
        }
    }
    public particularObservation(particularDetailComponent: any, properties: ListModalProperties<Particular>): ListProperties<Particular> {
        properties.detail = particular => this.detailParticular(particularDetailComponent, () => properties.back(), 'P', particular);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements: Particular[], filters: Filter[]) => FilterTool.particularObservation(elements, filters),
            initialize: () => this.particularService.readByPerson(properties.getEntity(), elements => this.fill(properties, elements)),
            items: elements => {
                return elements.map(callbackfn => {
                    let item = this.item(callbackfn, properties);
                    item.icon = Tool.iconObservationType(ObservationType[callbackfn.observation.type]);
                    item.label = callbackfn.observation.name;
                    item.small = callbackfn.date ? Tool.dateLabel({ date: callbackfn.date }) : null;
                    item.sub = callbackfn.detail;
                    return item;
                })
            },
            readonly: true,
            service: this.particularService
        }
    }
    public particularPerson(particularDetailComponent: any, properties: ListModalProperties<Particular>): ListProperties<Particular> {
        properties.detail = particular => this.detailParticular(particularDetailComponent, () => properties.back(), 'O', particular);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements: Particular[], filters: Filter[]) => FilterTool.particularPerson(elements, filters),
            initialize: () => this.particularService.readByObservation(properties.getEntity(), elements => this.fill(properties, elements)),
            items: elements => {
                return elements.map(callbackfn => {
                    let item = this.item(callbackfn, properties);
                    item.image = callbackfn.person.photo;
                    item.label = Tool.personLabel(callbackfn.person);
                    item.small = callbackfn.date ? Tool.dateLabel({ date: callbackfn.date }) : null;
                    item.sub = callbackfn.detail;
                    return item;
                })
            },
            readonly: true,
            service: this.particularService
        }
    }
    public person(personDetailComponent: any, properties: LMNotificationProperties<Person>): ListProperties<Person> {
        properties.detail = person => this.detailPerson(personDetailComponent, () => properties.back(), person);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements: Person[], filters: Filter[]) => FilterTool.person(elements, filters),
            image: (element: Person, image: string) => {
                element.photo = null;
                element.src = image;
                this.personService.update(element, () => properties.getComponent().refresh());
            },
            items: elements => elements.map(callbackfn => {
                let item = this.item(callbackfn, properties);
                item.image = callbackfn.photo;
                item.label = Tool.personLabel(callbackfn);
                item.notification = properties.notification ? Tool.personNotification(callbackfn) : null;
                item.sub = callbackfn.identification
                return item;
            }),
            readonly: properties.readonly,
            service: this.personService
        }
    }
    public relationship(personDetailComponent: any, properties: ListModalProperties<Relationship>): ListProperties<Relationship> {
        properties.detail = relationship => this.detailPerson(personDetailComponent, () => properties.back(), relationship.dominant.id === properties.getEntity().id ? relationship.recessive : relationship.dominant);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements: Relationship[], filters: Filter[]) => FilterTool.relationship(properties.getEntity(), elements, filters),
            initialize: () => this.relationshipService.readByPerson(properties.getEntity(), elements => this.fill(properties, elements)),
            items: elements => {
                return elements.map(callbackfn => {
                    let person: Person;
                    let relationship: 'DOMINANT' | 'RECESSIVE';
                    if (callbackfn.dominant.id === properties.getEntity().id) {
                        person = callbackfn.recessive;
                        relationship = 'RECESSIVE';
                    } else {
                        person = callbackfn.dominant;
                        relationship = 'DOMINANT'
                    }
                    let item = this.item(callbackfn, properties);
                    item.image = person.photo;
                    item.label = Tool.personLabel(person);
                    item.small = person.identification;
                    item.sub = Tool.relationship(person.gender, relationship, callbackfn.type);
                    return item;
                })
            },
            readonly: true,
            service: this.relationshipService
        }
    }

    public detailPerson(personDetailComponent: any, back: (per: Person) => void, person?: Person) {
        Modal.modalDetail(personDetailComponent, this.controller, {
            entity: person,
            onDismiss: per => back(per)
        });
    }

    public detailEvent(eventDetailComponent: any, back: () => void, event?: Event) {
        Modal.modalDetail(eventDetailComponent, this.controller, {
            entity: event,
            onDismiss: () => back()
        });
    }

    public detailParticular(particularDetailComponent: any, back: () => void, origen: 'O' | 'P', particular?: Particular) {
        Modal.modalDetail(particularDetailComponent, this.controller, {
            origen: origen,
            entity: particular,
            onDismiss: () => back()
        });
    }

    public detailObservation(observationDetailComponent: any, back: () => void, observation?: Observation) {
        Modal.modalDetail(observationDetailComponent, this.controller, {
            entity: observation,
            onDismiss: () => back()
        });
    }
}

export interface ListModalProperties<E extends Entity> extends ModalProperties<E> {
    activeButtons?: boolean;
    back: () => void;
    buttons: Button[];
    count?: (count: number) => void;
    readonly?: boolean;
}

export interface LMNotificationProperties<E extends Entity> extends ListModalProperties<E> {
    notification?: boolean;
}
