import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { ChooseModal } from "src/app/component/page/choose/choose.modal";
import { HeaderModal } from "src/app/component/page/header/header";
import { HeaderComponent, HeaderProperties } from "src/app/component/page/header/header.component";
import { ListComponent, ListProperties } from "src/app/component/page/list/list.component";
import { ListModal } from "src/app/component/page/list/list.modal";
import { Alert } from "src/app/tool/alert";
import { Observation } from "src/app/tool/data";
import { ParticularDetailComponent } from "../particular/detail/particular.detail";
import { ObservationDetailComponent } from "./component/detail/observation.detail";

@Component({ selector: 'app-observation-tab', templateUrl: 'observation.tab.html' })
export class ObservationTabPage implements AfterViewInit {

    @ViewChild(ListComponent)
    private listComponent: ListComponent<Observation>;

    @ViewChild(HeaderComponent)
    private headerComponent: HeaderComponent<Observation>;

    public headerProperties: HeaderProperties<Observation> = HeaderModal.observation({
        detail: () => this.listModal.detailObservation(ObservationDetailComponent, () => {
            this.headerComponent.restartFilter();
            this.listComponent.refresh();
        }),
        getComponent: () => this.listComponent,
        menu: true
    });

    public listProperties: ListProperties<Observation> = this.listModal.observation(ObservationDetailComponent, {
        activeButtons: true,
        back: () => {
            this.headerComponent.restartFilter();
            this.listComponent.refresh();
        },
        buttons: [{
            click: particular => this.choose.particularPerson({
                back: () => {
                    this.headerComponent.restartFilter();
                    this.listComponent.refresh();
                },
                getComponent: () => this.listComponent,
                getEntity: () => particular
            }, ParticularDetailComponent), icon: 'people-outline'
        }],
        getComponent: () => this.listComponent
    })

    constructor(private choose: ChooseModal, private listModal: ListModal) { }

    public ngAfterViewInit(): void {
        this.listComponent.elementsSubject.subscribe(observer => this.headerProperties.subtitle = observer.length.toString());
        this.listComponent.refresh();
    }
}