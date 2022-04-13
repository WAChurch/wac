import { Alert } from "./alert";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Parameter } from "./static";

@Injectable({ providedIn: 'root' })
export class Asynchronous {
    constructor(private alert: Alert) { }

    private subscribe(observable: Observable<any>, properties: AsynchronousProperties) {
        observable.subscribe(observer => properties.next(observer), error => this.alert.present({ message: error.error ? error.error : error }),
            () => { if (properties.complete) properties.complete(); }).add(() => Parameter.setWait(false));
    }

    public then(error: string, promise: Promise<any>, properties: AsynchronousProperties) {
        this.subscribe(new Observable(s => { promise.then(t => s.next(t)).catch(() => s.error(error)).finally(() => s.complete()) }), properties);
    }
    public wait(observable: Observable<any>, properties: AsynchronousProperties) {
        Parameter.setWait(true);
        this.subscribe(observable, properties);
    }
}

export interface AsynchronousProperties {
    complete?: () => void;
    next: (a: any) => void;
}