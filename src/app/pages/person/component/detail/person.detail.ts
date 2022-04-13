import { Alert } from "src/app/tool/alert";
import { Avatar } from "src/app/tool/avatar";
import { Component, ViewChild } from "@angular/core";
import { Control, Tool } from "src/app/tool/static";
import { Controls, Notification } from "src/app/tool/dto";
import { DetailComponent } from "src/app/component/page/detail.component";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ListComponent, ListProperties } from "src/app/component/page/list/list.component";
import { ListModal } from "src/app/component/page/list/list.modal";
import { Assistance, Contact, Particular, Person, Relationship } from "src/app/tool/data";
import { PersonService } from "../service/person.service";
import { RelationshipService } from "../../../relationship/relationship.service";
import { Toast } from "src/app/tool/toast";
import { ChooseModal } from "src/app/component/page/choose/choose.modal";
import { ContactService } from "src/app/pages/contact/service/contact.service";
import { Modal } from "src/app/tool/modal";
import { ContactDetailComponent } from "src/app/pages/contact/detail/contact.detail";
import { ModalController } from "@ionic/angular";
import { EventDetailComponent } from "src/app/pages/event/component/detail/event.detail";
import { AssistanceService } from "src/app/pages/assistance/assistance.service";
import { ParticularDetailComponent } from "src/app/pages/particular/detail/particular.detail";
import { ParticularService } from "src/app/pages/particular/service/particular.service";

@Component({ selector: 'app-person-detail-component', templateUrl: 'person.detail.html' })
export class PersonDetailComponent extends DetailComponent<Person, PersonService> {

    @ViewChild('ALP')
    private assistanceListComponent: ListComponent<Assistance>;

    @ViewChild('PLP')
    private particularListComponent: ListComponent<Particular>;

    @ViewChild('CLP')
    private contactListComponent: ListComponent<Contact>;

    @ViewChild('RLP')
    private relationshipListComponent: ListComponent<Relationship>;

    public assistanceCount: number = 0;
    public particularCount: number = 0;
    public contactCount: number = 0;
    public relationshipCount: number = 0;
    public assistanceListProperties: ListProperties<Assistance> = this.listModal.assistanceEvent(EventDetailComponent, {
        back: () => this.assistanceListComponent.refresh(),
        buttons: [{
            click: assistance => this.assistanceService.delete(assistance, () => this.assistanceListComponent.refresh()),
            color: 'danger',
            icon: 'remove-outline'
        }, {
            click: assistance => this.chooseModal.newAssistance(assistance.event, assistance.person, () => this.assistanceListComponent.refresh()),
            color: 'success',
            icon: 'add-outline'
        }],
        count: count => this.assistanceCount = count,
        getComponent: () => this.assistanceListComponent,
        getEntity: () => this.properties.entity
    });
    public particularListProperties: ListProperties<Particular> = this.listModal.particularObservation(ParticularDetailComponent, {
        back: () => this.particularListComponent.refresh(),
        buttons: [{
            click: p => this.particularService.delete(p, () => this.particularListComponent.refresh()),
            color: 'danger',
            icon: 'remove-outline'
        }],
        count: count => this.particularCount = count,
        getComponent: () => this.particularListComponent,
        getEntity: () => this.properties.entity
    });
    public contactListProperties: ListProperties<Contact> = this.listModal.contact(contact => this.contactService.go(contact), {
        back: () => this.contactListComponent.refresh(),
        buttons: [{
            click: contact => this.contactService.delete(contact, () => this.contactListComponent.refresh()),
            color: 'danger',
            icon: 'remove-outline'
        }],
        count: count => this.contactCount = count,
        getComponent: () => this.contactListComponent,
        getEntity: () => this.properties.entity
    });
    public relationshipListProperties: ListProperties<Relationship> = this.listModal.relationship(PersonDetailComponent, {
        back: () => this.relationshipListComponent.refresh(),
        buttons: [{
            click: relationship => this.relationshipService.delete(relationship, () => this.relationshipListComponent.refresh()),
            color: 'danger',
            icon: 'remove-outline'
        }],
        count: count => this.relationshipCount = count,
        getComponent: () => this.relationshipListComponent,
        getEntity: () => this.properties.entity
    });

    constructor(alert?: Alert, private assistanceService?: AssistanceService, private particularService?: ParticularService, private avatar?: Avatar, private builder?: FormBuilder, private chooseModal?: ChooseModal, private contactService?: ContactService, private listModal?: ListModal, private controller?: ModalController, private relationshipService?: RelationshipService, service?: PersonService, toast?: Toast) { super(alert, service, toast) }

    protected changePage(event: CustomEvent<any>): void {
        if (event.detail.changed && this.properties.entity.id) {
            if (event.detail.index === 1) this.relationshipListComponent.refresh();
            if (event.detail.index === 2) this.contactListComponent.refresh();
            if (event.detail.index === 3) this.assistanceListComponent.refresh();
            if (event.detail.index === 4) this.particularListComponent.refresh();
        }
    }
    protected fixGroup(entity: Person): Person {
        entity.birth = entity.birth.substr(0, 10);
        return entity
    }
    protected form(entity: Person = {}): FormGroup {
        return this.builder.group({
            identification: new FormControl(entity.identification, [Validators.required, Control.whitespace]),
            initial: new FormControl(entity.initial || false),
            bible: new FormControl(entity.bible || false),
            birth: new FormControl(entity.birth ? entity.birth.toLocaleString() : '', [Validators.required, Control.past]),
            christening: new FormControl(entity.christening || false),
            gender: new FormControl(entity.gender, [Validators.required]),
            id: new FormControl(entity.id),
            last: new FormControl(entity.last, [Validators.required, Control.whitespace]),
            name: new FormControl(entity.name, [Validators.required, Control.whitespace]),
            photo: new FormControl(entity.photo),
            src: new FormControl(entity.src)
        });
    }
    protected fieldErrors(controls: Controls): string[] {
        let fields = [];
        if (controls['name'].invalid) fields.push('Nombre');
        if (controls['last'].invalid) fields.push('Apellido');
        if (controls['gender'].invalid) fields.push('Genero');
        if (controls['birth'].invalid) fields.push('Nacimiento');
        return fields;
    }
    protected getNotification(): Notification { return Tool.personNotification(this.properties.entity) }
    protected title(entity?: Person): string { return entity && entity.id ? Tool.personLabel(entity) : 'Nueva persona' }
    protected setRemoveReadonly() {
        super.setRemoveReadonly();
        if (this.relationshipListComponent) this.relationshipListComponent.activateButtons();
        if (this.contactListComponent) this.contactListComponent.activateButtons();
        if (this.assistanceListComponent) this.assistanceListComponent.activateButtons();
        if (this.particularListComponent) this.particularListComponent.activateButtons();
    }

    public getImage() { return Tool.personPhoto({ readonly: this.getReadonly(), src: this.getGroup().value.src, url: this.getGroup().value.photo }, this.param) }
    public minBirth() { return Tool.formatDate(Tool.yesterday()) }
    public contactDetails() {
        if (this.properties.entity.id && !this.isChanged()) Modal.modalDetail(ContactDetailComponent, this.controller, {
            entity: this.properties.entity,
            onDismiss: () => this.contactListComponent.refresh()
        });
        else this.alert.present({
            buttons: [{
                click: () => this.save(person => {
                    this.headerProperties.title = Tool.personLabel(person);
                    this.edit();
                    this.contactDetails();
                }),
                color: 'success',
                text: 'Guardar'
            }],
            message: 'Antes de consultar los medios de contacto debes guardar los cambios'
        });
    }
    public newAssistance() {
        if (this.properties.entity.id && !this.isChanged()) this.chooseModal.personAddAssistance({
            back: () => this.assistanceListComponent.refresh(),
            getComponent: () => this.assistanceListComponent,
            getEntity: () => this.properties.entity
        }, EventDetailComponent);
        else this.alert.present({
            buttons: [{
                click: () => this.save(person => {
                    this.headerProperties.title = Tool.personLabel(person);
                    this.edit();
                    this.newAssistance();
                }),
                color: 'success',
                text: 'Guardar'
            }],
            message: 'Antes de asignar la asistencia a un evento debes guardar los cambios'
        });
    }
    public newParticular() { this.newParticular2(ParticularDetailComponent) }
    public newParticular2(component: any) {
        if (this.properties.entity.id && !this.isChanged()) Modal.modalDetail(component, this.controller, {
            origen: 'P',
            entity: { id: null, person: this.properties.entity },
            onDismiss: () => this.particularListComponent.refresh()
        })
        else this.alert.present({
            buttons: [{
                click: () => this.save(person => {
                    this.headerProperties.title = Tool.personLabel(person);
                    this.edit();
                    this.newParticular();
                }),
                color: 'success',
                text: 'Guardar'
            }],
            message: 'Antes de crear un detalle para la persona debes guardar los cambios'
        });
    }
    public newRelationship() {
        if (this.properties.entity.id && !this.isChanged()) this.chooseModal.personAddRelationship({
            back: () => this.relationshipListComponent.refresh(),
            getComponent: () => this.relationshipListComponent,
            getEntity: () => this.properties.entity
        }, PersonDetailComponent);
        else this.alert.present({
            buttons: [{
                click: () => this.save(person => {
                    this.headerProperties.title = Tool.personLabel(person);
                    this.edit();
                    this.newRelationship();
                }),
                color: 'success',
                text: 'Guardar'
            }],
            message: 'Antes de asignar una relación debes guardar los cambios'
        });
    }
    public setImage() {
        this.avatar.image(p => {
            this.editGroup('photo', null);
            this.editGroup('src', p);
        }, { readonly: this.getReadonly(), src: this.getGroup().value.src, url: this.getGroup().value.photo });
    }
    public ngOnInit() {
        super.ngOnInit();
        this.properties.entity = this.properties.entity || {};
    }
}