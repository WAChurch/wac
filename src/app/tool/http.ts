import { Alert } from "./alert";
import { Asynchronous } from "./asynchronous";
import { Data } from "./data";
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { Injectable } from "@angular/core";
import { Observable, Subscriber } from "rxjs";
import { Param } from "./dto";
import { Parameter } from "./static";

@Injectable({ providedIn: 'root' })
export class Http {
    private static readonly ENDPOINT: string = 'https://dev-application-wac.herokuapp.com/';
    private static readonly ERROR: string = 'No pudimos conectarnos al servidor, inténtalo de nuevo más tarde';
    private static VALIDATED: boolean = false;

    public static readonly VERSION: string = '0.7.0';
    public static readonly ENDPOINT_ASSISTANCE: string = Http.ENDPOINT + 'assistance/';
    public static readonly ENDPOINT_CONTACT: string = Http.ENDPOINT + 'contact/';
    public static readonly ENDPOINT_EVENT: string = Http.ENDPOINT + 'event/';
    public static readonly ENDPOINT_OBSERVATION: string = Http.ENDPOINT + 'observation/';
    public static readonly ENDPOINT_PARTICULAR: string = Http.ENDPOINT + 'particular/';
    public static readonly ENDPOINT_PERSON: string = Http.ENDPOINT + 'person/';
    public static readonly ENDPOINT_RELATIONSHIP: string = Http.ENDPOINT + 'relationship/';
    public static readonly ENDPOINT_VERSION: string = Http.ENDPOINT + 'version/' + Http.VERSION;

    constructor(private alert: Alert, private asynchronous: Asynchronous, private http: HTTP) { }

    private data(promise: Promise<HTTPResponse>, subscriber: Subscriber<any>, context: boolean = false) {
        this.asynchronous.then(Http.ERROR, promise, {
            complete: () => subscriber.complete(),
            next: (response: HTTPResponse) => {
                let data: Data<any> = JSON.parse(response.data);
                if (data.code < 0) subscriber.error(data.message);
                else subscriber.next(context ? data : data.body);
            }
        });
    }
    private validate(promise: () => Promise<HTTPResponse>, body: boolean): Observable<any> {
        this.http.setDataSerializer('json');
        return new Observable(subscribe => {
            if (Http.VALIDATED) this.data(promise(), subscribe, body);
            else this.asynchronous.then(Http.ERROR, this.http.get(Http.ENDPOINT_VERSION, null, null), {
                next: (response: HTTPResponse) => {
                    let parse: Data<Param> = JSON.parse(response.data);
                    if (parse.code < 0) subscribe.error(parse.message);
                    else if (parse.code === 2) this.alert.present({ backdrop: true, message: parse.message });
                    else {
                        Http.VALIDATED = true;
                        Parameter.setParam(parse.body);
                        if (parse.code === 1) this.alert.present({ message: parse.message });
                        this.data(promise(), subscribe, body);
                    }
                }
            });
        });
    }

    public delete(url: string): Observable<any> { return this.validate(() => this.http.delete(url, null, null), false); }
    public get(url: string, body?: boolean): Observable<any> { return this.validate(() => this.http.get(url, null, null), body); }
    public post(properties: HttpProperties): Observable<any> { return this.validate(() => this.http.post(properties.url, properties.data, null), false); }
    public put(properties: HttpProperties): Observable<any> { return this.validate(() => this.http.put(properties.url, properties.data, null), false); }
}

export interface HttpProperties {
    data: any;
    url: string;
}