import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { Alert } from "src/app/tool/alert";
import { ChooseModal } from "../../component/page/choose/choose.modal";
import { HeaderComponent, HeaderProperties } from "src/app/component/page/header/header.component";
import { HeaderModal } from "src/app/component/page/header/header";
import { ListComponent, ListProperties } from "src/app/component/page/list/list.component";
import { ListModal } from "src/app/component/page/list/list.modal";
import { Person } from "src/app/tool/data";
import { PersonDetailComponent } from "./component/detail/person.detail";
import { Modal } from "src/app/tool/modal";
import { ContactDetailComponent } from "../contact/detail/contact.detail";
import { ModalController } from "@ionic/angular";
import { EventDetailComponent } from "../event/component/detail/event.detail";
import { ParticularDetailComponent } from "../particular/detail/particular.detail";

@Component({ selector: 'app-person-tab', templateUrl: 'person.tab.html' })
export class PersonTabPage implements AfterViewInit {

    @ViewChild(ListComponent)
    private personListComponent: ListComponent<Person>;

    @ViewChild(HeaderComponent)
    private headerComponent: HeaderComponent<Person>;

    public personListProperties: ListProperties<Person> = this.listModal.person(PersonDetailComponent, {
        activeButtons: true,
        back: () => {
            this.headerComponent.restartFilter();
            this.personListComponent.refresh();
        },
        buttons: [
            { click: person => this.chooseModal.relationship(this.chooseProperties(person), PersonDetailComponent), icon: 'people-outline' },
            {
                click: person => Modal.modalDetail(ContactDetailComponent, this.controller, {
                    entity: person,
                    onDismiss: () => {
                        this.headerComponent.restartFilter();
                        this.personListComponent.refresh();
                    }
                }), icon: 'trail-sign-outline'
            },
            { click: person => this.chooseModal.assistanceEvent(this.chooseProperties(person), EventDetailComponent), icon: 'calendar-outline' },
            { click: person => this.chooseModal.particularObservation(this.chooseProperties(person), ParticularDetailComponent), icon: 'receipt-outline' },
            { click: () => this.alert.present({ message: '¡Pronto!' }), icon: 'people' }
        ],
        getComponent: () => this.personListComponent,
        notification: true
    })
    public headerProperties: HeaderProperties<Person> = HeaderModal.person({
        detail: () => this.listModal.detailPerson(PersonDetailComponent, () => {
            this.headerComponent.restartFilter();
            this.personListComponent.refresh();
        }),
        getComponent: () => this.personListComponent,
        menu: true
    })

    constructor(private alert: Alert, private chooseModal: ChooseModal, private listModal: ListModal, private controller: ModalController) { }

    private chooseProperties(person: Person) {
        return {
            back: () => {
                this.headerComponent.restartFilter();
                this.personListComponent.refresh();
            },
            getComponent: () => this.personListComponent,
            getEntity: () => person
        }
    }

    public ngAfterViewInit(): void {
        this.personListComponent.elementsSubject.subscribe(observer => this.headerProperties.subtitle = observer.length.toString());
        this.personListComponent.refresh();
    }
}