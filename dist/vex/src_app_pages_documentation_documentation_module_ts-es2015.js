(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_documentation_documentation_module_ts"],{

/***/ 2150:
/*!*********************************************************************!*\
  !*** ./src/app/pages/documentation/documentation-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentationRoutingModule": function() { return /* binding */ DocumentationRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 85530);
/* harmony import */ var _documentation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentation.component */ 96661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);





const routes = [
    {
        path: 'changelog',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_documentation_changelog_changelog_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./changelog/changelog.module */ 63140)).then(m => m.ChangelogModule),
        data: {
            containerEnabled: true,
        },
    },
    {
        path: '',
        data: {
            containerEnabled: true,
        },
        children: [
            {
                path: '',
                redirectTo: 'introduction'
            },
            {
                path: 'introduction',
                component: _documentation_component__WEBPACK_IMPORTED_MODULE_0__.DocumentationComponent,
            },
            {
                path: 'folder-structure',
                component: _documentation_component__WEBPACK_IMPORTED_MODULE_0__.DocumentationComponent
            },
            {
                path: 'installation',
                component: _documentation_component__WEBPACK_IMPORTED_MODULE_0__.DocumentationComponent
            },
            {
                path: 'changing-styling-and-css-variables',
                component: _documentation_component__WEBPACK_IMPORTED_MODULE_0__.DocumentationComponent
            },
            {
                path: 'using-custom-colors-for-the-primarysecondarywarn-palettes',
                component: _documentation_component__WEBPACK_IMPORTED_MODULE_0__.DocumentationComponent
            },
            {
                path: 'build-for-production',
                component: _documentation_component__WEBPACK_IMPORTED_MODULE_0__.DocumentationComponent
            },
            {
                path: 'start-development-server',
                component: _documentation_component__WEBPACK_IMPORTED_MODULE_0__.DocumentationComponent
            },
            {
                path: 'further-help',
                component: _documentation_component__WEBPACK_IMPORTED_MODULE_0__.DocumentationComponent
            },
            {
                path: 'configuration',
                component: _documentation_component__WEBPACK_IMPORTED_MODULE_0__.DocumentationComponent
            },
            {
                path: 'adding-menu-items',
                component: _documentation_component__WEBPACK_IMPORTED_MODULE_0__.DocumentationComponent
            },
        ]
    }
];
class DocumentationRoutingModule {
}
DocumentationRoutingModule.ɵfac = function DocumentationRoutingModule_Factory(t) { return new (t || DocumentationRoutingModule)(); };
DocumentationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DocumentationRoutingModule });
DocumentationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DocumentationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 96661:
/*!****************************************************************!*\
  !*** ./src/app/pages/documentation/documentation.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentationComponent": function() { return /* binding */ DocumentationComponent; }
/* harmony export */ });
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ 40077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@vex/components/page-layout/page-layout.component */ 32237);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ 43410);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@vex/components/breadcrumbs/breadcrumbs.component */ 64076);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ 68399);
/* harmony import */ var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@vex/components/page-layout/page-layout-content.directive */ 19199);
/* harmony import */ var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@vex/directives/container/container.directive */ 90080);
/* harmony import */ var ngx_showdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-showdown */ 96394);












const _c0 = function () { return ["Documentation", "Vex"]; };
class DocumentationComponent {
    constructor() {
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_0__.default;
    }
    ngOnInit() {
    }
}
DocumentationComponent.ɵfac = function DocumentationComponent_Factory(t) { return new (t || DocumentationComponent)(); };
DocumentationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DocumentationComponent, selectors: [["vex-documentation"]], decls: 8, vars: 3, consts: [["current", "Documentation"], ["fxFlex", "auto", 3, "crumbs"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ml-2"], [3, "icIcon"], ["vexContainer", ""], [1, "card", "p-gutter", "relative"], ["src", "/README.md"]], template: function DocumentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "vex-page-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "vex-secondary-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "vex-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "vex-page-layout-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "showdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icIcon", ctx.icMoreVert);
    } }, directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_1__.PageLayoutComponent, _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__.IconDirective, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutContentDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_5__.ContainerDirective, ngx_showdown__WEBPACK_IMPORTED_MODULE_11__.ShowdownComponent, ngx_showdown__WEBPACK_IMPORTED_MODULE_11__.SourceDirective], styles: ["vex-documentation vex-page-layout-content showdown a {\n  color: rgb(var(--color-primary));\n}\n\n  vex-documentation vex-page-layout-content showdown > *:first-child {\n  margin-top: 0 !important;\n}\n\n  vex-documentation vex-page-layout-content h1,   vex-documentation vex-page-layout-content h2 {\n  border-bottom: 1px solid var(--foreground-divider);\n  padding-bottom: 0.3em;\n}\n\n  vex-documentation vex-page-layout-content h1,   vex-documentation vex-page-layout-content h2,   vex-documentation vex-page-layout-content h3,   vex-documentation vex-page-layout-content h4,   vex-documentation vex-page-layout-content h5,   vex-documentation vex-page-layout-content h6 {\n  font-weight: var(--font-weight-medium) !important;\n  margin-bottom: var(--padding-16);\n  margin-top: 32px;\n}\n\n  vex-documentation vex-page-layout-content p,   vex-documentation vex-page-layout-content ul,   vex-documentation vex-page-layout-content li {\n  font-size: 15px !important;\n  line-height: 1.5 !important;\n  margin: 1rem 0;\n}\n\n  vex-documentation vex-page-layout-content strong {\n  font-weight: 500;\n}\n\n  vex-documentation vex-page-layout-content code.typescript {\n  display: block;\n}\n\n  vex-documentation vex-page-layout-content table {\n  border: 1px solid var(--foreground-divider);\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 15px;\n}\n\n  vex-documentation vex-page-layout-content table tr {\n  background-color: var(--background-card);\n  border-top: 1px solid var(--foreground-divider);\n}\n\n  vex-documentation vex-page-layout-content table tr:nth-child(2n) {\n  background-color: var(--background-app-bar);\n}\n\n  vex-documentation vex-page-layout-content table td,   vex-documentation vex-page-layout-content table th {\n  border-left: 1px solid var(--foreground-divider);\n  padding: var(--padding-12) var(--padding-16);\n}\n\n  vex-documentation vex-page-layout-content table td:first-child,   vex-documentation vex-page-layout-content table th:first-child {\n  border-left: none;\n}\n\n  vex-documentation vex-page-layout-content table th {\n  font-weight: var(--font-weight-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR007RUFDRSxnQ0FBQTtBQUZSOztBQU1JO0VBQ0Usd0JBQUE7QUFKTjs7QUFPSTtFQUNFLGtEQUFBO0VBQ0EscUJBQUE7QUFMTjs7QUFRSTtFQUNFLGlEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQU5OOztBQVNJO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUFQTjs7QUFVSTtFQUNFLGdCQUFBO0FBUk47O0FBV0k7RUFDRSxjQUFBO0FBVE47O0FBWUk7RUFDRSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBVk47O0FBWU07RUFDRSx3Q0FBQTtFQUNBLCtDQUFBO0FBVlI7O0FBWVE7RUFDRSwyQ0FBQTtBQVZWOztBQWNNO0VBQ0UsZ0RBQUE7RUFDQSw0Q0FBQTtBQVpSOztBQWNRO0VBQ0UsaUJBQUE7QUFaVjs7QUFnQk07RUFDRSxzQ0FBQTtBQWRSIiwiZmlsZSI6ImRvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgdmV4LWRvY3VtZW50YXRpb24ge1xyXG4gIHZleC1wYWdlLWxheW91dC1jb250ZW50IHtcclxuICAgIHNob3dkb3duIHtcclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHJnYih2YXIoLS1jb2xvci1wcmltYXJ5KSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93ZG93biA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnRcclxuICAgIH1cclxuXHJcbiAgICBoMSwgaDIge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IC4zZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZGRpbmctMTYpO1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAsIHVsLCBsaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29kZS50eXBlc2NyaXB0IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xyXG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxuICAgICAgdHIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY2FyZCk7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XHJcblxyXG4gICAgICAgICY6bnRoLWNoaWxkKDJuKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWFwcC1iYXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGQsIHRoIHtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XHJcbiAgICAgICAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xMikgdmFyKC0tcGFkZGluZy0xNik7XHJcblxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 8324:
/*!*************************************************************!*\
  !*** ./src/app/pages/documentation/documentation.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentationModule": function() { return /* binding */ DocumentationModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _documentation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentation-routing.module */ 2150);
/* harmony import */ var _documentation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documentation.component */ 96661);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@vex/components/page-layout/page-layout.module */ 46383);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 44241);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@vex/components/breadcrumbs/breadcrumbs.module */ 75592);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ 68399);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _markdown_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markdown.module */ 98477);
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@vex/directives/container/container.module */ 7302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);













class DocumentationModule {
}
DocumentationModule.ɵfac = function DocumentationModule_Factory(t) { return new (t || DocumentationModule)(); };
DocumentationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: DocumentationModule });
DocumentationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _documentation_routing_module__WEBPACK_IMPORTED_MODULE_0__.DocumentationRoutingModule,
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule,
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__.IconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
            _markdown_module__WEBPACK_IMPORTED_MODULE_5__.MarkdownModule,
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DocumentationModule, { declarations: [_documentation_component__WEBPACK_IMPORTED_MODULE_1__.DocumentationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _documentation_routing_module__WEBPACK_IMPORTED_MODULE_0__.DocumentationRoutingModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__.IconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
        _markdown_module__WEBPACK_IMPORTED_MODULE_5__.MarkdownModule,
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_documentation_documentation_module_ts-es2015.js.map