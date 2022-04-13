import { Alert } from "src/app/tool/alert";
import { Controls, Notification, Param } from "src/app/tool/dto";
import { Entity } from "src/app/tool/data";
import { FormGroup } from "@angular/forms";
import { HeaderComponent, HeaderProperties } from "./header/header.component";
import { Input, OnInit, ViewChild } from "@angular/core";
import { Parameter, Tool } from "src/app/tool/static";
import { ServiceComponent } from "./service.component";
import { Toast } from "src/app/tool/toast";

export abstract class DetailComponent<E extends Entity, S extends ServiceComponent<E>> implements OnInit {

    @Input()
    public properties: DetailProperties<E>;

    @ViewChild(HeaderComponent)
    private component: HeaderComponent<E>;

    private group: FormGroup;
    private readonly: boolean = true;

    public headerProperties: HeaderProperties<E> = { dismiss: 'DIRECT' };
    public param: Param;
    public wait: boolean;

    constructor(protected alert: Alert, protected service: S, protected toast: Toast) { }

    private notification() {
        let notification = this.getNotification();
        if (notification) this.headerProperties.buttons.unshift({ icon: 'notifications-outline', click: () => this.alert.presentNotification(notification) })
    }
    protected edit() {
        this.headerProperties.buttons = [];
        if (this.properties.entity && this.properties.entity.id) {
            this.headerProperties.buttons.push({
                click: () => this.service.delete(this.properties.entity, () => this.component.dismiss(this.properties.entity)),
                color: 'danger',
                icon: 'trash-outline'
            });
            this.notification();
        }
        this.headerProperties.buttons.push({
            click: () => {
                if (this.headerProperties.dismiss === 'DIRECT') this.component.dismiss(this.properties.entity);
                else this.save(entity => this.component.dismiss(entity));
            },
            color: 'success',
            icon: 'checkmark-outline'
        });
        this.setRemoveReadonly();
    }

    protected abstract form(entity?: E): FormGroup;
    protected abstract fieldErrors(controls: Controls): string[];
    protected abstract title(entity?: E): string;

    protected changePage(event?: CustomEvent): void { };
    protected editGroup(field: string, value: string) { this.group.controls[field].setValue(value) }
    protected fixGroup(entity: E): E { return entity }
    protected setRemoveReadonly() { this.readonly = false }
    protected getReadonly(): boolean { return this.readonly }
    protected getGroup(): FormGroup { return this.group }
    protected getNotification(): Notification { return null }
    protected isChanged() { return this.headerProperties.dismiss === 'CONFIRMATION' }
    protected save(next: (entity: E) => void) {
        console.log(this.group.errors)
        if (this.group.valid) {
            let entity: E = this.fixGroup({ ...this.group.value });
            if (entity.id) this.service.update(entity, en => {
                this.form(en);
                this.headerProperties.dismiss = 'DIRECT';
                this.properties.entity = en;
                next(en);
            });
            else this.service.create(entity, en => {
                this.form(en);
                this.headerProperties.dismiss = 'DIRECT';
                this.properties.entity = en;
                next(en);
            });
        }
        else this.toast.present('Campos incorrectos: (' + this.fieldErrors(this.group.controls).reduce((p, c) => p + ', ' + c) + ')');
    }

    public getMonths(): string[] { return Tool.MONTHS }
    public ngOnInit(): void {
        if (this.properties.entity && this.properties.entity.id) {
            this.headerProperties.buttons = [{ click: () => this.edit(), icon: 'pencil-outline' }];
            this.notification();
        }
        else this.edit();
        this.group = this.form(this.properties.entity);
        this.group.valueChanges.subscribe(() => this.headerProperties.dismiss = 'CONFIRMATION');
        this.headerProperties.onDismiss = entity => this.properties.onDismiss(entity);
        this.headerProperties.title = this.title(this.properties.entity);
        Parameter.getParam().subscribe(observer => this.param = observer);
        Parameter.getWait().subscribe(observer => this.wait = observer);
    }
    public toogleReadonly(field: boolean): string { return field ? 'radio-button-on-outline' : 'radio-button-off-outline' }
}

export interface DetailProperties<E extends Entity> {
    origen?: 'O' | 'P',
    entity?: E,
    notification?: Notification,
    onDismiss?: (entity: E) => void
}