import { Button, Option } from "./dto";
import { Assistance, Event, Gender, Observation, ObservationType, Particular, Person, Relationship, RelationshipType, Role } from "./data";
import { Tool } from "./static";

export class FilterTool {
    private static labelEvent(event: Event) { return event.name + ' ' + Tool.dateLabel(event) }
    private static labelPerson(person: Person) { return person.name + ' ' + person.last + ' ' + person.identification }
    public static getOptions(options: string[], value: string): Option<string>[] {
        return options.map(callbackfn => {
            return { checked: value === callbackfn, value: callbackfn }
        });
    }
    public static event(events: Event[], filters: Filter[]) {
        let search = '';
        filters.forEach(callbackfn => { if (callbackfn.value && callbackfn.type === FilterType.SEARCH) search = callbackfn.value || '' });
        return events.filter(predicate => this.labelEvent(predicate).toUpperCase().includes(search.toUpperCase()))
    }
    public static observation(observations: Observation[], filters: Filter[]) {
        let type: ObservationType;
        let search = '';
        filters.forEach(callbackfn => {
            if (callbackfn.type === FilterType.OBSERVATION) type = callbackfn.value;
            else if (callbackfn.value && callbackfn.type === FilterType.SEARCH) search = callbackfn.value || '';
        });
        return observations.filter(predicate => {
            if (type && ObservationType[predicate.type] !== type) return false;
            return predicate.name.toUpperCase().includes(search.toUpperCase());
        })
    }
    public static assistance(assistances: Assistance[], filters: Filter[]) {
        let role: Role;
        let search = '';
        filters.forEach(callbackfn => {
            if (callbackfn.type === FilterType.ROLE) role = callbackfn.value;
            else if (callbackfn.value && callbackfn.type === FilterType.SEARCH) search = callbackfn.value || '';
        });
        return assistances.filter(predicate => {
            if (role && Role[predicate.role] !== role) return false;
            return this.labelEvent(predicate.event).toUpperCase().includes(search.toUpperCase());
        })
    }
    public static particularObservation(particulars: Particular[], filters: Filter[]) {
        let type: ObservationType;
        let search = '';
        filters.forEach(callbackfn => {
            if (callbackfn.type === FilterType.OBSERVATION) type = callbackfn.value;
            else if (callbackfn.value && callbackfn.type === FilterType.SEARCH) search = callbackfn.value || '';
        });
        return particulars.filter(predicate => {
            if (type && ObservationType[predicate.observation.type] !== type) return false;
            return (predicate.detail || '').toUpperCase().includes(search.toUpperCase());
        })
    }
    public static particularPerson(particulars: Particular[], filters: Filter[]) {
        let initial: boolean[] = [false];
        let bible: boolean[] = [false];
        let christening: boolean[] = [false];
        let gender: Gender;
        let search = '';
        filters.forEach(callbackfn => {
            if (callbackfn.value) {
                if (callbackfn.type === FilterType.INITIAL) initial = [true, callbackfn.value === FilterValues.INITIAL[1]];
                else if (callbackfn.type === FilterType.BIBLE) bible = [true, callbackfn.value === FilterValues.BIBLE[1]];
                else if (callbackfn.type === FilterType.CHRISTENING) christening = [true, callbackfn.value === FilterValues.CHRISTENING[1]];
                else if (callbackfn.type === FilterType.GENDER) gender = callbackfn.value;
                else if (callbackfn.type === FilterType.SEARCH) search = callbackfn.value || '';
            }
        });
        return particulars.filter(predicate => {
            if (initial[0] && initial[1] !== predicate.person.initial) return false;
            if (bible[0] && bible[1] !== predicate.person.bible) return false;
            if (christening[0] && christening[1] !== predicate.person.christening) return false;
            if (gender && Gender[predicate.person.gender] !== gender) return false;
            return predicate.detail.toUpperCase().includes(search.toUpperCase())
        })
    }
    public static assistancePerson(assistances: Assistance[], filters: Filter[]) {
        let filtered: Assistance[] = [];
        let role: Role;
        filtered = this.person(assistances.map(callbackfn => callbackfn.person), filters).map(callbackfn => assistances.find(predicate => predicate.person.id === callbackfn.id));
        filters.forEach(callbackfn => { if (callbackfn.type === FilterType.ROLE) role = callbackfn.value; });
        return filtered.filter(predicate => {
            if (role && Role[predicate.role] !== role) return false;
            else return true;
        })
    }
    public static person(persons: Person[], filters: Filter[]) {
        let initial: boolean[] = [false];
        let bible: boolean[] = [false];
        let christening: boolean[] = [false];
        let gender: Gender;
        let search = '';
        filters.forEach(callbackfn => {
            if (callbackfn.value) {
                if (callbackfn.type === FilterType.INITIAL) initial = [true, callbackfn.value === FilterValues.INITIAL[1]];
                else if (callbackfn.type === FilterType.BIBLE) bible = [true, callbackfn.value === FilterValues.BIBLE[1]];
                else if (callbackfn.type === FilterType.CHRISTENING) christening = [true, callbackfn.value === FilterValues.CHRISTENING[1]];
                else if (callbackfn.type === FilterType.GENDER) gender = callbackfn.value;
                else if (callbackfn.type === FilterType.SEARCH) search = callbackfn.value || '';
            }
        });
        return persons.filter(predicate => {
            if (initial[0] && initial[1] !== predicate.initial) return false;
            if (bible[0] && bible[1] !== predicate.bible) return false;
            if (christening[0] && christening[1] !== predicate.christening) return false;
            if (gender && Gender[predicate.gender] !== gender) return false;
            return this.labelPerson(predicate).toUpperCase().includes(search.toUpperCase())
        })
    }
    public static relationship(person: Person, relationships: Relationship[], filters: Filter[]) {
        let filtered: Relationship[] = [];
        this.person(relationships.map(callbackfn => callbackfn.dominant.id === person.id ? callbackfn.recessive : callbackfn.dominant), filters).forEach(callbackfn => {
            let filter = filters.find(predicate => predicate.value && predicate.type === FilterType.RELATIONSHIP);
            let relationship: Relationship = relationships.find(predicate => callbackfn.id === predicate.dominant.id || callbackfn.id === predicate.recessive.id);
            if (filter) {
                if (relationship.type === RelationshipType.COUSINS && filter.value === 'Primo') filtered.push(relationship);
                else if (relationship.type === RelationshipType.FAMILY && filter.value === 'Familiar') filtered.push(relationship);
                else if (relationship.type === RelationshipType.FRIENDS && filter.value === 'Amigo') filtered.push(relationship);
                else if (relationship.type === RelationshipType.SIBLING && filter.value === 'Hermano') filtered.push(relationship);
                else if (relationship.type === RelationshipType.GRANDPARENTS) {
                    if (filter.value === 'Abuelo' && relationship.recessive.id === person.id) filtered.push(relationship);
                    else if (filter.value === 'Nieto' && relationship.dominant.id === person.id) filtered.push(relationship);
                }
                else if (relationship.type === RelationshipType.PARENTS) {
                    if (filter.value === 'Padre' && relationship.recessive.id === person.id) filtered.push(relationship);
                    else if (filter.value === 'Hijo' && relationship.dominant.id === person.id) filtered.push(relationship);
                }
                else if (relationship.type === RelationshipType.UNCLES) {
                    if (filter.value === 'Tio' && relationship.recessive.id === person.id) filtered.push(relationship);
                    else if (filter.value === 'Sobrino' && relationship.dominant.id === person.id) filtered.push(relationship);
                }
            }
            else filtered.push(relationship);
        });
        return filtered;
    }
}

export class FilterValues {
    public static readonly BIBLE = ['Sin biblia', 'Con biblia'];
    public static readonly CHRISTENING = ['Sin bautizar', 'Bautizado'];
    public static readonly INITIAL = ['No realizado', 'Realizado'];
    public static readonly RELATIONSHIP = ['Primo', 'Familiar', 'Amigo', 'Abuelo', 'Nieto', 'Padre', 'Hijo', 'Hermano', 'Tio', 'Sobrino'];
}

export enum FilterType {
    BIBLE = 'Biblia',
    CHRISTENING = 'Bautizo',
    GENDER = 'Genero',
    INITIAL = 'Curso',
    OBSERVATION = 'Observación',
    RELATIONSHIP = 'Relación',
    ROLE = 'Rol',
    SEARCH = 'Busqueda',
    SEARCH_SECONDARY = 'Busqueda'
}

export interface Filter {
    type: FilterType;
    value?: any;
}
export interface FilterButton extends Button { selected?: boolean; }