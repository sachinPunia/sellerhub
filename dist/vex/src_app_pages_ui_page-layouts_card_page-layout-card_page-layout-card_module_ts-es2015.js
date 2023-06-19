(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_page-layouts_card_page-layout-card_page-layout-card_module_ts"],{

/***/ 64897:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card-routing.module.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutCardRoutingModule": function() { return /* binding */ PageLayoutCardRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 85530);
/* harmony import */ var _page_layout_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout-card.component */ 87077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);





const routes = [
    {
        path: '',
        component: _page_layout_card_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutCardComponent
    }
];
class PageLayoutCardRoutingModule {
}
PageLayoutCardRoutingModule.ɵfac = function PageLayoutCardRoutingModule_Factory(t) { return new (t || PageLayoutCardRoutingModule)(); };
PageLayoutCardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PageLayoutCardRoutingModule });
PageLayoutCardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageLayoutCardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 87077:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutCardComponent": function() { return /* binding */ PageLayoutCardComponent; }
/* harmony export */ });
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ 40077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout.component */ 32237);
/* harmony import */ var _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout-header.directive */ 27087);
/* harmony import */ var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout-content.directive */ 19199);
/* harmony import */ var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../@vex/directives/container/container.directive */ 90080);
/* harmony import */ var _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../page-layout-demo/page-layout-demo.component */ 32072);







class PageLayoutCardComponent {
    constructor() {
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_0__.default;
    }
    ngOnInit() {
    }
}
PageLayoutCardComponent.ɵfac = function PageLayoutCardComponent_Factory(t) { return new (t || PageLayoutCardComponent)(); };
PageLayoutCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PageLayoutCardComponent, selectors: [["vex-page-layout-card"]], decls: 7, vars: 0, consts: [["mode", "card"], [1, "h-6"], ["vexContainer", ""], [1, "card", "p-6"], [1, "m-0", "title", "mb-6"]], template: function PageLayoutCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "vex-page-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "vex-page-layout-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "vex-page-layout-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Blog Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "vex-page-layout-demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } }, directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_1__.PageLayoutComponent, _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_2__.PageLayoutHeaderDirective, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__.PageLayoutContentDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_4__.ContainerDirective, _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_5__.PageLayoutDemoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxheW91dC1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 91455:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutCardModule": function() { return /* binding */ PageLayoutCardModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _page_layout_card_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout-card-routing.module */ 64897);
/* harmony import */ var _page_layout_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-layout-card.component */ 87077);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout.module */ 46383);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ 75592);
/* harmony import */ var _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../page-layout-demo/page-layout-demo.module */ 58345);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 44241);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ 68399);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../@vex/directives/container/container.module */ 7302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);













class PageLayoutCardModule {
}
PageLayoutCardModule.ɵfac = function PageLayoutCardModule_Factory(t) { return new (t || PageLayoutCardModule)(); };
PageLayoutCardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PageLayoutCardModule });
PageLayoutCardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _page_layout_card_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutCardRoutingModule,
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
            _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutDemoModule,
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_5__.SecondaryToolbarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__.IconModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PageLayoutCardModule, { declarations: [_page_layout_card_component__WEBPACK_IMPORTED_MODULE_1__.PageLayoutCardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _page_layout_card_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutCardRoutingModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutDemoModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_5__.SecondaryToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__.IconModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_page-layouts_card_page-layout-card_page-layout-card_module_ts-es2015.js.map