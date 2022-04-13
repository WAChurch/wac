import { Alert } from "src/app/tool/alert";
import { Asynchronous } from "src/app/tool/asynchronous";
import { Entity } from "src/app/tool/data";
import { Http } from "src/app/tool/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Toast } from "src/app/tool/toast";

@Injectable({ providedIn: 'root' })
export abstract class ServiceComponent<E extends Entity> {
    protected abstract url: string;

    constructor(private alert: Alert, private async: Asynchronous, private http: Http, private toast: Toast) { }

    private execute(request: Observable<any>, next: (e: E) => void) {
        this.async.wait(request, { next: n => next(n) });
    }

    protected abstract toastCreate(element: E): string;
    protected abstract toastUpdate(element: E): string;
    protected abstract toastPostDelete(element: E): string;
    protected abstract toastPreDelete(element: E): string;

    public create(element: E, next: (e: E) => void) {
        this.execute(this.http.post({ data: element, url: this.url }), n => {
            this.toast.present(this.toastCreate(n));
            next(n);
        })
    }
    public delete(element: E, next: (e: E) => void) {
        this.alert.present({
            buttons: [{
                click: () => this.execute(this.http.delete(this.url + element.id), () => {
                    this.toast.present(this.toastPostDelete(element));
                    next(element);
                }),
                color: 'danger',
                text: 'Eliminar'
            }],
            message: this.toastPreDelete(element)
        })

    }
    public update(element: E, next: (e: E) => void) {
        this.execute(this.http.put({ data: element, url: this.url + element.id }), n => {
            this.toast.present(this.toastUpdate(n));
            next(n);
        })
    }
    public read(next: (elements: E[]) => void, extra: string = ''): void {
        this.async.wait(this.http.get(this.url + extra), { next: elements => next(elements || []) });
    }
}