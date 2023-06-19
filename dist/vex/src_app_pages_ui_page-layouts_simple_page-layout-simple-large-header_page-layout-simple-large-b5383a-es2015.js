(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_page-layouts_simple_page-layout-simple-large-header_page-layout-simple-large-b5383a"],{

/***/ 32073:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header-routing.module.ts ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutSimpleLargeHeaderRoutingModule": function() { return /* binding */ PageLayoutSimpleLargeHeaderRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 85530);
/* harmony import */ var _page_layout_simple_large_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout-simple-large-header.component */ 88450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);





const routes = [
    {
        path: '',
        component: _page_layout_simple_large_header_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleLargeHeaderComponent,
        data: {
            toolbarShadowEnabled: true
        }
    }
];
class PageLayoutSimpleLargeHeaderRoutingModule {
}
PageLayoutSimpleLargeHeaderRoutingModule.ɵfac = function PageLayoutSimpleLargeHeaderRoutingModule_Factory(t) { return new (t || PageLayoutSimpleLargeHeaderRoutingModule)(); };
PageLayoutSimpleLargeHeaderRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PageLayoutSimpleLargeHeaderRoutingModule });
PageLayoutSimpleLargeHeaderRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageLayoutSimpleLargeHeaderRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 88450:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.component.ts ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutSimpleLargeHeaderComponent": function() { return /* binding */ PageLayoutSimpleLargeHeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout.component */ 32237);
/* harmony import */ var _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout-header.directive */ 27087);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../@vex/directives/container/container.directive */ 90080);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.component */ 64076);
/* harmony import */ var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout-content.directive */ 19199);
/* harmony import */ var _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../page-layout-demo/page-layout-demo.component */ 32072);








const _c0 = function () { return ["Page Layouts", "Simple", "Large Header"]; };
class PageLayoutSimpleLargeHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageLayoutSimpleLargeHeaderComponent.ɵfac = function PageLayoutSimpleLargeHeaderComponent_Factory(t) { return new (t || PageLayoutSimpleLargeHeaderComponent)(); };
PageLayoutSimpleLargeHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PageLayoutSimpleLargeHeaderComponent, selectors: [["vex-page-layout-simple-large-header"]], decls: 8, vars: 2, consts: [["fxLayout", "column", "fxLayoutAlign", "center start"], ["vexContainer", ""], [1, "title", "m-0"], [3, "crumbs"]], template: function PageLayoutSimpleLargeHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "vex-page-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "vex-page-layout-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Simple - Large Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "vex-breadcrumbs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "vex-page-layout-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "vex-page-layout-demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutComponent, _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__.PageLayoutHeaderDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_2__.ContainerDirective, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutContentDirective, _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_5__.PageLayoutDemoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxheW91dC1zaW1wbGUtbGFyZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 20986:
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.module.ts ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutSimpleLargeHeaderModule": function() { return /* binding */ PageLayoutSimpleLargeHeaderModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _page_layout_simple_large_header_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout-simple-large-header-routing.module */ 32073);
/* harmony import */ var _page_layout_simple_large_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-layout-simple-large-header.component */ 88450);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout.module */ 46383);
/* harmony import */ var _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../page-layout-demo/page-layout-demo.module */ 58345);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 44241);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ 75592);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../@vex/directives/container/container.module */ 7302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);










class PageLayoutSimpleLargeHeaderModule {
}
PageLayoutSimpleLargeHeaderModule.ɵfac = function PageLayoutSimpleLargeHeaderModule_Factory(t) { return new (t || PageLayoutSimpleLargeHeaderModule)(); };
PageLayoutSimpleLargeHeaderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PageLayoutSimpleLargeHeaderModule });
PageLayoutSimpleLargeHeaderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _page_layout_simple_large_header_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleLargeHeaderRoutingModule,
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
            _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutDemoModule,
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule,
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule,
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PageLayoutSimpleLargeHeaderModule, { declarations: [_page_layout_simple_large_header_component__WEBPACK_IMPORTED_MODULE_1__.PageLayoutSimpleLargeHeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _page_layout_simple_large_header_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleLargeHeaderRoutingModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
        _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutDemoModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule,
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_page-layouts_simple_page-layout-simple-large-header_page-layout-simple-large-b5383a-es2015.js.map