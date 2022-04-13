import { AbstractControl } from "@angular/forms";
import { Entity } from "./data";

export interface Button {
    click?: (a?: any) => void;
    color?: string;
    icon?: string;
    text?: string;
}
export interface Controls { [key: string]: AbstractControl; }
export interface Image {
    readonly?: boolean;
    src?: string;
    url?: string;
}
export interface Item<E extends Entity> {
    buttons?: Button[];
    detail: () => void;
    entity: E;
    icon?: string;
    image?: string;
    label: string;
    notification?: Notification;
    small?: string;
    sub?: string;
    subcolor?: string;
}
export interface Menu {
    icon: string;
    selected: boolean;
    sub?: string;
    title: string;
    url: string;
}
export interface Notification {
    title: string,
    notifications: string[]
}
export interface Option<V> {
    value: V;
    checked: boolean;
}
export interface Param { photos?: string; }