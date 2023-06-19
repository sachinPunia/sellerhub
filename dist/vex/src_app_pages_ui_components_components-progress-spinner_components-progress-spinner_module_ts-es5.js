(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_components_components-progress-spinner_components-progress-spinner_module_ts"], {
    /***/
    81264:
    /*!***************************************************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner-routing.module.ts ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsProgressSpinnerRoutingModule": function ComponentsProgressSpinnerRoutingModule() {
          return (
            /* binding */
            _ComponentsProgressSpinnerRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-quicklink */
      85530);
      /* harmony import */


      var _components_progress_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components-progress-spinner.component */
      81011);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _components_progress_spinner_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsProgressSpinnerComponent
      }];

      var _ComponentsProgressSpinnerRoutingModule = function _ComponentsProgressSpinnerRoutingModule() {
        _classCallCheck(this, _ComponentsProgressSpinnerRoutingModule);
      };

      _ComponentsProgressSpinnerRoutingModule.ɵfac = function ComponentsProgressSpinnerRoutingModule_Factory(t) {
        return new (t || _ComponentsProgressSpinnerRoutingModule)();
      };

      _ComponentsProgressSpinnerRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ComponentsProgressSpinnerRoutingModule
      });
      _ComponentsProgressSpinnerRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ComponentsProgressSpinnerRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
        });
      })();
      /***/

    },

    /***/
    81011:
    /*!**********************************************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner.component.ts ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsProgressSpinnerComponent": function ComponentsProgressSpinnerComponent() {
          return (
            /* binding */
            _ComponentsProgressSpinnerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../@vex/animations/stagger.animation */
      48535);
      /* harmony import */


      var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../@vex/animations/scale-in.animation */
      49597);
      /* harmony import */


      var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../@vex/animations/fade-in-right.animation */
      16496);
      /* harmony import */


      var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../@vex/animations/fade-in-up.animation */
      33848);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../@vex/components/page-layout/page-layout.component */
      32237);
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */
      43410);
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.component */
      64076);
      /* harmony import */


      var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../@vex/components/page-layout/page-layout-content.directive */
      19199);
      /* harmony import */


      var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../@vex/directives/container/container.directive */
      90080);
      /* harmony import */


      var _components_overview_components_components_overview_progress_spinner_components_overview_progress_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../components-overview/components/components-overview-progress-spinner/components-overview-progress-spinner.component */
      9677);

      var _c0 = function _c0() {
        return ["Components", "Progress Spinner"];
      };

      var _ComponentsProgressSpinnerComponent = /*#__PURE__*/function () {
        function _ComponentsProgressSpinnerComponent() {
          _classCallCheck(this, _ComponentsProgressSpinnerComponent);
        }

        _createClass(_ComponentsProgressSpinnerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ComponentsProgressSpinnerComponent;
      }();

      _ComponentsProgressSpinnerComponent.ɵfac = function ComponentsProgressSpinnerComponent_Factory(t) {
        return new (t || _ComponentsProgressSpinnerComponent)();
      };

      _ComponentsProgressSpinnerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: _ComponentsProgressSpinnerComponent,
        selectors: [["vex-components-progress-spinner"]],
        decls: 5,
        vars: 4,
        consts: [["current", "Progress Spinner"], [3, "crumbs"], ["vexContainer", ""], [1, "block"]],
        template: function ComponentsProgressSpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "vex-page-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "vex-secondary-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "vex-breadcrumbs", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "vex-page-layout-content", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "vex-components-overview-progress-spinner", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@stagger", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](3, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeInUp", undefined);
          }
        },
        directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_4__.PageLayoutComponent, _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_5__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_7__.PageLayoutContentDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_8__.ContainerDirective, _components_overview_components_components_overview_progress_spinner_components_overview_progress_spinner_component__WEBPACK_IMPORTED_MODULE_9__.ComponentsOverviewProgressSpinnerComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzLXByb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50LnNjc3MifQ== */"],
        data: {
          animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_0__.stagger80ms, _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__.scaleIn400ms, _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInRight400ms, _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInUp400ms]
        }
      });
      /***/
    },

    /***/
    95877:
    /*!*******************************************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner.module.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsProgressSpinnerModule": function ComponentsProgressSpinnerModule() {
          return (
            /* binding */
            _ComponentsProgressSpinnerModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _components_progress_spinner_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components-progress-spinner-routing.module */
      81264);
      /* harmony import */


      var _components_progress_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components-progress-spinner.component */
      81011);
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
      75592);
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
      44241);
      /* harmony import */


      var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../@vex/components/page-layout/page-layout.module */
      46383);
      /* harmony import */


      var _components_overview_components_components_overview_progress_spinner_components_overview_progress_spinner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components-overview/components/components-overview-progress-spinner/components-overview-progress-spinner.module */
      89955);
      /* harmony import */


      var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../@vex/directives/container/container.module */
      7302);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ComponentsProgressSpinnerModule = function _ComponentsProgressSpinnerModule() {
        _classCallCheck(this, _ComponentsProgressSpinnerModule);
      };

      _ComponentsProgressSpinnerModule.ɵfac = function ComponentsProgressSpinnerModule_Factory(t) {
        return new (t || _ComponentsProgressSpinnerModule)();
      };

      _ComponentsProgressSpinnerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _ComponentsProgressSpinnerModule
      });
      _ComponentsProgressSpinnerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _components_progress_spinner_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsProgressSpinnerRoutingModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbsModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutModule, _components_overview_components_components_overview_progress_spinner_components_overview_progress_spinner_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsOverviewProgressSpinnerModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_ComponentsProgressSpinnerModule, {
          declarations: [_components_progress_spinner_component__WEBPACK_IMPORTED_MODULE_1__.ComponentsProgressSpinnerComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _components_progress_spinner_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsProgressSpinnerRoutingModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbsModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutModule, _components_overview_components_components_overview_progress_spinner_components_overview_progress_spinner_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsOverviewProgressSpinnerModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ui_components_components-progress-spinner_components-progress-spinner_module_ts-es5.js.map