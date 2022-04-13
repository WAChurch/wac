import { AfterViewInit, Component, Input, ViewChild } from "@angular/core";
import { Entity } from "src/app/tool/data";
import { Filter } from "src/app/tool/filter";
import { HeaderComponent, HeaderProperties } from "src/app/component/page/header/header.component";
import { ListComponent, ListProperties } from "src/app/component/page/list/list.component";

@Component({ selector: 'app-choose-component', templateUrl: 'choose.component.html' })
export class ChooseComponent<E extends Entity> implements AfterViewInit {
    @Input()
    public properties: ChooseProperties<E>;

    @ViewChild(ListComponent)
    public listComponent: ListComponent<E>;

    @ViewChild(HeaderComponent)
    public headerComponent: HeaderComponent<E>;

    public ngAfterViewInit() {
        this.listComponent.elementsSubject.subscribe(observer => this.properties.headerProperties.subtitle = observer.length.toString());
        this.properties.headerProperties.toFilter = (filter: Filter[]) => this.listComponent.filter(filter);
        this.properties.listProperties.initialize = () => this.properties.initialize(entities => this.listComponent.fill(entities));
        this.properties.reset = () => {
            this.properties.listProperties.initialize();
            this.headerComponent.restartFilter();
        }
        this.listComponent.refresh();
    }

}

export interface ChooseProperties<E extends Entity> {
    headerProperties: HeaderProperties<E>;
    listProperties: ListProperties<E>;
    initialize: (next: (entities: E[]) => void) => void;
    reset?: () => void;
}