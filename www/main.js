(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);



let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot([
                { loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_component_component_module_ts-src_app_pages_particular_detail_particular_deta-f1d45f"), __webpack_require__.e("src_app_pages_event_event_tab_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/event/event.tab.module */ 1226)).then(onfulfilled => onfulfilled.EventTabModule), path: 'event' },
                { loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_component_component_module_ts-src_app_pages_particular_detail_particular_deta-f1d45f"), __webpack_require__.e("src_app_pages_observation_observation_tab_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/observation/observation.tab.module */ 4499)).then(onfulfilled => onfulfilled.ObservationTabModule), path: 'observation' },
                { loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_component_component_module_ts-src_app_pages_particular_detail_particular_deta-f1d45f"), __webpack_require__.e("src_app_pages_person_person_tab_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/person/person.tab.module */ 6396)).then(onfulfilled => onfulfilled.PersonTabModule), path: 'person' },
                { path: '', pathMatch: 'full', redirectTo: 'person' },
            ], { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _tool_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tool/http */ 6696);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _tool_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tool/static */ 3922);







let AppComponent = class AppComponent {
    constructor(controller) {
        this.controller = controller;
        this.menu = [{
                icon: "people-outline",
                selected: true,
                title: "Personas",
                url: 'person'
            }, {
                icon: "calendar-outline",
                selected: false,
                title: "Eventos",
                url: 'event'
            }, {
                icon: "receipt-outline",
                selected: false,
                sub: 'Peticiones de oración',
                title: "Observaciones",
                url: 'observation'
            }];
        _tool_static__WEBPACK_IMPORTED_MODULE_3__.Parameter.getWait().subscribe(observer => this.wait = observer);
    }
    select(url) {
        this.controller.close();
        this.menu.forEach(m => m.selected = m.url === url);
    }
    version() { return _tool_http__WEBPACK_IMPORTED_MODULE_2__.Http.VERSION; }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({ selector: 'app-root', template: _C_FunerCien_WAC_HWAC_med_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"], styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_0__] })
], AppComponent);



/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 7364);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 7091);
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ 4047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ 5442);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 3242);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ 6979);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-super-tabs/angular */ 4308);















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_13__.SuperTabsModule.forRoot()
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy },
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__.CallNumber,
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera,
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__.EmailComposer,
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__.HTTP,
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser,
            _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__.PhotoViewer
        ],
    })
], AppModule);



/***/ }),

/***/ 5772:
/*!*******************************!*\
  !*** ./src/app/tool/alert.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alert": () => (/* binding */ Alert)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
var Alert_1;



let Alert = Alert_1 = class Alert {
    constructor(controller) {
        this.controller = controller;
    }
    present(properties) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (!Alert_1.SHOWING) {
                Alert_1.SHOWING = true;
                let alert = yield this.controller.create({
                    backdropDismiss: !properties.backdrop,
                    buttons: (properties.buttons || []).map(b => ({ cssClass: b.color, handler: () => b.click(), text: b.text })),
                    message: '<strong>' + properties.message + '</strong>',
                    mode: 'ios'
                });
                alert.onDidDismiss().finally(() => Alert_1.SHOWING = false);
                yield alert.present();
            }
        });
    }
    presentNotification(notification) {
        this.present({ message: notification.notifications.reduce((p, c) => p + ' <hr> ' + c) });
    }
};
Alert.SHOWING = false;
Alert.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController }
];
Alert = Alert_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], Alert);



/***/ }),

/***/ 9224:
/*!**************************************!*\
  !*** ./src/app/tool/asynchronous.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Asynchronous": () => (/* binding */ Asynchronous)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ 5772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1590);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static */ 3922);





let Asynchronous = class Asynchronous {
    constructor(alert) {
        this.alert = alert;
    }
    subscribe(observable, properties) {
        observable.subscribe(observer => properties.next(observer), error => this.alert.present({ message: error.error ? error.error : error }), () => { if (properties.complete)
            properties.complete(); }).add(() => _static__WEBPACK_IMPORTED_MODULE_1__.Parameter.setWait(false));
    }
    then(error, promise, properties) {
        this.subscribe(new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(s => { promise.then(t => s.next(t)).catch(() => s.error(error)).finally(() => s.complete()); }), properties);
    }
    wait(observable, properties) {
        _static__WEBPACK_IMPORTED_MODULE_1__.Parameter.setWait(true);
        this.subscribe(observable, properties);
    }
};
Asynchronous.ctorParameters = () => [
    { type: _alert__WEBPACK_IMPORTED_MODULE_0__.Alert }
];
Asynchronous = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: 'root' })
], Asynchronous);



/***/ }),

/***/ 3795:
/*!******************************!*\
  !*** ./src/app/tool/data.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gender": () => (/* binding */ Gender),
/* harmony export */   "Media": () => (/* binding */ Media),
/* harmony export */   "ObservationType": () => (/* binding */ ObservationType),
/* harmony export */   "RelationshipType": () => (/* binding */ RelationshipType),
/* harmony export */   "Role": () => (/* binding */ Role)
/* harmony export */ });
var Gender;
(function (Gender) {
    Gender["FEMALE"] = "Mujer";
    Gender["MALE"] = "Hombre";
})(Gender || (Gender = {}));
var Media;
(function (Media) {
    Media["ADDRESS"] = "Direcci\u00F3n";
    Media["FACEBOOK"] = "Facebook";
    Media["INSTAGRAM"] = "Instagram";
    Media["MAIL"] = "E-Mail";
    Media["PHONE"] = "Tel\u00E9fono";
    Media["PINTEREST"] = "Pinterest";
    Media["TIKTOK"] = "Tik Tok";
    Media["WHATSAPP"] = "Whatsapp";
    Media["YOUTUBE"] = "YouTube";
})(Media || (Media = {}));
var ObservationType;
(function (ObservationType) {
    ObservationType["AFFLICTION"] = "Aflicci\u00F3n";
    ObservationType["HEALTH"] = "Salud";
    ObservationType["HOBBY"] = "Pasatiempo";
    ObservationType["LIKING"] = "Gusto";
    ObservationType["NEED"] = "Necesidad";
    ObservationType["PURPOSE"] = "Proposito";
    ObservationType["STRUGGLE"] = "Lucha";
})(ObservationType || (ObservationType = {}));
var RelationshipType;
(function (RelationshipType) {
    RelationshipType["COUSINS"] = "COUSINS";
    RelationshipType["FAMILY"] = "FAMILY";
    RelationshipType["FRIENDS"] = "FRIENDS";
    RelationshipType["GRANDPARENTS"] = "GRANDPARENTS";
    RelationshipType["PARENTS"] = "PARENTS";
    RelationshipType["SIBLING"] = "SIBLING";
    RelationshipType["UNCLES"] = "UNCLES";
})(RelationshipType || (RelationshipType = {}));
var Role;
(function (Role) {
    Role["ASSISTANT"] = "Asistente";
    Role["STAFF"] = "En servicio";
})(Role || (Role = {}));


/***/ }),

/***/ 6696:
/*!******************************!*\
  !*** ./src/app/tool/http.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Http": () => (/* binding */ Http)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ 5772);
/* harmony import */ var _asynchronous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asynchronous */ 9224);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ 5442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1590);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static */ 3922);
var Http_1;







let Http = Http_1 = class Http {
    constructor(alert, asynchronous, http) {
        this.alert = alert;
        this.asynchronous = asynchronous;
        this.http = http;
    }
    data(promise, subscriber, context = false) {
        this.asynchronous.then(Http_1.ERROR, promise, {
            complete: () => subscriber.complete(),
            next: (response) => {
                let data = JSON.parse(response.data);
                if (data.code < 0)
                    subscriber.error(data.message);
                else
                    subscriber.next(context ? data : data.body);
            }
        });
    }
    validate(promise, body) {
        this.http.setDataSerializer('json');
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(subscribe => {
            if (Http_1.VALIDATED)
                this.data(promise(), subscribe, body);
            else
                this.asynchronous.then(Http_1.ERROR, this.http.get(Http_1.ENDPOINT_VERSION, null, null), {
                    next: (response) => {
                        let parse = JSON.parse(response.data);
                        if (parse.code < 0)
                            subscribe.error(parse.message);
                        else if (parse.code === 2)
                            this.alert.present({ backdrop: true, message: parse.message });
                        else {
                            Http_1.VALIDATED = true;
                            _static__WEBPACK_IMPORTED_MODULE_3__.Parameter.setParam(parse.body);
                            if (parse.code === 1)
                                this.alert.present({ message: parse.message });
                            this.data(promise(), subscribe, body);
                        }
                    }
                });
        });
    }
    delete(url) { return this.validate(() => this.http.delete(url, null, null), false); }
    get(url, body) { return this.validate(() => this.http.get(url, null, null), body); }
    post(properties) { return this.validate(() => this.http.post(properties.url, properties.data, null), false); }
    put(properties) { return this.validate(() => this.http.put(properties.url, properties.data, null), false); }
};
Http.ENDPOINT = 'https://dev-application-wac.herokuapp.com/';
Http.ERROR = 'No pudimos conectarnos al servidor, inténtalo de nuevo más tarde';
Http.VALIDATED = false;
Http.VERSION = '0.7.0';
Http.ENDPOINT_ASSISTANCE = Http_1.ENDPOINT + 'assistance/';
Http.ENDPOINT_CONTACT = Http_1.ENDPOINT + 'contact/';
Http.ENDPOINT_EVENT = Http_1.ENDPOINT + 'event/';
Http.ENDPOINT_OBSERVATION = Http_1.ENDPOINT + 'observation/';
Http.ENDPOINT_PARTICULAR = Http_1.ENDPOINT + 'particular/';
Http.ENDPOINT_PERSON = Http_1.ENDPOINT + 'person/';
Http.ENDPOINT_RELATIONSHIP = Http_1.ENDPOINT + 'relationship/';
Http.ENDPOINT_VERSION = Http_1.ENDPOINT + 'version/' + Http_1.VERSION;
Http.ctorParameters = () => [
    { type: _alert__WEBPACK_IMPORTED_MODULE_0__.Alert },
    { type: _asynchronous__WEBPACK_IMPORTED_MODULE_1__.Asynchronous },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__.HTTP }
];
Http = Http_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({ providedIn: 'root' })
], Http);



/***/ }),

/***/ 3922:
/*!********************************!*\
  !*** ./src/app/tool/static.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Parameter": () => (/* binding */ Parameter),
/* harmony export */   "Tool": () => (/* binding */ Tool),
/* harmony export */   "Control": () => (/* binding */ Control)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 3795);



class Parameter {
    static getParam() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(1).subscribe(() => Parameter.PARAM_SUBJECT.next(Parameter.PARAM));
        return Parameter.PARAM_SUBJECT.asObservable();
    }
    static getWait() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(1).subscribe(() => Parameter.WAIT_SUBJECT.next(Parameter.WAIT));
        return Parameter.WAIT_SUBJECT.asObservable();
    }
    static setParam(param) {
        Parameter.PARAM = param;
        Parameter.PARAM_SUBJECT.next(Parameter.PARAM);
    }
    static setWait(wait) {
        Parameter.WAIT = wait;
        if (wait)
            (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(1000).subscribe(() => Parameter.WAIT_SUBJECT.next(Parameter.WAIT));
        else
            Parameter.WAIT_SUBJECT.next(Parameter.WAIT);
    }
}
Parameter.PARAM_SUBJECT = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
Parameter.WAIT_SUBJECT = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
Parameter.ADMINISTRATOR = true;
class Tool {
    static dayOfYear(date) { return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000; }
    static enumName(e) { return e; }
    ;
    static formatDate(date) { return (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'YYYY-MM-dd', 'en-US'); }
    static minutes(range) {
        let minutes = [];
        let minute = 0;
        while (minute < 60) {
            minutes.push(minute);
            minute += range;
        }
        return minutes;
    }
    static iconMedia(media) {
        if (media === _data__WEBPACK_IMPORTED_MODULE_0__.Media.ADDRESS)
            return 'home-outline';
        else if (media === _data__WEBPACK_IMPORTED_MODULE_0__.Media.FACEBOOK)
            return 'logo-facebook';
        else if (media === _data__WEBPACK_IMPORTED_MODULE_0__.Media.INSTAGRAM)
            return 'logo-instagram';
        else if (media === _data__WEBPACK_IMPORTED_MODULE_0__.Media.MAIL)
            return 'at-outline';
        else if (media === _data__WEBPACK_IMPORTED_MODULE_0__.Media.PHONE)
            return 'call-outline';
        else if (media === _data__WEBPACK_IMPORTED_MODULE_0__.Media.PINTEREST)
            return 'logo-pinterest';
        else if (media === _data__WEBPACK_IMPORTED_MODULE_0__.Media.TIKTOK)
            return 'logo-tiktok';
        else if (media === _data__WEBPACK_IMPORTED_MODULE_0__.Media.WHATSAPP)
            return 'logo-whatsapp';
        else if (media === _data__WEBPACK_IMPORTED_MODULE_0__.Media.YOUTUBE)
            return 'logo-youtube';
    }
    static iconObservationType(type) {
        if (type === _data__WEBPACK_IMPORTED_MODULE_0__.ObservationType.AFFLICTION)
            return 'heart-dislike-outline';
        else if (type === _data__WEBPACK_IMPORTED_MODULE_0__.ObservationType.HEALTH)
            return 'bandage-outline';
        else if (type === _data__WEBPACK_IMPORTED_MODULE_0__.ObservationType.HOBBY)
            return 'color-palette-outline';
        else if (type === _data__WEBPACK_IMPORTED_MODULE_0__.ObservationType.LIKING)
            return 'happy-outline';
        else if (type === _data__WEBPACK_IMPORTED_MODULE_0__.ObservationType.NEED)
            return 'alert-circle-outline';
        else if (type === _data__WEBPACK_IMPORTED_MODULE_0__.ObservationType.PURPOSE)
            return 'trophy-outline';
        else if (type === _data__WEBPACK_IMPORTED_MODULE_0__.ObservationType.STRUGGLE)
            return 'thunderstorm-outline';
    }
    static dateLabel(event) {
        let date = new Date(event.date);
        date.setDate(date.getDate() + 1);
        return (Tool.nameOfDay(date) || Tool.shortDate(date));
    }
    static personLabel(person) {
        let name = '';
        let last = '';
        person.name.split(' ').forEach(callbackfn => { if (callbackfn.length >= name.length)
            name = callbackfn; });
        person.last.split(' ').forEach(callbackfn => { if (callbackfn.length >= last.length)
            last = callbackfn; });
        return name + ' ' + last;
    }
    static personNotification(person) {
        let birth = new Date(person.birth);
        birth.setDate(birth.getDate() + 1);
        if (Math.abs(this.dayOfYear(birth) - this.dayOfYear(new Date())) <= 15)
            return { notifications: ['Cumple ' + (new Date().getUTCFullYear() - birth.getUTCFullYear()) + ' años el ' + birth.getDate() + ' de ' + this.MONTHS[birth.getMonth()].toLowerCase()], title: this.personLabel(person) };
    }
    static particularNotification(date) {
        let dat = new Date(date);
        dat.setDate(dat.getDate() + 1);
        let dif = this.dayOfYear(dat) - this.dayOfYear(new Date());
        if (Math.abs(dif) <= 15)
            return { notifications: ['El detalle ' + (dif < 0 ? 'sucedió' : 'sucederá') + ' el ' + dat.getDate() + ' de ' + this.MONTHS[dat.getMonth()].toLowerCase() + '. ¡Tenlo en cuenta!'], title: date };
    }
    static eventNotification(date) {
        let dat = new Date(date);
        dat.setDate(dat.getDate() + 1);
        let difference = this.dayOfYear(dat) - this.dayOfYear(new Date());
        if (dat.getFullYear() === new Date().getFullYear() && difference > 0 && difference <= 15)
            return { notifications: ['El evento se realizará el ' + dat.getDate() + ' de ' + this.MONTHS[dat.getMonth()].toLowerCase() + '. ¡Recuerdale a los asistentes que se preparen!'], title: date };
    }
    static personSort(persons) { return persons.sort((one, two) => (Tool.personLabel(one) < Tool.personLabel(two) ? -1 : 1)); }
    static relationshipSort(relationships, id) { return relationships.sort((one, two) => (Tool.personLabel(id === one.dominant.id ? one.recessive : one.dominant) < Tool.personLabel(id === two.dominant.id ? two.recessive : two.dominant) ? -1 : 1)); }
    static assistanceSort(assistances) {
        let first = assistances.filter(predicate => predicate.id < 0).sort((one, two) => (Tool.personLabel(one.person) < Tool.personLabel(two.person) ? -1 : 1));
        let second = assistances.filter(predicate => predicate.id > 0).sort((one, two) => (Tool.personLabel(one.person) < Tool.personLabel(two.person) ? -1 : 1));
        return first.concat(second);
    }
    static nameOfDay(date) {
        let difference = this.dayOfYear(date) - this.dayOfYear(new Date());
        if (Tool.today().getFullYear() === date.getFullYear()) {
            if (difference === 0)
                return 'Hoy';
            else if (difference === 1)
                return 'Mañana';
            else if (difference === -1)
                return 'Ayer';
            else if (difference > 1 && difference < 16)
                return 'En ' + difference + ' días';
            else if (difference > -16 && difference < -1)
                return 'Hace ' + (difference * -1) + ' días';
        }
    }
    static shortDate(date) { return date.getDate() + ' ' + this.MONTHS[date.getMonth()].substring(0, 3) + ' ' + date.getFullYear(); }
    static today() {
        let date = new Date();
        return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    }
    static isFuture(date) { return date.getTime() - Tool.today().getTime() >= 0; }
    static personPhoto(image, param) { return image.src ? 'data:image/jpeg;base64,' + image.src : (param ? param.photos + (image.url || 'DEFAULT.jpeg') : ''); }
    static relationship(gender, relationship, relationshipType) {
        if (relationshipType === _data__WEBPACK_IMPORTED_MODULE_0__.RelationshipType.COUSINS)
            return _data__WEBPACK_IMPORTED_MODULE_0__.Gender[gender] === _data__WEBPACK_IMPORTED_MODULE_0__.Gender.FEMALE ? 'Prima' : 'Primo';
        if (relationshipType === _data__WEBPACK_IMPORTED_MODULE_0__.RelationshipType.FAMILY)
            return 'Familiar';
        if (relationshipType === _data__WEBPACK_IMPORTED_MODULE_0__.RelationshipType.FRIENDS)
            return _data__WEBPACK_IMPORTED_MODULE_0__.Gender[gender] === _data__WEBPACK_IMPORTED_MODULE_0__.Gender.FEMALE ? 'Amiga' : 'Amigo';
        if (relationshipType === _data__WEBPACK_IMPORTED_MODULE_0__.RelationshipType.GRANDPARENTS) {
            if (relationship === 'DOMINANT')
                return _data__WEBPACK_IMPORTED_MODULE_0__.Gender[gender] === _data__WEBPACK_IMPORTED_MODULE_0__.Gender.FEMALE ? 'Abuela' : 'Abuelo';
            else
                return _data__WEBPACK_IMPORTED_MODULE_0__.Gender[gender] === _data__WEBPACK_IMPORTED_MODULE_0__.Gender.FEMALE ? 'Nieta' : 'Nieto';
        }
        if (relationshipType === _data__WEBPACK_IMPORTED_MODULE_0__.RelationshipType.PARENTS) {
            if (relationship === 'DOMINANT')
                return _data__WEBPACK_IMPORTED_MODULE_0__.Gender[gender] === _data__WEBPACK_IMPORTED_MODULE_0__.Gender.FEMALE ? 'Madre' : 'Padre';
            else
                return _data__WEBPACK_IMPORTED_MODULE_0__.Gender[gender] === _data__WEBPACK_IMPORTED_MODULE_0__.Gender.FEMALE ? 'Hija' : 'Hijo';
        }
        if (relationshipType === _data__WEBPACK_IMPORTED_MODULE_0__.RelationshipType.SIBLING)
            return _data__WEBPACK_IMPORTED_MODULE_0__.Gender[gender] === _data__WEBPACK_IMPORTED_MODULE_0__.Gender.FEMALE ? 'Hermana' : 'Hermano';
        if (relationshipType === _data__WEBPACK_IMPORTED_MODULE_0__.RelationshipType.UNCLES) {
            if (relationship === 'DOMINANT')
                return _data__WEBPACK_IMPORTED_MODULE_0__.Gender[gender] === _data__WEBPACK_IMPORTED_MODULE_0__.Gender.FEMALE ? 'Tia' : 'Tio';
            else
                return _data__WEBPACK_IMPORTED_MODULE_0__.Gender[gender] === _data__WEBPACK_IMPORTED_MODULE_0__.Gender.FEMALE ? 'Sobrina' : 'Sobrino';
        }
    }
    static yesterday() {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        return date;
    }
    static futureYears(years) {
        let date = new Date();
        date.setDate(date.getDate() + (365 * years));
        return date;
    }
}
Tool.MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
class Control {
    static past(control) { return Date.now() - new Date(control.value).getTime() > 0 ? null : { 'future': true }; }
    static future(control) { return new Date(control.value).getTime() - Date.now() > 0 ? null : { 'past': true }; }
    static whitespace(control) { return (control.value || '').trim().length !== 0 ? null : { 'whitespace': true }; }
}


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 5222:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic-super-tabs/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./super-tab-button_2.entry.js": [
		2848,
		"common",
		"node_modules_ionic-super-tabs_core_dist_esm_super-tab-button_2_entry_js"
	],
	"./super-tab-indicator.entry.js": [
		1953,
		"node_modules_ionic-super-tabs_core_dist_esm_super-tab-indicator_entry_js"
	],
	"./super-tab_3.entry.js": [
		701,
		"common",
		"node_modules_ionic-super-tabs_core_dist_esm_super-tab_3_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 5222;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5017,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		6612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		7479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		1439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		9003,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-menu contentId=\"main\">\r\n    <ion-header class=\"ion-no-border\">\r\n      <ion-toolbar>\r\n        <ion-title> Menu </ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list lines=\"none\">\r\n        <ion-item *ngFor=\"let m of menu\" (click)=\"select(m.url)\" color=\"{{m.selected?'secondary':''}}\"\r\n          disabled=\"{{wait}}\" [routerLink]=\"m.url\" routerDirection=\"forward\">\r\n          <ion-icon name=\"{{m.icon}}\" slot=\"start\"></ion-icon>\r\n          <ion-label>\r\n            {{m.title}}\r\n            <p>{{m.sub}}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n    <ion-footer class=\"ion-no-border\">\r\n      <ion-toolbar>\r\n        <ion-list lines=\"none\">\r\n          <ion-item>\r\n            <ion-label>\r\n              <p>\r\n                <small>{{version()}}</small>\r\n                <br>Somos Iglesia\r\n              </p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-toolbar>\r\n    </ion-footer>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>");

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "::ng-deep .danger {\n  color: var(--ion-color-danger) !important;\n}\n\n::ng-deep .success {\n  color: var(--ion-color-success) !important;\n}\n\n::ng-deep .danger .action-sheet-icon {\n  color: var(--ion-color-danger) !important;\n}\n\n::ng-deep .success .action-sheet-icon {\n  color: var(--ion-color-success) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0FBQ0o7O0FBQ0E7RUFDSSwwQ0FBQTtBQUVKOztBQUFBO0VBQ0kseUNBQUE7QUFHSjs7QUFEQTtFQUNJLDBDQUFBO0FBSUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5kYW5nZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5zdWNjZXNzIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2VzcykgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmRhbmdlciAuYWN0aW9uLXNoZWV0LWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5zdWNjZXNzIC5hY3Rpb24tc2hlZXQtaWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map