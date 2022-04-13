"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_component_component_module_ts-src_app_pages_particular_detail_particular_deta-f1d45f"],{

/***/ 7721:
/*!***********************************************!*\
  !*** ./src/app/component/component.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentModule": () => (/* binding */ ComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _page_choose_choose_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/choose/choose.component */ 862);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _page_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/header/header.component */ 2661);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _page_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/list/list.component */ 3954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _select_select_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select/select.popover.component */ 9870);









let ComponentModule = class ComponentModule {
};
ComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_page_choose_choose_component__WEBPACK_IMPORTED_MODULE_0__.ChooseComponent, _page_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _page_list_list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent, _select_select_popover_component__WEBPACK_IMPORTED_MODULE_3__.SelectPopoverComponent],
        exports: [_page_choose_choose_component__WEBPACK_IMPORTED_MODULE_0__.ChooseComponent, _page_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _page_list_list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent, _select_select_popover_component__WEBPACK_IMPORTED_MODULE_3__.SelectPopoverComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]
    })
], ComponentModule);



/***/ }),

/***/ 862:
/*!***********************************************************!*\
  !*** ./src/app/component/page/choose/choose.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseComponent": () => (/* binding */ ChooseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_choose_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./choose.component.html */ 8054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_component_page_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/page/header/header.component */ 2661);
/* harmony import */ var src_app_component_page_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/page/list/list.component */ 3954);





let ChooseComponent = class ChooseComponent {
    ngAfterViewInit() {
        this.listComponent.elementsSubject.subscribe(observer => this.properties.headerProperties.subtitle = observer.length.toString());
        this.properties.headerProperties.toFilter = (filter) => this.listComponent.filter(filter);
        this.properties.listProperties.initialize = () => this.properties.initialize(entities => this.listComponent.fill(entities));
        this.properties.reset = () => {
            this.properties.listProperties.initialize();
            this.headerComponent.restartFilter();
        };
        this.listComponent.refresh();
    }
};
ChooseComponent.propDecorators = {
    properties: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    listComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: [src_app_component_page_list_list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent,] }],
    headerComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: [src_app_component_page_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,] }]
};
ChooseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({ selector: 'app-choose-component', template: _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_choose_component_html__WEBPACK_IMPORTED_MODULE_0__["default"] })
], ChooseComponent);



/***/ }),

/***/ 8597:
/*!*******************************************************!*\
  !*** ./src/app/component/page/choose/choose.modal.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseModal": () => (/* binding */ ChooseModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_component_page_list_list_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/page/list/list.modal */ 7980);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tool/modal */ 7269);
/* harmony import */ var src_app_pages_relationship_relationship_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/relationship/relationship.service */ 7129);
/* harmony import */ var src_app_tool_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/tool/sheet */ 9506);
/* harmony import */ var src_app_tool_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/tool/alert */ 5772);
/* harmony import */ var src_app_tool_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/tool/data */ 3795);
/* harmony import */ var src_app_tool_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/tool/filter */ 6709);
/* harmony import */ var src_app_pages_person_component_service_person_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/person/component/service/person.service */ 5302);
/* harmony import */ var src_app_tool_static__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/tool/static */ 3922);
/* harmony import */ var _choose_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./choose.component */ 862);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header */ 9738);
/* harmony import */ var src_app_pages_assistance_assistance_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pages/assistance/assistance.service */ 5927);
/* harmony import */ var src_app_pages_event_component_service_event_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pages/event/component/service/event.service */ 454);
/* harmony import */ var src_app_pages_particular_service_particular_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pages/particular/service/particular.service */ 6506);
/* harmony import */ var src_app_pages_observation_component_service_observation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/pages/observation/component/service/observation.service */ 5135);


















let ChooseModal = class ChooseModal {
    constructor(alert, assistanceService, observationService, controller, eventService, listModal, particularService, personService, relationshipService, sheet) {
        this.alert = alert;
        this.assistanceService = assistanceService;
        this.observationService = observationService;
        this.controller = controller;
        this.eventService = eventService;
        this.listModal = listModal;
        this.particularService = particularService;
        this.personService = personService;
        this.relationshipService = relationshipService;
        this.sheet = sheet;
    }
    newRelationship(person, per, refresh) {
        this.sheet.present(src_app_tool_filter__WEBPACK_IMPORTED_MODULE_6__.FilterValues.RELATIONSHIP.map(callbackfn => {
            let text = callbackfn;
            if (src_app_tool_data__WEBPACK_IMPORTED_MODULE_5__.Gender[per.gender] === src_app_tool_data__WEBPACK_IMPORTED_MODULE_5__.Gender.FEMALE) {
                if (callbackfn === 'Primo')
                    text = 'Prima';
                else if (callbackfn === 'Amigo')
                    text = 'Amiga';
                else if (callbackfn === 'Abuelo')
                    text = 'Abuela';
                else if (callbackfn === 'Nieto')
                    text = 'Nieta';
                else if (callbackfn === 'Padre')
                    text = 'Madre';
                else if (callbackfn === 'Hijo')
                    text = 'Hija';
                else if (callbackfn === 'Hermano')
                    text = 'Hermana';
                else if (callbackfn === 'Tio')
                    text = 'Tia';
                else if (callbackfn === 'Sobrino')
                    text = 'Sobrina';
            }
            return {
                click: () => {
                    let relationship = {};
                    if (callbackfn === 'Primo')
                        relationship.type = src_app_tool_data__WEBPACK_IMPORTED_MODULE_5__.RelationshipType.COUSINS;
                    else if (callbackfn === 'Familiar')
                        relationship.type = src_app_tool_data__WEBPACK_IMPORTED_MODULE_5__.RelationshipType.FAMILY;
                    else if (callbackfn === 'Amigo')
                        relationship.type = src_app_tool_data__WEBPACK_IMPORTED_MODULE_5__.RelationshipType.FRIENDS;
                    else if (callbackfn === 'Abuelo' || callbackfn === 'Nieto')
                        relationship.type = src_app_tool_data__WEBPACK_IMPORTED_MODULE_5__.RelationshipType.GRANDPARENTS;
                    else if (callbackfn === 'Padre' || callbackfn === 'Hijo')
                        relationship.type = src_app_tool_data__WEBPACK_IMPORTED_MODULE_5__.RelationshipType.PARENTS;
                    else if (callbackfn === 'Hermano')
                        relationship.type = src_app_tool_data__WEBPACK_IMPORTED_MODULE_5__.RelationshipType.SIBLING;
                    else if (callbackfn === 'Tio' || callbackfn === 'Sobrino')
                        relationship.type = src_app_tool_data__WEBPACK_IMPORTED_MODULE_5__.RelationshipType.UNCLES;
                    if (callbackfn === 'Nieto' || callbackfn === 'Hijo' || callbackfn === 'Sobrino') {
                        relationship.dominant = person;
                        relationship.recessive = per;
                    }
                    else {
                        relationship.dominant = per;
                        relationship.recessive = person;
                    }
                    this.alert.present({
                        buttons: [{
                                click: () => this.relationshipService.create(relationship, e => refresh(e)),
                                color: 'success',
                                text: 'Confirmar'
                            }], message: src_app_tool_static__WEBPACK_IMPORTED_MODULE_8__.Tool.personLabel(relationship.dominant) + ' será ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_8__.Tool.relationship(relationship.dominant.gender, 'DOMINANT', relationship.type) + ' de ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_8__.Tool.personLabel(relationship.recessive)
                    });
                },
                icon: 'people-outline',
                text: text
            };
        }), '¿Qué relación tiene ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_8__.Tool.personLabel(per) + ' con ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_8__.Tool.personLabel(person) + '?');
    }
    newAssistance(event, person, refresh) {
        let buttons = [];
        for (let r in src_app_tool_data__WEBPACK_IMPORTED_MODULE_5__.Role) {
            buttons.push({
                click: () => {
                    let assistance = {};
                    assistance.event = event;
                    assistance.person = person;
                    assistance.role = src_app_tool_static__WEBPACK_IMPORTED_MODULE_8__.Tool.enumName(r);
                    this.alert.present({
                        buttons: [{
                                click: () => this.assistanceService.create(assistance, e => refresh(e)),
                                color: 'success',
                                text: 'Confirmar'
                            }], message: src_app_tool_static__WEBPACK_IMPORTED_MODULE_8__.Tool.personLabel(person) + ' asistirá a ' + event.name + ' como ' + src_app_tool_data__WEBPACK_IMPORTED_MODULE_5__.Role[r]
                    });
                },
                icon: 'people-outline',
                text: src_app_tool_data__WEBPACK_IMPORTED_MODULE_5__.Role[r]
            });
        }
        this.sheet.present(buttons, '¿Cómo asistirá ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_8__.Tool.personLabel(person) + ' a ' + event.name + '?');
    }
    choose(properties) {
        if (properties.back)
            properties.header.onDismiss = e => properties.back(e);
        return {
            headerProperties: properties.header,
            initialize: (next) => properties.initialize(ent => next(ent)),
            listProperties: properties.list
        };
    }
    assistancePerson(properties, component) {
        let choose = null;
        let cmp = Object.assign(Object.assign({}, properties), { header: _header_header__WEBPACK_IMPORTED_MODULE_10__.HeaderModal.assistancePerson({
                hideAddButton: !src_app_tool_static__WEBPACK_IMPORTED_MODULE_8__.Tool.isFuture(new Date(properties.getEntity().date)),
                getComponent: () => properties.getComponent(),
                detail: () => this.eventAddAssistance({
                    back: () => choose.reset(),
                    getComponent: () => properties.getComponent(),
                    getEntity: () => properties.getEntity()
                }, component)
            }), initialize: next => this.assistanceService.readByEvent(properties.getEntity(), assistances => next(assistances)), list: this.listModal.assistancePerson(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                        click: assistance => this.assistanceService.delete(assistance, () => choose.reset()),
                        color: 'danger',
                        icon: 'remove-outline'
                    }, {
                        click: assistance => this.newAssistance(assistance.event, assistance.person, () => choose.reset()),
                        color: 'success',
                        icon: 'add-outline'
                    }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            }) });
        choose = this.choose(cmp);
        src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__.Modal.modal(_choose_component__WEBPACK_IMPORTED_MODULE_9__.ChooseComponent, this.controller, choose);
    }
    assistanceEvent(properties, component) {
        let choose = null;
        let cmp = Object.assign(Object.assign({}, properties), { header: _header_header__WEBPACK_IMPORTED_MODULE_10__.HeaderModal.assistanceEvent({
                getComponent: () => properties.getComponent(),
                detail: () => this.personAddAssistance({
                    back: () => choose.reset(),
                    getComponent: () => properties.getComponent(),
                    getEntity: () => properties.getEntity()
                }, component)
            }), initialize: next => this.assistanceService.readByPerson(properties.getEntity(), assistances => next(assistances)), list: this.listModal.assistanceEvent(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                        click: assistance => this.assistanceService.delete(assistance, () => choose.reset()),
                        color: 'danger',
                        icon: 'remove-outline'
                    }, {
                        click: assistance => this.newAssistance(assistance.event, assistance.person, () => choose.reset()),
                        color: 'success',
                        icon: 'add-outline'
                    }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            }) });
        choose = this.choose(cmp);
        src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__.Modal.modal(_choose_component__WEBPACK_IMPORTED_MODULE_9__.ChooseComponent, this.controller, choose);
    }
    particularObservation(properties, component) {
        let choose = null;
        let cmp = Object.assign(Object.assign({}, properties), { header: _header_header__WEBPACK_IMPORTED_MODULE_10__.HeaderModal.particularObservation({
                getComponent: () => properties.getComponent(),
                detail: () => src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__.Modal.modalDetail(component, this.controller, {
                    origen: 'P',
                    entity: { id: null, person: properties.getEntity() },
                    onDismiss: p => {
                        choose.reset();
                        properties.back(p);
                    }
                })
            }), initialize: next => this.particularService.readByPerson(properties.getEntity(), particular => next(particular)), list: this.listModal.particularObservation(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                        click: particular => this.particularService.delete(particular, () => choose.reset()),
                        color: 'danger',
                        icon: 'remove-outline'
                    }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            }) });
        choose = this.choose(cmp);
        src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__.Modal.modal(_choose_component__WEBPACK_IMPORTED_MODULE_9__.ChooseComponent, this.controller, choose);
    }
    particularPerson(properties, component) {
        let choose = null;
        let cmp = Object.assign(Object.assign({}, properties), { header: _header_header__WEBPACK_IMPORTED_MODULE_10__.HeaderModal.particularPerson({
                getComponent: () => properties.getComponent(),
                detail: () => src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__.Modal.modalDetail(component, this.controller, {
                    origen: 'O',
                    entity: { id: 11111111, observation: properties.getEntity() },
                    onDismiss: p => {
                        choose.reset();
                        properties.back(p);
                    }
                })
            }), initialize: next => this.particularService.readByObservation(properties.getEntity(), particular => next(particular)), list: this.listModal.particularPerson(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                        click: particular => this.particularService.delete(particular, () => choose.reset()),
                        color: 'danger',
                        icon: 'remove-outline'
                    }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            }) });
        choose = this.choose(cmp);
        src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__.Modal.modal(_choose_component__WEBPACK_IMPORTED_MODULE_9__.ChooseComponent, this.controller, choose);
    }
    relationship(properties, component) {
        let choose = null;
        let cmp = Object.assign(Object.assign({}, properties), { header: _header_header__WEBPACK_IMPORTED_MODULE_10__.HeaderModal.relationship({
                getComponent: () => properties.getComponent(),
                detail: () => this.personAddRelationship({
                    back: () => choose.reset(),
                    getComponent: () => properties.getComponent(),
                    getEntity: () => properties.getEntity()
                }, component)
            }), initialize: next => this.relationshipService.readByPerson(properties.getEntity(), relationships => next(relationships)), list: this.listModal.relationship(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                        click: relationship => this.relationshipService.delete(relationship, () => choose.reset()),
                        color: 'danger',
                        icon: 'remove-outline'
                    }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            }) });
        choose = this.choose(cmp);
        src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__.Modal.modal(_choose_component__WEBPACK_IMPORTED_MODULE_9__.ChooseComponent, this.controller, choose);
    }
    eventAddAssistance(properties, component) {
        let choose = null;
        let cmp = Object.assign(Object.assign({}, properties), { header: _header_header__WEBPACK_IMPORTED_MODULE_10__.HeaderModal.person({
                getComponent: () => properties.getComponent(),
                detail: () => src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__.Modal.modalDetail(component, this.controller, {
                    onDismiss: p => {
                        choose.reset();
                        if (p)
                            this.newAssistance(properties.getEntity(), p, eve => {
                                properties.back(eve);
                                this.controller.dismiss();
                            });
                    }
                })
            }), initialize: next => this.personService.readCandidateAssistance(properties.getEntity(), persons => next(persons)), list: this.listModal.person(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                        click: person => this.newAssistance(properties.getEntity(), person, per => {
                            properties.back(per);
                            this.controller.dismiss();
                        }),
                        color: 'success',
                        icon: 'add-outline'
                    }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            }) });
        choose = this.choose(cmp);
        src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__.Modal.modal(_choose_component__WEBPACK_IMPORTED_MODULE_9__.ChooseComponent, this.controller, choose);
    }
    personAddAssistance(properties, component) {
        let choose = null;
        let cmp = Object.assign(Object.assign({}, properties), { header: _header_header__WEBPACK_IMPORTED_MODULE_10__.HeaderModal.event({
                getComponent: () => properties.getComponent(),
                detail: () => src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__.Modal.modalDetail(component, this.controller, {
                    onDismiss: e => {
                        choose.reset();
                        if (e)
                            this.newAssistance(e, properties.getEntity(), per => {
                                properties.back(per);
                                this.controller.dismiss();
                            });
                    }
                })
            }), initialize: next => this.eventService.readCandidateAssistance(properties.getEntity(), events => next(events)), list: this.listModal.event(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                        click: event => this.newAssistance(event, properties.getEntity(), eve => {
                            properties.back(eve);
                            this.controller.dismiss();
                        }),
                        color: 'success',
                        icon: 'add-outline'
                    }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            }) });
        choose = this.choose(cmp);
        src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__.Modal.modal(_choose_component__WEBPACK_IMPORTED_MODULE_9__.ChooseComponent, this.controller, choose);
    }
    personAddRelationship(properties, component) {
        let choose = null;
        let cmp = Object.assign(Object.assign({}, properties), { header: _header_header__WEBPACK_IMPORTED_MODULE_10__.HeaderModal.person({
                getComponent: () => properties.getComponent(),
                detail: () => src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__.Modal.modalDetail(component, this.controller, {
                    onDismiss: e => {
                        choose.reset();
                        if (e)
                            this.newRelationship(e, properties.getEntity(), per => {
                                properties.back(per);
                                this.controller.dismiss();
                            });
                    }
                })
            }), initialize: next => this.personService.readCandidateRelationship(properties.getEntity(), persons => next(persons)), list: this.listModal.person(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                        click: person => this.newRelationship(person, properties.getEntity(), per => {
                            properties.back(per);
                            this.controller.dismiss();
                        }),
                        color: 'success',
                        icon: 'add-outline'
                    }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            }) });
        choose = this.choose(cmp);
        src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__.Modal.modal(_choose_component__WEBPACK_IMPORTED_MODULE_9__.ChooseComponent, this.controller, choose);
    }
    person(component, properties) {
        let choose = null;
        let cmp = Object.assign(Object.assign({}, properties), { header: _header_header__WEBPACK_IMPORTED_MODULE_10__.HeaderModal.person({
                getComponent: () => properties.getComponent(),
                detail: () => src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__.Modal.modalDetail(component, this.controller, {
                    onDismiss: e => {
                        choose.reset();
                        if (e) {
                            properties.back(e);
                            this.controller.dismiss();
                        }
                    }
                })
            }), initialize: next => this.personService.read(persons => next(persons)), list: this.listModal.person(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                        click: person => {
                            properties.back(person);
                            this.controller.dismiss();
                        },
                        color: 'success',
                        icon: 'checkmark-outline'
                    }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            }) });
        choose = this.choose(cmp);
        src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__.Modal.modal(_choose_component__WEBPACK_IMPORTED_MODULE_9__.ChooseComponent, this.controller, choose);
    }
    observation(component, properties) {
        let choose = null;
        let cmp = Object.assign(Object.assign({}, properties), { header: _header_header__WEBPACK_IMPORTED_MODULE_10__.HeaderModal.observation({
                getComponent: () => properties.getComponent(),
                detail: () => src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__.Modal.modalDetail(component, this.controller, {
                    onDismiss: e => {
                        choose.reset();
                        if (e) {
                            properties.back(e);
                            this.controller.dismiss();
                        }
                    }
                })
            }), initialize: next => this.observationService.read(observation => next(observation)), list: this.listModal.observation(component, {
                activeButtons: true,
                back: () => choose.reset(),
                buttons: [{
                        click: observation => {
                            properties.back(observation);
                            this.controller.dismiss();
                        },
                        color: 'success',
                        icon: 'checkmark-outline'
                    }],
                getComponent: () => properties.getComponent(),
                getEntity: () => properties.getEntity()
            }) });
        choose = this.choose(cmp);
        src_app_tool_modal__WEBPACK_IMPORTED_MODULE_1__.Modal.modal(_choose_component__WEBPACK_IMPORTED_MODULE_9__.ChooseComponent, this.controller, choose);
    }
};
ChooseModal.ctorParameters = () => [
    { type: src_app_tool_alert__WEBPACK_IMPORTED_MODULE_4__.Alert },
    { type: src_app_pages_assistance_assistance_service__WEBPACK_IMPORTED_MODULE_11__.AssistanceService },
    { type: src_app_pages_observation_component_service_observation_service__WEBPACK_IMPORTED_MODULE_14__.ObservationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: src_app_pages_event_component_service_event_service__WEBPACK_IMPORTED_MODULE_12__.EventService },
    { type: src_app_component_page_list_list_modal__WEBPACK_IMPORTED_MODULE_0__.ListModal },
    { type: src_app_pages_particular_service_particular_service__WEBPACK_IMPORTED_MODULE_13__.ParticularService },
    { type: src_app_pages_person_component_service_person_service__WEBPACK_IMPORTED_MODULE_7__.PersonService },
    { type: src_app_pages_relationship_relationship_service__WEBPACK_IMPORTED_MODULE_2__.RelationshipService },
    { type: src_app_tool_sheet__WEBPACK_IMPORTED_MODULE_3__.Sheet }
];
ChooseModal = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Injectable)({ providedIn: 'root' })
], ChooseModal);



/***/ }),

/***/ 4473:
/*!****************************************************!*\
  !*** ./src/app/component/page/detail.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 2661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_tool_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tool/static */ 3922);



class DetailComponent {
    constructor(alert, service, toast) {
        this.alert = alert;
        this.service = service;
        this.toast = toast;
        this.readonly = true;
        this.headerProperties = { dismiss: 'DIRECT' };
    }
    notification() {
        let notification = this.getNotification();
        if (notification)
            this.headerProperties.buttons.unshift({ icon: 'notifications-outline', click: () => this.alert.presentNotification(notification) });
    }
    edit() {
        this.headerProperties.buttons = [];
        if (this.properties.entity && this.properties.entity.id) {
            this.headerProperties.buttons.push({
                click: () => this.service.delete(this.properties.entity, () => this.component.dismiss(this.properties.entity)),
                color: 'danger',
                icon: 'trash-outline'
            });
            this.notification();
        }
        this.headerProperties.buttons.push({
            click: () => {
                if (this.headerProperties.dismiss === 'DIRECT')
                    this.component.dismiss(this.properties.entity);
                else
                    this.save(entity => this.component.dismiss(entity));
            },
            color: 'success',
            icon: 'checkmark-outline'
        });
        this.setRemoveReadonly();
    }
    changePage(event) { }
    ;
    editGroup(field, value) { this.group.controls[field].setValue(value); }
    fixGroup(entity) { return entity; }
    setRemoveReadonly() { this.readonly = false; }
    getReadonly() { return this.readonly; }
    getGroup() { return this.group; }
    getNotification() { return null; }
    isChanged() { return this.headerProperties.dismiss === 'CONFIRMATION'; }
    save(next) {
        console.log(this.group.errors);
        if (this.group.valid) {
            let entity = this.fixGroup(Object.assign({}, this.group.value));
            if (entity.id)
                this.service.update(entity, en => {
                    this.form(en);
                    this.headerProperties.dismiss = 'DIRECT';
                    this.properties.entity = en;
                    next(en);
                });
            else
                this.service.create(entity, en => {
                    this.form(en);
                    this.headerProperties.dismiss = 'DIRECT';
                    this.properties.entity = en;
                    next(en);
                });
        }
        else
            this.toast.present('Campos incorrectos: (' + this.fieldErrors(this.group.controls).reduce((p, c) => p + ', ' + c) + ')');
    }
    getMonths() { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_1__.Tool.MONTHS; }
    ngOnInit() {
        if (this.properties.entity && this.properties.entity.id) {
            this.headerProperties.buttons = [{ click: () => this.edit(), icon: 'pencil-outline' }];
            this.notification();
        }
        else
            this.edit();
        this.group = this.form(this.properties.entity);
        this.group.valueChanges.subscribe(() => this.headerProperties.dismiss = 'CONFIRMATION');
        this.headerProperties.onDismiss = entity => this.properties.onDismiss(entity);
        this.headerProperties.title = this.title(this.properties.entity);
        src_app_tool_static__WEBPACK_IMPORTED_MODULE_1__.Parameter.getParam().subscribe(observer => this.param = observer);
        src_app_tool_static__WEBPACK_IMPORTED_MODULE_1__.Parameter.getWait().subscribe(observer => this.wait = observer);
    }
    toogleReadonly(field) { return field ? 'radio-button-on-outline' : 'radio-button-off-outline'; }
}
DetailComponent.propDecorators = {
    properties: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    component: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,] }]
};


/***/ }),

/***/ 2661:
/*!***********************************************************!*\
  !*** ./src/app/component/page/header/header.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header.component.html */ 2999);
/* harmony import */ var src_app_tool_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tool/alert */ 5772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_tool_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/tool/data */ 3795);
/* harmony import */ var src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/tool/filter */ 6709);
/* harmony import */ var src_app_tool_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/tool/static */ 3922);
/* harmony import */ var src_app_tool_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/tool/popover */ 8856);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
var HeaderComponent_1;









let HeaderComponent = HeaderComponent_1 = class HeaderComponent {
    constructor(alert, controller, popover) {
        this.alert = alert;
        this.controller = controller;
        this.popover = popover;
        this.buttons = [];
        this.filters = [];
    }
    back() {
        if (this.properties.dismiss === 'CONFIRMATION')
            this.alert.present({
                buttons: [{ click: () => this.dismiss(), color: 'danger', text: 'Descartar' }],
                message: 'Los cambios realizados se perderán'
            });
        else
            this.dismiss();
    }
    clear(type) {
        this.filters.find(predicate => predicate.type === type).value = null;
        if (!this.filters.find(predicate => predicate.type !== src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterType.SEARCH && predicate.value))
            this.buttons.find(predicate => predicate.icon === HeaderComponent_1.ICON_FILTER).selected = false;
        this.properties.toFilter(this.filters);
    }
    isSearch(type) { return type === src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterType.SEARCH; }
    search() {
        this.buttons.find(predicate => predicate.icon === HeaderComponent_1.ICON_SEARCH).selected = this.searchFilter.length > 0;
        this.filters.find(predicate => predicate.type === src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterType.SEARCH).value = this.searchFilter.length > 0 ? this.searchFilter.trim() : null;
        this.properties.toFilter(this.filters);
    }
    toFilter(event, type) {
        let options = [];
        let value = this.filters.find(predicate => predicate.type === type).value;
        if (type === src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterType.INITIAL)
            src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterTool.getOptions(src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterValues.INITIAL, value).forEach(callbackfn => options.push(callbackfn));
        else if (type === src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterType.BIBLE)
            src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterTool.getOptions(src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterValues.BIBLE, value).forEach(callbackfn => options.push(callbackfn));
        else if (type === src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterType.CHRISTENING)
            src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterTool.getOptions(src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterValues.CHRISTENING, value).forEach(callbackfn => options.push(callbackfn));
        else if (type === src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterType.OBSERVATION)
            for (let t in src_app_tool_data__WEBPACK_IMPORTED_MODULE_2__.ObservationType)
                options.push({ checked: value === src_app_tool_data__WEBPACK_IMPORTED_MODULE_2__.ObservationType[t], value: src_app_tool_data__WEBPACK_IMPORTED_MODULE_2__.ObservationType[t] });
        else if (type === src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterType.RELATIONSHIP)
            src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterTool.getOptions(src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterValues.RELATIONSHIP, value).forEach(callbackfn => options.push(callbackfn));
        else if (type === src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterType.ROLE)
            for (let r in src_app_tool_data__WEBPACK_IMPORTED_MODULE_2__.Role)
                options.push({ checked: value === src_app_tool_data__WEBPACK_IMPORTED_MODULE_2__.Role[r], value: src_app_tool_data__WEBPACK_IMPORTED_MODULE_2__.Role[r] });
        else if (type === src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterType.GENDER)
            for (let g in src_app_tool_data__WEBPACK_IMPORTED_MODULE_2__.Gender)
                options.push({ checked: value === src_app_tool_data__WEBPACK_IMPORTED_MODULE_2__.Gender[g], value: src_app_tool_data__WEBPACK_IMPORTED_MODULE_2__.Gender[g] });
        this.popover.present(detail => {
            this.buttons.find(predicate => predicate.icon === HeaderComponent_1.ICON_FILTER).selected = true;
            this.filters.find(predicate => predicate.type === type).value = detail;
            this.properties.toFilter(this.filters);
        }, event, options);
    }
    dismiss(entity) {
        this.controller.dismiss();
        this.properties.onDismiss(entity);
    }
    ngOnInit() {
        src_app_tool_static__WEBPACK_IMPORTED_MODULE_4__.Parameter.getWait().subscribe(observer => this.wait = observer);
        if (this.properties.filters) {
            if (this.properties.filters.includes(src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterType.SEARCH))
                this.buttons.push({ click: () => this.toolbar = this.toolbar !== 'SEARCH' ? 'SEARCH' : null, icon: HeaderComponent_1.ICON_SEARCH });
            if (this.properties.filters.find(predicate => predicate !== src_app_tool_filter__WEBPACK_IMPORTED_MODULE_3__.FilterType.SEARCH))
                this.buttons.push({ click: () => this.toolbar = this.toolbar !== 'FILTER' ? 'FILTER' : null, icon: HeaderComponent_1.ICON_FILTER });
            this.properties.filters.forEach(callbackfn => this.filters.push({ type: callbackfn }));
        }
    }
    restartFilter() {
        this.filters.forEach(callbackfn => callbackfn.value = null);
        this.buttons.forEach(callbackfn => callbackfn.selected = false);
        this.properties.toFilter(this.filters);
        this.searchFilter = null;
        this.toolbar = null;
    }
};
HeaderComponent.ICON_FILTER = 'filter';
HeaderComponent.ICON_SEARCH = 'search';
HeaderComponent.ctorParameters = () => [
    { type: src_app_tool_alert__WEBPACK_IMPORTED_MODULE_1__.Alert },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_tool_popover__WEBPACK_IMPORTED_MODULE_5__.Popover }
];
HeaderComponent.propDecorators = {
    properties: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
HeaderComponent = HeaderComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({ selector: 'app-header-component', template: _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"] })
], HeaderComponent);



/***/ }),

/***/ 9738:
/*!*************************************************!*\
  !*** ./src/app/component/page/header/header.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderModal": () => (/* binding */ HeaderModal)
/* harmony export */ });
/* harmony import */ var src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/tool/filter */ 6709);

class HeaderModal {
    static header(title, properties) {
        return {
            buttons: properties.hideAddButton ? [] : [{
                    click: () => properties.detail(),
                    color: 'success',
                    icon: 'add-outline'
                }],
            dismiss: properties.menu ? null : 'DIRECT',
            onDismiss: () => properties.getComponent().refresh(),
            title: title,
            toFilter: (filters) => properties.getComponent().filter(filters)
        };
    }
    static assistanceEvent(properties) {
        let header = this.header('Asistencias', properties);
        header.filters = [src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.ROLE, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.SEARCH];
        return header;
    }
    static assistancePerson(properties) {
        let header = this.header('Asistentes', properties);
        header.filters = [src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.BIBLE, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.CHRISTENING, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.GENDER, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.INITIAL, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.ROLE, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.SEARCH];
        return header;
    }
    static contact(properties) {
        let header = this.header('Contactos', properties);
        header.filters = [];
        return header;
    }
    static event(properties) {
        let header = this.header('Eventos', properties);
        header.filters = [src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.SEARCH];
        return header;
    }
    static observation(properties) {
        let header = this.header('Observaciones', properties);
        header.filters = [src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.OBSERVATION, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.SEARCH];
        return header;
    }
    static particularObservation(properties) {
        let header = this.header('Detalles', properties);
        header.filters = [src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.OBSERVATION, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.SEARCH];
        return header;
    }
    static particularPerson(properties) {
        let header = this.header('Detalles', properties);
        header.filters = [src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.BIBLE, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.CHRISTENING, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.GENDER, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.INITIAL, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.ROLE, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.SEARCH];
        return header;
    }
    static person(properties) {
        let header = this.header('Personas', properties);
        header.buttons = properties.hideAddButton ? [] : [{
                click: () => properties.detail(),
                color: 'success',
                icon: 'person-add-outline'
            }];
        header.filters = [src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.INITIAL, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.BIBLE, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.CHRISTENING, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.GENDER, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.SEARCH];
        return header;
    }
    static relationship(properties) {
        let header = this.header('Relaciones', properties);
        header.filters = [src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.INITIAL, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.BIBLE, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.CHRISTENING, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.GENDER, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.RELATIONSHIP, src_app_tool_filter__WEBPACK_IMPORTED_MODULE_0__.FilterType.SEARCH];
        return header;
    }
}


/***/ }),

/***/ 3954:
/*!*******************************************************!*\
  !*** ./src/app/component/page/list/list.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./list.component.html */ 4200);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1356);
/* harmony import */ var src_app_tool_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tool/alert */ 5772);
/* harmony import */ var src_app_tool_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/tool/avatar */ 5534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/tool/static */ 3922);







let ListComponent = class ListComponent {
    constructor(alert, avatar) {
        this.alert = alert;
        this.avatar = avatar;
        this.allElements = [];
        this.elements = [];
        this.filters = [];
        this.items = [];
        this.selected = 0;
        this.elementsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Parameter.getParam().subscribe(observer => this.param = observer);
        src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Parameter.getWait().subscribe(observer => this.wait = observer);
    }
    detail(item) { if (item.detail)
        item.detail(); }
    getImage(url) { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Tool.personPhoto({ readonly: this.properties.readonly, url: url }, this.param); }
    image(item) { this.avatar.image(p => this.properties.image(item.entity, p), { readonly: this.properties.readonly, url: item.image }); }
    notifications(item) { this.alert.presentNotification(item.notification); }
    fill(elements) {
        this.allElements = elements;
        this.filter(this.filters);
    }
    filter(filters) {
        this.elements = this.properties.filter ? this.properties.filter(this.allElements, filters) : this.allElements;
        this.elementsSubject.next(this.elements);
        this.filters = filters;
        this.items = this.properties.items(this.elements);
        this.selected = null;
    }
    ;
    refresh(event) {
        if (event)
            (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(500).subscribe(() => event.target.complete());
        if (this.properties.initialize)
            this.properties.initialize();
        else
            this.properties.service.read(elements => this.fill(elements));
    }
    activateButtons() { this.properties.activeButtons = true; }
};
ListComponent.ctorParameters = () => [
    { type: src_app_tool_alert__WEBPACK_IMPORTED_MODULE_1__.Alert },
    { type: src_app_tool_avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar }
];
ListComponent.propDecorators = {
    properties: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
ListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({ selector: 'app-list-component', template: _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"] })
], ListComponent);



/***/ }),

/***/ 7980:
/*!***************************************************!*\
  !*** ./src/app/component/page/list/list.modal.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListModal": () => (/* binding */ ListModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _tool_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../tool/data */ 3795);
/* harmony import */ var src_app_tool_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tool/filter */ 6709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_tool_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/tool/modal */ 7269);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_pages_person_component_service_person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/person/component/service/person.service */ 5302);
/* harmony import */ var src_app_pages_relationship_relationship_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/relationship/relationship.service */ 7129);
/* harmony import */ var _tool_static__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../tool/static */ 3922);
/* harmony import */ var src_app_pages_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/contact/service/contact.service */ 1602);
/* harmony import */ var src_app_pages_event_component_service_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/event/component/service/event.service */ 454);
/* harmony import */ var src_app_pages_assistance_assistance_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/assistance/assistance.service */ 5927);
/* harmony import */ var src_app_pages_observation_component_service_observation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pages/observation/component/service/observation.service */ 5135);
/* harmony import */ var src_app_pages_particular_service_particular_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pages/particular/service/particular.service */ 6506);














let ListModal = class ListModal {
    constructor(assistanceService, contactService, eventService, observationService, personService, particularService, relationshipService, controller) {
        this.assistanceService = assistanceService;
        this.contactService = contactService;
        this.eventService = eventService;
        this.observationService = observationService;
        this.personService = personService;
        this.particularService = particularService;
        this.relationshipService = relationshipService;
        this.controller = controller;
    }
    item(entity, properties) {
        return {
            buttons: properties.buttons,
            detail: () => properties.detail(entity),
            entity: entity,
            label: ''
        };
    }
    fill(properties, elements) {
        properties.getComponent().fill(elements);
        if (properties.count)
            properties.count(elements.length);
    }
    assistanceEvent(eventDetailComponent, properties) {
        properties.detail = assistance => this.detailEvent(eventDetailComponent, () => properties.back(), assistance.event);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements, filters) => src_app_tool_filter__WEBPACK_IMPORTED_MODULE_1__.FilterTool.assistance(elements, filters),
            initialize: () => this.assistanceService.readByPerson(properties.getEntity(), elements => this.fill(properties, elements)),
            items: elements => {
                return elements.map(callbackfn => {
                    let future = _tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.isFuture(new Date(callbackfn.event.date));
                    let item = this.item(callbackfn, properties);
                    item.buttons = future ? [(callbackfn.role ? properties.buttons[0] : properties.buttons[1])] : [];
                    item.icon = 'calendar' + (future ? '-outline' : '');
                    item.label = callbackfn.event.name;
                    item.small = _tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.dateLabel(callbackfn.event);
                    item.sub = callbackfn.role ? _tool_data__WEBPACK_IMPORTED_MODULE_0__.Role[callbackfn.role] : 'No ' + (future ? 'asistirá' : 'asistió');
                    item.subcolor = callbackfn.role ? 'success' : 'danger';
                    return item;
                });
            },
            readonly: true,
            service: this.assistanceService
        };
    }
    assistancePerson(personDetailComponent, properties) {
        properties.detail = assistance => this.detailEvent(personDetailComponent, () => properties.back(), assistance.person);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements, filters) => src_app_tool_filter__WEBPACK_IMPORTED_MODULE_1__.FilterTool.assistancePerson(elements, filters),
            initialize: () => this.assistanceService.readByEvent(properties.getEntity(), elements => this.fill(properties, elements)),
            items: elements => {
                return elements.map(callbackfn => {
                    let future = _tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.isFuture(new Date(callbackfn.event.date));
                    let item = this.item(callbackfn, properties);
                    item.buttons = future ? [(callbackfn.role ? properties.buttons[0] : properties.buttons[1])] : [];
                    item.image = callbackfn.person.photo;
                    item.label = _tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.personLabel(callbackfn.person);
                    item.small = callbackfn.person.identification;
                    item.sub = callbackfn.role ? _tool_data__WEBPACK_IMPORTED_MODULE_0__.Role[callbackfn.role] : 'No ' + (future ? 'asistirá' : 'asistió');
                    item.subcolor = callbackfn.role ? 'success' : 'danger';
                    return item;
                });
            },
            readonly: true,
            service: this.assistanceService
        };
    }
    contact(go, properties) {
        properties.detail = contact => go(contact);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements, filters) => elements,
            initialize: () => this.contactService.readByPerson(properties.getEntity(), elements => this.fill(properties, elements)),
            items: elements => elements.map(callbackfn => {
                let item = this.item(callbackfn, properties);
                item.icon = _tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.iconMedia(_tool_data__WEBPACK_IMPORTED_MODULE_0__.Media[callbackfn.media]);
                item.label = callbackfn.value;
                item.sub = _tool_data__WEBPACK_IMPORTED_MODULE_0__.Media[callbackfn.media];
                return item;
            }),
            readonly: properties.readonly,
            service: this.personService
        };
    }
    event(eventDetailComponent, properties) {
        properties.detail = event => this.detailEvent(eventDetailComponent, () => properties.back(), event);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements, filters) => src_app_tool_filter__WEBPACK_IMPORTED_MODULE_1__.FilterTool.event(elements, filters),
            items: elements => elements.map(callbackfn => {
                let item = this.item(callbackfn, properties);
                item.icon = 'calendar' + (_tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.isFuture(new Date(callbackfn.date)) ? '-outline' : '');
                item.label = callbackfn.name;
                item.notification = properties.notification ? _tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.eventNotification(callbackfn.date) : null;
                item.sub = _tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.dateLabel(callbackfn);
                return item;
            }),
            readonly: properties.readonly,
            service: this.eventService
        };
    }
    observation(observationDetailComponent, properties) {
        properties.detail = observation => this.detailEvent(observationDetailComponent, () => properties.back(), observation);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements, filters) => src_app_tool_filter__WEBPACK_IMPORTED_MODULE_1__.FilterTool.observation(elements, filters),
            items: elements => elements.map(callbackfn => {
                let item = this.item(callbackfn, properties);
                item.label = callbackfn.name;
                item.sub = _tool_data__WEBPACK_IMPORTED_MODULE_0__.ObservationType[callbackfn.type];
                item.icon = _tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.iconObservationType(_tool_data__WEBPACK_IMPORTED_MODULE_0__.ObservationType[callbackfn.type]);
                return item;
            }),
            readonly: properties.readonly,
            service: this.observationService
        };
    }
    particularObservation(particularDetailComponent, properties) {
        properties.detail = particular => this.detailParticular(particularDetailComponent, () => properties.back(), 'P', particular);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements, filters) => src_app_tool_filter__WEBPACK_IMPORTED_MODULE_1__.FilterTool.particularObservation(elements, filters),
            initialize: () => this.particularService.readByPerson(properties.getEntity(), elements => this.fill(properties, elements)),
            items: elements => {
                return elements.map(callbackfn => {
                    let item = this.item(callbackfn, properties);
                    item.icon = _tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.iconObservationType(_tool_data__WEBPACK_IMPORTED_MODULE_0__.ObservationType[callbackfn.observation.type]);
                    item.label = callbackfn.observation.name;
                    item.small = callbackfn.date ? _tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.dateLabel({ date: callbackfn.date }) : null;
                    item.sub = callbackfn.detail;
                    return item;
                });
            },
            readonly: true,
            service: this.particularService
        };
    }
    particularPerson(particularDetailComponent, properties) {
        properties.detail = particular => this.detailParticular(particularDetailComponent, () => properties.back(), 'O', particular);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements, filters) => src_app_tool_filter__WEBPACK_IMPORTED_MODULE_1__.FilterTool.particularPerson(elements, filters),
            initialize: () => this.particularService.readByObservation(properties.getEntity(), elements => this.fill(properties, elements)),
            items: elements => {
                return elements.map(callbackfn => {
                    let item = this.item(callbackfn, properties);
                    item.image = callbackfn.person.photo;
                    item.label = _tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.personLabel(callbackfn.person);
                    item.small = callbackfn.date ? _tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.dateLabel({ date: callbackfn.date }) : null;
                    item.sub = callbackfn.detail;
                    return item;
                });
            },
            readonly: true,
            service: this.particularService
        };
    }
    person(personDetailComponent, properties) {
        properties.detail = person => this.detailPerson(personDetailComponent, () => properties.back(), person);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements, filters) => src_app_tool_filter__WEBPACK_IMPORTED_MODULE_1__.FilterTool.person(elements, filters),
            image: (element, image) => {
                element.photo = null;
                element.src = image;
                this.personService.update(element, () => properties.getComponent().refresh());
            },
            items: elements => elements.map(callbackfn => {
                let item = this.item(callbackfn, properties);
                item.image = callbackfn.photo;
                item.label = _tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.personLabel(callbackfn);
                item.notification = properties.notification ? _tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.personNotification(callbackfn) : null;
                item.sub = callbackfn.identification;
                return item;
            }),
            readonly: properties.readonly,
            service: this.personService
        };
    }
    relationship(personDetailComponent, properties) {
        properties.detail = relationship => this.detailPerson(personDetailComponent, () => properties.back(), relationship.dominant.id === properties.getEntity().id ? relationship.recessive : relationship.dominant);
        return {
            activeButtons: properties.activeButtons,
            filter: (elements, filters) => src_app_tool_filter__WEBPACK_IMPORTED_MODULE_1__.FilterTool.relationship(properties.getEntity(), elements, filters),
            initialize: () => this.relationshipService.readByPerson(properties.getEntity(), elements => this.fill(properties, elements)),
            items: elements => {
                return elements.map(callbackfn => {
                    let person;
                    let relationship;
                    if (callbackfn.dominant.id === properties.getEntity().id) {
                        person = callbackfn.recessive;
                        relationship = 'RECESSIVE';
                    }
                    else {
                        person = callbackfn.dominant;
                        relationship = 'DOMINANT';
                    }
                    let item = this.item(callbackfn, properties);
                    item.image = person.photo;
                    item.label = _tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.personLabel(person);
                    item.small = person.identification;
                    item.sub = _tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.relationship(person.gender, relationship, callbackfn.type);
                    return item;
                });
            },
            readonly: true,
            service: this.relationshipService
        };
    }
    detailPerson(personDetailComponent, back, person) {
        src_app_tool_modal__WEBPACK_IMPORTED_MODULE_2__.Modal.modalDetail(personDetailComponent, this.controller, {
            entity: person,
            onDismiss: per => back(per)
        });
    }
    detailEvent(eventDetailComponent, back, event) {
        src_app_tool_modal__WEBPACK_IMPORTED_MODULE_2__.Modal.modalDetail(eventDetailComponent, this.controller, {
            entity: event,
            onDismiss: () => back()
        });
    }
    detailParticular(particularDetailComponent, back, origen, particular) {
        src_app_tool_modal__WEBPACK_IMPORTED_MODULE_2__.Modal.modalDetail(particularDetailComponent, this.controller, {
            origen: origen,
            entity: particular,
            onDismiss: () => back()
        });
    }
    detailObservation(observationDetailComponent, back, observation) {
        src_app_tool_modal__WEBPACK_IMPORTED_MODULE_2__.Modal.modalDetail(observationDetailComponent, this.controller, {
            entity: observation,
            onDismiss: () => back()
        });
    }
};
ListModal.ctorParameters = () => [
    { type: src_app_pages_assistance_assistance_service__WEBPACK_IMPORTED_MODULE_8__.AssistanceService },
    { type: src_app_pages_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_6__.ContactService },
    { type: src_app_pages_event_component_service_event_service__WEBPACK_IMPORTED_MODULE_7__.EventService },
    { type: src_app_pages_observation_component_service_observation_service__WEBPACK_IMPORTED_MODULE_9__.ObservationService },
    { type: src_app_pages_person_component_service_person_service__WEBPACK_IMPORTED_MODULE_3__.PersonService },
    { type: src_app_pages_particular_service_particular_service__WEBPACK_IMPORTED_MODULE_10__.ParticularService },
    { type: src_app_pages_relationship_relationship_service__WEBPACK_IMPORTED_MODULE_4__.RelationshipService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController }
];
ListModal = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injectable)({ providedIn: 'root' })
], ListModal);



/***/ }),

/***/ 3790:
/*!*****************************************************!*\
  !*** ./src/app/component/page/service.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceComponent": () => (/* binding */ ServiceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var src_app_tool_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/tool/alert */ 5772);
/* harmony import */ var src_app_tool_asynchronous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tool/asynchronous */ 9224);
/* harmony import */ var src_app_tool_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/tool/http */ 6696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_tool_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/tool/toast */ 8548);






let ServiceComponent = class ServiceComponent {
    constructor(alert, async, http, toast) {
        this.alert = alert;
        this.async = async;
        this.http = http;
        this.toast = toast;
    }
    execute(request, next) {
        this.async.wait(request, { next: n => next(n) });
    }
    create(element, next) {
        this.execute(this.http.post({ data: element, url: this.url }), n => {
            this.toast.present(this.toastCreate(n));
            next(n);
        });
    }
    delete(element, next) {
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
        });
    }
    update(element, next) {
        this.execute(this.http.put({ data: element, url: this.url + element.id }), n => {
            this.toast.present(this.toastUpdate(n));
            next(n);
        });
    }
    read(next, extra = '') {
        this.async.wait(this.http.get(this.url + extra), { next: elements => next(elements || []) });
    }
};
ServiceComponent.ctorParameters = () => [
    { type: src_app_tool_alert__WEBPACK_IMPORTED_MODULE_0__.Alert },
    { type: src_app_tool_asynchronous__WEBPACK_IMPORTED_MODULE_1__.Asynchronous },
    { type: src_app_tool_http__WEBPACK_IMPORTED_MODULE_2__.Http },
    { type: src_app_tool_toast__WEBPACK_IMPORTED_MODULE_3__.Toast }
];
ServiceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({ providedIn: 'root' })
], ServiceComponent);



/***/ }),

/***/ 9870:
/*!**************************************************************!*\
  !*** ./src/app/component/select/select.popover.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectPopoverComponent": () => (/* binding */ SelectPopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_popover_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./select.popover.component.html */ 3866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);



let SelectPopoverComponent = class SelectPopoverComponent {
    selectInternal(option) { this.select(option); }
};
SelectPopoverComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
SelectPopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({ selector: 'app-popover-select', template: _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_popover_component_html__WEBPACK_IMPORTED_MODULE_0__["default"] })
], SelectPopoverComponent);



/***/ }),

/***/ 5927:
/*!********************************************************!*\
  !*** ./src/app/pages/assistance/assistance.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssistanceService": () => (/* binding */ AssistanceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var src_app_tool_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/tool/http */ 6696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_component_page_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/page/service.component */ 3790);
/* harmony import */ var src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/tool/static */ 3922);





let AssistanceService = class AssistanceService extends src_app_component_page_service_component__WEBPACK_IMPORTED_MODULE_1__.ServiceComponent {
    constructor() {
        super(...arguments);
        this.url = src_app_tool_http__WEBPACK_IMPORTED_MODULE_0__.Http.ENDPOINT_ASSISTANCE;
    }
    toastCreate(element) { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personLabel(element.person) + ' asistirá a ' + element.event.name; }
    toastUpdate(element) { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personLabel(element.person) + ' actualizado para ' + element.event.name; }
    toastPostDelete(element) { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personLabel(element.person) + ' ya no asistirá a ' + element.event.name; }
    toastPreDelete(element) { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personLabel(element.person) + ' ya no asistirá a ' + element.event.name; }
    readByEvent(event, next) {
        this.read(elements => {
            elements.forEach(callbackfn => callbackfn.event = event);
            next(src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.assistanceSort(elements));
        }, 'event/' + event.id);
    }
    readByPerson(person, next) {
        this.read(elements => {
            elements.forEach(callbackfn => callbackfn.person = person);
            next(elements);
        }, 'person/' + person.id);
    }
};
AssistanceService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: 'root' })
], AssistanceService);



/***/ }),

/***/ 8446:
/*!********************************************************!*\
  !*** ./src/app/pages/contact/detail/contact.detail.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactDetailComponent": () => (/* binding */ ContactDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_detail_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./contact.detail.html */ 5314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1356);
/* harmony import */ var src_app_component_page_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/page/detail.component */ 4473);
/* harmony import */ var src_app_tool_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/tool/alert */ 5772);
/* harmony import */ var src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/tool/data */ 3795);
/* harmony import */ var src_app_tool_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/tool/sheet */ 9506);
/* harmony import */ var src_app_tool_static__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/tool/static */ 3922);
/* harmony import */ var src_app_tool_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/tool/toast */ 8548);
/* harmony import */ var _service_contact_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/contact.service */ 1602);












let ContactDetailComponent = class ContactDetailComponent extends src_app_component_page_detail_component__WEBPACK_IMPORTED_MODULE_1__.DetailComponent {
    constructor(alert, builder, service, sheet, toast) {
        super(alert, service, toast);
        this.builder = builder;
        this.sheet = sheet;
        this.contacts = [];
    }
    updateTempContact(contact, id) {
        let e = this.contacts.find(predicate => predicate.id === id);
        e.contact = contact;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.timer)(5).subscribe(() => {
            e.edited = false;
            this.headerProperties.dismiss = this.contacts.find(predicate => predicate.edited) ? 'CONFIRMATION' : 'DIRECT';
        });
    }
    deleteTempContact(id) {
        this.contacts = this.contacts.filter(predicate => predicate.id !== id);
        let i = 0;
        this.contacts.forEach(callbackfn => callbackfn.id = i++);
    }
    form(entity = {}) {
        return this.builder.group({});
    }
    fieldErrors(controls) { return []; }
    title(entity) { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.personLabel(entity); }
    deleteContact(element) {
        if (element.contact.id)
            this.service.delete(element.contact, () => this.deleteTempContact(element.id));
        else
            this.deleteTempContact(element.id);
    }
    go(element) { this.service.go(element.contact); }
    iconMedia(element) { return element.media ? src_app_tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.iconMedia(element.media) : 'trail-sign-outline'; }
    labelMedia(element) { return element.media || 'Medio'; }
    editMedia(element) {
        if (!this.getReadonly()) {
            let buttons = [];
            for (let m in src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media)
                if (!this.contacts.find(predicate => predicate.media === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[m]))
                    buttons.push({
                        click: () => {
                            this.headerProperties.dismiss = 'CONFIRMATION';
                            let e = this.contacts.find(predicate => predicate.id === element.id);
                            e.contact.media = src_app_tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.enumName(m);
                            e.edited = true;
                            e.media = src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[m];
                        },
                        icon: src_app_tool_static__WEBPACK_IMPORTED_MODULE_5__.Tool.iconMedia(src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[m]),
                        text: src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[m]
                    });
            this.sheet.present(buttons, 'Medio');
        }
    }
    editValue(event, element) {
        this.headerProperties.dismiss = 'CONFIRMATION';
        let e = this.contacts.find(predicate => predicate.id === element.id);
        e.contact.value = event.detail.value;
        e.edited = true;
    }
    edit() {
        this.headerProperties.buttons = [];
        this.setRemoveReadonly();
    }
    newContact() {
        this.contacts.push({ contact: { person: this.properties.entity }, edited: true, id: this.contacts.length });
    }
    limitMedia() { return Object.keys(src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media).length; }
    saveContact(element) {
        if (!element.contact.value || !element.contact.media) {
            let errors = [];
            if (!element.contact.media)
                errors.push('Medio');
            if (!element.contact.value)
                errors.push('Valor');
            this.toast.present('Campos incorrectos: (' + errors.reduce((p, c) => p + ', ' + c) + ')');
            return;
        }
        element.contact.value = element.contact.value.replace(new RegExp('[.]it[/]', 'g'), '.com/');
        if (element.media !== src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.ADDRESS)
            element.contact.value = element.contact.value.replace(new RegExp('[ ]', 'g'), '');
        if (element.media === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.FACEBOOK && !(new RegExp('^https:[/][/]([a-zA-Z-]+[.])?facebook[.]com[/][\\w/\\?@=.-]+$').test(element.contact.value)))
            this.alert.present({ message: 'Este link no parece ser de Facebook, asegurate de copiarlo bien' });
        else if (element.media === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.INSTAGRAM && !(new RegExp('^https:[/][/]([a-zA-Z-]+[.])?instagram[.]com[/][\\w/\\?@=.-]+$').test(element.contact.value)))
            this.alert.present({ message: 'Este link no parece ser de Instagram, asegurate de copiarlo bien' });
        else if (element.media === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.MAIL && !(new RegExp('[\\w/\\.-]+[@]\\w+[.]\\w+$').test(element.contact.value)))
            this.alert.present({ message: 'No parece ser un correo electronico valido' });
        else if (element.media === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.PHONE && !(new RegExp('^[+]?\\d+$').test(element.contact.value)))
            this.alert.present({ message: 'No parece ser un numero Telefonico, además de un \'+\' para el indicativo de país solo se aceptan números' });
        else if (element.media === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.PINTEREST && !(new RegExp('^https:[/][/]([a-zA-Z-]+[.])?pin(terest)?[.]com[/][\\w/\\?@=.-]+$').test(element.contact.value)))
            this.alert.present({ message: 'Este link no parece ser de Pinterest, asegurate de copiarlo bien' });
        else if (element.media === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.TIKTOK && !(new RegExp('^https:[/][/]([a-zA-Z-]+[.])?tiktok[.]com[/][\\w/\\?@=.-]+$').test(element.contact.value)))
            this.alert.present({ message: 'Este link no parece ser de TikTok, asegurate de copiarlo bien' });
        else if (element.media === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.WHATSAPP && !(new RegExp('^[+]\\d+$').test(element.contact.value)))
            this.alert.present({ message: 'No parece ser un numero de Whatsapp, asegurate de copiarlo con el indicativo de pais' });
        else if (element.media === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.YOUTUBE && !(new RegExp('^https:[/][/]([a-zA-Z-]+[.])?youtube[.]com[/][\\w/\\?@=-]+[\\w/\\?@=.-]+$').test(element.contact.value)))
            this.alert.present({ message: 'Este link no parece ser de YouTube, asegurate de copiarlo bien' });
        else {
            let contact = { id: element.contact.id, media: element.contact.media, person: element.contact.person, value: element.contact.value };
            if (element.media === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.WHATSAPP)
                contact.value = 'https://wa.me/' + contact.value;
            if (element.contact.id)
                this.service.update(contact, c => this.updateTempContact(c, element.id));
            else
                this.service.create(contact, c => this.updateTempContact(c, element.id));
        }
    }
    ngOnInit() {
        this.headerProperties.buttons = [{ click: () => this.edit(), icon: 'pencil-outline' }];
        this.headerProperties.onDismiss = entity => this.properties.onDismiss(entity);
        this.headerProperties.title = this.title(this.properties.entity);
        src_app_tool_static__WEBPACK_IMPORTED_MODULE_5__.Parameter.getParam().subscribe(observer => this.param = observer);
        src_app_tool_static__WEBPACK_IMPORTED_MODULE_5__.Parameter.getWait().subscribe(observer => this.wait = observer);
        this.service.readByPerson(this.properties.entity, contacts => contacts.forEach(callbackfn => this.contacts.push({ contact: callbackfn, edited: false, id: this.contacts.length, media: src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[callbackfn.media] })));
    }
};
ContactDetailComponent.ctorParameters = () => [
    { type: src_app_tool_alert__WEBPACK_IMPORTED_MODULE_2__.Alert },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _service_contact_service__WEBPACK_IMPORTED_MODULE_7__.ContactService },
    { type: src_app_tool_sheet__WEBPACK_IMPORTED_MODULE_4__.Sheet },
    { type: src_app_tool_toast__WEBPACK_IMPORTED_MODULE_6__.Toast }
];
ContactDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({ selector: 'app-contact-detail-component', template: _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_detail_html__WEBPACK_IMPORTED_MODULE_0__["default"] })
], ContactDetailComponent);



/***/ }),

/***/ 1602:
/*!**********************************************************!*\
  !*** ./src/app/pages/contact/service/contact.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactService": () => (/* binding */ ContactService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_component_page_service_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/page/service.component */ 3790);
/* harmony import */ var src_app_tool_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tool/alert */ 5772);
/* harmony import */ var src_app_tool_asynchronous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/tool/asynchronous */ 9224);
/* harmony import */ var src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/tool/data */ 3795);
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ 4047);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 7364);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 3242);
/* harmony import */ var src_app_tool_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/tool/http */ 6696);
/* harmony import */ var src_app_tool_static__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/tool/static */ 3922);
/* harmony import */ var src_app_tool_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/tool/toast */ 8548);












let ContactService = class ContactService extends src_app_component_page_service_component__WEBPACK_IMPORTED_MODULE_0__.ServiceComponent {
    constructor(alert, async, browser, cNumber, composer, http, toast) {
        super(alert, async, http, toast);
        this.browser = browser;
        this.cNumber = cNumber;
        this.composer = composer;
        this.url = src_app_tool_http__WEBPACK_IMPORTED_MODULE_7__.Http.ENDPOINT_CONTACT;
    }
    toastCreate(element) { return src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[element.media] + ' creado para ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_8__.Tool.personLabel(element.person); }
    toastUpdate(element) { return src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[element.media] + ' de ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_8__.Tool.personLabel(element.person) + ' actualizado'; }
    toastPostDelete(element) { return src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[element.media] + ' de ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_8__.Tool.personLabel(element.person) + ' eliminado'; }
    toastPreDelete(element) { return '¿Eliminar el contacto de ' + src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[element.media] + ' de ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_8__.Tool.personLabel(element.person) + '?'; }
    readByPerson(person, next) {
        this.read(elements => {
            elements.forEach(callbackfn => callbackfn.person = person);
            next(elements);
        }, 'person/' + person.id);
    }
    go(contact) {
        if (src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[contact.media] === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.MAIL)
            this.composer.open({ to: contact.value });
        else if (src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[contact.media] === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.PHONE)
            this.cNumber.callNumber(contact.value, true).finally(() => { });
        else if (src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[contact.media] !== src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.ADDRESS) {
            let url = 'https://';
            if (src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[contact.media] === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.FACEBOOK)
                url += 'www.facebook.com/';
            else if (src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[contact.media] === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.INSTAGRAM)
                url += 'www.instagram.com/';
            else if (src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[contact.media] === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.PINTEREST)
                url += 'www.pinterest.com/';
            else if (src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[contact.media] === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.TIKTOK)
                url += 'www.tiktok.com/';
            else if (src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[contact.media] === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.WHATSAPP)
                url += 'wa.me/';
            else if (src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media[contact.media] === src_app_tool_data__WEBPACK_IMPORTED_MODULE_3__.Media.YOUTUBE)
                url += 'www.youtube.com/';
            this.browser.create(url + contact.value, '_system');
        }
    }
};
ContactService.ctorParameters = () => [
    { type: src_app_tool_alert__WEBPACK_IMPORTED_MODULE_1__.Alert },
    { type: src_app_tool_asynchronous__WEBPACK_IMPORTED_MODULE_2__.Asynchronous },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__.CallNumber },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__.EmailComposer },
    { type: src_app_tool_http__WEBPACK_IMPORTED_MODULE_7__.Http },
    { type: src_app_tool_toast__WEBPACK_IMPORTED_MODULE_9__.Toast }
];
ContactService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({ providedIn: 'root' })
], ContactService);



/***/ }),

/***/ 7099:
/*!**************************************************************!*\
  !*** ./src/app/pages/event/component/detail/event.detail.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDetailComponent": () => (/* binding */ EventDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_detail_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./event.detail.html */ 7947);
/* harmony import */ var src_app_tool_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tool/alert */ 5772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/tool/static */ 3922);
/* harmony import */ var src_app_component_page_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/page/detail.component */ 4473);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _service_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/event.service */ 454);
/* harmony import */ var src_app_tool_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/tool/toast */ 8548);
/* harmony import */ var src_app_component_page_list_list_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/component/page/list/list.modal */ 7980);
/* harmony import */ var src_app_pages_assistance_assistance_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/assistance/assistance.service */ 5927);
/* harmony import */ var src_app_component_page_choose_choose_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/component/page/choose/choose.modal */ 8597);
/* harmony import */ var src_app_pages_person_component_detail_person_detail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pages/person/component/detail/person.detail */ 8993);













let EventDetailComponent = class EventDetailComponent extends src_app_component_page_detail_component__WEBPACK_IMPORTED_MODULE_3__.DetailComponent {
    constructor(alert, assistanceService, builder, chooseModal, listModal, service, toast) {
        super(alert, service, toast);
        this.assistanceService = assistanceService;
        this.builder = builder;
        this.chooseModal = chooseModal;
        this.listModal = listModal;
        this.assistanceCount = 0;
        this.assistanceListProperties = this.listModal.assistancePerson(src_app_pages_person_component_detail_person_detail__WEBPACK_IMPORTED_MODULE_9__.PersonDetailComponent, {
            back: () => this.assistanceListComponent.refresh(),
            buttons: [{
                    click: assistance => this.assistanceService.delete(assistance, () => this.assistanceListComponent.refresh()),
                    color: 'danger',
                    icon: 'remove-outline'
                }, {
                    click: assistance => this.chooseModal.newAssistance(assistance.event, assistance.person, () => this.assistanceListComponent.refresh()),
                    color: 'success',
                    icon: 'add-outline'
                }],
            count: count => this.assistanceCount = count,
            getComponent: () => this.assistanceListComponent,
            getEntity: () => this.properties.entity
        });
    }
    form(entity = {}) {
        return this.builder.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(entity.id),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(entity.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Control.whitespace]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(entity.date ? entity.date.toLocaleString() : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(entity.time ? entity.time.toLocaleString() : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required])
        });
    }
    fixGroup(entity) {
        entity.date = entity.date.substr(0, 10);
        entity.time = entity.time.length > 10 ? entity.time.substr(11, 6) + '00' : entity.time;
        return entity;
    }
    fieldErrors(controls) {
        let fields = [];
        if (controls['name'].invalid)
            fields.push('Nombre');
        if (controls['date'].invalid)
            fields.push('Fecha');
        return fields;
    }
    setRemoveReadonly() {
        super.setRemoveReadonly();
        if (this.assistanceListComponent)
            this.assistanceListComponent.activateButtons();
    }
    title(entity) { return entity && entity.id ? entity.name : 'Nuevo evento'; }
    getNotification() { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.eventNotification(this.properties.entity.date); }
    changePage(event) {
        if (event.detail.changed && this.properties.entity.id) {
            if (event.detail.index === 1)
                this.assistanceListComponent.refresh();
        }
    }
    minDate() { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.formatDate(new Date()); }
    minuteValues() { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.minutes(5); }
    maxDate() { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.formatDate(src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.futureYears(5)); }
    newAssistance() {
        if (this.properties.entity.id && !this.isChanged())
            this.chooseModal.eventAddAssistance({
                back: () => this.assistanceListComponent.refresh(),
                getComponent: () => this.assistanceListComponent,
                getEntity: () => this.properties.entity
            }, src_app_pages_person_component_detail_person_detail__WEBPACK_IMPORTED_MODULE_9__.PersonDetailComponent);
        else
            this.alert.present({
                buttons: [{
                        click: () => this.save(event => {
                            this.headerProperties.title = event.name;
                            this.edit();
                            this.newAssistance();
                        }),
                        color: 'success',
                        text: 'Guardar'
                    }],
                message: 'Antes de asignar la asistencia a un evento debes guardar los cambios'
            });
    }
    ngOnInit() {
        super.ngOnInit();
        this.properties.entity = this.properties.entity || {};
        if (this.properties.entity && this.properties.entity.id && !src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.isFuture(new Date(this.properties.entity.date)))
            this.headerProperties.buttons = [];
    }
};
EventDetailComponent.ctorParameters = () => [
    { type: src_app_tool_alert__WEBPACK_IMPORTED_MODULE_1__.Alert },
    { type: src_app_pages_assistance_assistance_service__WEBPACK_IMPORTED_MODULE_7__.AssistanceService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: src_app_component_page_choose_choose_modal__WEBPACK_IMPORTED_MODULE_8__.ChooseModal },
    { type: src_app_component_page_list_list_modal__WEBPACK_IMPORTED_MODULE_6__.ListModal },
    { type: _service_event_service__WEBPACK_IMPORTED_MODULE_4__.EventService },
    { type: src_app_tool_toast__WEBPACK_IMPORTED_MODULE_5__.Toast }
];
EventDetailComponent.propDecorators = {
    assistanceListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['ALP',] }]
};
EventDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({ selector: 'app-event-detail-component', template: _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_detail_html__WEBPACK_IMPORTED_MODULE_0__["default"] })
], EventDetailComponent);



/***/ }),

/***/ 454:
/*!****************************************************************!*\
  !*** ./src/app/pages/event/component/service/event.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventService": () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var src_app_tool_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/tool/http */ 6696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_component_page_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/page/service.component */ 3790);




let EventService = class EventService extends src_app_component_page_service_component__WEBPACK_IMPORTED_MODULE_1__.ServiceComponent {
    constructor() {
        super(...arguments);
        this.url = src_app_tool_http__WEBPACK_IMPORTED_MODULE_0__.Http.ENDPOINT_EVENT;
    }
    toastCreate(element) { return 'Se creó el evento ' + element.name; }
    toastUpdate(element) { return 'Se actualizó el evento ' + element.name; }
    toastPostDelete(element) { return 'Se eliminó el evento ' + element.name; }
    toastPreDelete(element) { return '¿Eliminar el evento ' + element.name + ' definitivamente?'; }
    readCandidateAssistance(person, next) { this.read(events => next(events), 'candidate/assistance/' + person.id); }
};
EventService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], EventService);



/***/ }),

/***/ 2513:
/*!**************************************************************************!*\
  !*** ./src/app/pages/observation/component/detail/observation.detail.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationDetailComponent": () => (/* binding */ ObservationDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_observation_detail_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./observation.detail.html */ 5246);
/* harmony import */ var src_app_tool_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tool/alert */ 5772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/tool/static */ 3922);
/* harmony import */ var src_app_component_page_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/page/detail.component */ 4473);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var src_app_tool_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/tool/data */ 3795);
/* harmony import */ var _service_observation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/observation.service */ 5135);
/* harmony import */ var src_app_tool_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/tool/toast */ 8548);
/* harmony import */ var src_app_component_page_list_list_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/component/page/list/list.modal */ 7980);
/* harmony import */ var src_app_tool_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/tool/sheet */ 9506);
/* harmony import */ var src_app_pages_particular_detail_particular_detail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pages/particular/detail/particular.detail */ 9103);
/* harmony import */ var src_app_tool_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/tool/modal */ 7269);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_pages_particular_service_particular_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pages/particular/service/particular.service */ 6506);
















let ObservationDetailComponent = class ObservationDetailComponent extends src_app_component_page_detail_component__WEBPACK_IMPORTED_MODULE_3__.DetailComponent {
    constructor(particularService, listModal, controller, alert, builder, service, sheet, toast) {
        super(alert, service, toast);
        this.particularService = particularService;
        this.listModal = listModal;
        this.controller = controller;
        this.builder = builder;
        this.sheet = sheet;
        this.particularListProperties = this.listModal.particularPerson(src_app_pages_particular_detail_particular_detail__WEBPACK_IMPORTED_MODULE_9__.ParticularDetailComponent, {
            back: () => this.particularListComponent.refresh(),
            buttons: [{
                    click: p => this.particularService.delete(p, () => this.particularListComponent.refresh()),
                    color: 'danger',
                    icon: 'remove-outline'
                }],
            count: count => this.particularCount = count,
            getComponent: () => this.particularListComponent,
            getEntity: () => this.properties.entity
        });
    }
    changePage(event) {
        if (event.detail.changed && this.properties.entity.id) {
            if (event.detail.index === 1)
                this.particularListComponent.refresh();
        }
    }
    editType() {
        if (!this.getReadonly()) {
            let buttons = [];
            for (let t in src_app_tool_data__WEBPACK_IMPORTED_MODULE_4__.ObservationType)
                buttons.push({
                    click: () => {
                        this.headerProperties.dismiss = 'CONFIRMATION';
                        this.editGroup('type', src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.enumName(t));
                    },
                    icon: src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.iconObservationType(src_app_tool_data__WEBPACK_IMPORTED_MODULE_4__.ObservationType[t]),
                    text: src_app_tool_data__WEBPACK_IMPORTED_MODULE_4__.ObservationType[t]
                });
            this.sheet.present(buttons, 'Tipo de observación');
        }
    }
    form(entity = {}) {
        return this.builder.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(entity.id),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(entity.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Control.whitespace]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(entity.type, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required])
        });
    }
    fieldErrors(controls) {
        let fields = [];
        if (controls['name'].invalid)
            fields.push('Nombre');
        if (controls['type'].invalid)
            fields.push('Tipo');
        return fields;
    }
    iconType() { return this.getGroup().value.type ? src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.iconObservationType(src_app_tool_data__WEBPACK_IMPORTED_MODULE_4__.ObservationType[this.getGroup().value.type]) : 'receipt-outline'; }
    labelType() { return src_app_tool_data__WEBPACK_IMPORTED_MODULE_4__.ObservationType[this.getGroup().value.type] || 'Tipo de observación'; }
    title(entity) { return entity && entity.id ? entity.name : 'Nueva observación'; }
    newParticular() { this.newParticular2(src_app_pages_particular_detail_particular_detail__WEBPACK_IMPORTED_MODULE_9__.ParticularDetailComponent); }
    newParticular2(component) {
        if (this.properties.entity.id && !this.isChanged())
            src_app_tool_modal__WEBPACK_IMPORTED_MODULE_10__.Modal.modalDetail(component, this.controller, {
                origen: 'O',
                entity: { id: null, observation: this.properties.entity },
                onDismiss: () => this.particularListComponent.refresh()
            });
        else
            this.alert.present({
                buttons: [{
                        click: () => this.save(person => {
                            this.headerProperties.title = src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personLabel(person);
                            this.edit();
                            this.newParticular();
                        }),
                        color: 'success',
                        text: 'Guardar'
                    }],
                message: 'Antes de crear un detalle para la observación debes guardar los cambios'
            });
    }
    setRemoveReadonly() {
        super.setRemoveReadonly();
        if (this.particularListComponent)
            this.particularListComponent.activateButtons();
    }
    ngOnInit() {
        super.ngOnInit();
        this.properties.entity = this.properties.entity || {};
    }
};
ObservationDetailComponent.ctorParameters = () => [
    { type: src_app_pages_particular_service_particular_service__WEBPACK_IMPORTED_MODULE_11__.ParticularService },
    { type: src_app_component_page_list_list_modal__WEBPACK_IMPORTED_MODULE_7__.ListModal },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: src_app_tool_alert__WEBPACK_IMPORTED_MODULE_1__.Alert },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder },
    { type: _service_observation_service__WEBPACK_IMPORTED_MODULE_5__.ObservationService },
    { type: src_app_tool_sheet__WEBPACK_IMPORTED_MODULE_8__.Sheet },
    { type: src_app_tool_toast__WEBPACK_IMPORTED_MODULE_6__.Toast }
];
ObservationDetailComponent.propDecorators = {
    particularListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['PLP',] }]
};
ObservationDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({ selector: 'app-observation-detail-component', template: _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_observation_detail_html__WEBPACK_IMPORTED_MODULE_0__["default"] })
], ObservationDetailComponent);



/***/ }),

/***/ 5135:
/*!****************************************************************************!*\
  !*** ./src/app/pages/observation/component/service/observation.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationService": () => (/* binding */ ObservationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var src_app_tool_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/tool/http */ 6696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_component_page_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/page/service.component */ 3790);




let ObservationService = class ObservationService extends src_app_component_page_service_component__WEBPACK_IMPORTED_MODULE_1__.ServiceComponent {
    constructor() {
        super(...arguments);
        this.url = src_app_tool_http__WEBPACK_IMPORTED_MODULE_0__.Http.ENDPOINT_OBSERVATION;
    }
    toastCreate(element) { return 'Se creó la observación ' + element.name; }
    toastUpdate(element) { return 'Se actualizó la observación ' + element.name; }
    toastPostDelete(element) { return 'Se eliminó la observación ' + element.name; }
    toastPreDelete(element) { return '¿Eliminar la observación ' + element.name + ' definitivamente?'; }
};
ObservationService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], ObservationService);



/***/ }),

/***/ 9103:
/*!**************************************************************!*\
  !*** ./src/app/pages/particular/detail/particular.detail.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParticularDetailComponent": () => (/* binding */ ParticularDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_particular_detail_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./particular.detail.html */ 4509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var src_app_component_page_choose_choose_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/page/choose/choose.modal */ 8597);
/* harmony import */ var src_app_component_page_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/page/detail.component */ 4473);
/* harmony import */ var src_app_component_page_list_list_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/page/list/list.modal */ 7980);
/* harmony import */ var src_app_tool_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/tool/alert */ 5772);
/* harmony import */ var src_app_tool_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/tool/data */ 3795);
/* harmony import */ var src_app_tool_static__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/tool/static */ 3922);
/* harmony import */ var src_app_tool_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/tool/toast */ 8548);
/* harmony import */ var _observation_component_detail_observation_detail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../observation/component/detail/observation.detail */ 2513);
/* harmony import */ var _person_component_detail_person_detail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../person/component/detail/person.detail */ 8993);
/* harmony import */ var _service_particular_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/particular.service */ 6506);














let ParticularDetailComponent = class ParticularDetailComponent extends src_app_component_page_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent {
    constructor(alert, builder, chooseModal, listModal, service, toast) {
        super(alert, service, toast);
        this.builder = builder;
        this.chooseModal = chooseModal;
        this.listModal = listModal;
        this.enabledObservation = false;
    }
    fieldErrors(controls) {
        let fields = [];
        if (controls['person'].invalid)
            fields.push('Persona');
        if (controls['observation'].invalid)
            fields.push('Observación');
        if (controls['detail'].invalid)
            fields.push('Detalle');
        return fields;
    }
    form(entity = {}) {
        return this.builder.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(entity.id),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(entity.date ? entity.date.toLocaleString() : ''),
            detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(entity.detail, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, src_app_tool_static__WEBPACK_IMPORTED_MODULE_6__.Control.whitespace]),
            observation: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(entity.observation, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
            person: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(entity.person, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required])
        });
    }
    fixGroup(entity) {
        entity.observation = this.properties.entity.observation;
        entity.person = this.properties.entity.person;
        if (entity.date)
            entity.date = entity.date.substr(0, 10);
        return entity;
    }
    title(entity) { return 'Detalle'; }
    getNotification() { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_6__.Tool.particularNotification(this.properties.entity.date); }
    getImage() { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_6__.Tool.personPhoto({ readonly: this.getReadonly(), url: this.properties.entity.person ? this.properties.entity.person.photo : null }, this.param); }
    getPersonLabel() { return this.properties.entity.person ? src_app_tool_static__WEBPACK_IMPORTED_MODULE_6__.Tool.personLabel(this.properties.entity.person) : '¿Quién?'; }
    editObservation() {
        if (!this.getReadonly() && this.enabledObservation) {
            this.chooseModal.observation(_observation_component_detail_observation_detail__WEBPACK_IMPORTED_MODULE_8__.ObservationDetailComponent, {
                back: observation => {
                    if (observation) {
                        this.editGroup('observation', observation.id.toString());
                        this.headerProperties.dismiss = 'CONFIRMATION';
                        this.properties.entity.observation = observation;
                    }
                },
                getComponent: () => null
            });
        }
    }
    iconObservation() {
        return this.properties.entity.observation ? src_app_tool_static__WEBPACK_IMPORTED_MODULE_6__.Tool.iconObservationType(src_app_tool_data__WEBPACK_IMPORTED_MODULE_5__.ObservationType[this.properties.entity.observation.type]) : 'receipt-outline';
    }
    labelObservation() {
        return this.properties.entity.observation ? this.properties.entity.observation.name : '¿Que observación?';
    }
    detailPerson() {
        if (this.properties.entity.person)
            this.listModal.detailPerson(_person_component_detail_person_detail__WEBPACK_IMPORTED_MODULE_9__.PersonDetailComponent, per => { if (per)
                this.properties.entity.person = per; }, this.properties.entity.person);
        else
            this.changePage();
    }
    changePerson() {
        this.chooseModal.person(_person_component_detail_person_detail__WEBPACK_IMPORTED_MODULE_9__.PersonDetailComponent, {
            back: person => {
                if (person) {
                    this.editGroup('person', person.id.toString());
                    this.headerProperties.dismiss = 'CONFIRMATION';
                    this.properties.entity.person = person;
                }
            },
            getComponent: () => null
        });
    }
    maxDate() { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_6__.Tool.formatDate(src_app_tool_static__WEBPACK_IMPORTED_MODULE_6__.Tool.futureYears(5)); }
    ngOnInit() {
        super.ngOnInit();
        this.properties.entity = this.properties.entity || {};
        this.enabledObservation = this.properties.origen === 'P';
    }
};
ParticularDetailComponent.ctorParameters = () => [
    { type: src_app_tool_alert__WEBPACK_IMPORTED_MODULE_4__.Alert },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: src_app_component_page_choose_choose_modal__WEBPACK_IMPORTED_MODULE_1__.ChooseModal },
    { type: src_app_component_page_list_list_modal__WEBPACK_IMPORTED_MODULE_3__.ListModal },
    { type: _service_particular_service__WEBPACK_IMPORTED_MODULE_10__.ParticularService },
    { type: src_app_tool_toast__WEBPACK_IMPORTED_MODULE_7__.Toast }
];
ParticularDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({ selector: 'app-particular-detail-component', template: _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_particular_detail_html__WEBPACK_IMPORTED_MODULE_0__["default"] })
], ParticularDetailComponent);



/***/ }),

/***/ 6506:
/*!****************************************************************!*\
  !*** ./src/app/pages/particular/service/particular.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParticularService": () => (/* binding */ ParticularService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var src_app_tool_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/tool/http */ 6696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_tool_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tool/data */ 3795);
/* harmony import */ var src_app_component_page_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/page/service.component */ 3790);
/* harmony import */ var src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/tool/static */ 3922);






let ParticularService = class ParticularService extends src_app_component_page_service_component__WEBPACK_IMPORTED_MODULE_2__.ServiceComponent {
    constructor() {
        super(...arguments);
        this.url = src_app_tool_http__WEBPACK_IMPORTED_MODULE_0__.Http.ENDPOINT_PARTICULAR;
    }
    toastCreate(element) { return 'Se creó un caso de ' + src_app_tool_data__WEBPACK_IMPORTED_MODULE_1__.ObservationType[element.observation.type] + ' para ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Tool.personLabel(element.person); }
    toastUpdate(element) { return 'Se actualizó un caso de ' + src_app_tool_data__WEBPACK_IMPORTED_MODULE_1__.ObservationType[element.observation.type] + ' para ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Tool.personLabel(element.person); }
    toastPostDelete(element) { return 'Se eliminó un caso de ' + src_app_tool_data__WEBPACK_IMPORTED_MODULE_1__.ObservationType[element.observation.type] + ' para ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Tool.personLabel(element.person); }
    toastPreDelete(element) { return 'Se eliminará un caso de ' + src_app_tool_data__WEBPACK_IMPORTED_MODULE_1__.ObservationType[element.observation.type] + ' para ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Tool.personLabel(element.person); }
    readByObservation(observation, next) {
        this.read(elements => {
            elements.forEach(callbackfn => callbackfn.observation = observation);
            next(elements);
        }, 'observation/' + observation.id);
    }
    readByPerson(person, next) {
        this.read(elements => {
            elements.forEach(callbackfn => callbackfn.person = person);
            next(elements);
        }, 'person/' + person.id);
    }
};
ParticularService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({ providedIn: 'root' })
], ParticularService);



/***/ }),

/***/ 8993:
/*!****************************************************************!*\
  !*** ./src/app/pages/person/component/detail/person.detail.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonDetailComponent": () => (/* binding */ PersonDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_person_detail_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./person.detail.html */ 8415);
/* harmony import */ var src_app_tool_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tool/alert */ 5772);
/* harmony import */ var src_app_tool_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/tool/avatar */ 5534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/tool/static */ 3922);
/* harmony import */ var src_app_component_page_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/component/page/detail.component */ 4473);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var src_app_component_page_list_list_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/component/page/list/list.modal */ 7980);
/* harmony import */ var _service_person_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/person.service */ 5302);
/* harmony import */ var _relationship_relationship_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../relationship/relationship.service */ 7129);
/* harmony import */ var src_app_tool_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/tool/toast */ 8548);
/* harmony import */ var src_app_component_page_choose_choose_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/component/page/choose/choose.modal */ 8597);
/* harmony import */ var src_app_pages_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pages/contact/service/contact.service */ 1602);
/* harmony import */ var src_app_tool_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/tool/modal */ 7269);
/* harmony import */ var src_app_pages_contact_detail_contact_detail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pages/contact/detail/contact.detail */ 8446);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_pages_event_component_detail_event_detail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pages/event/component/detail/event.detail */ 7099);
/* harmony import */ var src_app_pages_assistance_assistance_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/pages/assistance/assistance.service */ 5927);
/* harmony import */ var src_app_pages_particular_detail_particular_detail__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/pages/particular/detail/particular.detail */ 9103);
/* harmony import */ var src_app_pages_particular_service_particular_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/pages/particular/service/particular.service */ 6506);
var PersonDetailComponent_1;





















let PersonDetailComponent = PersonDetailComponent_1 = class PersonDetailComponent extends src_app_component_page_detail_component__WEBPACK_IMPORTED_MODULE_4__.DetailComponent {
    constructor(alert, assistanceService, particularService, avatar, builder, chooseModal, contactService, listModal, controller, relationshipService, service, toast) {
        super(alert, service, toast);
        this.assistanceService = assistanceService;
        this.particularService = particularService;
        this.avatar = avatar;
        this.builder = builder;
        this.chooseModal = chooseModal;
        this.contactService = contactService;
        this.listModal = listModal;
        this.controller = controller;
        this.relationshipService = relationshipService;
        this.assistanceCount = 0;
        this.particularCount = 0;
        this.contactCount = 0;
        this.relationshipCount = 0;
        this.assistanceListProperties = this.listModal.assistanceEvent(src_app_pages_event_component_detail_event_detail__WEBPACK_IMPORTED_MODULE_13__.EventDetailComponent, {
            back: () => this.assistanceListComponent.refresh(),
            buttons: [{
                    click: assistance => this.assistanceService.delete(assistance, () => this.assistanceListComponent.refresh()),
                    color: 'danger',
                    icon: 'remove-outline'
                }, {
                    click: assistance => this.chooseModal.newAssistance(assistance.event, assistance.person, () => this.assistanceListComponent.refresh()),
                    color: 'success',
                    icon: 'add-outline'
                }],
            count: count => this.assistanceCount = count,
            getComponent: () => this.assistanceListComponent,
            getEntity: () => this.properties.entity
        });
        this.particularListProperties = this.listModal.particularObservation(src_app_pages_particular_detail_particular_detail__WEBPACK_IMPORTED_MODULE_15__.ParticularDetailComponent, {
            back: () => this.particularListComponent.refresh(),
            buttons: [{
                    click: p => this.particularService.delete(p, () => this.particularListComponent.refresh()),
                    color: 'danger',
                    icon: 'remove-outline'
                }],
            count: count => this.particularCount = count,
            getComponent: () => this.particularListComponent,
            getEntity: () => this.properties.entity
        });
        this.contactListProperties = this.listModal.contact(contact => this.contactService.go(contact), {
            back: () => this.contactListComponent.refresh(),
            buttons: [{
                    click: contact => this.contactService.delete(contact, () => this.contactListComponent.refresh()),
                    color: 'danger',
                    icon: 'remove-outline'
                }],
            count: count => this.contactCount = count,
            getComponent: () => this.contactListComponent,
            getEntity: () => this.properties.entity
        });
        this.relationshipListProperties = this.listModal.relationship(PersonDetailComponent_1, {
            back: () => this.relationshipListComponent.refresh(),
            buttons: [{
                    click: relationship => this.relationshipService.delete(relationship, () => this.relationshipListComponent.refresh()),
                    color: 'danger',
                    icon: 'remove-outline'
                }],
            count: count => this.relationshipCount = count,
            getComponent: () => this.relationshipListComponent,
            getEntity: () => this.properties.entity
        });
    }
    changePage(event) {
        if (event.detail.changed && this.properties.entity.id) {
            if (event.detail.index === 1)
                this.relationshipListComponent.refresh();
            if (event.detail.index === 2)
                this.contactListComponent.refresh();
            if (event.detail.index === 3)
                this.assistanceListComponent.refresh();
            if (event.detail.index === 4)
                this.particularListComponent.refresh();
        }
    }
    fixGroup(entity) {
        entity.birth = entity.birth.substr(0, 10);
        return entity;
    }
    form(entity = {}) {
        return this.builder.group({
            identification: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(entity.identification, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Control.whitespace]),
            initial: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(entity.initial || false),
            bible: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(entity.bible || false),
            birth: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(entity.birth ? entity.birth.toLocaleString() : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Control.past]),
            christening: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(entity.christening || false),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(entity.gender, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(entity.id),
            last: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(entity.last, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Control.whitespace]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(entity.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Control.whitespace]),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(entity.photo),
            src: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(entity.src)
        });
    }
    fieldErrors(controls) {
        let fields = [];
        if (controls['name'].invalid)
            fields.push('Nombre');
        if (controls['last'].invalid)
            fields.push('Apellido');
        if (controls['gender'].invalid)
            fields.push('Genero');
        if (controls['birth'].invalid)
            fields.push('Nacimiento');
        return fields;
    }
    getNotification() { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Tool.personNotification(this.properties.entity); }
    title(entity) { return entity && entity.id ? src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Tool.personLabel(entity) : 'Nueva persona'; }
    setRemoveReadonly() {
        super.setRemoveReadonly();
        if (this.relationshipListComponent)
            this.relationshipListComponent.activateButtons();
        if (this.contactListComponent)
            this.contactListComponent.activateButtons();
        if (this.assistanceListComponent)
            this.assistanceListComponent.activateButtons();
        if (this.particularListComponent)
            this.particularListComponent.activateButtons();
    }
    getImage() { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Tool.personPhoto({ readonly: this.getReadonly(), src: this.getGroup().value.src, url: this.getGroup().value.photo }, this.param); }
    minBirth() { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Tool.formatDate(src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Tool.yesterday()); }
    contactDetails() {
        if (this.properties.entity.id && !this.isChanged())
            src_app_tool_modal__WEBPACK_IMPORTED_MODULE_11__.Modal.modalDetail(src_app_pages_contact_detail_contact_detail__WEBPACK_IMPORTED_MODULE_12__.ContactDetailComponent, this.controller, {
                entity: this.properties.entity,
                onDismiss: () => this.contactListComponent.refresh()
            });
        else
            this.alert.present({
                buttons: [{
                        click: () => this.save(person => {
                            this.headerProperties.title = src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Tool.personLabel(person);
                            this.edit();
                            this.contactDetails();
                        }),
                        color: 'success',
                        text: 'Guardar'
                    }],
                message: 'Antes de consultar los medios de contacto debes guardar los cambios'
            });
    }
    newAssistance() {
        if (this.properties.entity.id && !this.isChanged())
            this.chooseModal.personAddAssistance({
                back: () => this.assistanceListComponent.refresh(),
                getComponent: () => this.assistanceListComponent,
                getEntity: () => this.properties.entity
            }, src_app_pages_event_component_detail_event_detail__WEBPACK_IMPORTED_MODULE_13__.EventDetailComponent);
        else
            this.alert.present({
                buttons: [{
                        click: () => this.save(person => {
                            this.headerProperties.title = src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Tool.personLabel(person);
                            this.edit();
                            this.newAssistance();
                        }),
                        color: 'success',
                        text: 'Guardar'
                    }],
                message: 'Antes de asignar la asistencia a un evento debes guardar los cambios'
            });
    }
    newParticular() { this.newParticular2(src_app_pages_particular_detail_particular_detail__WEBPACK_IMPORTED_MODULE_15__.ParticularDetailComponent); }
    newParticular2(component) {
        if (this.properties.entity.id && !this.isChanged())
            src_app_tool_modal__WEBPACK_IMPORTED_MODULE_11__.Modal.modalDetail(component, this.controller, {
                origen: 'P',
                entity: { id: null, person: this.properties.entity },
                onDismiss: () => this.particularListComponent.refresh()
            });
        else
            this.alert.present({
                buttons: [{
                        click: () => this.save(person => {
                            this.headerProperties.title = src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Tool.personLabel(person);
                            this.edit();
                            this.newParticular();
                        }),
                        color: 'success',
                        text: 'Guardar'
                    }],
                message: 'Antes de crear un detalle para la persona debes guardar los cambios'
            });
    }
    newRelationship() {
        if (this.properties.entity.id && !this.isChanged())
            this.chooseModal.personAddRelationship({
                back: () => this.relationshipListComponent.refresh(),
                getComponent: () => this.relationshipListComponent,
                getEntity: () => this.properties.entity
            }, PersonDetailComponent_1);
        else
            this.alert.present({
                buttons: [{
                        click: () => this.save(person => {
                            this.headerProperties.title = src_app_tool_static__WEBPACK_IMPORTED_MODULE_3__.Tool.personLabel(person);
                            this.edit();
                            this.newRelationship();
                        }),
                        color: 'success',
                        text: 'Guardar'
                    }],
                message: 'Antes de asignar una relación debes guardar los cambios'
            });
    }
    setImage() {
        this.avatar.image(p => {
            this.editGroup('photo', null);
            this.editGroup('src', p);
        }, { readonly: this.getReadonly(), src: this.getGroup().value.src, url: this.getGroup().value.photo });
    }
    ngOnInit() {
        super.ngOnInit();
        this.properties.entity = this.properties.entity || {};
    }
};
PersonDetailComponent.ctorParameters = () => [
    { type: src_app_tool_alert__WEBPACK_IMPORTED_MODULE_1__.Alert },
    { type: src_app_pages_assistance_assistance_service__WEBPACK_IMPORTED_MODULE_14__.AssistanceService },
    { type: src_app_pages_particular_service_particular_service__WEBPACK_IMPORTED_MODULE_16__.ParticularService },
    { type: src_app_tool_avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder },
    { type: src_app_component_page_choose_choose_modal__WEBPACK_IMPORTED_MODULE_9__.ChooseModal },
    { type: src_app_pages_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_10__.ContactService },
    { type: src_app_component_page_list_list_modal__WEBPACK_IMPORTED_MODULE_5__.ListModal },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController },
    { type: _relationship_relationship_service__WEBPACK_IMPORTED_MODULE_7__.RelationshipService },
    { type: _service_person_service__WEBPACK_IMPORTED_MODULE_6__.PersonService },
    { type: src_app_tool_toast__WEBPACK_IMPORTED_MODULE_8__.Toast }
];
PersonDetailComponent.propDecorators = {
    assistanceListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['ALP',] }],
    particularListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['PLP',] }],
    contactListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['CLP',] }],
    relationshipListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['RLP',] }]
};
PersonDetailComponent = PersonDetailComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({ selector: 'app-person-detail-component', template: _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_person_detail_html__WEBPACK_IMPORTED_MODULE_0__["default"] })
], PersonDetailComponent);



/***/ }),

/***/ 5302:
/*!******************************************************************!*\
  !*** ./src/app/pages/person/component/service/person.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonService": () => (/* binding */ PersonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var src_app_tool_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/tool/http */ 6696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_component_page_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/page/service.component */ 3790);
/* harmony import */ var src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/tool/static */ 3922);





let PersonService = class PersonService extends src_app_component_page_service_component__WEBPACK_IMPORTED_MODULE_1__.ServiceComponent {
    constructor() {
        super(...arguments);
        this.url = src_app_tool_http__WEBPACK_IMPORTED_MODULE_0__.Http.ENDPOINT_PERSON;
    }
    toastCreate(element) { return 'Se creó a ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personLabel(element); }
    toastUpdate(element) { return 'Se actualizó a ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personLabel(element); }
    toastPostDelete(element) { return 'Se eliminó a ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personLabel(element); }
    toastPreDelete(element) { return '¿Eliminar a ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personLabel(element) + ' definitivamente?'; }
    read(next, extra = '') { super.read(elements => next(src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personSort(elements)), extra); }
    readCandidateAssistance(event, next) { this.read(persons => next(src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personSort(persons)), 'candidate/assistance/' + event.id); }
    readCandidateRelationship(person, next) { this.read(persons => next(src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personSort(persons)), 'candidate/relationship/' + person.id); }
};
PersonService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: 'root' })
], PersonService);



/***/ }),

/***/ 7129:
/*!************************************************************!*\
  !*** ./src/app/pages/relationship/relationship.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelationshipService": () => (/* binding */ RelationshipService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var src_app_tool_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/tool/http */ 6696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_component_page_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/page/service.component */ 3790);
/* harmony import */ var src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/tool/static */ 3922);





let RelationshipService = class RelationshipService extends src_app_component_page_service_component__WEBPACK_IMPORTED_MODULE_1__.ServiceComponent {
    constructor() {
        super(...arguments);
        this.url = src_app_tool_http__WEBPACK_IMPORTED_MODULE_0__.Http.ENDPOINT_RELATIONSHIP;
    }
    toastCreate(element) { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personLabel(element.dominant) + ' ahora es ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.relationship(element.dominant.gender, 'DOMINANT', element.type) + ' de ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personLabel(element.recessive); }
    toastUpdate(element) { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personLabel(element.dominant) + ' ahora es ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.relationship(element.dominant.gender, 'DOMINANT', element.type) + ' de ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personLabel(element.recessive); }
    toastPostDelete(element) { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personLabel(element.dominant) + ' dejó de ser ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.relationship(element.dominant.gender, 'DOMINANT', element.type) + ' de ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personLabel(element.recessive); }
    toastPreDelete(element) { return src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personLabel(element.dominant) + ' dejará de ser ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.relationship(element.dominant.gender, 'DOMINANT', element.type) + ' de ' + src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.personLabel(element.recessive); }
    readByPerson(person, next) { this.read(elements => next(src_app_tool_static__WEBPACK_IMPORTED_MODULE_2__.Tool.relationshipSort(elements, person.id)), 'person/' + person.id); }
};
RelationshipService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: 'root' })
], RelationshipService);



/***/ }),

/***/ 5534:
/*!********************************!*\
  !*** ./src/app/tool/avatar.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Avatar": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera */ 4794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static */ 3922);
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ 6979);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 7091);
/* harmony import */ var _sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sheet */ 9506);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1356);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert */ 5772);









let Avatar = class Avatar {
    constructor(alert, camera, sheet, viewer) {
        this.alert = alert;
        this.camera = camera;
        this.sheet = sheet;
        this.viewer = viewer;
        _static__WEBPACK_IMPORTED_MODULE_1__.Parameter.getParam().subscribe(p => this.param = p);
    }
    photo(type, process) { this.camera.image(type, p => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(1).subscribe(() => process(p))); }
    view(path) { this.viewer.show(this.param.photos + path); }
    image(process, image = {}) {
        if (image.readonly) {
            if (image.url)
                this.view(image.url);
        }
        else {
            let buttons = image.url ? [{ click: () => this.view(image.url), icon: 'image-outline', text: 'Ver foto' }] : [];
            buttons.push({ click: () => this.photo(_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.PictureSourceType.CAMERA, process), icon: 'camera-outline', text: 'Camara' }, { click: () => this.photo(_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.PictureSourceType.PHOTOLIBRARY, process), icon: 'folder-open-outline', text: 'Subir imagen' });
            if (image.url || image.src)
                buttons.push({
                    click: () => this.alert.present({
                        buttons: [{
                                click: () => process(),
                                color: 'danger',
                                text: 'Eliminar'
                            }],
                        message: '¿Eliminar imagen?'
                    }), color: 'danger', icon: 'close-outline', text: 'Eliminar'
                });
            this.sheet.present(buttons, 'Foto de perfil');
        }
    }
};
Avatar.ctorParameters = () => [
    { type: _alert__WEBPACK_IMPORTED_MODULE_5__.Alert },
    { type: _camera__WEBPACK_IMPORTED_MODULE_0__.CameraW },
    { type: _sheet__WEBPACK_IMPORTED_MODULE_4__.Sheet },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__.PhotoViewer }
];
Avatar = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({ providedIn: 'root' })
], Avatar);



/***/ }),

/***/ 4794:
/*!********************************!*\
  !*** ./src/app/tool/camera.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraW": () => (/* binding */ CameraW)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _asynchronous__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asynchronous */ 9224);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 7091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let CameraW = class CameraW {
    constructor(asyn, camera) {
        this.asyn = asyn;
        this.camera = camera;
    }
    image(type, next) {
        this.asyn.then(type === _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__.PictureSourceType.CAMERA ? 'No se pudo usar la cámara' : 'No se pudo obtener la imágen', this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 100,
            saveToPhotoAlbum: true,
            sourceType: type
        }), { next: n => next(n) });
    }
};
CameraW.ctorParameters = () => [
    { type: _asynchronous__WEBPACK_IMPORTED_MODULE_0__.Asynchronous },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__.Camera }
];
CameraW = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], CameraW);



/***/ }),

/***/ 6709:
/*!********************************!*\
  !*** ./src/app/tool/filter.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterTool": () => (/* binding */ FilterTool),
/* harmony export */   "FilterValues": () => (/* binding */ FilterValues),
/* harmony export */   "FilterType": () => (/* binding */ FilterType)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 3795);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static */ 3922);


class FilterTool {
    static labelEvent(event) { return event.name + ' ' + _static__WEBPACK_IMPORTED_MODULE_1__.Tool.dateLabel(event); }
    static labelPerson(person) { return person.name + ' ' + person.last + ' ' + person.identification; }
    static getOptions(options, value) {
        return options.map(callbackfn => {
            return { checked: value === callbackfn, value: callbackfn };
        });
    }
    static event(events, filters) {
        let search = '';
        filters.forEach(callbackfn => { if (callbackfn.value && callbackfn.type === FilterType.SEARCH)
            search = callbackfn.value || ''; });
        return events.filter(predicate => this.labelEvent(predicate).toUpperCase().includes(search.toUpperCase()));
    }
    static observation(observations, filters) {
        let type;
        let search = '';
        filters.forEach(callbackfn => {
            if (callbackfn.type === FilterType.OBSERVATION)
                type = callbackfn.value;
            else if (callbackfn.value && callbackfn.type === FilterType.SEARCH)
                search = callbackfn.value || '';
        });
        return observations.filter(predicate => {
            if (type && _data__WEBPACK_IMPORTED_MODULE_0__.ObservationType[predicate.type] !== type)
                return false;
            return predicate.name.toUpperCase().includes(search.toUpperCase());
        });
    }
    static assistance(assistances, filters) {
        let role;
        let search = '';
        filters.forEach(callbackfn => {
            if (callbackfn.type === FilterType.ROLE)
                role = callbackfn.value;
            else if (callbackfn.value && callbackfn.type === FilterType.SEARCH)
                search = callbackfn.value || '';
        });
        return assistances.filter(predicate => {
            if (role && _data__WEBPACK_IMPORTED_MODULE_0__.Role[predicate.role] !== role)
                return false;
            return this.labelEvent(predicate.event).toUpperCase().includes(search.toUpperCase());
        });
    }
    static particularObservation(particulars, filters) {
        let type;
        let search = '';
        filters.forEach(callbackfn => {
            if (callbackfn.type === FilterType.OBSERVATION)
                type = callbackfn.value;
            else if (callbackfn.value && callbackfn.type === FilterType.SEARCH)
                search = callbackfn.value || '';
        });
        return particulars.filter(predicate => {
            if (type && _data__WEBPACK_IMPORTED_MODULE_0__.ObservationType[predicate.observation.type] !== type)
                return false;
            return (predicate.detail || '').toUpperCase().includes(search.toUpperCase());
        });
    }
    static particularPerson(particulars, filters) {
        let initial = [false];
        let bible = [false];
        let christening = [false];
        let gender;
        let search = '';
        filters.forEach(callbackfn => {
            if (callbackfn.value) {
                if (callbackfn.type === FilterType.INITIAL)
                    initial = [true, callbackfn.value === FilterValues.INITIAL[1]];
                else if (callbackfn.type === FilterType.BIBLE)
                    bible = [true, callbackfn.value === FilterValues.BIBLE[1]];
                else if (callbackfn.type === FilterType.CHRISTENING)
                    christening = [true, callbackfn.value === FilterValues.CHRISTENING[1]];
                else if (callbackfn.type === FilterType.GENDER)
                    gender = callbackfn.value;
                else if (callbackfn.type === FilterType.SEARCH)
                    search = callbackfn.value || '';
            }
        });
        return particulars.filter(predicate => {
            if (initial[0] && initial[1] !== predicate.person.initial)
                return false;
            if (bible[0] && bible[1] !== predicate.person.bible)
                return false;
            if (christening[0] && christening[1] !== predicate.person.christening)
                return false;
            if (gender && _data__WEBPACK_IMPORTED_MODULE_0__.Gender[predicate.person.gender] !== gender)
                return false;
            return predicate.detail.toUpperCase().includes(search.toUpperCase());
        });
    }
    static assistancePerson(assistances, filters) {
        let filtered = [];
        let role;
        filtered = this.person(assistances.map(callbackfn => callbackfn.person), filters).map(callbackfn => assistances.find(predicate => predicate.person.id === callbackfn.id));
        filters.forEach(callbackfn => { if (callbackfn.type === FilterType.ROLE)
            role = callbackfn.value; });
        return filtered.filter(predicate => {
            if (role && _data__WEBPACK_IMPORTED_MODULE_0__.Role[predicate.role] !== role)
                return false;
            else
                return true;
        });
    }
    static person(persons, filters) {
        let initial = [false];
        let bible = [false];
        let christening = [false];
        let gender;
        let search = '';
        filters.forEach(callbackfn => {
            if (callbackfn.value) {
                if (callbackfn.type === FilterType.INITIAL)
                    initial = [true, callbackfn.value === FilterValues.INITIAL[1]];
                else if (callbackfn.type === FilterType.BIBLE)
                    bible = [true, callbackfn.value === FilterValues.BIBLE[1]];
                else if (callbackfn.type === FilterType.CHRISTENING)
                    christening = [true, callbackfn.value === FilterValues.CHRISTENING[1]];
                else if (callbackfn.type === FilterType.GENDER)
                    gender = callbackfn.value;
                else if (callbackfn.type === FilterType.SEARCH)
                    search = callbackfn.value || '';
            }
        });
        return persons.filter(predicate => {
            if (initial[0] && initial[1] !== predicate.initial)
                return false;
            if (bible[0] && bible[1] !== predicate.bible)
                return false;
            if (christening[0] && christening[1] !== predicate.christening)
                return false;
            if (gender && _data__WEBPACK_IMPORTED_MODULE_0__.Gender[predicate.gender] !== gender)
                return false;
            return this.labelPerson(predicate).toUpperCase().includes(search.toUpperCase());
        });
    }
    static relationship(person, relationships, filters) {
        let filtered = [];
        this.person(relationships.map(callbackfn => callbackfn.dominant.id === person.id ? callbackfn.recessive : callbackfn.dominant), filters).forEach(callbackfn => {
            let filter = filters.find(predicate => predicate.value && predicate.type === FilterType.RELATIONSHIP);
            let relationship = relationships.find(predicate => callbackfn.id === predicate.dominant.id || callbackfn.id === predicate.recessive.id);
            if (filter) {
                if (relationship.type === _data__WEBPACK_IMPORTED_MODULE_0__.RelationshipType.COUSINS && filter.value === 'Primo')
                    filtered.push(relationship);
                else if (relationship.type === _data__WEBPACK_IMPORTED_MODULE_0__.RelationshipType.FAMILY && filter.value === 'Familiar')
                    filtered.push(relationship);
                else if (relationship.type === _data__WEBPACK_IMPORTED_MODULE_0__.RelationshipType.FRIENDS && filter.value === 'Amigo')
                    filtered.push(relationship);
                else if (relationship.type === _data__WEBPACK_IMPORTED_MODULE_0__.RelationshipType.SIBLING && filter.value === 'Hermano')
                    filtered.push(relationship);
                else if (relationship.type === _data__WEBPACK_IMPORTED_MODULE_0__.RelationshipType.GRANDPARENTS) {
                    if (filter.value === 'Abuelo' && relationship.recessive.id === person.id)
                        filtered.push(relationship);
                    else if (filter.value === 'Nieto' && relationship.dominant.id === person.id)
                        filtered.push(relationship);
                }
                else if (relationship.type === _data__WEBPACK_IMPORTED_MODULE_0__.RelationshipType.PARENTS) {
                    if (filter.value === 'Padre' && relationship.recessive.id === person.id)
                        filtered.push(relationship);
                    else if (filter.value === 'Hijo' && relationship.dominant.id === person.id)
                        filtered.push(relationship);
                }
                else if (relationship.type === _data__WEBPACK_IMPORTED_MODULE_0__.RelationshipType.UNCLES) {
                    if (filter.value === 'Tio' && relationship.recessive.id === person.id)
                        filtered.push(relationship);
                    else if (filter.value === 'Sobrino' && relationship.dominant.id === person.id)
                        filtered.push(relationship);
                }
            }
            else
                filtered.push(relationship);
        });
        return filtered;
    }
}
class FilterValues {
}
FilterValues.BIBLE = ['Sin biblia', 'Con biblia'];
FilterValues.CHRISTENING = ['Sin bautizar', 'Bautizado'];
FilterValues.INITIAL = ['No realizado', 'Realizado'];
FilterValues.RELATIONSHIP = ['Primo', 'Familiar', 'Amigo', 'Abuelo', 'Nieto', 'Padre', 'Hijo', 'Hermano', 'Tio', 'Sobrino'];
var FilterType;
(function (FilterType) {
    FilterType["BIBLE"] = "Biblia";
    FilterType["CHRISTENING"] = "Bautizo";
    FilterType["GENDER"] = "Genero";
    FilterType["INITIAL"] = "Curso";
    FilterType["OBSERVATION"] = "Observaci\u00F3n";
    FilterType["RELATIONSHIP"] = "Relaci\u00F3n";
    FilterType["ROLE"] = "Rol";
    FilterType["SEARCH"] = "Busqueda";
    FilterType["SEARCH_SECONDARY"] = "Busqueda";
})(FilterType || (FilterType = {}));


/***/ }),

/***/ 7269:
/*!*******************************!*\
  !*** ./src/app/tool/modal.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);

class Modal {
    static modal(component, controller, props) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield (yield controller.create({
                component: component, componentProps: { properties: props }
            })).present();
        });
    }
    static modalDetail(component, controller, properties) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () { this.modal(component, controller, properties); });
    }
}


/***/ }),

/***/ 8856:
/*!*********************************!*\
  !*** ./src/app/tool/popover.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popover": () => (/* binding */ Popover)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _component_select_select_popover_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/select/select.popover.component */ 9870);




let Popover = class Popover {
    constructor(controller) {
        this.controller = controller;
    }
    present(detail, event, options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.controller.create({
                component: _component_select_select_popover_component__WEBPACK_IMPORTED_MODULE_0__.SelectPopoverComponent,
                componentProps: { options: options, select: (option) => this.controller.dismiss(option) },
                event: event,
                mode: 'ios'
            });
            popover.onWillDismiss().then(onfulfilled => { if (onfulfilled.data)
                detail(onfulfilled.data); });
            yield popover.present();
        });
    }
};
Popover.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController }
];
Popover = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], Popover);



/***/ }),

/***/ 9506:
/*!*******************************!*\
  !*** ./src/app/tool/sheet.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sheet": () => (/* binding */ Sheet)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);



let Sheet = class Sheet {
    constructor(controller) {
        this.controller = controller;
    }
    present(buttons = [], header) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield (yield this.controller.create({
                buttons: buttons.map(b => ({
                    cssClass: b.color,
                    handler: b.click,
                    icon: b.icon,
                    text: b.text
                })),
                header: header,
                mode: 'md'
            })).present();
        });
    }
};
Sheet.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ActionSheetController }
];
Sheet = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], Sheet);



/***/ }),

/***/ 8548:
/*!*******************************!*\
  !*** ./src/app/tool/toast.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toast": () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 8099);



let Toast = class Toast {
    constructor(controller) {
        this.controller = controller;
    }
    present(header) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield (yield this.controller.create({
                duration: 3000,
                header: header,
                mode: 'ios'
            })).present();
        });
    }
};
Toast.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
Toast = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], Toast);



/***/ }),

/***/ 8054:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/component/page/choose/choose.component.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" no-border>\r\n    <app-header-component [properties]=\"properties.headerProperties\"></app-header-component>\r\n</ion-header>\r\n<ion-content>\r\n    <app-list-component [properties]=\"properties.listProperties\"></app-list-component>\r\n</ion-content>");

/***/ }),

/***/ 2999:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/component/page/header/header.component.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-progress-bar *ngIf=\"wait\" slot=\"fixed\" type=\"indeterminate\"></ion-progress-bar>\r\n<ion-header class=\"ion-no-border\">\r\n    <ion-toolbar mode=\"ios\" color=\"light\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-button *ngIf=\"properties.dismiss\" (click)=\"back()\" disabled={{wait}}>\r\n                <ion-icon name=\"chevron-back-outline\" color=\"primary\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n            <ion-menu-button *ngIf=\"!properties.dismiss\" color=\"primary\" disabled={{wait}}></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title style=\"padding: 0%;\">\r\n            <ion-text>\r\n                {{properties.title}}\r\n                <small> {{properties.subtitle}} </small>\r\n            </ion-text>\r\n        </ion-title>\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button *ngFor=\"let b of buttons\" (click)=\"b.click()\" color=\"{{b.color}}\" disabled={{wait}}\r\n                style=\"margin: 0px;\">\r\n                <ion-icon color=\"primary\" name=\"{{b.icon + (b.selected?'-circle':'') + '-outline'}}\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button *ngFor=\"let b of properties.buttons\" (click)=\"b.click()\" color=\"{{b.color}}\" disabled={{wait}}>\r\n                <ion-icon name=\"{{b.icon}}\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n    <ion-toolbar *ngIf=\"toolbar === 'SEARCH'\" color=\"light\">\r\n        <ion-searchbar (ionChange)=\"search()\" [(ngModel)]=\"searchFilter\" animated disabled={{wait}} mode=\"ios\">\r\n        </ion-searchbar>\r\n    </ion-toolbar>\r\n    <ion-toolbar *ngIf=\"toolbar === 'FILTER' && !wait\" style=\"text-align: center;\" color=\"light\">\r\n        <ng-container *ngFor=\"let f of filters\">\r\n            <ion-chip *ngIf=\"!isSearch(f.type)\" color=\"primary\" outline>\r\n                <ion-label (click)=\"toFilter($event, f.type)\">{{f.value||f.type}}</ion-label>\r\n                <ion-icon *ngIf=\"f.value\" color=\"primary\" (click)=\"clear(f.type)\" name=\"close\"></ion-icon>\r\n            </ion-chip>\r\n        </ng-container>\r\n    </ion-toolbar>\r\n</ion-header>");

/***/ }),

/***/ 4200:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/component/page/list/list.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n    <ion-refresher (ionRefresh)=\"refresh($event)\" disabled={{wait}} slot=\"fixed\">\r\n        <ion-refresher-content pullingIcon=\"chevron-down-outline\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <ion-toolbar *ngIf=\"items.length === 0\" mode=\"ios\" color=\"light\">\r\n        <ion-title>Sin resultados</ion-title>\r\n    </ion-toolbar>\r\n    <ion-list lines=\"none\">\r\n        <ion-item-group *ngFor=\"let i of items\">\r\n            <ion-item disabled={{wait}}>\r\n                <ion-avatar *ngIf=\"!i.icon\" slot=\"start\">\r\n                    <img (click)=\"image(i)\" alt=\"{{i.image}}\" src=\"{{getImage(i.image)}}\" />\r\n                </ion-avatar>\r\n                <ion-icon *ngIf=\"i.icon\" color=\"primary\" (click)=\"i.detail()\" name=\"{{i.icon}}\" slot=\"start\"></ion-icon>\r\n                <ion-label (click)=\"i.detail()\">\r\n                    {{i.label}}\r\n                    <small *ngIf=\"i.small\"> | {{i.small}}</small>\r\n                    <p>\r\n                        <ion-text class=\"ion-text-wrap\" color=\"{{i.subcolor}}\"> {{i.sub}} </ion-text>\r\n                    </p>\r\n                </ion-label>\r\n                <ion-buttons *ngIf=\"i.buttons && properties.activeButtons\" slot=\"end\" style=\"margin-inline-start: 0px\">\r\n                    <ion-badge *ngIf=\"i.notification && selected !== i.entity.id\" class=\"badge-notification\">\r\n                        {{i.notification.notifications.length}}\r\n                    </ion-badge>\r\n                    <ion-button *ngIf=\"i.buttons.length > 1 || (i.buttons.length === 1 && i.notification)\"\r\n                        (click)=\"selected = selected === i.entity.id ? 0 : i.entity.id\" disabled={{wait}}>\r\n                        <ion-icon name=\"{{selected === i.entity.id ? 'chevron-up-outline' : 'chevron-down-outline'}}\"\r\n                            color=\"primary\" slot=\"icon-only\">\r\n                        </ion-icon>\r\n                    </ion-button>\r\n                    <ion-button *ngIf=\"i.buttons.length === 1 && !i.notification\" (click)=\"i.buttons[0].click(i.entity)\"\r\n                        disabled={{wait}}>\r\n                        <ion-icon name=\"{{i.buttons[0].icon}}\" color=\"{{i.buttons[0].color}}\" slot=\"icon-only\">\r\n                        </ion-icon>\r\n                    </ion-button>\r\n                </ion-buttons>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"selected === i.entity.id\" lines=\"none\">\r\n                <ion-buttons slot=\"end\">\r\n                    <ion-button *ngFor=\"let b of i.buttons\" (click)=\"b.click(i.entity)\" color=\"{{b.color}}\"\r\n                        disabled={{wait}}>\r\n                        <ion-icon name=\"{{b.icon}}\" slot=\"icon-only\"></ion-icon>\r\n                    </ion-button>\r\n                    <ion-button *ngIf=\"i.notification\" (click)=\"notifications(i)\" disabled={{wait}}>\r\n                        <ion-badge *ngIf=\"i.notification\" class=\"badge-notification\">\r\n                            {{i.notification.notifications.length}} </ion-badge>\r\n                        <ion-icon name=\"notifications-outline\" slot=\"icon-only\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-buttons>\r\n            </ion-item>\r\n        </ion-item-group>\r\n    </ion-list>\r\n</ion-content>");

/***/ }),

/***/ 3866:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/component/select/select.popover.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-list lines=\"none\">\r\n    <ion-item *ngFor=\"let o of options\" (click)=\"selectInternal(o.value)\" color=\"{{o.checked?'secondary':''}}\">\r\n        <ion-label>{{o.value}}</ion-label>\r\n    </ion-item>\r\n</ion-list>");

/***/ }),

/***/ 5314:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/contact/detail/contact.detail.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" no-border>\r\n    <app-header-component [properties]=\"headerProperties\"></app-header-component>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-list lines=\"none\">\r\n        <ion-toolbar *ngIf=\"getReadonly() && contacts.length === 0\" mode=\"ios\" color=\"light\">\r\n            <ion-title>Sin resultados</ion-title>\r\n        </ion-toolbar>\r\n        <ion-item *ngFor=\"let c of contacts\" disabled={{wait}}>\r\n            <ion-icon (click)=\"editMedia(c)\" color=\"primary\" name=\"{{iconMedia(c)}}\" slot=\"start\"></ion-icon>\r\n            <ion-label position=\"stacked\">{{labelMedia(c)}}</ion-label>\r\n            <ion-input (ionChange)=\"editValue($event, c)\" readonly={{getReadonly()}} value=\"{{c.contact.value}}\">\r\n            </ion-input>\r\n            <ion-icon *ngIf=\"!c.edited && getReadonly() && c.contact.media !== 'ADDRESS'\" (click)=\"go(c)\"\r\n                color=\"primary\" name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n            <ion-icon *ngIf=\"c.edited && !getReadonly()\" (click)=\"saveContact(c)\" name=\"checkmark-outline\"\r\n                color=\"success\" slot=\"end\"> </ion-icon>\r\n            <ion-icon *ngIf=\"!c.edited && !getReadonly()\" (click)=\"deleteContact(c)\" name=\"trash-outline\" color=\"danger\"\r\n                slot=\"end\">\r\n            </ion-icon>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"!getReadonly() && contacts.length !== limitMedia()\" (click)=\"newContact()\" disabled={{wait}}>\r\n            <ion-icon color=\"success\" name=\"add-outline\"></ion-icon>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>");

/***/ }),

/***/ 7947:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/event/component/detail/event.detail.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" no-border>\r\n    <app-header-component [properties]=\"headerProperties\"></app-header-component>\r\n</ion-header>\r\n<super-tabs (tabChange)=\"changePage($event)\">\r\n    <super-tabs-toolbar color=\"light\">\r\n        <super-tab-button>\r\n            <ion-icon name=\"information-outline\"></ion-icon>\r\n        </super-tab-button>\r\n        <super-tab-button>\r\n            <ion-icon name=\"people-outline\"></ion-icon>\r\n        </super-tab-button>\r\n    </super-tabs-toolbar>\r\n    <super-tabs-container>\r\n        <super-tab>\r\n            <form [formGroup]=\"group\">\r\n                <ion-list lines=\"none\">\r\n                    <ion-item-divider mode=\"md\">\r\n                        <ion-label> Datos del evento </ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item disabled={{wait}}>\r\n                        <ion-label position=\"floating\">Nombre</ion-label>\r\n                        <ion-input formControlName=\"name\" readonly={{getReadonly()}}></ion-input>\r\n                    </ion-item>\r\n                    <ion-item disabled={{wait}}>\r\n                        <ion-label position=\"stacked\">Fecha</ion-label>\r\n                        <ion-datetime cancelText=\"\" displayFormat=\"MMM D, YYYY\" doneText=\"OK\" formControlName=\"date\"\r\n                            mode=\"md\" max=\"{{maxDate()}}\" min=\"{{minDate()}}\" presentation=\"date\"\r\n                            readonly={{getReadonly()}}>\r\n                        </ion-datetime>\r\n                    </ion-item>\r\n                    <ion-item disabled={{wait}}>\r\n                        <ion-label position=\"stacked\">Hora</ion-label>\r\n                        <ion-datetime cancelText=\"\" displayFormat=\"hh:mm a\" doneText=\"OK\" formControlName=\"time\"\r\n                            mode=\"md\" readonly={{getReadonly()}} presentation=\"time\" minuteValues=\"{{minuteValues()}}\">\r\n                        </ion-datetime>\r\n                    </ion-item>\r\n                </ion-list>\r\n            </form>\r\n        </super-tab>\r\n        <super-tab>\r\n            <ion-item-divider mode=\"md\">\r\n                <ion-label>Asistentes <small>{{assistanceCount}}</small></ion-label>\r\n                <ion-buttons *ngIf=\"!getReadonly()\" slot=\"end\">\r\n                    <ion-button (click)=\"newAssistance()\" disabled={{wait}}>\r\n                        <ion-icon color=\"success\" name=\"add-outline\" slot=\"icon-only\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-buttons>\r\n            </ion-item-divider>\r\n            <app-list-component [properties]=\"assistanceListProperties\" #ALP></app-list-component>\r\n        </super-tab>\r\n    </super-tabs-container>\r\n</super-tabs>");

/***/ }),

/***/ 5246:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/observation/component/detail/observation.detail.html ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" no-border>\r\n    <app-header-component [properties]=\"headerProperties\"></app-header-component>\r\n</ion-header>\r\n<super-tabs (tabChange)=\"changePage($event)\">\r\n    <super-tabs-toolbar color=\"light\">\r\n        <super-tab-button>\r\n            <ion-icon name=\"information-outline\"></ion-icon>\r\n        </super-tab-button>\r\n        <super-tab-button>\r\n            <ion-icon name=\"people-outline\"></ion-icon>\r\n        </super-tab-button>\r\n    </super-tabs-toolbar>\r\n    <super-tabs-container>\r\n        <super-tab>\r\n            <form [formGroup]=\"group\">\r\n                <ion-list lines=\"none\">\r\n                    <ion-item-divider mode=\"md\">\r\n                        <ion-label> Datos de la observación </ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item>\r\n                        <ion-icon (click)=\"editType()\" color=\"primary\" name=\"{{iconType()}}\" slot=\"start\"></ion-icon>\r\n                        <ion-label position=\"stacked\">{{labelType()}}</ion-label>\r\n                        <ion-input formControlName=\"name\" readonly={{getReadonly()}}> </ion-input>\r\n                    </ion-item>\r\n                </ion-list>\r\n            </form>\r\n        </super-tab>\r\n        <super-tab>\r\n            <ion-item-divider mode=\"md\">\r\n                <ion-label>Detalles <small>{{particularCount}}</small></ion-label>\r\n                <ion-buttons *ngIf=\"!getReadonly()\" slot=\"end\">\r\n                    <ion-button (click)=\"newParticular()\" disabled={{wait}}>\r\n                        <ion-icon color=\"success\" name=\"add-outline\" slot=\"icon-only\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-buttons>\r\n            </ion-item-divider>\r\n            <app-list-component [properties]=\"particularListProperties\" #PLP></app-list-component>\r\n        </super-tab>\r\n    </super-tabs-container>\r\n</super-tabs>");

/***/ }),

/***/ 4509:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/particular/detail/particular.detail.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" no-border>\r\n    <app-header-component [properties]=\"headerProperties\"></app-header-component>\r\n</ion-header>\r\n<ion-content>\r\n    <form [formGroup]=\"group\">\r\n        <ion-list lines=\"none\">\r\n            <ion-item disabled={{wait}}>\r\n                <ion-avatar (click)=\"detailPerson()\" slot=\"start\">\r\n                    <img src=\"{{getImage()}}\" alt=\"foto\" />\r\n                </ion-avatar>\r\n                <ion-label (click)=\"detailPerson()\">\r\n                    {{getPersonLabel()}}\r\n                    <p *ngIf=\"properties.entity.person\">\r\n                        <ion-text> {{properties.entity.person.identification}} </ion-text>\r\n                    </p>\r\n                </ion-label>\r\n                <ion-buttons *ngIf=\"!getReadonly() && !enabledObservation\" slot=\"end\" style=\"margin-inline-start: 0px\">\r\n                    <ion-button (click)=\"changePerson()\" disabled={{wait}}>\r\n                        <ion-icon name=\"swap-horizontal-outline\" color=\"primary\" slot=\"icon-only\"> </ion-icon>\r\n                    </ion-button>\r\n                </ion-buttons>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-icon (click)=\"editObservation()\" color=\"primary\" name=\"{{iconObservation()}}\" slot=\"start\">\r\n                </ion-icon>\r\n                <ion-label position=\"stacked\">{{labelObservation()}}</ion-label>\r\n                <ion-textarea formControlName=\"detail\" rows=\"5\" spellcheck readonly={{getReadonly()}}>\r\n                </ion-textarea>\r\n            </ion-item>\r\n            <ion-item disabled={{wait}}>\r\n                <ion-label position=\"stacked\">Fecha</ion-label>\r\n                <ion-datetime cancelText=\"\" displayFormat=\"MMM D, YYYY\" doneText=\"OK\" formControlName=\"date\" mode=\"md\"\r\n                    max=\"{{maxDate()}}\" presentation=\"date\" readonly={{getReadonly()}}>\r\n                </ion-datetime>\r\n            </ion-item>\r\n        </ion-list>\r\n    </form>\r\n</ion-content>");

/***/ }),

/***/ 8415:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/person/component/detail/person.detail.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" no-border>\r\n    <app-header-component [properties]=\"headerProperties\"></app-header-component>\r\n</ion-header>\r\n<super-tabs (tabChange)=\"changePage($event)\">\r\n    <super-tabs-toolbar color=\"light\">\r\n        <super-tab-button>\r\n            <ion-icon name=\"information-outline\"></ion-icon>\r\n        </super-tab-button>\r\n        <super-tab-button>\r\n            <ion-icon name=\"people-outline\"></ion-icon>\r\n        </super-tab-button>\r\n        <super-tab-button>\r\n            <ion-icon name=\"trail-sign-outline\"></ion-icon>\r\n        </super-tab-button>\r\n        <super-tab-button>\r\n            <ion-icon name=\"calendar-outline\"></ion-icon>\r\n        </super-tab-button>\r\n        <super-tab-button>\r\n            <ion-icon name=\"receipt-outline\"></ion-icon>\r\n        </super-tab-button>\r\n    </super-tabs-toolbar>\r\n    <super-tabs-container>\r\n        <super-tab>\r\n            <form [formGroup]=\"group\">\r\n                <ion-list lines=\"none\">\r\n                    <ion-item-divider mode=\"md\">\r\n                        <ion-label> Datos personales </ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item disabled={{wait}}>\r\n                        <ion-label position=\"floating\">N° Identificación</ion-label>\r\n                        <ion-input formControlName=\"identification\" readonly={{getReadonly()}}></ion-input>\r\n                    </ion-item>\r\n                    <ion-item disabled={{wait}}>\r\n                        <ion-avatar slot=\"start\">\r\n                            <img (click)=\"setImage()\" alt=\"{{properties.entity.photo}}\" src=\"{{getImage()}}\" />\r\n                        </ion-avatar>\r\n                        <ion-segment *ngIf=\"!getReadonly()\" formControlName=\"gender\" mode=\"ios\">\r\n                            <ion-segment-button value=\"FEMALE\">\r\n                                <ion-label>Mujer</ion-label>\r\n                            </ion-segment-button>\r\n                            <ion-segment-button value=\"MALE\">\r\n                                <ion-label>Hombre</ion-label>\r\n                            </ion-segment-button>\r\n                        </ion-segment>\r\n                        <ion-segment *ngIf=\"getReadonly()\" value=\"G\" mode=\"ios\">\r\n                            <ion-segment-button value=\"G\">\r\n                                <ion-label>{{properties.entity.gender==='FEMALE'?'Mujer':'Hombre'}}</ion-label>\r\n                            </ion-segment-button>\r\n                        </ion-segment>\r\n                    </ion-item>\r\n                    <ion-item disabled={{wait}}>\r\n                        <ion-label position=\"floating\">Nombre</ion-label>\r\n                        <ion-input formControlName=\"name\" readonly={{getReadonly()}}></ion-input>\r\n                    </ion-item>\r\n                    <ion-item disabled={{wait}}>\r\n                        <ion-label position=\"floating\">Apellido</ion-label>\r\n                        <ion-input formControlName=\"last\" readonly={{getReadonly()}}></ion-input>\r\n                    </ion-item>\r\n                    <ion-item disabled={{wait}}>\r\n                        <ion-label position=\"stacked\">Nacimiento</ion-label>\r\n                        <ion-datetime cancelText=\"\" displayFormat=\"MMM D, YYYY\" doneText=\"OK\" formControlName=\"birth\"\r\n                            mode=\"md\" max=\"{{minBirth()}}\" presentation=\"date\" readonly={{getReadonly()}}>\r\n                        </ion-datetime>\r\n                    </ion-item>\r\n                    <ion-item disabled={{wait}}>\r\n                        <ion-label>Curso inicial</ion-label>\r\n                        <ion-toggle *ngIf=\"!getReadonly()\" formControlName=\"initial\" mode=\"ios\"></ion-toggle>\r\n                        <ion-icon *ngIf=\"getReadonly()\" name=\"{{toogleReadonly(properties.entity.initial)}}\" slot=\"end\">\r\n                        </ion-icon>\r\n                    </ion-item>\r\n                    <ion-item disabled={{wait}}>\r\n                        <ion-label>Biblia</ion-label>\r\n                        <ion-toggle *ngIf=\"!getReadonly()\" formControlName=\"bible\" mode=\"ios\"></ion-toggle>\r\n                        <ion-icon *ngIf=\"getReadonly()\" name=\"{{toogleReadonly(properties.entity.bible)}}\" slot=\"end\">\r\n                        </ion-icon>\r\n                    </ion-item>\r\n                    <ion-item disabled={{wait}}>\r\n                        <ion-label>Bautizo</ion-label>\r\n                        <ion-toggle *ngIf=\"!getReadonly()\" formControlName=\"christening\" mode=\"ios\"></ion-toggle>\r\n                        <ion-icon *ngIf=\"getReadonly()\" name=\"{{toogleReadonly(properties.entity.christening)}}\"\r\n                            slot=\"end\"> </ion-icon>\r\n                    </ion-item>\r\n                </ion-list>\r\n            </form>\r\n        </super-tab>\r\n        <super-tab>\r\n            <ion-item-divider mode=\"md\">\r\n                <ion-label>Relaciones <small>{{relationshipCount}}</small></ion-label>\r\n                <ion-buttons *ngIf=\"!getReadonly()\" slot=\"end\">\r\n                    <ion-button (click)=\"newRelationship()\" disabled={{wait}}>\r\n                        <ion-icon color=\"success\" name=\"add-outline\" slot=\"icon-only\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-buttons>\r\n            </ion-item-divider>\r\n            <app-list-component [properties]=\"relationshipListProperties\" #RLP></app-list-component>\r\n        </super-tab>\r\n        <super-tab>\r\n            <ion-item-divider mode=\"md\">\r\n                <ion-label>Contactos <small>{{contactCount}}</small></ion-label>\r\n                <ion-buttons *ngIf=\"!getReadonly()\" slot=\"end\">\r\n                    <ion-button (click)=\"contactDetails()\" disabled={{wait}}>\r\n                        <ion-icon color=\"primary\" name=\"pencil-outline\" slot=\"icon-only\">\r\n                        </ion-icon>\r\n                    </ion-button>\r\n                </ion-buttons>\r\n            </ion-item-divider>\r\n            <app-list-component [properties]=\"contactListProperties\" #CLP></app-list-component>\r\n        </super-tab>\r\n        <super-tab>\r\n            <ion-item-divider mode=\"md\">\r\n                <ion-label>Asistencias <small>{{assistanceCount}}</small></ion-label>\r\n                <ion-buttons *ngIf=\"!getReadonly()\" slot=\"end\">\r\n                    <ion-button (click)=\"newAssistance()\" disabled={{wait}}>\r\n                        <ion-icon color=\"success\" name=\"add-outline\" slot=\"icon-only\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-buttons>\r\n            </ion-item-divider>\r\n            <app-list-component [properties]=\"assistanceListProperties\" #ALP></app-list-component>\r\n        </super-tab>\r\n        <super-tab>\r\n            <ion-item-divider mode=\"md\">\r\n                <ion-label>Detalles <small>{{particularCount}}</small></ion-label>\r\n                <ion-buttons *ngIf=\"!getReadonly()\" slot=\"end\">\r\n                    <ion-button (click)=\"newParticular()\" disabled={{wait}}>\r\n                        <ion-icon color=\"success\" name=\"add-outline\" slot=\"icon-only\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-buttons>\r\n            </ion-item-divider>\r\n            <app-list-component [properties]=\"particularListProperties\" #PLP></app-list-component>\r\n        </super-tab>\r\n    </super-tabs-container>\r\n</super-tabs>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_component_component_module_ts-src_app_pages_particular_detail_particular_deta-f1d45f.js.map