(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_components_components-progress_components-progress_module_ts"], {
    /***/
    36839:
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-progress/components-progress-routing.module.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsProgressRoutingModule": function ComponentsProgressRoutingModule() {
          return (
            /* binding */
            _ComponentsProgressRoutingModule
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


      var _components_progress_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components-progress.component */
      12138);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _components_progress_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsProgressComponent
      }];

      var _ComponentsProgressRoutingModule = function _ComponentsProgressRoutingModule() {
        _classCallCheck(this, _ComponentsProgressRoutingModule);
      };

      _ComponentsProgressRoutingModule.ɵfac = function ComponentsProgressRoutingModule_Factory(t) {
        return new (t || _ComponentsProgressRoutingModule)();
      };

      _ComponentsProgressRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ComponentsProgressRoutingModule
      });
      _ComponentsProgressRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ComponentsProgressRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
        });
      })();
      /***/

    },

    /***/
    12138:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-progress/components-progress.component.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsProgressComponent": function ComponentsProgressComponent() {
          return (
            /* binding */
            _ComponentsProgressComponent
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


      var _components_overview_components_components_overview_progress_components_overview_progress_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../components-overview/components/components-overview-progress/components-overview-progress.component */
      71253);

      var _c0 = function _c0() {
        return ["Components", "Progress"];
      };

      var _ComponentsProgressComponent = /*#__PURE__*/function () {
        function _ComponentsProgressComponent() {
          _classCallCheck(this, _ComponentsProgressComponent);
        }

        _createClass(_ComponentsProgressComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ComponentsProgressComponent;
      }();

      _ComponentsProgressComponent.ɵfac = function ComponentsProgressComponent_Factory(t) {
        return new (t || _ComponentsProgressComponent)();
      };

      _ComponentsProgressComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: _ComponentsProgressComponent,
        selectors: [["vex-components-progress"]],
        decls: 5,
        vars: 4,
        consts: [["current", "Progress"], [3, "crumbs"], ["vexContainer", ""], [1, "block"]],
        template: function ComponentsProgressComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "vex-page-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "vex-secondary-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "vex-breadcrumbs", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "vex-page-layout-content", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "vex-components-overview-progress", 3);

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
        directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_4__.PageLayoutComponent, _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_5__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_7__.PageLayoutContentDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_8__.ContainerDirective, _components_overview_components_components_overview_progress_components_overview_progress_component__WEBPACK_IMPORTED_MODULE_9__.ComponentsOverviewProgressComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIn0= */"],
        data: {
          animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_0__.stagger80ms, _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__.scaleIn400ms, _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInRight400ms, _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInUp400ms]
        }
      });
      /***/
    },

    /***/
    66374:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-progress/components-progress.module.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsProgressModule": function ComponentsProgressModule() {
          return (
            /* binding */
            _ComponentsProgressModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _components_progress_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components-progress-routing.module */
      36839);
      /* harmony import */


      var _components_progress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components-progress.component */
      12138);
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
      44241);
      /* harmony import */


      var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../@vex/components/page-layout/page-layout.module */
      46383);
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
      75592);
      /* harmony import */


      var _components_overview_components_components_overview_progress_components_overview_progress_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components-overview/components/components-overview-progress/components-overview-progress.module */
      58987);
      /* harmony import */


      var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../@vex/directives/container/container.module */
      7302);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ComponentsProgressModule = function _ComponentsProgressModule() {
        _classCallCheck(this, _ComponentsProgressModule);
      };

      _ComponentsProgressModule.ɵfac = function ComponentsProgressModule_Factory(t) {
        return new (t || _ComponentsProgressModule)();
      };

      _ComponentsProgressModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _ComponentsProgressModule
      });
      _ComponentsProgressModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _components_progress_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsProgressRoutingModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule, _components_overview_components_components_overview_progress_components_overview_progress_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsOverviewProgressModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_ComponentsProgressModule, {
          declarations: [_components_progress_component__WEBPACK_IMPORTED_MODULE_1__.ComponentsProgressComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _components_progress_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsProgressRoutingModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule, _components_overview_components_components_overview_progress_components_overview_progress_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsOverviewProgressModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ui_components_components-progress_components-progress_module_ts-es5.js.map