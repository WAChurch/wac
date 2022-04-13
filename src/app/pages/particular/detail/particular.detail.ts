import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ChooseModal } from "src/app/component/page/choose/choose.modal";
import { DetailComponent } from "src/app/component/page/detail.component";
import { ListModal } from "src/app/component/page/list/list.modal";
import { Alert } from "src/app/tool/alert";
import { ObservationType, Particular } from "src/app/tool/data";
import { Controls, Notification } from "src/app/tool/dto";
import { Control, Tool } from "src/app/tool/static";
import { Toast } from "src/app/tool/toast";
import { ObservationDetailComponent } from "../../observation/component/detail/observation.detail";
import { PersonDetailComponent } from "../../person/component/detail/person.detail";
import { ParticularService } from "../service/particular.service";

@Component({ selector: 'app-particular-detail-component', templateUrl: 'particular.detail.html' })
export class ParticularDetailComponent extends DetailComponent<Particular, ParticularService> {

    enabledObservation: boolean = false;

    protected fieldErrors(controls: Controls): string[] {
        let fields = [];
        if (controls['person'].invalid) fields.push('Persona')
        if (controls['observation'].invalid) fields.push('Observación')
        if (controls['detail'].invalid) fields.push('Detalle')
        return fields;
    }

    protected form(entity: Particular = {}): FormGroup {
        return this.builder.group({
            id: new FormControl(entity.id),
            date: new FormControl(entity.date ? entity.date.toLocaleString() : ''),
            detail: new FormControl(entity.detail, [Validators.required, Control.whitespace]),
            observation: new FormControl(entity.observation, [Validators.required]),
            person: new FormControl(entity.person, [Validators.required])
        });
    }
    protected fixGroup(entity: Particular): Particular {
        entity.observation = this.properties.entity.observation;
        entity.person = this.properties.entity.person;
        if (entity.date) entity.date = entity.date.substr(0, 10);
        return entity
    }
    protected title(entity?: Particular): string { return 'Detalle' }

    constructor(alert?: Alert, private builder?: FormBuilder, private chooseModal?: ChooseModal, private listModal?: ListModal, service?: ParticularService, toast?: Toast) { super(alert, service, toast) }

    protected getNotification(): Notification { return Tool.particularNotification(this.properties.entity.date) }

    public getImage() { return Tool.personPhoto({ readonly: this.getReadonly(), url: this.properties.entity.person ? this.properties.entity.person.photo : null }, this.param) }

    public getPersonLabel() { return this.properties.entity.person ? Tool.personLabel(this.properties.entity.person) : '¿Quién?'; }

    public editObservation() {
        if (!this.getReadonly() && this.enabledObservation) {
            this.chooseModal.observation(ObservationDetailComponent, {
                back: observation => {
                    if (observation) {
                        this.editGroup('observation', observation.id.toString());
                        this.headerProperties.dismiss = 'CONFIRMATION'
                        this.properties.entity.observation = observation;
                    }
                },
                getComponent: () => null
            })
        }
    }



    public iconObservation() {
        return this.properties.entity.observation ? Tool.iconObservationType(ObservationType[this.properties.entity.observation.type]) : 'receipt-outline';
    }

    public labelObservation() {
        return this.properties.entity.observation ? this.properties.entity.observation.name : '¿Que observación?';
    }

    public detailPerson() {
        if (this.properties.entity.person) this.listModal.detailPerson(PersonDetailComponent, per => { if (per) this.properties.entity.person = per }, this.properties.entity.person);
        else this.changePage();
    }


    public changePerson() {
        this.chooseModal.person(PersonDetailComponent, {
            back: person => {
                if (person) {
                    this.editGroup('person', person.id.toString());
                    this.headerProperties.dismiss = 'CONFIRMATION';
                    this.properties.entity.person = person
                }
            },
            getComponent: () => null
        })
    }
    public maxDate() { return Tool.formatDate(Tool.futureYears(5)) }
    public ngOnInit() {
        super.ngOnInit();
        this.properties.entity = this.properties.entity || {};
        this.enabledObservation = this.properties.origen === 'P';
    }
}
