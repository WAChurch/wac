"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_observation_observation_tab_module_ts"],{

/***/ 4499:
/*!*************************************************************!*\
  !*** ./src/app/pages/observation/observation.tab.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationTabModule": () => (/* binding */ ObservationTabModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 7721);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _component_detail_observation_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/detail/observation.detail */ 2513);
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-super-tabs/angular */ 4308);
/* harmony import */ var _observation_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observation.tab */ 3863);
/* harmony import */ var _observation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observation */ 9505);










let ObservationTabModule = class ObservationTabModule {
};
ObservationTabModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_component_detail_observation_detail__WEBPACK_IMPORTED_MODULE_1__.ObservationDetailComponent, _observation_tab__WEBPACK_IMPORTED_MODULE_2__.ObservationTabPage],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _observation__WEBPACK_IMPORTED_MODULE_3__.ObservationRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__.SuperTabsModule]
    })
], ObservationTabModule);



/***/ }),

/***/ 3863:
/*!******************************************************!*\
  !*** ./src/app/pages/observation/observation.tab.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationTabPage": () => (/* binding */ ObservationTabPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_observation_tab_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./observation.tab.html */ 1415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_component_page_choose_choose_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/page/choose/choose.modal */ 8597);
/* harmony import */ var src_app_component_page_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/page/header/header */ 9738);
/* harmony import */ var src_app_component_page_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/page/header/header.component */ 2661);
/* harmony import */ var src_app_component_page_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/component/page/list/list.component */ 3954);
/* harmony import */ var src_app_component_page_list_list_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/component/page/list/list.modal */ 7980);
/* harmony import */ var _particular_detail_particular_detail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../particular/detail/particular.detail */ 9103);
/* harmony import */ var _component_detail_observation_detail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/detail/observation.detail */ 2513);










let ObservationTabPage = class ObservationTabPage {
    constructor(choose, listModal) {
        this.choose = choose;
        this.listModal = listModal;
        this.headerProperties = src_app_component_page_header_header__WEBPACK_IMPORTED_MODULE_2__.HeaderModal.observation({
            detail: () => this.listModal.detailObservation(_component_detail_observation_detail__WEBPACK_IMPORTED_MODULE_7__.ObservationDetailComponent, () => {
                this.headerComponent.restartFilter();
                this.listComponent.refresh();
            }),
            getComponent: () => this.listComponent,
            menu: true
        });
        this.listProperties = this.listModal.observation(_component_detail_observation_detail__WEBPACK_IMPORTED_MODULE_7__.ObservationDetailComponent, {
            activeButtons: true,
            back: () => {
                this.headerComponent.restartFilter();
                this.listComponent.refresh();
            },
            buttons: [{
                    click: particular => this.choose.particularPerson({
                        back: () => {
                            this.headerComponent.restartFilter();
                            this.listComponent.refresh();
                        },
                        getComponent: () => this.listComponent,
                        getEntity: () => particular
                    }, _particular_detail_particular_detail__WEBPACK_IMPORTED_MODULE_6__.ParticularDetailComponent), icon: 'people-outline'
                }],
            getComponent: () => this.listComponent
        });
    }
    ngAfterViewInit() {
        this.listComponent.elementsSubject.subscribe(observer => this.headerProperties.subtitle = observer.length.toString());
        this.listComponent.refresh();
    }
};
ObservationTabPage.ctorParameters = () => [
    { type: src_app_component_page_choose_choose_modal__WEBPACK_IMPORTED_MODULE_1__.ChooseModal },
    { type: src_app_component_page_list_list_modal__WEBPACK_IMPORTED_MODULE_5__.ListModal }
];
ObservationTabPage.propDecorators = {
    listComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [src_app_component_page_list_list_component__WEBPACK_IMPORTED_MODULE_4__.ListComponent,] }],
    headerComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [src_app_component_page_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,] }]
};
ObservationTabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({ selector: 'app-observation-tab', template: _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_observation_tab_html__WEBPACK_IMPORTED_MODULE_0__["default"] })
], ObservationTabPage);



/***/ }),

/***/ 9505:
/*!**************************************************!*\
  !*** ./src/app/pages/observation/observation.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationRoutingModule": () => (/* binding */ ObservationRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _observation_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observation.tab */ 3863);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);




let ObservationRoutingModule = class ObservationRoutingModule {
};
ObservationRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{ component: _observation_tab__WEBPACK_IMPORTED_MODULE_0__.ObservationTabPage, path: '' }])]
    })
], ObservationRoutingModule);



/***/ }),

/***/ 1415:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/observation/observation.tab.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" no-border>\r\n    <app-header-component [properties]=\"headerProperties\"></app-header-component>\r\n</ion-header>\r\n<ion-content>\r\n    <app-list-component [properties]=\"listProperties\"></app-list-component>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_observation_observation_tab_module_ts.js.map