export enum Gender { FEMALE = 'Mujer', MALE = 'Hombre' }
export enum Media { ADDRESS = 'Dirección', FACEBOOK = 'Facebook', INSTAGRAM = 'Instagram', MAIL = 'E-Mail', PHONE = 'Teléfono', PINTEREST = 'Pinterest', TIKTOK = 'Tik Tok', WHATSAPP = 'Whatsapp', YOUTUBE = 'YouTube' }
export enum ObservationType { AFFLICTION = 'Aflicción', HEALTH = 'Salud', HOBBY = 'Pasatiempo', LIKING = 'Gusto', NEED = 'Necesidad', PURPOSE = 'Proposito', STRUGGLE = 'Lucha' }
export enum RelationshipType { COUSINS = 'COUSINS', FAMILY = 'FAMILY', FRIENDS = 'FRIENDS', GRANDPARENTS = 'GRANDPARENTS', PARENTS = 'PARENTS', SIBLING = 'SIBLING', UNCLES = 'UNCLES' }
export enum Role { ASSISTANT = 'Asistente', STAFF = 'En servicio' }

export interface Assistance extends Entity {
    event?: Event;
    person?: Person;
    role?: Role;
}
export interface Contact extends Entity {
    media?: Media;
    value?: string;
    person?: Person;
}
export interface Data<E> {
    body: E;
    code: number;
    message: string;
}
export interface Entity { id?: number }
export interface Event extends Entity {
    name?: string;
    date?: string;
    time?: string;
}
export interface Observation extends Entity {
    name?: string;
    type?: ObservationType;
}
export interface Particular extends Entity {
    date?: string;
    detail?: string;
    observation?: Observation;
    person?: Person;
}
export interface Person extends Entity {
    identification?: string;
    bible?: boolean;
    christening?: boolean;
    initial?: boolean;
    birth?: string;
    creation?: string;
    gender?: Gender;
    last?: string;
    name?: string;
    photo?: string;
    src?: string;
}
export interface Relationship extends Entity {
    dominant?: Person;
    recessive?: Person;
    type?: RelationshipType;
}