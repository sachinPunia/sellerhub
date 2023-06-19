(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_page-layouts_page-layouts_module_ts"],{

/***/ 61125:
/*!**********************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/page-layouts-routing.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutsRoutingModule": function() { return /* binding */ PageLayoutsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-quicklink */ 85530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: 'blank',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("src_app_pages_ui_page-layouts_blank_blank_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./blank/blank.module */ 61750)).then(m => m.BlankModule),
    },
    {
        path: 'simple',
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_page-layouts_simple_page-layout-simple_page-layout-simple_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./simple/page-layout-simple/page-layout-simple.module */ 9724)).then(m => m.PageLayoutSimpleModule)
            },
            {
                path: 'tabbed',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_page-layouts_simple_page-layout-simple-tabbed_page-layout-simple-tabbed_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./simple/page-layout-simple-tabbed/page-layout-simple-tabbed.module */ 82935)).then(m => m.PageLayoutSimpleTabbedModule)
            },
            {
                path: 'large-header',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_page-layouts_simple_page-layout-simple-large-header_page-layout-simple-large-b5383a")]).then(__webpack_require__.bind(__webpack_require__, /*! ./simple/page-layout-simple-large-header/page-layout-simple-large-header.module */ 20986)).then(m => m.PageLayoutSimpleLargeHeaderModule)
            },
            {
                path: 'large-header/tabbed',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_page-layouts_simple_page-layout-simple-large-header-tabbed_page-layout-simpl-9ba320")]).then(__webpack_require__.bind(__webpack_require__, /*! ./simple/page-layout-simple-large-header-tabbed/page-layout-simple-large-header-tabbed.module */ 34228)).then(m => m.PageLayoutSimpleLargeHeaderTabbedModule)
            }
        ]
    },
    {
        path: 'card',
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_page-layouts_card_page-layout-card_page-layout-card_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./card/page-layout-card/page-layout-card.module */ 91455)).then(m => m.PageLayoutCardModule)
            },
            {
                path: 'tabbed',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_page-layouts_card_page-layout-card-tabbed_page-layout-card-tabbed_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./card/page-layout-card-tabbed/page-layout-card-tabbed.module */ 5684)).then(m => m.PageLayoutCardTabbedModule)
            },
            {
                path: 'large-header',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_page-layouts_card_page-layout-card-large-header_page-layout-card-large-heade-7e6339")]).then(__webpack_require__.bind(__webpack_require__, /*! ./card/page-layout-card-large-header/page-layout-card-large-header.module */ 86932)).then(m => m.PageLayoutCardLargeHeaderModule)
            },
            {
                path: 'large-header/tabbed',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_page-layouts_card_page-layout-card-large-header-tabbed_page-layout-card-larg-f1b3e7")]).then(__webpack_require__.bind(__webpack_require__, /*! ./card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.module */ 89609)).then(m => m.PageLayoutCardLargeHeaderTabbedModule)
            }
        ]
    }
];
class PageLayoutsRoutingModule {
}
PageLayoutsRoutingModule.ɵfac = function PageLayoutsRoutingModule_Factory(t) { return new (t || PageLayoutsRoutingModule)(); };
PageLayoutsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageLayoutsRoutingModule });
PageLayoutsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__.QuicklinkModule] }); })();


/***/ }),

/***/ 68580:
/*!**************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/page-layouts.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutsModule": function() { return /* binding */ PageLayoutsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layouts-routing.module */ 61125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



class PageLayoutsModule {
}
PageLayoutsModule.ɵfac = function PageLayoutsModule_Factory(t) { return new (t || PageLayoutsModule)(); };
PageLayoutsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PageLayoutsModule });
PageLayoutsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageLayoutsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_page-layouts_page-layouts_module_ts-es2015.js.map