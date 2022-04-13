import { Alert } from "src/app/tool/alert";
import { Component, ViewChild } from "@angular/core";
import { Control, Tool } from "src/app/tool/static";
import { Button, Controls } from "src/app/tool/dto";
import { DetailComponent } from "src/app/component/page/detail.component";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Contact, Event, Observation, ObservationType, Particular } from "src/app/tool/data";
import { ObservationService } from "../service/observation.service";
import { Toast } from "src/app/tool/toast";
import { ListComponent, ListProperties } from "src/app/component/page/list/list.component";
import { ListModal } from "src/app/component/page/list/list.modal";
import { AssistanceService } from "src/app/pages/assistance/assistance.service";
import { ChooseModal } from "src/app/component/page/choose/choose.modal";
import { PersonDetailComponent } from "src/app/pages/person/component/detail/person.detail";
import { Sheet } from "src/app/tool/sheet";
import { ParticularDetailComponent } from "src/app/pages/particular/detail/particular.detail";
import { Modal } from "src/app/tool/modal";
import { ModalController } from "@ionic/angular";
import { ParticularService } from "src/app/pages/particular/service/particular.service";

@Component({ selector: 'app-observation-detail-component', templateUrl: 'observation.detail.html' })
export class ObservationDetailComponent extends DetailComponent<Observation, ObservationService> {
    constructor(private particularService: ParticularService, private listModal: ListModal, private controller: ModalController, alert?: Alert, private builder?: FormBuilder, service?: ObservationService, private sheet?: Sheet, toast?: Toast) { super(alert, service, toast) }

    protected changePage(event: CustomEvent<any>): void {
        if (event.detail.changed && this.properties.entity.id) {
            if (event.detail.index === 1) this.particularListComponent.refresh();
        }
    }

    @ViewChild('PLP')
    private particularListComponent: ListComponent<Particular>;

    particularCount: number;

    public particularListProperties: ListProperties<Particular> = this.listModal.particularPerson(ParticularDetailComponent, {
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

    public editType() {
        if (!this.getReadonly()) {
            let buttons: Button[] = [];
            for (let t in ObservationType) buttons.push({
                click: () => {
                    this.headerProperties.dismiss = 'CONFIRMATION';
                    this.editGroup('type', Tool.enumName(t));
                },
                icon: Tool.iconObservationType(ObservationType[t]),
                text: ObservationType[t]
            });
            this.sheet.present(buttons, 'Tipo de observación')
        }
    }

    protected form(entity: Observation = {}): FormGroup {
        return this.builder.group({
            id: new FormControl(entity.id),
            name: new FormControl(entity.name, [Validators.required, Control.whitespace]),
            type: new FormControl(entity.type, [Validators.required])
        });
    }
    protected fieldErrors(controls: Controls): string[] {
        let fields = [];
        if (controls['name'].invalid) fields.push('Nombre');
        if (controls['type'].invalid) fields.push('Tipo');
        return fields;
    }

    public iconType() { return this.getGroup().value.type ? Tool.iconObservationType(ObservationType[this.getGroup().value.type]) : 'receipt-outline' }
    public labelType() { return ObservationType[this.getGroup().value.type] || 'Tipo de observación' }

    protected title(entity?: Observation): string { return entity && entity.id ? entity.name : 'Nueva observación' }

    public newParticular() { this.newParticular2(ParticularDetailComponent) }
    public newParticular2(component: any) {
        if (this.properties.entity.id && !this.isChanged()) Modal.modalDetail(component, this.controller, {
            origen: 'O',
            entity: { id: null, observation: this.properties.entity },
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
            message: 'Antes de crear un detalle para la observación debes guardar los cambios'
        });
    }

    protected setRemoveReadonly() {
        super.setRemoveReadonly();
        if (this.particularListComponent) this.particularListComponent.activateButtons();
    }

    public ngOnInit() {
        super.ngOnInit();
        this.properties.entity = this.properties.entity || {};
    }
}