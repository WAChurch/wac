import { Injectable } from "@angular/core"
import { ListModal } from "src/app/component/page/list/list.modal"
import { ModalController } from "@ionic/angular"
import { Modal, ModalProperties } from "src/app/tool/modal"
import { RelationshipService } from "src/app/pages/relationship/relationship.service"
import { Sheet } from "src/app/tool/sheet"
import { Alert } from "src/app/tool/alert"
import { Assistance, Entity, Event, Gender, Observation, Particular, Person, Relationship, RelationshipType, Role } from "src/app/tool/data"
import { FilterValues } from "src/app/tool/filter"
import { PersonService } from "src/app/pages/person/component/service/person.service"
import { Tool } from "src/app/tool/static"
import { ChooseComponent, ChooseProperties } from "./choose.component"
import { HeaderModal } from "../header/header"
import { HeaderProperties } from "../header/header.component"
import { ListProperties } from "../list/list.component"
import { AssistanceService } from "src/app/pages/assistance/assistance.service"
import { EventService } from "src/app/pages/event/component/service/event.service"
import { Button } from "src/app/tool/dto"
import { ParticularService } from "src/app/pages/particular/service/particular.service"
import { ObservationService } from "src/app/pages/observation/component/service/observation.service"

@Injectable({ providedIn: 'root' })
export class ChooseModal {
    constructor(private alert: Alert, private assistanceService: AssistanceService, private observationService: ObservationService, private controller: ModalController, private eventService: EventService, private listModal: ListModal, private particularService: ParticularService, private personService: PersonService, private relationshipService: RelationshipService, private sheet: Sheet) { }

    private newRelationship(person: Person, per: Person, refresh: (e: Entity) => void) {
        this.sheet.present(FilterValues.RELATIONSHIP.map(callbackfn => {
            let text = callbackfn;
            if (Gender[per.gender] === Gender.FEMALE) {
                if (callbackfn === 'Primo') text = 'Prima';
                else if (callbackfn === 'Amigo') text = 'Amiga';
                else if (callbackfn === 'Abuelo') text = 'Abuela';
                else if (callbackfn === 'Nieto') text = 'Nieta';
                else if (callbackfn === 'Padre') text = 'Madre';
                else if (callbackfn === 'Hijo') text = 'Hija';
                else if (callbackfn === 'Hermano') text = 'Hermana';
                else if (callbackfn === 'Tio') text = 'Tia';
                else if (callbackfn === 'Sobrino') text = 'Sobrina';
            }
            return {
                click: () => {
                    let relationship: Relationship = {};
                    if (callbackfn === 'Primo') relationship.type = RelationshipType.COUSINS;
                    else if (callbackfn === 'Familiar') relationship.type = RelationshipType.FAMILY;
                    else if (callbackfn === 'Amigo') relationship.type = RelationshipType.FRIENDS;
                    else if (callbackfn === 'Abuelo' || callbackfn === 'Nieto') relationship.type = RelationshipType.GRANDPARENTS;
                    else if (callbackfn === 'Padre' || callbackfn === 'Hijo') relationship.type = RelationshipType.PARENTS;
                    else if (callbackfn === 'Hermano') relationship.type = RelationshipType.SIBLING;
                    else if (callbackfn === 'Tio' || callbackfn === 'Sobrino') relationship.type = RelationshipType.UNCLES;
                    if (callbackfn === 'Nieto' || callbackfn === 'Hijo' || callbackfn === 'Sobrino') {
                        relationship.dominant = person;
                        relationship.recessive = per;
                    } else {
                        relationship.dominant = per;
                        relationship.recessive = person;
                    }
                    this.alert.present({
                        buttons: [{
                            click: () => this.relationshipService.create(relationship, e => refresh(e)),
                            color: 'success',
                            text: 'Confirmar'
                        }], message: Tool.personLabel(relationship.dominant) + ' será ' + Tool.relationship(relationship.dominant.gender, 'DOMINANT', relationship.type) + ' de ' + Tool.personLabel(relationship.recessive)
                    })
                },
                icon: 'people-outline',
                text: text
            };
        }), '¿Qué relación tiene ' + Tool.personLabel(per) + ' con ' + Tool.personLabel(person) + '?')
    }

    public newAssistance(event: Event, person: Person, refresh: (e: Entity) => void) {
        let buttons: Button[] = [];
        for (let r in Role) {
            buttons.push({
                click: () => {
                    let assistance: Assistance = {};
                    assistance.event = event;
                    assistance.person = person;
                    assistance.role = Tool.enumName(r);
                    this.alert.present({
                        buttons: [{
                            click: () => this.assistanceService.create(assistance, e => refresh(e)),
                            color: 'success',
                            text: 'Confirmar'
                        }], message: Tool.personLabel(person) + ' asistirá a ' + event.name + ' como ' + Role[r]
                    })
                },
                icon: 'people-outline',
                text: Role[r]
            })
        }
        this.sheet.present(buttons, '¿Cómo asistirá ' + Tool.personLabel(person) + ' a ' + event.name + '?')
    }

    public choose<E extends Entity>(properties: CMP<E>): ChooseProperties<E> {
        if (properties.back) properties.header.onDismiss = e => properties.back(e);
        return {
            headerProperties: properties.header,
            initialize: (next: (ent: any[]) => void) => properties.initialize(ent => next(ent)),
            listProperties: properties.list
        };
    }

    public assistancePerson(properties: ChooseModalProperties<Event>, component: any) {
        let choose: ChooseProperties<Person> = null;
        let cmp: CMP<Person> = {
            ...properties,
            header: HeaderModal.assistancePerson({
                hideAddButton: !Tool.isFuture(new Date(properties.getEntity().date)),
                getComponent: () => properties.getComponent(),
                detail: () => this.eventAddAssistance({
                    back: () => choose.reset(),
                    getComponent: () => properties.getComponent(),
                    getEntity: () => properties.getEntity()
                }, component)
            }),
            initialize: next => this.assistanceService.readByEvent(properties.getEntity(), assistances => next(assistances)),
            list: this.listModal.assistancePerson(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                    click: assistance => this.assistanceService.delete(assistance, () => choose.reset()),
                    color: 'danger',
                    icon: 'remove-outline'
                }, {
                    click: assistance => this.newAssistance(assistance.event, assistance.person, () => choose.reset()),
                    color: 'success',
                    icon: 'add-outline'
                }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            })
        };
        choose = this.choose(cmp)
        Modal.modal(ChooseComponent, this.controller, choose);
    }

    public assistanceEvent(properties: ChooseModalProperties<Event>, component: any) {
        let choose: ChooseProperties<Event> = null;
        let cmp: CMP<Event> = {
            ...properties,
            header: HeaderModal.assistanceEvent({
                getComponent: () => properties.getComponent(),
                detail: () => this.personAddAssistance({
                    back: () => choose.reset(),
                    getComponent: () => properties.getComponent(),
                    getEntity: () => properties.getEntity()
                }, component)
            }),
            initialize: next => this.assistanceService.readByPerson(properties.getEntity(), assistances => next(assistances)),
            list: this.listModal.assistanceEvent(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                    click: assistance => this.assistanceService.delete(assistance, () => choose.reset()),
                    color: 'danger',
                    icon: 'remove-outline'
                }, {
                    click: assistance => this.newAssistance(assistance.event, assistance.person, () => choose.reset()),
                    color: 'success',
                    icon: 'add-outline'
                }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            })
        };
        choose = this.choose(cmp)
        Modal.modal(ChooseComponent, this.controller, choose);
    }

    public particularObservation(properties: ChooseModalProperties<Particular>, component: any) {
        let choose: ChooseProperties<Particular> = null;
        let cmp: CMP<Particular> = {
            ...properties,
            header: HeaderModal.particularObservation({
                getComponent: () => properties.getComponent(),
                detail: () => Modal.modalDetail(component, this.controller, {
                    origen: 'P',
                    entity: { id: null, person: properties.getEntity() },
                    onDismiss: p => {
                        choose.reset();
                        properties.back(p);
                    }
                })
            }),
            initialize: next => this.particularService.readByPerson(properties.getEntity(), particular => next(particular)),
            list: this.listModal.particularObservation(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                    click: particular => this.particularService.delete(particular, () => choose.reset()),
                    color: 'danger',
                    icon: 'remove-outline'
                }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            })
        };
        choose = this.choose(cmp)
        Modal.modal(ChooseComponent, this.controller, choose);
    }

    public particularPerson(properties: ChooseModalProperties<Particular>, component: any) {
        let choose: ChooseProperties<Particular> = null;
        let cmp: CMP<Particular> = {
            ...properties,
            header: HeaderModal.particularPerson({
                getComponent: () => properties.getComponent(),
                detail: () => Modal.modalDetail(component, this.controller, {
                    origen: 'O',
                    entity: { id: 11111111, observation: properties.getEntity() },
                    onDismiss: p => {
                        choose.reset();
                        properties.back(p);
                    }
                })
            }),
            initialize: next => this.particularService.readByObservation(properties.getEntity(), particular => next(particular)),
            list: this.listModal.particularPerson(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                    click: particular => this.particularService.delete(particular, () => choose.reset()),
                    color: 'danger',
                    icon: 'remove-outline'
                }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            })
        };
        choose = this.choose(cmp)
        Modal.modal(ChooseComponent, this.controller, choose);
    }

    public relationship(properties: ChooseModalProperties<Person>, component: any) {
        let choose: ChooseProperties<Relationship> = null;
        let cmp: CMP<Person> = {
            ...properties,
            header: HeaderModal.relationship({
                getComponent: () => properties.getComponent(),
                detail: () => this.personAddRelationship({
                    back: () => choose.reset(),
                    getComponent: () => properties.getComponent(),
                    getEntity: () => properties.getEntity()
                }, component)
            }),
            initialize: next => this.relationshipService.readByPerson(properties.getEntity(), relationships => next(relationships)),
            list: this.listModal.relationship(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                    click: relationship => this.relationshipService.delete(relationship, () => choose.reset()),
                    color: 'danger',
                    icon: 'remove-outline'
                }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            })
        };
        choose = this.choose(cmp)
        Modal.modal(ChooseComponent, this.controller, choose);
    }

    public eventAddAssistance(properties: ChooseModalProperties<Person>, component: any) {
        let choose: ChooseProperties<Assistance> = null;
        let cmp: CMP<Assistance> = {
            ...properties,
            header: HeaderModal.person({
                getComponent: () => properties.getComponent(),
                detail: () => Modal.modalDetail(component, this.controller, {
                    onDismiss: p => {
                        choose.reset();
                        if (p) this.newAssistance(properties.getEntity(), p, eve => {
                            properties.back(eve);
                            this.controller.dismiss();
                        })
                    }
                })
            }),
            initialize: next => this.personService.readCandidateAssistance(properties.getEntity(), persons => next(persons)),
            list: this.listModal.person(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                    click: person => this.newAssistance(properties.getEntity(), person, per => {
                        properties.back(per);
                        this.controller.dismiss();
                    }),
                    color: 'success',
                    icon: 'add-outline'
                }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            })
        };
        choose = this.choose(cmp);
        Modal.modal(ChooseComponent, this.controller, choose);
    }

    public personAddAssistance(properties: ChooseModalProperties<Event>, component: any) {
        let choose: ChooseProperties<Assistance> = null;
        let cmp: CMP<Assistance> = {
            ...properties,
            header: HeaderModal.event({
                getComponent: () => properties.getComponent(),
                detail: () => Modal.modalDetail(component, this.controller, {
                    onDismiss: e => {
                        choose.reset();
                        if (e) this.newAssistance(e, properties.getEntity(), per => {
                            properties.back(per);
                            this.controller.dismiss();
                        })
                    }
                })
            }),
            initialize: next => this.eventService.readCandidateAssistance(properties.getEntity(), events => next(events)),
            list: this.listModal.event(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                    click: event => this.newAssistance(event, properties.getEntity(), eve => {
                        properties.back(eve);
                        this.controller.dismiss();
                    }),
                    color: 'success',
                    icon: 'add-outline'
                }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            })
        };
        choose = this.choose(cmp);
        Modal.modal(ChooseComponent, this.controller, choose);
    }

    public personAddRelationship(properties: ChooseModalProperties<Person>, component: any) {
        let choose: ChooseProperties<Relationship> = null;
        let cmp: CMP<Relationship> = {
            ...properties,
            header: HeaderModal.person({
                getComponent: () => properties.getComponent(),
                detail: () => Modal.modalDetail(component, this.controller, {
                    onDismiss: e => {
                        choose.reset();
                        if (e) this.newRelationship(e, properties.getEntity(), per => {
                            properties.back(per);
                            this.controller.dismiss();
                        })
                    }
                })
            }),
            initialize: next => this.personService.readCandidateRelationship(properties.getEntity(), persons => next(persons)),
            list: this.listModal.person(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                    click: person => this.newRelationship(person, properties.getEntity(), per => {
                        properties.back(per);
                        this.controller.dismiss();
                    }),
                    color: 'success',
                    icon: 'add-outline'
                }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            })
        };
        choose = this.choose(cmp);
        Modal.modal(ChooseComponent, this.controller, choose);
    }

    public person(component: any, properties?: ChooseModalProperties<Person>) {
        let choose: ChooseProperties<Person> = null;
        let cmp: CMP<Person> = {
            ...properties,
            header: HeaderModal.person({
                getComponent: () => properties.getComponent(),
                detail: () => Modal.modalDetail(component, this.controller, {
                    onDismiss: e => {
                        choose.reset();
                        if (e) {
                            properties.back(e);
                            this.controller.dismiss();
                        }
                    }
                })
            }),
            initialize: next => this.personService.read(persons => next(persons)),
            list: this.listModal.person(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                    click: person => {
                        properties.back(person);
                        this.controller.dismiss();
                    },
                    color: 'success',
                    icon: 'checkmark-outline'
                }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            })
        };
        choose = this.choose(cmp);
        Modal.modal(ChooseComponent, this.controller, choose);
    }

    public observation(component: any, properties?: ChooseModalProperties<Observation>) {
        let choose: ChooseProperties<Observation> = null;
        let cmp: CMP<Observation> = {
            ...properties,
            header: HeaderModal.observation({
                getComponent: () => properties.getComponent(),
                detail: () => Modal.modalDetail(component, this.controller, {
                    onDismiss: e => {
                        choose.reset();
                        if (e) {
                            properties.back(e);
                            this.controller.dismiss();
                        }
                    }
                })
            }),
            initialize: next => this.observationService.read(observation => next(observation)),
            list: this.listModal.observation(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                    click: observation => {
                        properties.back(observation);
                        this.controller.dismiss();
                    },
                    color: 'success',
                    icon: 'checkmark-outline'
                }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            })
        };
        choose = this.choose(cmp);
        Modal.modal(ChooseComponent, this.controller, choose);
    }
}

export interface ChooseModalProperties<E extends Entity> extends ModalProperties<E> {
    back?: (e: E) => void;
}

interface CMP<E extends Entity> extends ChooseModalProperties<E> {
    header: HeaderProperties<E>
    initialize: (next: (entities: E[]) => void) => void;
    list: ListProperties<E>
}