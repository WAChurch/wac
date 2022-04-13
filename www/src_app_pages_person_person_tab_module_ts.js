"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_person_person_tab_module_ts"],{

/***/ 6396:
/*!***************************************************!*\
  !*** ./src/app/pages/person/person.tab.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonTabModule": () => (/* binding */ PersonTabModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 7721);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _component_detail_person_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/detail/person.detail */ 8993);
/* harmony import */ var _person_tab_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./person.tab.routing */ 1399);
/* harmony import */ var _person_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person.tab */ 2578);
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-super-tabs/angular */ 4308);
/* harmony import */ var _contact_detail_contact_detail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact/detail/contact.detail */ 8446);
/* harmony import */ var _particular_detail_particular_detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../particular/detail/particular.detail */ 9103);












let PersonTabModule = class PersonTabModule {
};
PersonTabModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_contact_detail_contact_detail__WEBPACK_IMPORTED_MODULE_4__.ContactDetailComponent, _particular_detail_particular_detail__WEBPACK_IMPORTED_MODULE_5__.ParticularDetailComponent, _component_detail_person_detail__WEBPACK_IMPORTED_MODULE_1__.PersonDetailComponent, _person_tab__WEBPACK_IMPORTED_MODULE_3__.PersonTabPage],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _person_tab_routing__WEBPACK_IMPORTED_MODULE_2__.PersonRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_11__.SuperTabsModule]
    })
], PersonTabModule);



/***/ }),

/***/ 1399:
/*!****************************************************!*\
  !*** ./src/app/pages/person/person.tab.routing.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonRoutingModule": () => (/* binding */ PersonRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _person_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person.tab */ 2578);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);




let PersonRoutingModule = class PersonRoutingModule {
};
PersonRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{ component: _person_tab__WEBPACK_IMPORTED_MODULE_0__.PersonTabPage, path: '' }])]
    })
], PersonRoutingModule);



/***/ }),

/***/ 2578:
/*!********************************************!*\
  !*** ./src/app/pages/person/person.tab.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonTabPage": () => (/* binding */ PersonTabPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_person_tab_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./person.tab.html */ 9516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_tool_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tool/alert */ 5772);
/* harmony import */ var _component_page_choose_choose_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/page/choose/choose.modal */ 8597);
/* harmony import */ var src_app_component_page_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/page/header/header.component */ 2661);
/* harmony import */ var src_app_component_page_header_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/component/page/header/header */ 9738);
/* harmony import */ var src_app_component_page_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/component/page/list/list.component */ 3954);
/* harmony import */ var src_app_component_page_list_list_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/component/page/list/list.modal */ 7980);
/* harmony import */ var _component_detail_person_detail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/detail/person.detail */ 8993);
/* harmony import */ var src_app_tool_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/tool/modal */ 7269);
/* harmony import */ var _contact_detail_contact_detail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contact/detail/contact.detail */ 8446);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _event_component_detail_event_detail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../event/component/detail/event.detail */ 7099);
/* harmony import */ var _particular_detail_particular_detail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../particular/detail/particular.detail */ 9103);















let PersonTabPage = class PersonTabPage {
    constructor(alert, chooseModal, listModal, controller) {
        this.alert = alert;
        this.chooseModal = chooseModal;
        this.listModal = listModal;
        this.controller = controller;
        this.personListProperties = this.listModal.person(_component_detail_person_detail__WEBPACK_IMPORTED_MODULE_7__.PersonDetailComponent, {
            activeButtons: true,
            back: () => {
                this.headerComponent.restartFilter();
                this.personListComponent.refresh();
            },
            buttons: [
                { click: person => this.chooseModal.relationship(this.chooseProperties(person), _component_detail_person_detail__WEBPACK_IMPORTED_MODULE_7__.PersonDetailComponent), icon: 'people-outline' },
                {
                    click: person => src_app_tool_modal__WEBPACK_IMPORTED_MODULE_8__.Modal.modalDetail(_contact_detail_contact_detail__WEBPACK_IMPORTED_MODULE_9__.ContactDetailComponent, this.controller, {
                        entity: person,
                        onDismiss: () => {
                            this.headerComponent.restartFilter();
                            this.personListComponent.refresh();
                        }
                    }), icon: 'trail-sign-outline'
                },
                { click: person => this.chooseModal.assistanceEvent(this.chooseProperties(person), _event_component_detail_event_detail__WEBPACK_IMPORTED_MODULE_10__.EventDetailComponent), icon: 'calendar-outline' },
                { click: person => this.chooseModal.particularObservation(this.chooseProperties(person), _particular_detail_particular_detail__WEBPACK_IMPORTED_MODULE_11__.ParticularDetailComponent), icon: 'receipt-outline' },
                { click: () => this.alert.present({ message: '¡Pronto!' }), icon: 'people' }
            ],
            getComponent: () => this.personListComponent,
            notification: true
        });
        this.headerProperties = src_app_component_page_header_header__WEBPACK_IMPORTED_MODULE_4__.HeaderModal.person({
            detail: () => this.listModal.detailPerson(_component_detail_person_detail__WEBPACK_IMPORTED_MODULE_7__.PersonDetailComponent, () => {
                this.headerComponent.restartFilter();
                this.personListComponent.refresh();
            }),
            getComponent: () => this.personListComponent,
            menu: true
        });
    }
    chooseProperties(person) {
        return {
            back: () => {
                this.headerComponent.restartFilter();
                this.personListComponent.refresh();
            },
            getComponent: () => this.personListComponent,
            getEntity: () => person
        };
    }
    ngAfterViewInit() {
        this.personListComponent.elementsSubject.subscribe(observer => this.headerProperties.subtitle = observer.length.toString());
        this.personListComponent.refresh();
    }
};
PersonTabPage.ctorParameters = () => [
    { type: src_app_tool_alert__WEBPACK_IMPORTED_MODULE_1__.Alert },
    { type: _component_page_choose_choose_modal__WEBPACK_IMPORTED_MODULE_2__.ChooseModal },
    { type: src_app_component_page_list_list_modal__WEBPACK_IMPORTED_MODULE_6__.ListModal },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController }
];
PersonTabPage.propDecorators = {
    personListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: [src_app_component_page_list_list_component__WEBPACK_IMPORTED_MODULE_5__.ListComponent,] }],
    headerComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: [src_app_component_page_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,] }]
};
PersonTabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({ selector: 'app-person-tab', template: _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_person_tab_html__WEBPACK_IMPORTED_MODULE_0__["default"] })
], PersonTabPage);



/***/ }),

/***/ 9516:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/person/person.tab.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" no-border>\r\n    <app-header-component [properties]=\"headerProperties\"></app-header-component>\r\n</ion-header>\r\n<super-tabs>\r\n    <super-tabs-toolbar color=\"light\" slot=\"bottom\">\r\n        <super-tab-button>\r\n            <ion-icon name=\"people-outline\"></ion-icon>\r\n        </super-tab-button>\r\n        <super-tab-button>\r\n            <ion-icon name=\"people-circle-outline\"></ion-icon>\r\n        </super-tab-button>\r\n        <super-tab-button>\r\n            <ion-icon name=\"people\"></ion-icon>\r\n        </super-tab-button>\r\n    </super-tabs-toolbar>\r\n    <super-tabs-container>\r\n        <super-tab>\r\n            <app-list-component [properties]=\"personListProperties\"></app-list-component>\r\n        </super-tab>\r\n        <super-tab>\r\n            <ion-toolbar mode=\"ios\">\r\n                <ion-title>¡Pronto!</ion-title>\r\n            </ion-toolbar>\r\n        </super-tab>\r\n        <super-tab>\r\n            <ion-toolbar mode=\"ios\">\r\n                <ion-title>¡Pronto!</ion-title>\r\n            </ion-toolbar>\r\n        </super-tab>\r\n    </super-tabs-container>\r\n</super-tabs>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_person_person_tab_module_ts.js.map