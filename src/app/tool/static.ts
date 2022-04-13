import { formatDate } from "@angular/common";
import { timer, Observable, Subject } from "rxjs";
import { FormControl } from "@angular/forms";
import { Assistance, Event, Gender, Media, ObservationType, Particular, Person, Relationship, RelationshipType } from "./data";
import { Image, Notification, Param } from "./dto";

export class Parameter {
    private static PARAM: Param;
    private static PARAM_SUBJECT: Subject<Param> = new Subject();
    private static WAIT: boolean;
    private static WAIT_SUBJECT: Subject<boolean> = new Subject();

    public static readonly ADMINISTRATOR = true;

    public static getParam(): Observable<Param> {
        timer(1).subscribe(() => Parameter.PARAM_SUBJECT.next(Parameter.PARAM));
        return Parameter.PARAM_SUBJECT.asObservable();
    }
    public static getWait(): Observable<boolean> {
        timer(1).subscribe(() => Parameter.WAIT_SUBJECT.next(Parameter.WAIT));
        return Parameter.WAIT_SUBJECT.asObservable();
    }
    public static setParam(param: Param): void {
        Parameter.PARAM = param;
        Parameter.PARAM_SUBJECT.next(Parameter.PARAM);
    }
    public static setWait(wait: boolean) {
        Parameter.WAIT = wait;
        if (wait) timer(1000).subscribe(() => Parameter.WAIT_SUBJECT.next(Parameter.WAIT));
        else Parameter.WAIT_SUBJECT.next(Parameter.WAIT);
    }
}

export class Tool {
    public static readonly MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    private static dayOfYear(date: Date): number { return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000 }

    public static enumName(e: any) { return e };
    public static formatDate(date: Date): string { return formatDate(date, 'YYYY-MM-dd', 'en-US') }
    public static minutes(range: number): number[] {
        let minutes = [];
        let minute = 0;
        while (minute < 60) {
            minutes.push(minute);
            minute += range;
        }
        return minutes;
    }
    public static iconMedia(media: Media) {
        if (media === Media.ADDRESS) return 'home-outline';
        else if (media === Media.FACEBOOK) return 'logo-facebook';
        else if (media === Media.INSTAGRAM) return 'logo-instagram';
        else if (media === Media.MAIL) return 'at-outline';
        else if (media === Media.PHONE) return 'call-outline';
        else if (media === Media.PINTEREST) return 'logo-pinterest';
        else if (media === Media.TIKTOK) return 'logo-tiktok';
        else if (media === Media.WHATSAPP) return 'logo-whatsapp';
        else if (media === Media.YOUTUBE) return 'logo-youtube';
    }
    public static iconObservationType(type: ObservationType) {
        if (type === ObservationType.AFFLICTION) return 'heart-dislike-outline';
        else if (type === ObservationType.HEALTH) return 'bandage-outline';
        else if (type === ObservationType.HOBBY) return 'color-palette-outline';
        else if (type === ObservationType.LIKING) return 'happy-outline';
        else if (type === ObservationType.NEED) return 'alert-circle-outline';
        else if (type === ObservationType.PURPOSE) return 'trophy-outline';
        else if (type === ObservationType.STRUGGLE) return 'thunderstorm-outline';
    }
    public static dateLabel(event: Event) {
        let date = new Date(event.date);
        date.setDate(date.getDate() + 1)
        return (Tool.nameOfDay(date) || Tool.shortDate(date));
    }
    public static personLabel(person: Person) {
        let name = '';
        let last = '';
        person.name.split(' ').forEach(callbackfn => { if (callbackfn.length >= name.length) name = callbackfn })
        person.last.split(' ').forEach(callbackfn => { if (callbackfn.length >= last.length) last = callbackfn })
        return name + ' ' + last;
    }
    public static personNotification(person: Person): Notification {
        let birth = new Date(person.birth);
        birth.setDate(birth.getDate() + 1);
        if (Math.abs(this.dayOfYear(birth) - this.dayOfYear(new Date())) <= 15) return { notifications: ['Cumple ' + (new Date().getUTCFullYear() - birth.getUTCFullYear()) + ' años el ' + birth.getDate() + ' de ' + this.MONTHS[birth.getMonth()].toLowerCase()], title: this.personLabel(person) }
    }

    public static particularNotification(date: string): Notification {
        let dat = new Date(date);
        dat.setDate(dat.getDate() + 1);
        let dif = this.dayOfYear(dat) - this.dayOfYear(new Date());
        if (Math.abs(dif) <= 15) return { notifications: ['El detalle ' + (dif < 0 ? 'sucedió' : 'sucederá') + ' el ' + dat.getDate() + ' de ' + this.MONTHS[dat.getMonth()].toLowerCase() + '. ¡Tenlo en cuenta!'], title: date }
    }
    public static eventNotification(date: string): Notification {
        let dat = new Date(date);
        dat.setDate(dat.getDate() + 1);
        let difference = this.dayOfYear(dat) - this.dayOfYear(new Date());
        if (dat.getFullYear() === new Date().getFullYear() && difference > 0 && difference <= 15) return { notifications: ['El evento se realizará el ' + dat.getDate() + ' de ' + this.MONTHS[dat.getMonth()].toLowerCase() + '. ¡Recuerdale a los asistentes que se preparen!'], title: date }
    }
    public static personSort(persons: Person[]) { return persons.sort((one, two) => (Tool.personLabel(one) < Tool.personLabel(two) ? -1 : 1)) }
    public static relationshipSort(relationships: Relationship[], id: number) { return relationships.sort((one, two) => (Tool.personLabel(id === one.dominant.id ? one.recessive : one.dominant) < Tool.personLabel(id === two.dominant.id ? two.recessive : two.dominant) ? -1 : 1)) }
    public static assistanceSort(assistances: Assistance[]) {
        let first = assistances.filter(predicate => predicate.id < 0).sort((one, two) => (Tool.personLabel(one.person) < Tool.personLabel(two.person) ? -1 : 1));
        let second = assistances.filter(predicate => predicate.id > 0).sort((one, two) => (Tool.personLabel(one.person) < Tool.personLabel(two.person) ? -1 : 1));
        return first.concat(second);
    }
    public static nameOfDay(date: Date) {
        let difference = this.dayOfYear(date) - this.dayOfYear(new Date());
        if (Tool.today().getFullYear() === date.getFullYear()) {
            if (difference === 0) return 'Hoy';
            else if (difference === 1) return 'Mañana';
            else if (difference === -1) return 'Ayer';
            else if (difference > 1 && difference < 16) return 'En ' + difference + ' días'
            else if (difference > -16 && difference < -1) return 'Hace ' + (difference * -1) + ' días'
        }
    }
    public static shortDate(date: Date) { return date.getDate() + ' ' + this.MONTHS[date.getMonth()].substring(0, 3) + ' ' + date.getFullYear(); }
    public static today() {
        let date = new Date();
        return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    }
    public static isFuture(date: Date) { return date.getTime() - Tool.today().getTime() >= 0 }
    public static personPhoto(image: Image, param: Param) { return image.src ? 'data:image/jpeg;base64,' + image.src : (param ? param.photos + (image.url || 'DEFAULT.jpeg') : '') }
    public static relationship(gender: Gender, relationship: 'DOMINANT' | 'RECESSIVE', relationshipType: RelationshipType) {
        if (relationshipType === RelationshipType.COUSINS) return Gender[gender] === Gender.FEMALE ? 'Prima' : 'Primo';
        if (relationshipType === RelationshipType.FAMILY) return 'Familiar';
        if (relationshipType === RelationshipType.FRIENDS) return Gender[gender] === Gender.FEMALE ? 'Amiga' : 'Amigo';
        if (relationshipType === RelationshipType.GRANDPARENTS) {
            if (relationship === 'DOMINANT') return Gender[gender] === Gender.FEMALE ? 'Abuela' : 'Abuelo';
            else return Gender[gender] === Gender.FEMALE ? 'Nieta' : 'Nieto';
        }
        if (relationshipType === RelationshipType.PARENTS) {
            if (relationship === 'DOMINANT') return Gender[gender] === Gender.FEMALE ? 'Madre' : 'Padre';
            else return Gender[gender] === Gender.FEMALE ? 'Hija' : 'Hijo';
        }
        if (relationshipType === RelationshipType.SIBLING) return Gender[gender] === Gender.FEMALE ? 'Hermana' : 'Hermano';
        if (relationshipType === RelationshipType.UNCLES) {
            if (relationship === 'DOMINANT') return Gender[gender] === Gender.FEMALE ? 'Tia' : 'Tio';
            else return Gender[gender] === Gender.FEMALE ? 'Sobrina' : 'Sobrino';
        }
    }
    public static yesterday(): Date {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        return date;
    }
    public static futureYears(years: number): Date {
        let date = new Date();
        date.setDate(date.getDate() + (365 * years));
        return date;
    }
}

export class Control {
    public static past(control: FormControl) { return Date.now() - new Date(control.value).getTime() > 0 ? null : { 'future': true } }
    public static future(control: FormControl) { return new Date(control.value).getTime() - Date.now() > 0 ? null : { 'past': true } }
    public static whitespace(control: FormControl) { return (control.value || '').trim().length !== 0 ? null : { 'whitespace': true } }
}