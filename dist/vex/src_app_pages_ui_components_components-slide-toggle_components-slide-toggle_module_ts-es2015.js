(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_components_components-slide-toggle_components-slide-toggle_module_ts"],{

/***/ 5024:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle-routing.module.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsSlideToggleRoutingModule": function() { return /* binding */ ComponentsSlideToggleRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 85530);
/* harmony import */ var _components_slide_toggle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-slide-toggle.component */ 61109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);





const routes = [
    {
        path: '',
        component: _components_slide_toggle_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsSlideToggleComponent
    }
];
class ComponentsSlideToggleRoutingModule {
}
ComponentsSlideToggleRoutingModule.ɵfac = function ComponentsSlideToggleRoutingModule_Factory(t) { return new (t || ComponentsSlideToggleRoutingModule)(); };
ComponentsSlideToggleRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ComponentsSlideToggleRoutingModule });
ComponentsSlideToggleRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComponentsSlideToggleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 61109:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsSlideToggleComponent": function() { return /* binding */ ComponentsSlideToggleComponent; }
/* harmony export */ });
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ 48535);
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ 49597);
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ 16496);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ 33848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.component */ 32237);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ 43410);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.component */ 64076);
/* harmony import */ var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout-content.directive */ 19199);
/* harmony import */ var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.directive */ 90080);
/* harmony import */ var _components_overview_components_components_overview_slide_toggle_components_overview_slide_toggle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components-overview/components/components-overview-slide-toggle/components-overview-slide-toggle.component */ 41144);











const _c0 = function () { return ["Components", "Slide Toggle"]; };
class ComponentsSlideToggleComponent {
    constructor() { }
    ngOnInit() {
    }
}
ComponentsSlideToggleComponent.ɵfac = function ComponentsSlideToggleComponent_Factory(t) { return new (t || ComponentsSlideToggleComponent)(); };
ComponentsSlideToggleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ComponentsSlideToggleComponent, selectors: [["vex-components-slide-toggle"]], decls: 5, vars: 4, consts: [["current", "Slide Toggle"], [3, "crumbs"], ["vexContainer", ""], [1, "block"]], template: function ComponentsSlideToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "vex-page-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "vex-secondary-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "vex-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "vex-page-layout-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "vex-components-overview-slide-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@stagger", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeInUp", undefined);
    } }, directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_4__.PageLayoutComponent, _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_5__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_7__.PageLayoutContentDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_8__.ContainerDirective, _components_overview_components_components_overview_slide_toggle_components_overview_slide_toggle_component__WEBPACK_IMPORTED_MODULE_9__.ComponentsOverviewSlideToggleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzLXNsaWRlLXRvZ2dsZS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_0__.stagger80ms,
            _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__.scaleIn400ms,
            _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInRight400ms,
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInUp400ms
        ] } });


/***/ }),

/***/ 40034:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsSlideToggleModule": function() { return /* binding */ ComponentsSlideToggleModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_slide_toggle_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-slide-toggle-routing.module */ 5024);
/* harmony import */ var _components_slide_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components-slide-toggle.component */ 61109);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ 75592);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 44241);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.module */ 46383);
/* harmony import */ var _components_overview_components_components_overview_slide_toggle_components_overview_slide_toggle_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components-overview/components/components-overview-slide-toggle/components-overview-slide-toggle.module */ 73983);
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ 7302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);









class ComponentsSlideToggleModule {
}
ComponentsSlideToggleModule.ɵfac = function ComponentsSlideToggleModule_Factory(t) { return new (t || ComponentsSlideToggleModule)(); };
ComponentsSlideToggleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ComponentsSlideToggleModule });
ComponentsSlideToggleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _components_slide_toggle_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsSlideToggleRoutingModule,
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbsModule,
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule,
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutModule,
            _components_overview_components_components_overview_slide_toggle_components_overview_slide_toggle_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsOverviewSlideToggleModule,
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ComponentsSlideToggleModule, { declarations: [_components_slide_toggle_component__WEBPACK_IMPORTED_MODULE_1__.ComponentsSlideToggleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _components_slide_toggle_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsSlideToggleRoutingModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbsModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutModule,
        _components_overview_components_components_overview_slide_toggle_components_overview_slide_toggle_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsOverviewSlideToggleModule,
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_components_components-slide-toggle_components-slide-toggle_module_ts-es2015.js.map