(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_components_components-buttons_components-buttons_module_ts"],{

/***/ 45052:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-buttons/components-buttons-routing.module.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsButtonsRoutingModule": function() { return /* binding */ ComponentsButtonsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 85530);
/* harmony import */ var _components_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-buttons.component */ 42498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);





const routes = [
    {
        path: '',
        component: _components_buttons_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsButtonsComponent
    }
];
class ComponentsButtonsRoutingModule {
}
ComponentsButtonsRoutingModule.ɵfac = function ComponentsButtonsRoutingModule_Factory(t) { return new (t || ComponentsButtonsRoutingModule)(); };
ComponentsButtonsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ComponentsButtonsRoutingModule });
ComponentsButtonsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComponentsButtonsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 42498:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-buttons/components-buttons.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsButtonsComponent": function() { return /* binding */ ComponentsButtonsComponent; }
/* harmony export */ });
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ 49597);
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ 16496);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ 33848);
/* harmony import */ var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-settings */ 4485);
/* harmony import */ var _iconify_icons_ic_twotone_archive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-archive */ 62839);
/* harmony import */ var _iconify_icons_ic_twotone_favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-favorite */ 90378);
/* harmony import */ var _iconify_icons_ic_twotone_grade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-grade */ 65243);
/* harmony import */ var _iconify_icons_fa_brands_facebook_f__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-fa-brands/facebook-f */ 44701);
/* harmony import */ var _iconify_icons_fa_brands_twitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-fa-brands/twitter */ 41630);
/* harmony import */ var _iconify_icons_fa_brands_instagram__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-fa-brands/instagram */ 12246);
/* harmony import */ var _iconify_icons_fa_brands_pinterest_p__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-fa-brands/pinterest-p */ 89893);
/* harmony import */ var _iconify_icons_fa_brands_github__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-fa-brands/github */ 45182);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ 48535);
/* harmony import */ var _static_data_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../static-data/colors */ 49145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.component */ 32237);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ 43410);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.component */ 64076);
/* harmony import */ var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout-content.directive */ 19199);
/* harmony import */ var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.directive */ 90080);
/* harmony import */ var _components_overview_components_components_overview_buttons_components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components-overview/components/components-overview-buttons/components-overview-buttons.component */ 35291);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @visurel/iconify-angular */ 68399);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);



























const _c0 = function (a0, a1) { return [a0, a1]; };
const _c1 = function (a0) { return [a0]; };
function ComponentsButtonsComponent_ng_container_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](8, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](10, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const color_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction2"](12, _c0, color_r1.backgroundColor, color_r1.backgroundContrastColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](4, 6, color_r1.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", color_r1.textColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](7, 8, color_r1.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](15, _c1, "text-" + color_r1.label + "-500"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](10, 10, color_r1.label));
} }
const _c2 = function () { return ["Components", "Buttons"]; };
class ComponentsButtonsComponent {
    constructor() {
        this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3__.default;
        this.icArchive = _iconify_icons_ic_twotone_archive__WEBPACK_IMPORTED_MODULE_4__.default;
        this.icFavorite = _iconify_icons_ic_twotone_favorite__WEBPACK_IMPORTED_MODULE_5__.default;
        this.icGrade = _iconify_icons_ic_twotone_grade__WEBPACK_IMPORTED_MODULE_6__.default;
        this.faFacebook = _iconify_icons_fa_brands_facebook_f__WEBPACK_IMPORTED_MODULE_7__.default;
        this.faTwitter = _iconify_icons_fa_brands_twitter__WEBPACK_IMPORTED_MODULE_8__.default;
        this.faPinterest = _iconify_icons_fa_brands_pinterest_p__WEBPACK_IMPORTED_MODULE_10__.default;
        this.faInstagram = _iconify_icons_fa_brands_instagram__WEBPACK_IMPORTED_MODULE_9__.default;
        this.faGithub = _iconify_icons_fa_brands_github__WEBPACK_IMPORTED_MODULE_11__.default;
        this.colors = _static_data_colors__WEBPACK_IMPORTED_MODULE_13__.colors;
    }
    ngOnInit() {
    }
}
ComponentsButtonsComponent.ɵfac = function ComponentsButtonsComponent_Factory(t) { return new (t || ComponentsButtonsComponent)(); };
ComponentsButtonsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({ type: ComponentsButtonsComponent, selectors: [["vex-components-buttons"]], decls: 172, vars: 39, consts: [["current", "Buttons"], [3, "crumbs"], ["vexContainer", ""], [1, "block"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "title", "mt-6", "mb-4"], [1, "w-10", "h-10", "rounded-full", "text-primary", "ltr:mr-3", "rtl:ml-3", "flex", "items-center", "justify-center", "bg-primary-light"], ["size", "20px", 3, "icon"], ["fxLayout", "row", "fxLayoutGap", "20px"], ["fxFlex", "", 1, "card"], [1, "px-6", "py-4", "border-b"], [1, "title"], [1, "px-6", "py-4"], [1, "body-2", "text-secondary", "m-0"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutAlign.lt-sm", "start center", "fxLayoutGap", "12px", 1, "bg-base", "rounded-tr", "rounded-br", "border-l-3", "p-4", "mt-3"], ["color", "primary", "mat-raised-button", "", "type", "button"], ["color", "accent", "mat-raised-button", "", "type", "button"], ["color", "warn", "mat-raised-button", "", "type", "button"], ["disabled", "", "mat-raised-button", "", "type", "button"], ["color", "primary", "mat-stroked-button", "", "type", "button"], ["color", "accent", "mat-stroked-button", "", "type", "button"], ["color", "warn", "mat-stroked-button", "", "type", "button"], ["disabled", "", "mat-stroked-button", "", "type", "button"], ["color", "primary", "mat-button", "", "type", "button"], ["color", "accent", "mat-button", "", "type", "button"], ["color", "warn", "mat-button", "", "type", "button"], ["disabled", "", "mat-button", "", "type", "button"], [1, "body-2", "text-secondary", "mt-8", "mb-0"], [4, "ngFor", "ngForOf"], [1, "title", "m-0"], ["inline", "true", "size", "24px", 1, "ltr:-ml-1", "rtl:-mr-1", "ltr:mr-2", "rtl:ml-2", 3, "icon"], ["color", "primary", "mat-raised-button", "", "type", "button", 1, "rounded-full"], ["color", "primary", "mat-stroked-button", "", "type", "button", 1, "rounded-full"], ["color", "primary", "mat-button", "", "type", "button", 1, "rounded-full"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutAlign", "start center", "fxLayoutAlign.lt-sm", "start center", "fxLayoutGap", "12px", 1, "bg-base", "rounded-tr", "rounded-br", "border-l-3", "p-4", "mt-3"], ["inline", "true", "size", "16px", 1, "ltr:-ml-2", "rtl:-mr-2", "ltr:mr-2", "rtl:ml-2", 3, "icon"], ["color", "primary", "mat-stroked-button", "", "type", "button", 1, "rounded-full", "py-2", "px-6", "title"], ["inline", "true", "size", "28px", 1, "ltr:-ml-2", "rtl:-mr-2", "ltr:mr-2", "rtl:ml-2", 3, "icon"], ["color", "primary", "mat-raised-button", "", "type", "button", 1, "rounded-full", "py-2", "px-6", "title"], ["fxLayout", "row wrap", "fxLayoutAlign.lt-sm", "center start", "fxLayoutGap", "12px", 1, "bg-base", "rounded-tr", "rounded-br", "border-l-3", "p-4", "pt-1"], ["mat-raised-button", "", "type", "button", 1, "bg-facebook", "text-white", "rounded-full", "mt-3"], ["inline", "true", "size", "20px", 1, "ltr:-ml-1", "rtl:-mr-1", "ltr:mr-2", "rtl:ml-2", 3, "icon"], ["mat-raised-button", "", "type", "button", 1, "bg-twitter", "text-white", "rounded-full", "mt-3"], ["mat-raised-button", "", "type", "button", 1, "bg-pinterest", "text-white", "rounded-full", "mt-3"], ["mat-raised-button", "", "type", "button", 1, "bg-instagram", "text-white", "rounded-full", "mt-3"], ["mat-raised-button", "", "type", "button", 1, "bg-github", "text-white", "rounded-full", "mt-3"], ["mat-raised-button", "", "type", "button", 1, "bg-facebook", "text-white", "mt-3"], ["mat-raised-button", "", "type", "button", 1, "bg-twitter", "text-white", "mt-3"], ["mat-raised-button", "", "type", "button", 1, "bg-pinterest", "text-white", "mt-3"], ["mat-raised-button", "", "type", "button", 1, "bg-instagram", "text-white", "mt-3"], ["mat-raised-button", "", "type", "button", 1, "bg-github", "text-white", "mt-3"], ["color", "primary", "mat-icon-button", "", "type", "button"], [3, "icIcon"], ["color", "accent", "mat-icon-button", "", "type", "button"], ["color", "warn", "mat-icon-button", "", "type", "button"], ["color", "primary", "mat-mini-fab", "", "type", "button"], ["color", "accent", "mat-mini-fab", "", "type", "button"], ["color", "warn", "mat-mini-fab", "", "type", "button"], ["color", "primary", "mat-fab", "", "type", "button"], ["color", "accent", "mat-fab", "", "type", "button"], ["color", "warn", "mat-fab", "", "type", "button"], ["mat-raised-button", "", "type", "button", 1, "mt-3", 3, "ngClass"], ["mat-stroked-button", "", "type", "button", 1, "mt-3", 3, "ngClass"], ["mat-button", "", "type", "button", 1, "mt-3", 3, "ngClass"]], template: function ComponentsButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "vex-page-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "vex-secondary-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "vex-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "vex-page-layout-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](4, "vex-components-overview-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](7, "ic-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](9, "Button Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](13, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](14, "Button Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](16, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](17, "Material Buttons:");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](20, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](22, "Accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](24, "Warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](26, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](29, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](31, "Accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](32, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](33, "Warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](34, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](35, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](37, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](38, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](39, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](40, "Accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](41, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](42, "Warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](43, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](44, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](45, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](46, "Colors:");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](47, ComponentsButtonsComponent_ng_container_47_Template, 11, 17, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](50, "h2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](51, "Buttons with Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](52, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](53, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](54, "Default Buttons with Icons:");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](56, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](57, "ic-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](59, "Raised");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](60, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](61, "ic-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](63, "Stroked");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](64, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](65, "ic-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](67, "Flat");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](68, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](69, "Pill Buttons with Icons:");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](70, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](71, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](72, "ic-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](74, "Raised");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](75, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](76, "ic-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](78, "Stroked");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](79, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](80, "ic-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](82, "Flat");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](83, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](84, "Size Icons & Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](85, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](86, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](87, "ic-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](89, "Raised");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](90, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](91, "ic-icon", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](93, "Stroked");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](94, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](95, "ic-icon", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](97, "Raised");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](98, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](99, "ic-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](101, "Flat");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](102, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](103, "Social Network pill buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](104, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](105, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](106, "ic-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](107, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](108, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](109, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](110, "ic-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](112, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](113, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](114, "ic-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](115, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](116, "Pinterest");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](117, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](118, "ic-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](119, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](120, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](121, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](122, "ic-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](124, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](125, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](126, "Social Network square buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](127, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](128, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](129, "ic-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](130, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](131, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](132, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](133, "ic-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](135, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](136, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](137, "ic-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](138, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](139, "Pinterest");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](140, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](141, "ic-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](142, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](143, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](144, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](145, "ic-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](146, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](147, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](148, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](149, "Icon Buttons:");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](150, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](151, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](152, "mat-icon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](153, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](154, "mat-icon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](155, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](156, "mat-icon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](157, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](158, "mat-icon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](159, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](160, "mat-icon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](161, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](162, "mat-icon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](163, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](164, "FAB Buttons:");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](165, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](166, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](167, "mat-icon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](168, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](169, "mat-icon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](170, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](171, "mat-icon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("@stagger", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction0"](38, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("@scaleIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.icSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("@fadeInRight", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.icArchive);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.icArchive);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.icArchive);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.icGrade);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.icGrade);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.icGrade);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.faFacebook);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.faTwitter);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.faPinterest);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.faInstagram);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.faGithub);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.faFacebook);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.faTwitter);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.faPinterest);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.faInstagram);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icon", ctx.faGithub);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("icIcon", ctx.icFavorite);
    } }, directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_14__.PageLayoutComponent, _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_15__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_16__.BreadcrumbsComponent, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_17__.PageLayoutContentDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_18__.ContainerDirective, _components_overview_components_components_overview_buttons_components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_19__.ComponentsOverviewButtonsComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultLayoutAlignDirective, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_22__.IconDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__.DefaultClassDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.UpperCasePipe], styles: [".bg-facebook[_ngcontent-%COMP%] {\n  background: #3b5998;\n  color: white;\n}\n\n.bg-twitter[_ngcontent-%COMP%] {\n  background: #00aced;\n  color: white;\n}\n\n.bg-instagram[_ngcontent-%COMP%] {\n  background: #cd486b;\n  color: white;\n}\n\n.bg-pinterest[_ngcontent-%COMP%] {\n  background: #C92228;\n  color: white;\n}\n\n.bg-github[_ngcontent-%COMP%] {\n  background: #000;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMtYnV0dG9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLG1CQVBlO0VBUWYsWUFBQTtBQU5GOztBQVNBO0VBQ0UsbUJBWGM7RUFZZCxZQUFBO0FBTkY7O0FBU0E7RUFDRSxtQkFmZ0I7RUFnQmhCLFlBQUE7QUFORjs7QUFTQTtFQUNFLG1CQW5CZ0I7RUFvQmhCLFlBQUE7QUFORjs7QUFTQTtFQUNFLGdCQXZCYTtFQXdCYixZQUFBO0FBTkYiLCJmaWxlIjoiY29tcG9uZW50cy1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU29jaWFsXHJcbiRjb2xvci1mYWNlYm9vazogIzNiNTk5ODtcclxuJGNvbG9yLXR3aXR0ZXI6ICMwMGFjZWQ7XHJcbiRjb2xvci1pbnN0YWdyYW06ICNjZDQ4NmI7XHJcbiRjb2xvci1waW50ZXJlc3Q6ICNDOTIyMjg7XHJcbiRjb2xvci1naXRodWI6ICMwMDA7XHJcblxyXG4uYmctZmFjZWJvb2sge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1mYWNlYm9vaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5iZy10d2l0dGVyIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItdHdpdHRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5iZy1pbnN0YWdyYW0ge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1pbnN0YWdyYW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmctcGludGVyZXN0IHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItcGludGVyZXN0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJnLWdpdGh1YiB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWdpdGh1YjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"], data: { animation: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_12__.stagger80ms,
            _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_0__.scaleIn400ms,
            _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_1__.fadeInRight400ms,
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInUp400ms
        ] } });


/***/ }),

/***/ 68235:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-buttons/components-buttons.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsButtonsModule": function() { return /* binding */ ComponentsButtonsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_buttons_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-buttons-routing.module */ 45052);
/* harmony import */ var _components_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components-buttons.component */ 42498);
/* harmony import */ var _components_overview_components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components-overview/components/components-overview-buttons/components-overview-buttons.module */ 10419);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.module */ 46383);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 44241);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ 75592);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ 68399);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ 7302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);













class ComponentsButtonsModule {
}
ComponentsButtonsModule.ɵfac = function ComponentsButtonsModule_Factory(t) { return new (t || ComponentsButtonsModule)(); };
ComponentsButtonsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ComponentsButtonsModule });
ComponentsButtonsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _components_buttons_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsButtonsRoutingModule,
            _components_overview_components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsOverviewButtonsModule,
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutModule,
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule,
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__.IconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ComponentsButtonsModule, { declarations: [_components_buttons_component__WEBPACK_IMPORTED_MODULE_1__.ComponentsButtonsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _components_buttons_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsButtonsRoutingModule,
        _components_overview_components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsOverviewButtonsModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__.IconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule] }); })();


/***/ }),

/***/ 49145:
/*!***********************************!*\
  !*** ./src/static-data/colors.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colors": function() { return /* binding */ colors; }
/* harmony export */ });
const colors = [
    {
        label: 'red',
        backgroundColor: 'bg-red',
        backgroundContrastColor: 'text-contrast-white',
        textColor: 'text-red'
    },
    {
        label: 'green',
        backgroundColor: 'bg-green',
        backgroundContrastColor: 'text-contrast-white',
        textColor: 'text-green'
    },
    {
        label: 'amber',
        backgroundColor: 'bg-amber',
        backgroundContrastColor: 'text-contrast-black',
        textColor: 'text-amber'
    },
    {
        label: 'orange',
        backgroundColor: 'bg-orange',
        backgroundContrastColor: 'text-contrast-black',
        textColor: 'text-orange'
    },
    {
        label: 'deep-orange',
        backgroundColor: 'bg-deep-orange',
        backgroundContrastColor: 'text-contrast-white',
        textColor: 'text-deep-orange'
    },
    {
        label: 'purple',
        backgroundColor: 'bg-purple',
        backgroundContrastColor: 'text-contrast-white',
        textColor: 'text-purple'
    },
    {
        label: 'deep-purple',
        backgroundColor: 'bg-deep-purple',
        backgroundContrastColor: 'text-contrast-white',
        textColor: 'text-deep-purple'
    },
    {
        label: 'cyan',
        backgroundColor: 'bg-cyan',
        backgroundContrastColor: 'text-contrast-black',
        textColor: 'text-cyan'
    },
    {
        label: 'teal',
        backgroundColor: 'bg-teal',
        backgroundContrastColor: 'text-contrast-white',
        textColor: 'text-teal'
    },
    {
        label: 'gray',
        backgroundColor: 'bg-gray',
        backgroundContrastColor: 'text-contrast-black',
        textColor: 'text-gray'
    }
];


/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_components_components-buttons_components-buttons_module_ts-es2015.js.map