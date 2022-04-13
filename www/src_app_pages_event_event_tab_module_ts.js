"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_event_event_tab_module_ts"],{

/***/ 1226:
/*!*************************************************!*\
  !*** ./src/app/pages/event/event.tab.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventTabModule": () => (/* binding */ EventTabModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 7721);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _component_detail_event_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/detail/event.detail */ 7099);
/* harmony import */ var _event_tab_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.tab.routing */ 8021);
/* harmony import */ var _event_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event.tab */ 3059);
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-super-tabs/angular */ 4308);










let EventTabModule = class EventTabModule {
};
EventTabModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_component_detail_event_detail__WEBPACK_IMPORTED_MODULE_1__.EventDetailComponent, _event_tab__WEBPACK_IMPORTED_MODULE_3__.EventTabPage],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _event_tab_routing__WEBPACK_IMPORTED_MODULE_2__.EventRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__.SuperTabsModule]
    })
], EventTabModule);



/***/ }),

/***/ 8021:
/*!**************************************************!*\
  !*** ./src/app/pages/event/event.tab.routing.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventRoutingModule": () => (/* binding */ EventRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _event_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.tab */ 3059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);




let EventRoutingModule = class EventRoutingModule {
};
EventRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{ component: _event_tab__WEBPACK_IMPORTED_MODULE_0__.EventTabPage, path: '' }])]
    })
], EventRoutingModule);



/***/ }),

/***/ 3059:
/*!******************************************!*\
  !*** ./src/app/pages/event/event.tab.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventTabPage": () => (/* binding */ EventTabPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_tab_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./event.tab.html */ 7899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_component_page_choose_choose_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/page/choose/choose.modal */ 8597);
/* harmony import */ var src_app_component_page_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/page/header/header */ 9738);
/* harmony import */ var src_app_component_page_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/page/header/header.component */ 2661);
/* harmony import */ var src_app_component_page_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/component/page/list/list.component */ 3954);
/* harmony import */ var src_app_component_page_list_list_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/component/page/list/list.modal */ 7980);
/* harmony import */ var _person_component_detail_person_detail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../person/component/detail/person.detail */ 8993);
/* harmony import */ var _component_detail_event_detail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/detail/event.detail */ 7099);










let EventTabPage = class EventTabPage {
    constructor(chooseModal, listModal) {
        this.chooseModal = chooseModal;
        this.listModal = listModal;
        this.headerProperties = src_app_component_page_header_header__WEBPACK_IMPORTED_MODULE_2__.HeaderModal.event({
            detail: () => this.listModal.detailEvent(_component_detail_event_detail__WEBPACK_IMPORTED_MODULE_7__.EventDetailComponent, () => {
                this.headerComponent.restartFilter();
                this.listComponent.refresh();
            }),
            getComponent: () => this.listComponent,
            menu: true
        });
        this.listProperties = this.listModal.event(_component_detail_event_detail__WEBPACK_IMPORTED_MODULE_7__.EventDetailComponent, {
            activeButtons: true,
            back: () => {
                this.headerComponent.restartFilter();
                this.listComponent.refresh();
            },
            buttons: [{
                    click: event => this.chooseModal.assistancePerson({
                        back: () => {
                            this.headerComponent.restartFilter();
                            this.listComponent.refresh();
                        },
                        getComponent: () => this.listComponent,
                        getEntity: () => event
                    }, _person_component_detail_person_detail__WEBPACK_IMPORTED_MODULE_6__.PersonDetailComponent), icon: 'people-outline'
                }],
            getComponent: () => this.listComponent,
            notification: true
        });
    }
    ngAfterViewInit() {
        this.listComponent.elementsSubject.subscribe(observer => this.headerProperties.subtitle = observer.length.toString());
        this.listComponent.refresh();
    }
};
EventTabPage.ctorParameters = () => [
    { type: src_app_component_page_choose_choose_modal__WEBPACK_IMPORTED_MODULE_1__.ChooseModal },
    { type: src_app_component_page_list_list_modal__WEBPACK_IMPORTED_MODULE_5__.ListModal }
];
EventTabPage.propDecorators = {
    listComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [src_app_component_page_list_list_component__WEBPACK_IMPORTED_MODULE_4__.ListComponent,] }],
    headerComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [src_app_component_page_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,] }]
};
EventTabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({ selector: 'app-event-tab', template: _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_tab_html__WEBPACK_IMPORTED_MODULE_0__["default"] })
], EventTabPage);



/***/ }),

/***/ 7899:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/event/event.tab.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" no-border>\r\n    <app-header-component [properties]=\"headerProperties\"></app-header-component>\r\n</ion-header>\r\n<ion-content>\r\n    <app-list-component [properties]=\"listProperties\"></app-list-component>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_event_event_tab_module_ts.js.map