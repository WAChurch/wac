import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { timer } from "rxjs";
import { DetailComponent } from "src/app/component/page/detail.component";
import { Alert } from "src/app/tool/alert";
import { Contact, Media } from "src/app/tool/data";
import { Button, Controls } from "src/app/tool/dto";
import { Sheet } from "src/app/tool/sheet";
import { Parameter, Tool } from "src/app/tool/static";
import { Toast } from "src/app/tool/toast";
import { ContactService } from "../service/contact.service";

@Component({ selector: 'app-contact-detail-component', templateUrl: 'contact.detail.html' })
export class ContactDetailComponent extends DetailComponent<Contact, ContactService> {

    public contacts: ContactElement[] = [];

    constructor(alert?: Alert, private builder?: FormBuilder, service?: ContactService, private sheet?: Sheet, toast?: Toast) { super(alert, service, toast) }

    private updateTempContact(contact: Contact, id: number) {
        let e = this.contacts.find(predicate => predicate.id === id);
        e.contact = contact;
        timer(5).subscribe(() => {
            e.edited = false
            this.headerProperties.dismiss = this.contacts.find(predicate => predicate.edited) ? 'CONFIRMATION' : 'DIRECT';
        });
    }
    private deleteTempContact(id: Number) {
        this.contacts = this.contacts.filter(predicate => predicate.id !== id);
        let i: number = 0;
        this.contacts.forEach(callbackfn => callbackfn.id = i++);
    }
    protected form(entity: Contact = {}): FormGroup {
        return this.builder.group({});
    }
    protected fieldErrors(controls: Controls): string[] { return [] }
    protected title(entity?: Contact): string { return Tool.personLabel(entity) }
    public deleteContact(element: ContactElement) {
        if (element.contact.id) this.service.delete(element.contact, () => this.deleteTempContact(element.id))
        else this.deleteTempContact(element.id);
    }
    public go(element: ContactElement) { this.service.go(element.contact) }
    public iconMedia(element: ContactElement) { return element.media ? Tool.iconMedia(element.media) : 'trail-sign-outline' }
    public labelMedia(element: ContactElement) { return element.media || 'Medio' }
    public editMedia(element: ContactElement) {
        if (!this.getReadonly()) {
            let buttons: Button[] = [];
            for (let m in Media) if (!this.contacts.find(predicate => predicate.media === Media[m])) buttons.push({
                click: () => {
                    this.headerProperties.dismiss = 'CONFIRMATION';
                    let e = this.contacts.find(predicate => predicate.id === element.id);
                    e.contact.media = Tool.enumName(m);
                    e.edited = true;
                    e.media = Media[m];
                },
                icon: Tool.iconMedia(Media[m]),
                text: Media[m]
            });
            this.sheet.present(buttons, 'Medio')
        }
    }
    public editValue(event: CustomEvent, element: ContactElement) {
        this.headerProperties.dismiss = 'CONFIRMATION';
        let e = this.contacts.find(predicate => predicate.id === element.id);
        e.contact.value = event.detail.value;
        e.edited = true;
    }
    public edit() {
        this.headerProperties.buttons = [];
        this.setRemoveReadonly();
    }
    public newContact() {
        this.contacts.push({ contact: { person: this.properties.entity }, edited: true, id: this.contacts.length })
    }
    public limitMedia() { return Object.keys(Media).length; }
    public saveContact(element: ContactElement) {
        if (!element.contact.value || !element.contact.media) {
            let errors = [];
            if (!element.contact.media) errors.push('Medio')
            if (!element.contact.value) errors.push('Valor')
            this.toast.present('Campos incorrectos: (' + errors.reduce((p, c) => p + ', ' + c) + ')');
            return;
        }
        element.contact.value = element.contact.value.replace(new RegExp('[.]it[/]', 'g'), '.com/');
        if (element.media !== Media.ADDRESS) element.contact.value = element.contact.value.replace(new RegExp('[ ]', 'g'), '');
        if (element.media === Media.FACEBOOK && !(new RegExp('^https:[/][/]([a-zA-Z-]+[.])?facebook[.]com[/][\\w/\\?@=.-]+$').test(element.contact.value))) this.alert.present({ message: 'Este link no parece ser de Facebook, asegurate de copiarlo bien' })
        else if (element.media === Media.INSTAGRAM && !(new RegExp('^https:[/][/]([a-zA-Z-]+[.])?instagram[.]com[/][\\w/\\?@=.-]+$').test(element.contact.value))) this.alert.present({ message: 'Este link no parece ser de Instagram, asegurate de copiarlo bien' })
        else if (element.media === Media.MAIL && !(new RegExp('[\\w/\\.-]+[@]\\w+[.]\\w+$').test(element.contact.value))) this.alert.present({ message: 'No parece ser un correo electronico valido' })
        else if (element.media === Media.PHONE && !(new RegExp('^[+]?\\d+$').test(element.contact.value))) this.alert.present({ message: 'No parece ser un numero Telefonico, además de un \'+\' para el indicativo de país solo se aceptan números' })
        else if (element.media === Media.PINTEREST && !(new RegExp('^https:[/][/]([a-zA-Z-]+[.])?pin(terest)?[.]com[/][\\w/\\?@=.-]+$').test(element.contact.value))) this.alert.present({ message: 'Este link no parece ser de Pinterest, asegurate de copiarlo bien' })
        else if (element.media === Media.TIKTOK && !(new RegExp('^https:[/][/]([a-zA-Z-]+[.])?tiktok[.]com[/][\\w/\\?@=.-]+$').test(element.contact.value))) this.alert.present({ message: 'Este link no parece ser de TikTok, asegurate de copiarlo bien' })
        else if (element.media === Media.WHATSAPP && !(new RegExp('^[+]\\d+$').test(element.contact.value))) this.alert.present({ message: 'No parece ser un numero de Whatsapp, asegurate de copiarlo con el indicativo de pais' })
        else if (element.media === Media.YOUTUBE && !(new RegExp('^https:[/][/]([a-zA-Z-]+[.])?youtube[.]com[/][\\w/\\?@=-]+[\\w/\\?@=.-]+$').test(element.contact.value))) this.alert.present({ message: 'Este link no parece ser de YouTube, asegurate de copiarlo bien' })
        else {
            let contact: Contact = { id: element.contact.id, media: element.contact.media, person: element.contact.person, value: element.contact.value };
            if (element.media === Media.WHATSAPP) contact.value = 'https://wa.me/' + contact.value;
            if (element.contact.id) this.service.update(contact, c => this.updateTempContact(c, element.id));
            else this.service.create(contact, c => this.updateTempContact(c, element.id));
        }
    }

    public ngOnInit() {
        this.headerProperties.buttons = [{ click: () => this.edit(), icon: 'pencil-outline' }];
        this.headerProperties.onDismiss = entity => this.properties.onDismiss(entity);
        this.headerProperties.title = this.title(this.properties.entity);
        Parameter.getParam().subscribe(observer => this.param = observer);
        Parameter.getWait().subscribe(observer => this.wait = observer);
        this.service.readByPerson(this.properties.entity, contacts => contacts.forEach(callbackfn => this.contacts.push({ contact: callbackfn, edited: false, id: this.contacts.length, media: Media[callbackfn.media] })))
    }
}

interface ContactElement {
    id: number;
    contact: Contact,
    edited: boolean,
    media?: Media
}