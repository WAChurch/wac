import { Injectable } from "@angular/core";
import { ServiceComponent } from "src/app/component/page/service.component";
import { Alert } from "src/app/tool/alert";
import { Asynchronous } from "src/app/tool/asynchronous";
import { Contact, Media, Person } from "src/app/tool/data";
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Http } from "src/app/tool/http";
import { Tool } from "src/app/tool/static";
import { Toast } from "src/app/tool/toast";

@Injectable({ providedIn: 'root' })
export class ContactService extends ServiceComponent<Contact>{
    protected url: string = Http.ENDPOINT_CONTACT;

    constructor(alert: Alert, async: Asynchronous, private browser: InAppBrowser, private cNumber: CallNumber, private composer: EmailComposer, http: Http, toast: Toast) { super(alert, async, http, toast) }

    protected toastCreate(element: Contact): string { return Media[element.media] + ' creado para ' + Tool.personLabel(element.person) }
    protected toastUpdate(element: Contact): string { return Media[element.media] + ' de ' + Tool.personLabel(element.person) + ' actualizado' }
    protected toastPostDelete(element: Contact): string { return Media[element.media] + ' de ' + Tool.personLabel(element.person) + ' eliminado' }
    protected toastPreDelete(element: Contact): string { return '¿Eliminar el contacto de ' + Media[element.media] + ' de ' + Tool.personLabel(element.person) + '?' }

    public readByPerson(person: Person, next: (elements: Contact[]) => void) {
        this.read(elements => {
            elements.forEach(callbackfn => callbackfn.person = person);
            next(elements)
        }, 'person/' + person.id)
    }

    public go(contact: Contact) {
        if (Media[contact.media] === Media.MAIL) this.composer.open({ to: contact.value });
        else if (Media[contact.media] === Media.PHONE) this.cNumber.callNumber(contact.value, true).finally(() => { });
        else if (Media[contact.media] !== Media.ADDRESS) {
            let url: string = 'https://';
            if (Media[contact.media] === Media.FACEBOOK) url += 'www.facebook.com/';
            else if (Media[contact.media] === Media.INSTAGRAM) url += 'www.instagram.com/';
            else if (Media[contact.media] === Media.PINTEREST) url += 'www.pinterest.com/';
            else if (Media[contact.media] === Media.TIKTOK) url += 'www.tiktok.com/';
            else if (Media[contact.media] === Media.WHATSAPP) url += 'wa.me/';
            else if (Media[contact.media] === Media.YOUTUBE) url += 'www.youtube.com/';
            this.browser.create(url + contact.value, '_system')
        }
    }
}