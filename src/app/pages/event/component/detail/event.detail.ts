import { Alert } from "src/app/tool/alert";
import { Component, ViewChild } from "@angular/core";
import { Control, Tool } from "src/app/tool/static";
import { Controls, Notification } from "src/app/tool/dto";
import { DetailComponent } from "src/app/component/page/detail.component";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Contact, Event } from "src/app/tool/data";
import { EventService } from "../service/event.service";
import { Toast } from "src/app/tool/toast";
import { ListComponent, ListProperties } from "src/app/component/page/list/list.component";
import { ListModal } from "src/app/component/page/list/list.modal";
import { AssistanceService } from "src/app/pages/assistance/assistance.service";
import { ChooseModal } from "src/app/component/page/choose/choose.modal";
import { PersonDetailComponent } from "src/app/pages/person/component/detail/person.detail";

@Component({ selector: 'app-event-detail-component', templateUrl: 'event.detail.html' })
export class EventDetailComponent extends DetailComponent<Event, EventService> {

    @ViewChild('ALP')
    private assistanceListComponent: ListComponent<Contact>;

    public assistanceCount: number = 0;

    public assistanceListProperties: ListProperties<Contact> = this.listModal.assistancePerson(PersonDetailComponent, {
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

    protected form(entity: Event = {}): FormGroup {
        return this.builder.group({
            id: new FormControl(entity.id),
            name: new FormControl(entity.name, [Validators.required, Control.whitespace]),
            date: new FormControl(entity.date ? entity.date.toLocaleString() : '', [Validators.required]),
            time: new FormControl(entity.time ? entity.time.toLocaleString() : '', [Validators.required])
        });
    }
    protected fixGroup(entity: Event): Event {
        entity.date = entity.date.substr(0, 10);
        entity.time = entity.time.length > 10 ? entity.time.substr(11, 6) + '00' : entity.time;
        return entity
    }
    protected fieldErrors(controls: Controls): string[] {
        let fields = [];
        if (controls['name'].invalid) fields.push('Nombre');
        if (controls['date'].invalid) fields.push('Fecha');
        return fields;
    }
    protected setRemoveReadonly() {
        super.setRemoveReadonly();
        if (this.assistanceListComponent) this.assistanceListComponent.activateButtons();
    }
    protected title(entity?: Event): string { return entity && entity.id ? entity.name : 'Nuevo evento' }

    constructor(alert?: Alert, private assistanceService?: AssistanceService, private builder?: FormBuilder, private chooseModal?: ChooseModal, private listModal?: ListModal, service?: EventService, toast?: Toast) { super(alert, service, toast) }

    protected getNotification(): Notification { return Tool.eventNotification(this.properties.entity.date) }

    protected changePage(event: CustomEvent<any>): void {
        if (event.detail.changed && this.properties.entity.id) {
            if (event.detail.index === 1) this.assistanceListComponent.refresh();
        }
    }
    public minDate() { return Tool.formatDate(new Date()) }
    public minuteValues() { return Tool.minutes(5) }
    public maxDate() { return Tool.formatDate(Tool.futureYears(5)) }
    public newAssistance() {
        if (this.properties.entity.id && !this.isChanged()) this.chooseModal.eventAddAssistance({
            back: () => this.assistanceListComponent.refresh(),
            getComponent: () => this.assistanceListComponent,
            getEntity: () => this.properties.entity
        }, PersonDetailComponent);
        else this.alert.present({
            buttons: [{
                click: () => this.save(event => {
                    this.headerProperties.title = event.name;
                    this.edit();
                    this.newAssistance();
                }),
                color: 'success',
                text: 'Guardar'
            }],
            message: 'Antes de asignar la asistencia a un evento debes guardar los cambios'
        });
    }
    public ngOnInit() {
        super.ngOnInit();
        this.properties.entity = this.properties.entity || {};
        if (this.properties.entity && this.properties.entity.id && !Tool.isFuture(new Date(this.properties.entity.date))) this.headerProperties.buttons = [];
    }
}