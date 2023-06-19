(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_components_components_module_ts"],{

/***/ 80850:
/*!******************************************************************!*\
  !*** ./src/app/pages/ui/components/components-routing.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsRoutingModule": function() { return /* binding */ ComponentsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-quicklink */ 85530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: 'overview',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button-toggle_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-src_app_pages_ui_components_components-overview_components_components-overview-button-bf40e5"), __webpack_require__.e("default-src_app_pages_ui_components_components-overview_components_components-overview-autoco-8d0405"), __webpack_require__.e("default-src_app_pages_ui_components_components-overview_components_components-overview-input_-ddf23c"), __webpack_require__.e("default-src_app_pages_ui_components_components-overview_components_components-overview-lists_-b6f346"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-overview_components-overview_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-overview/components-overview.module */ 66189)).then(m => m.ComponentsOverviewModule)
    },
    {
        path: 'autocomplete',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("default-src_app_pages_ui_components_components-overview_components_components-overview-autoco-8d0405"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-autocomplete_components-autocomplete_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-autocomplete/components-autocomplete.module */ 62001)).then(m => m.ComponentsAutocompleteModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'buttons',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button-toggle_js"), __webpack_require__.e("default-src_app_pages_ui_components_components-overview_components_components-overview-button-bf40e5"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-buttons_components-buttons_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-buttons/components-buttons.module */ 68235)).then(m => m.ComponentsButtonsModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'button-group',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button-toggle_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-button-group_components-button-group_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-button-group/components-button-group.module */ 77623)).then(m => m.ComponentsButtonGroupModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'cards',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button-toggle_js"), __webpack_require__.e("default-src_app_pages_ui_components_components-overview_components_components-overview-button-bf40e5"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-cards_components-cards_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-cards/components-cards.module */ 40048)).then(m => m.ComponentsCardsModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'checkbox',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-checkbox_components-checkbox_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-checkbox/components-checkbox.module */ 18819)).then(m => m.ComponentsCheckboxModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'dialogs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-dialogs_components-dialogs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-dialogs/components-dialogs.module */ 92723)).then(m => m.ComponentsDialogsModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'grid-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-grid-list_components-grid-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-grid-list/components-grid-list.module */ 88910)).then(m => m.ComponentsGridListModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'input',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("default-src_app_pages_ui_components_components-overview_components_components-overview-input_-ddf23c"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-input_components-input_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-input/components-input.module */ 99449)).then(m => m.ComponentsInputModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'lists',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("default-src_app_pages_ui_components_components-overview_components_components-overview-lists_-b6f346"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-lists_components-lists_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-lists/components-lists.module */ 9967)).then(m => m.ComponentsListsModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'menu',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-menu_components-menu_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-menu/components-menu.module */ 31984)).then(m => m.ComponentsMenuModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'progress',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-progress_components-progress_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-progress/components-progress.module */ 66374)).then(m => m.ComponentsProgressModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'progress-spinner',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-progress-spinner_components-progress-spinner_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-progress-spinner/components-progress-spinner.module */ 95877)).then(m => m.ComponentsProgressSpinnerModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'radio',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-radio_components-radio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-radio/components-radio.module */ 1353)).then(m => m.ComponentsRadioModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'slide-toggle',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-slide-toggle_components-slide-toggle_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-slide-toggle/components-slide-toggle.module */ 40034)).then(m => m.ComponentsSlideToggleModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'slider',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-slider_components-slider_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-slider/components-slider.module */ 94420)).then(m => m.ComponentsSliderModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'snack-bar',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-snack-bar_components-snack-bar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-snack-bar/components-snack-bar.module */ 13952)).then(m => m.ComponentsSnackBarModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'tooltip',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_secondary-toolbar_secondary-toolbar_module_ts"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_components_highlight_highlight_-f188bb"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-tooltip_components-tooltip_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-tooltip/components-tooltip.module */ 87258)).then(m => m.ComponentsTooltipModule),
        data: {
            containerEnabled: true
        }
    }
];
class ComponentsRoutingModule {
}
ComponentsRoutingModule.ɵfac = function ComponentsRoutingModule_Factory(t) { return new (t || ComponentsRoutingModule)(); };
ComponentsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsRoutingModule });
ComponentsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__.QuicklinkModule] }); })();


/***/ }),

/***/ 11479:
/*!**********************************************************!*\
  !*** ./src/app/pages/ui/components/components.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": function() { return /* binding */ ComponentsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-routing.module */ 80850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _components_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComponentsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _components_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_components_components_module_ts-es2015.js.map