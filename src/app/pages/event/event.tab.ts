import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { ChooseModal } from "src/app/component/page/choose/choose.modal";
import { HeaderModal } from "src/app/component/page/header/header";
import { HeaderComponent, HeaderProperties } from "src/app/component/page/header/header.component";
import { ListComponent, ListProperties } from "src/app/component/page/list/list.component";
import { ListModal } from "src/app/component/page/list/list.modal";
import { Alert } from "src/app/tool/alert";
import { Event, Person } from "src/app/tool/data";
import { PersonDetailComponent } from "../person/component/detail/person.detail";
import { EventDetailComponent } from "./component/detail/event.detail";

@Component({ selector: 'app-event-tab', templateUrl: 'event.tab.html' })
export class EventTabPage implements AfterViewInit {

    @ViewChild(ListComponent)
    private listComponent: ListComponent<Event>;

    @ViewChild(HeaderComponent)
    private headerComponent: HeaderComponent<Event>;

    public headerProperties: HeaderProperties<Event> = HeaderModal.event({
        detail: () => this.listModal.detailEvent(EventDetailComponent, () => {
            this.headerComponent.restartFilter();
            this.listComponent.refresh();
        }),
        getComponent: () => this.listComponent,
        menu: true
    });

    public listProperties: ListProperties<Event> = this.listModal.event(EventDetailComponent, {
        activeButtons: true,
        back: () => {
            this.headerComponent.restartFilter();
            this.listComponent.refresh();
        },
        buttons: [{
            click: event => this.chooseModal.assistancePerson({
                back: () => {
                    this.headerComponent.restartFilter();
                    this.listComponent.refresh();
                },
                getComponent: () => this.listComponent,
                getEntity: () => event
            }, PersonDetailComponent), icon: 'people-outline'
        }],
        getComponent: () => this.listComponent,
        notification: true
    })

    constructor(private chooseModal: ChooseModal, private listModal: ListModal) { }

    public ngAfterViewInit(): void {
        this.listComponent.elementsSubject.subscribe(observer => this.headerProperties.subtitle = observer.length.toString());
        this.listComponent.refresh();
    }
}