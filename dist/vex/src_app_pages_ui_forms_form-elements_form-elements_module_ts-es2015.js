(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_forms_form-elements_form-elements_module_ts"],{

/***/ 28211:
/*!******************************************************************************!*\
  !*** ./src/app/pages/ui/forms/form-elements/form-elements-routing.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormElementsRoutingModule": function() { return /* binding */ FormElementsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 85530);
/* harmony import */ var _form_elements_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-elements.component */ 91438);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);





const routes = [
    {
        path: '',
        component: _form_elements_component__WEBPACK_IMPORTED_MODULE_0__.FormElementsComponent
    }
];
class FormElementsRoutingModule {
}
FormElementsRoutingModule.ɵfac = function FormElementsRoutingModule_Factory(t) { return new (t || FormElementsRoutingModule)(); };
FormElementsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FormElementsRoutingModule });
FormElementsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FormElementsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 91438:
/*!*************************************************************************!*\
  !*** ./src/app/pages/ui/forms/form-elements/form-elements.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormElementsComponent": function() { return /* binding */ FormElementsComponent; }
/* harmony export */ });
/* harmony import */ var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-visibility */ 52069);
/* harmony import */ var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-visibility-off */ 36526);
/* harmony import */ var _iconify_icons_ic_twotone_smartphone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-smartphone */ 33969);
/* harmony import */ var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person */ 31547);
/* harmony import */ var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-arrow-drop-down */ 5197);
/* harmony import */ var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-menu */ 8527);
/* harmony import */ var _iconify_icons_ic_twotone_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-camera */ 62254);
/* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-phone */ 60217);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ 33848);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ 48535);
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ 40077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ 43410);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.component */ 64076);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @visurel/iconify-angular */ 68399);
/* harmony import */ var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.directive */ 90080);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slider */ 54436);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);

































function FormElementsComponent_mat_icon_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "mat-icon", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icIcon", ctx_r0.icVisibility);
} }
function FormElementsComponent_mat_icon_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "mat-icon", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icIcon", ctx_r1.icVisibilityOff);
} }
function FormElementsComponent_mat_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", state_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", state_r9.flag, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](state_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Population: ", state_r9.population, "");
} }
const _c0 = function () { return ["Forms", "Form Elements"]; };
class FormElementsComponent {
    constructor(cd) {
        this.cd = cd;
        this.selectCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl();
        this.inputType = 'password';
        this.visible = false;
        this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_7__.default;
        this.icCamera = _iconify_icons_ic_twotone_camera__WEBPACK_IMPORTED_MODULE_6__.default;
        this.icMenu = _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_5__.default;
        this.icArrowDropDown = _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_4__.default;
        this.icSmartphone = _iconify_icons_ic_twotone_smartphone__WEBPACK_IMPORTED_MODULE_2__.default;
        this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_3__.default;
        this.icVisibility = _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_0__.default;
        this.icVisibilityOff = _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_1__.default;
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_10__.default;
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl();
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
            }
        ];
        this.filteredStates$ = this.stateCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(state => state ? this.filterStates(state) : this.states.slice()));
    }
    ngOnInit() {
    }
    togglePassword() {
        if (this.visible) {
            this.inputType = 'password';
            this.visible = false;
            this.cd.markForCheck();
        }
        else {
            this.inputType = 'text';
            this.visible = true;
            this.cd.markForCheck();
        }
    }
    filterStates(name) {
        return this.states.filter(state => state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
}
FormElementsComponent.ɵfac = function FormElementsComponent_Factory(t) { return new (t || FormElementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef)); };
FormElementsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: FormElementsComponent, selectors: [["vex-form-elements"]], decls: 338, vars: 66, consts: [["current", "Form Elements"], ["fxFlex", "auto", 3, "crumbs"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ml-2"], [3, "icIcon"], ["vexContainer", "", 1, "p-gutter"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px"], ["fxFlex", "auto", 1, "card"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "px-6", "py-4", "border-b"], [1, "title", "m-0"], ["fxLayout", "column", 1, "px-6", "py-4"], ["matInput", "", "required", ""], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutGap", "16px", "fxLayoutGap.lt-sm", "0"], ["fxFlex", "auto"], ["matInput", ""], ["matInput", "", "required", "", "value", "Hello!", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], [3, "icIcon", 4, "ngIf"], ["disabled", "", "matInput", ""], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "8px"], ["mat-button", "", "type", "button"], ["color", "primary", "mat-raised-button", "", "type", "button"], ["fxFlex", "auto", 1, "card", "overflow-hidden"], ["matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 1, "text-secondary"], ["matInput", "", "value", "DavidSmith"], ["matSuffix", "", 3, "icIcon"], ["matPrefix", "", 1, "mr-2", 3, "icIcon"], ["matInput", "", "maxlength", "10", "required", ""], ["lengthHint", ""], ["align", "start"], ["align", "end"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["datepickerRef", ""], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", 1, "mt-5"], ["fxLayout", "column", 1, "px-6", "pt-4", "pb-0"], ["appearance", "fill", "color", "primary", 1, "vex-flex-form-field"], ["appearance", "fill", "color", "accent", 1, "vex-flex-form-field"], ["appearance", "fill", "color", "warn", 1, "vex-flex-form-field"], ["appearance", "outline", "color", "primary", 1, "vex-flex-form-field"], ["appearance", "outline", "color", "accent", 1, "vex-flex-form-field"], ["appearance", "outline", "color", "warn", 1, "vex-flex-form-field"], ["appearance", "standard", "color", "primary", 1, "vex-flex-form-field"], ["appearance", "standard", "color", "accent", 1, "vex-flex-form-field"], ["appearance", "standard", "color", "warn", 1, "vex-flex-form-field"], [1, "mt-0", "mb-4", "text-secondary"], ["matPrefix", ""], ["hintLabelInputRef", ""], ["matInput", "", "maxlength", "10"], ["hintLabelInputLengthRef", ""], ["fxFlex", "none", 1, "mt-0", "mb-4", "text-secondary"], ["fxFlex", "none"], ["value", "Apples"], ["value", "Peaches"], ["value", "Bananas"], ["value", "Mango"], ["fxFlex", "none", 3, "color"], [3, "formControl"], ["value", "primary"], ["value", "accent"], ["value", "warn"], ["matInput", "", "readonly", "", 3, "matDatepicker", "click", "focus"], ["formDatepickerRef", ""], ["value", "36", 3, "max", "min", "step", "thumbLabel", "tickInterval"], ["color", "primary", "value", "6", 3, "max", "min", "step"], ["color", "warn", "value", "7", 3, "max", "min", "step"], ["fxLayout", "column", "fxLayoutGap", "16px"], ["fxLayout", "row", "fxLayoutGap", "16px"], ["value", "Apples", 3, "checked"], ["color", "accent", "fxLayout", "row", "fxLayoutGap", "16px"], ["color", "primary", "value", "primary", 3, "checked"], ["color", "accent", "value", "accent"], ["color", "warn", "value", "warn"], ["fxLayout", "row", "fxLayoutAlign", "space-between"], ["fxLayout", "column", "fxLayoutGap", "8px"], [3, "checked"], ["fxLayout", "column", "fxLayoutAlign", "start end", "fxLayoutGap", "8px"], ["color", "primary", "labelPosition", "before", 3, "checked"], ["color", "accent", "labelPosition", "before", 3, "checked"], ["color", "warn", "labelPosition", "before", 3, "checked"], [3, "indeterminate"], ["align", "end", 3, "checked"], ["color", "primary", 3, "checked"], ["color", "accent", 3, "checked"], ["color", "warn", 3, "checked"], [3, "value"], ["height", "25", 1, "align-middle", "mr-4", "shadow-6", 3, "src"], [1, "body-1"], [1, "text-hint"], [1, "caption", "text-secondary"]], template: function FormElementsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "vex-secondary-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "vex-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Basic Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29, "New York");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, "Washington");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33, "Florida");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](36, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](37, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function FormElementsComponent_Template_button_click_38_listener() { return ctx.togglePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](39, FormElementsComponent_mat_icon_39_Template, 1, 1, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](40, FormElementsComponent_mat_icon_40_Template, 1, 1, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, "Try clicking the eye to toggle the visibility.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](45, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](46, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](51, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](55, "Advanced Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](59, "Select a State");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](60, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](61, "mat-autocomplete", null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](63, FormElementsComponent_mat_option_63_Template, 8, 4, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](64, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](65, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](66, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](67, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](68, "Add this hint for a better UX!");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](71, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](72, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](73, "mat-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](75, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](76, "Mobile Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](77, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](78, "mat-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](80, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](81, "Hint Label and Max Length");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](82, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "mat-hint", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](85, "Try to type in more than 10 letters");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "mat-hint", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](89, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](90, "Birthdate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](91, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](92, "mat-datepicker-toggle", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](93, "mat-datepicker", null, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](95, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](96, "Click on the icon to the right for a Datepicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](97, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](98, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](99, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](100, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](101, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](102, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](103, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](104, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](105, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](106, "Fill Input Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](107, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](108, "mat-form-field", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](109, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](110, "Primary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](111, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](112, "mat-form-field", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](113, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](114, "Accent Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](115, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](116, "mat-form-field", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](117, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](118, "Warn Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](119, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](120, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](121, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](122, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](123, "Outline Input Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](124, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](125, "mat-form-field", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](126, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](127, "Primary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](128, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](129, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](130, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](131, "Accent Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](132, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](133, "mat-form-field", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](134, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](135, "Warn Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](136, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](137, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](138, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](139, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](140, "Standard Input Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](141, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](142, "mat-form-field", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](143, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](144, "Primary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](145, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](146, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](147, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](148, "Accent Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](149, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](150, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](151, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](152, "Warn Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](153, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](154, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](155, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](156, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](157, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](158, "Form Prefix & Suffix");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](159, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](160, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](161, " Add a Prefix and Suffix to an input field, from text to icons or symbols, anything and any element can be set as prefix or suffix. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](162, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](163, "mat-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](164, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](165, "Input with prefix icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](166, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](167, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](168, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](169, "Input with suffix icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](170, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](171, "mat-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](172, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](173, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](174, "http:// \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](175, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](176, "Input with prefix text and suffix icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](177, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](178, "mat-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](179, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](180, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](181, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](182, "Form Hint Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](183, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](184, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](185, " When you need to display additional information to the user you can use Hint Labels to display information appropriately. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](186, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](187, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](188, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](189, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](190, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](191, "e.g. david@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](192, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](193, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](194, "Domain Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](195, "input", 13, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](197, "mat-hint", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](198);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](199, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](200, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](201, "Dynamic Hint Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](202, "input", 50, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](204, "mat-hint", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](205, "Try to type in more than 10 letters");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](206, "mat-hint", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](207);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](208, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](209, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](210, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](211, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](212, "Form Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](213, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](214, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](215, " A intuitive select component that displays the current position you are at and has smooth animations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](216, "mat-form-field", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](217, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](218, "Favorite fruit");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](219, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](220, "mat-option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](221, "Apples");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](222, "mat-option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](223, "Peaches");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](224, "mat-option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](225, "Bananas");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](226, "mat-option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](227, "Mango");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](228, "mat-option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](229, "Cucumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](230, "mat-form-field", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](231, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](232, "Themeable Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](233, "mat-select", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](234, "mat-option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](235, "Primary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](236, "mat-option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](237, "Accent Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](238, "mat-option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](239, "Warn Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](240, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](241, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](242, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](243, "Form Datepicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](244, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](245, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](246, " A Material styled Datepicker that allows for easy selection of any date with any format. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](247, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](248, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](249, "Select your date");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](250, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function FormElementsComponent_Template_input_click_250_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](255); return _r8.open(); })("focus", function FormElementsComponent_Template_input_focus_250_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](255); return _r8.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](251, "mat-datepicker-toggle", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](252, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](253, "Click on the input or the datepicker icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](254, "mat-datepicker", null, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](256, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](257, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](258, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](259, "Form Slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](260, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](261, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](262, " An component similiar to the range input with better usability and drag & drop + keyboard support. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](263, "mat-slider", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](264, "mat-slider", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](265, "mat-slider", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](266, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](267, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](268, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](269, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](270, "Form Radio Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](271, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](272, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](273, " When you need a user to decide between multiple options and have him only choose one, you can use a radio button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](274, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](275, "mat-radio-group", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](276, "mat-radio-button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](277, "Apples");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](278, "mat-radio-button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](279, "Peaches");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](280, "mat-radio-group", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](281, "mat-radio-button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](282, "Primary Color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](283, "mat-radio-button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](284, "Accent Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](285, "mat-radio-button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](286, "Warn Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](287, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](288, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](289, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](290, "Form Slide Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](291, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](292, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](293, " Allow the user to slide toggle an option or a value. You can either click or you can drag & drop the slide to change its state. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](294, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](295, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](296, "mat-slide-toggle", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](297, "Slide Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](298, "mat-slide-toggle", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](299, "Drag & Drop");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](300, "mat-slide-toggle", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](301, "I Agree");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](302, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](303, "mat-slide-toggle", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](304, "Primary Color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](305, "mat-slide-toggle", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](306, "Accent Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](307, "mat-slide-toggle", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](308, "Warn Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](309, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](310, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](311, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](312, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](313, "Form Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](314, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](315, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](316, " Allow for simple selecting and deselecting of options. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](317, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](318, "mat-checkbox", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](319, "Stay signed in");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](320, "mat-checkbox", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](321, "Indeterminate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](322, "mat-checkbox", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](323, "Align end");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](324, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](325, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](326, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](327, "Form Checkbox Theming");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](328, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](329, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](330, " Style checkbox elements with the Theme API. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](331, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](332, "mat-checkbox", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](333, "Primary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](334, "mat-checkbox", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](335, "Accent Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](336, "mat-checkbox", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](337, "Warn Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](62);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](83);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](94);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](196);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](203);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](255);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](65, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icIcon", ctx.icMoreVert);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@stagger", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("type", ctx.inputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formControl", ctx.stateCtrl)("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](64, 63, ctx.filteredStates$));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icIcon", ctx.icArrowDropDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icIcon", ctx.icPerson);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icIcon", ctx.icSmartphone);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _r4.value.length, "/10");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matDatepicker", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("for", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icIcon", ctx.icPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icIcon", ctx.icMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icIcon", ctx.icCamera);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("http://", _r6.value || "company", ".example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _r7.value.length, "/10");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("color", ctx.selectCtrl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formControl", ctx.selectCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matDatepicker", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("for", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("max", 100)("min", 0)("step", 1)("thumbLabel", true)("tickInterval", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("max", 10)("min", 0)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("max", 10)("min", 0)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("indeterminate", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", true);
    } }, directives: [_vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_11__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_12__.BreadcrumbsComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_21__.IconDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_13__.ContainerDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultLayoutAlignDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatHint, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatPrefix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepicker, _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSlider, _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioButton, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__.MatSlideToggle, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__.MatCheckbox], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWVsZW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_9__.stagger60ms,
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_8__.fadeInUp400ms
        ] }, changeDetection: 0 });


/***/ }),

/***/ 74539:
/*!**********************************************************************!*\
  !*** ./src/app/pages/ui/forms/form-elements/form-elements.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormElementsModule": function() { return /* binding */ FormElementsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-elements-routing.module */ 28211);
/* harmony import */ var _form_elements_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-elements.component */ 91438);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ 68399);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slider */ 54436);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 44241);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ 75592);
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ 7302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);





















class FormElementsModule {
}
FormElementsModule.ɵfac = function FormElementsModule_Factory(t) { return new (t || FormElementsModule)(); };
FormElementsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: FormElementsModule });
FormElementsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormElementsRoutingModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__.IconModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatNativeDateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__.MatSliderModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__.MatSlideToggleModule,
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule,
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_4__.ContainerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FormElementsModule, { declarations: [_form_elements_component__WEBPACK_IMPORTED_MODULE_1__.FormElementsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormElementsRoutingModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__.IconModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatNativeDateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__.MatSliderModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__.MatSlideToggleModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_4__.ContainerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_forms_form-elements_form-elements_module_ts-es2015.js.map