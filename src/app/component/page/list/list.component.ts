import { timer, Subject } from "rxjs";
import { Alert } from "src/app/tool/alert";
import { Avatar } from "src/app/tool/avatar";
import { Component, Input } from "@angular/core";
import { Entity } from "src/app/tool/data";
import { Filter } from "src/app/tool/filter";
import { Item, Param } from "src/app/tool/dto";
import { Parameter, Tool } from "src/app/tool/static";
import { ServiceComponent } from "../service.component";

@Component({ selector: 'app-list-component', templateUrl: 'list.component.html' })
export class ListComponent<E extends Entity>  {
    protected allElements: E[] = [];
    protected elements: E[] = [];
    protected filters: Filter[] = [];
    protected items: Item<E>[] = [];
    protected selected: number = 0;

    @Input()
    protected properties: ListProperties<E>;

    public elementsSubject: Subject<E[]> = new Subject();
    public param: Param;
    public wait: boolean;

    constructor(private alert: Alert, private avatar: Avatar) {
        Parameter.getParam().subscribe(observer => this.param = observer);
        Parameter.getWait().subscribe(observer => this.wait = observer);
    }

    protected detail(item: Item<E>) { if (item.detail) item.detail() }
    protected getImage(url: string) { return Tool.personPhoto({ readonly: this.properties.readonly, url: url }, this.param) }
    protected image(item: Item<E>) { this.avatar.image(p => this.properties.image(item.entity, p), { readonly: this.properties.readonly, url: item.image }); }
    protected notifications(item: Item<E>) { this.alert.presentNotification(item.notification) }

    public fill(elements: E[]) {
        this.allElements = elements;
        this.filter(this.filters)
    }
    public filter(filters: Filter[]): void {
        this.elements = this.properties.filter ? this.properties.filter(this.allElements, filters) : this.allElements;
        this.elementsSubject.next(this.elements);
        this.filters = filters;
        this.items = this.properties.items(this.elements);
        this.selected = null;
    };
    public refresh(event?: any) {
        if (event) timer(500).subscribe(() => event.target.complete());
        if (this.properties.initialize) this.properties.initialize();
        else this.properties.service.read(elements => this.fill(elements));
    }
    public activateButtons() { this.properties.activeButtons = true }
}

export interface ListProperties<E extends Entity> {
    activeButtons?: boolean;
    filter?: (elements: E[], filters: Filter[]) => E[];
    image?: (element: E, src: string) => void;
    initialize?: () => void;
    items: (elements: E[]) => Item<E>[];
    readonly?: boolean;
    service: ServiceComponent<E>;
}