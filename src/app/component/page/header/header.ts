import { Assistance, Contact, Entity, Event, Observation, Particular, Person, Relationship } from "src/app/tool/data";
import { Filter, FilterType } from "src/app/tool/filter";
import { HeaderProperties } from "./header.component";
import { ModalProperties } from "src/app/tool/modal";

export class HeaderModal {

    private static header<E extends Entity>(title: string, properties: HeaderModalProperties<E>): HeaderProperties<E> {
        return {
            buttons: properties.hideAddButton ? [] : [{
                click: () => properties.detail(),
                color: 'success',
                icon: 'add-outline'
            }],
            dismiss: properties.menu ? null : 'DIRECT',
            onDismiss: () => properties.getComponent().refresh(),
            title: title,
            toFilter: (filters: Filter[]) => properties.getComponent().filter(filters)
        }
    }

    public static assistanceEvent(properties: HeaderModalProperties<Assistance>): HeaderProperties<Assistance> {
        let header = this.header('Asistencias', properties);
        header.filters = [FilterType.ROLE, FilterType.SEARCH];
        return header;
    }

    public static assistancePerson(properties: HeaderModalProperties<Assistance>): HeaderProperties<Assistance> {
        let header = this.header('Asistentes', properties);
        header.filters = [FilterType.BIBLE, FilterType.CHRISTENING, FilterType.GENDER, FilterType.INITIAL, FilterType.ROLE, FilterType.SEARCH];
        return header;
    }

    public static contact(properties: HeaderModalProperties<Contact>): HeaderProperties<Contact> {
        let header = this.header('Contactos', properties);
        header.filters = [];
        return header;
    }

    public static event(properties: HeaderModalProperties<Event>): HeaderProperties<Relationship> {
        let header = this.header('Eventos', properties);
        header.filters = [FilterType.SEARCH];
        return header;
    }

    public static observation(properties: HeaderModalProperties<Observation>): HeaderProperties<Observation> {
        let header = this.header('Observaciones', properties);
        header.filters = [FilterType.OBSERVATION, FilterType.SEARCH];
        return header;
    }

    public static particularObservation(properties: HeaderModalProperties<Particular>): HeaderProperties<Particular> {
        let header = this.header('Detalles', properties);
        header.filters = [FilterType.OBSERVATION, FilterType.SEARCH];
        return header;
    }

    public static particularPerson(properties: HeaderModalProperties<Particular>): HeaderProperties<Particular> {
        let header = this.header('Detalles', properties);
        header.filters = [FilterType.BIBLE, FilterType.CHRISTENING, FilterType.GENDER, FilterType.INITIAL, FilterType.ROLE, FilterType.SEARCH];
        return header;
    }

    public static person(properties: HMPersonProperties): HeaderProperties<Person> {
        let header = this.header('Personas', properties);
        header.buttons = properties.hideAddButton ? [] : [{
            click: () => properties.detail(),
            color: 'success',
            icon: 'person-add-outline'
        }];
        header.filters = [FilterType.INITIAL, FilterType.BIBLE, FilterType.CHRISTENING, FilterType.GENDER, FilterType.SEARCH];
        return header;
    }

    public static relationship(properties: HeaderModalProperties<Relationship>): HeaderProperties<Relationship> {
        let header = this.header('Relaciones', properties);
        header.filters = [FilterType.INITIAL, FilterType.BIBLE, FilterType.CHRISTENING, FilterType.GENDER, FilterType.RELATIONSHIP, FilterType.SEARCH];
        return header;
    }
}

export interface HeaderModalProperties<E extends Entity> extends ModalProperties<E> {
    hideAddButton?: boolean;
    menu?: boolean;
}

export interface HMPersonProperties extends HeaderModalProperties<Person> {
    hideAddButton?: boolean;
}