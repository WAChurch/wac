import { Alert } from "src/app/tool/alert";
import { Button } from "src/app/tool/dto";
import { Component, Input, OnInit } from "@angular/core";
import { Entity, Gender, ObservationType, RelationshipType, Role } from "src/app/tool/data";
import { Filter, FilterButton, FilterTool, FilterType, FilterValues } from "src/app/tool/filter";
import { Parameter } from "src/app/tool/static";
import { Popover } from "src/app/tool/popover";
import { ModalController } from "@ionic/angular";

@Component({ selector: 'app-header-component', templateUrl: 'header.component.html' })
export class HeaderComponent<E extends Entity> implements OnInit {
    private static readonly ICON_FILTER = 'filter';
    private static readonly ICON_SEARCH = 'search';

    @Input()
    protected properties: HeaderProperties<E>;

    protected buttons: FilterButton[] = [];
    protected filters: Filter[] = [];
    protected searchFilter: string;
    protected toolbar: 'SEARCH' | 'FILTER';
    protected wait: boolean;

    constructor(private alert: Alert, private controller: ModalController, private popover: Popover) { }

    protected back() {
        if (this.properties.dismiss === 'CONFIRMATION') this.alert.present({
            buttons: [{ click: () => this.dismiss(), color: 'danger', text: 'Descartar' }],
            message: 'Los cambios realizados se perderán'
        });
        else this.dismiss();
    }
    protected clear(type: FilterType) {
        this.filters.find(predicate => predicate.type === type).value = null;
        if (!this.filters.find(predicate => predicate.type !== FilterType.SEARCH && predicate.value)) this.buttons.find(predicate => predicate.icon === HeaderComponent.ICON_FILTER).selected = false;
        this.properties.toFilter(this.filters)
    }
    protected isSearch(type: FilterType) { return type === FilterType.SEARCH }
    protected search() {
        this.buttons.find(predicate => predicate.icon === HeaderComponent.ICON_SEARCH).selected = this.searchFilter.length > 0;
        this.filters.find(predicate => predicate.type === FilterType.SEARCH).value = this.searchFilter.length > 0 ? this.searchFilter.trim() : null;
        this.properties.toFilter(this.filters)
    }
    protected toFilter(event: MouseEvent, type: FilterType) {
        let options = [];
        let value = this.filters.find(predicate => predicate.type === type).value;
        if (type === FilterType.INITIAL) FilterTool.getOptions(FilterValues.INITIAL, value).forEach(callbackfn => options.push(callbackfn));
        else if (type === FilterType.BIBLE) FilterTool.getOptions(FilterValues.BIBLE, value).forEach(callbackfn => options.push(callbackfn));
        else if (type === FilterType.CHRISTENING) FilterTool.getOptions(FilterValues.CHRISTENING, value).forEach(callbackfn => options.push(callbackfn));
        else if (type === FilterType.OBSERVATION) for (let t in ObservationType) options.push({ checked: value === ObservationType[t], value: ObservationType[t] });
        else if (type === FilterType.RELATIONSHIP) FilterTool.getOptions(FilterValues.RELATIONSHIP, value).forEach(callbackfn => options.push(callbackfn));
        else if (type === FilterType.ROLE) for (let r in Role) options.push({ checked: value === Role[r], value: Role[r] });
        else if (type === FilterType.GENDER) for (let g in Gender) options.push({ checked: value === Gender[g], value: Gender[g] });
        this.popover.present(detail => {
            this.buttons.find(predicate => predicate.icon === HeaderComponent.ICON_FILTER).selected = true;
            this.filters.find(predicate => predicate.type === type).value = detail;
            this.properties.toFilter(this.filters)
        }, event, options);
    }

    public dismiss(entity?: E) {
        this.controller.dismiss();
        this.properties.onDismiss(entity);
    }
    public ngOnInit(): void {
        Parameter.getWait().subscribe(observer => this.wait = observer);
        if (this.properties.filters) {
            if (this.properties.filters.includes(FilterType.SEARCH)) this.buttons.push({ click: () => this.toolbar = this.toolbar !== 'SEARCH' ? 'SEARCH' : null, icon: HeaderComponent.ICON_SEARCH })
            if (this.properties.filters.find(predicate => predicate !== FilterType.SEARCH)) this.buttons.push({ click: () => this.toolbar = this.toolbar !== 'FILTER' ? 'FILTER' : null, icon: HeaderComponent.ICON_FILTER })
            this.properties.filters.forEach(callbackfn => this.filters.push({ type: callbackfn }));
        }
    }
    public restartFilter() {
        this.filters.forEach(callbackfn => callbackfn.value = null);
        this.buttons.forEach(callbackfn => callbackfn.selected = false);
        this.properties.toFilter(this.filters);
        this.searchFilter = null;
        this.toolbar = null;
    }
}

export interface HeaderProperties<E extends Entity> {
    dismiss?: 'CONFIRMATION' | 'DIRECT';
    filters?: FilterType[];
    buttons?: Button[];
    onDismiss?: (entity: E) => void;
    subtitle?: string;
    title?: string;
    toFilter?: (filter: Filter[]) => void;
}
