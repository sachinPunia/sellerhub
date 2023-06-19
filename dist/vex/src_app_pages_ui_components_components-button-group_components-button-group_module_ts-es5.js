(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_components_components-button-group_components-button-group_module_ts"], {
    /***/
    87801:
    /*!***********************************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/twotone-format-align-center.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      var data = {
        "body": "<path d=\"M3 3h18v2H3zm4 12h10v2H7zm0-8h10v2H7zm-4 4h18v2H3zm0 8h18v2H3z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    },

    /***/
    50265:
    /*!************************************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/twotone-format-align-justify.js ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      var data = {
        "body": "<path d=\"M3 3h18v2H3zm0 8h18v2H3zm0 8h18v2H3zm0-4h18v2H3zm0-8h18v2H3z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    },

    /***/
    44761:
    /*!*********************************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/twotone-format-align-left.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      var data = {
        "body": "<path d=\"M3 19h18v2H3zM3 7h12v2H3zm0-4h18v2H3zm0 12h12v2H3zm0-4h18v2H3z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    },

    /***/
    40547:
    /*!**********************************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/twotone-format-align-right.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      var data = {
        "body": "<path d=\"M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3zm6 4h12v2H9zm0-8h12v2H9z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    },

    /***/
    67807:
    /*!*******************************************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-button-group/components-button-group-routing.module.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsButtonGroupRoutingModule": function ComponentsButtonGroupRoutingModule() {
          return (
            /* binding */
            _ComponentsButtonGroupRoutingModule
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


      var _components_button_group_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components-button-group.component */
      72481);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _components_button_group_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsButtonGroupComponent
      }];

      var _ComponentsButtonGroupRoutingModule = function _ComponentsButtonGroupRoutingModule() {
        _classCallCheck(this, _ComponentsButtonGroupRoutingModule);
      };

      _ComponentsButtonGroupRoutingModule.ɵfac = function ComponentsButtonGroupRoutingModule_Factory(t) {
        return new (t || _ComponentsButtonGroupRoutingModule)();
      };

      _ComponentsButtonGroupRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ComponentsButtonGroupRoutingModule
      });
      _ComponentsButtonGroupRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ComponentsButtonGroupRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
        });
      })();
      /***/

    },

    /***/
    72481:
    /*!**************************************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-button-group/components-button-group.component.ts ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsButtonGroupComponent": function ComponentsButtonGroupComponent() {
          return (
            /* binding */
            _ComponentsButtonGroupComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-settings */
      4485);
      /* harmony import */


      var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../@vex/animations/stagger.animation */
      48535);
      /* harmony import */


      var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../@vex/animations/scale-in.animation */
      49597);
      /* harmony import */


      var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../@vex/animations/fade-in-right.animation */
      16496);
      /* harmony import */


      var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../@vex/animations/fade-in-up.animation */
      33848);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../@vex/components/page-layout/page-layout.component */
      32237);
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */
      43410);
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.component */
      64076);
      /* harmony import */


      var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../@vex/components/page-layout/page-layout-content.directive */
      19199);
      /* harmony import */


      var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../@vex/directives/container/container.directive */
      90080);
      /* harmony import */


      var _components_overview_components_components_overview_button_group_components_overview_button_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../components-overview/components/components-overview-button-group/components-overview-button-group.component */
      87584);

      var _c0 = function _c0() {
        return ["Components", "Button Group"];
      };

      var _ComponentsButtonGroupComponent = /*#__PURE__*/function () {
        function _ComponentsButtonGroupComponent() {
          _classCallCheck(this, _ComponentsButtonGroupComponent);

          this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_0__["default"];
        }

        _createClass(_ComponentsButtonGroupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ComponentsButtonGroupComponent;
      }();

      _ComponentsButtonGroupComponent.ɵfac = function ComponentsButtonGroupComponent_Factory(t) {
        return new (t || _ComponentsButtonGroupComponent)();
      };

      _ComponentsButtonGroupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
        type: _ComponentsButtonGroupComponent,
        selectors: [["vex-components-button-group"]],
        decls: 5,
        vars: 4,
        consts: [["current", "Button Group"], [3, "crumbs"], ["vexContainer", ""], [1, "block"]],
        template: function ComponentsButtonGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "vex-page-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "vex-secondary-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "vex-breadcrumbs", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "vex-page-layout-content", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "vex-components-overview-button-group", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@stagger", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](3, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@fadeInUp", undefined);
          }
        },
        directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_5__.PageLayoutComponent, _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_6__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbsComponent, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_8__.PageLayoutContentDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_9__.ContainerDirective, _components_overview_components_components_overview_button_group_components_overview_button_group_component__WEBPACK_IMPORTED_MODULE_10__.ComponentsOverviewButtonGroupComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuc2NzcyJ9 */"],
        data: {
          animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__.stagger80ms, _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__.scaleIn400ms, _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInRight400ms, _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__.fadeInUp400ms]
        }
      });
      /***/
    },

    /***/
    77623:
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-button-group/components-button-group.module.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsButtonGroupModule": function ComponentsButtonGroupModule() {
          return (
            /* binding */
            _ComponentsButtonGroupModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _components_button_group_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components-button-group-routing.module */
      67807);
      /* harmony import */


      var _components_button_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components-button-group.component */
      72481);
      /* harmony import */


      var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../@vex/components/page-layout/page-layout.module */
      46383);
      /* harmony import */


      var _components_overview_components_components_overview_button_group_components_overview_button_group_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../components-overview/components/components-overview-button-group/components-overview-button-group.module */
      72642);
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
      44241);
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
      75592);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);
      /* harmony import */


      var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../@vex/directives/container/container.module */
      7302);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ComponentsButtonGroupModule = function _ComponentsButtonGroupModule() {
        _classCallCheck(this, _ComponentsButtonGroupModule);
      };

      _ComponentsButtonGroupModule.ɵfac = function ComponentsButtonGroupModule_Factory(t) {
        return new (t || _ComponentsButtonGroupModule)();
      };

      _ComponentsButtonGroupModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _ComponentsButtonGroupModule
      });
      _ComponentsButtonGroupModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _components_button_group_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsButtonGroupRoutingModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule, _components_overview_components_components_overview_button_group_components_overview_button_group_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsOverviewButtonGroupModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__.IconModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_ComponentsButtonGroupModule, {
          declarations: [_components_button_group_component__WEBPACK_IMPORTED_MODULE_1__.ComponentsButtonGroupComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _components_button_group_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsButtonGroupRoutingModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule, _components_overview_components_components_overview_button_group_components_overview_button_group_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsOverviewButtonGroupModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__.IconModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule]
        });
      })();
      /***/

    },

    /***/
    87584:
    /*!***************************************************************************************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-overview/components/components-overview-button-group/components-overview-button-group.component.ts ***!
      \***************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsOverviewButtonGroupComponent": function ComponentsOverviewButtonGroupComponent() {
          return (
            /* binding */
            _ComponentsOverviewButtonGroupComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _iconify_icons_ic_twotone_format_align_left__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-format-align-left */
      44761);
      /* harmony import */


      var _iconify_icons_ic_twotone_format_align_center__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-format-align-center */
      87801);
      /* harmony import */


      var _iconify_icons_ic_twotone_format_align_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-format-align-right */
      40547);
      /* harmony import */


      var _iconify_icons_ic_twotone_format_align_justify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-format-align-justify */
      50265);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      42542);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../../@vex/components/highlight/highlight.directive */
      82781);

      var _ComponentsOverviewButtonGroupComponent = /*#__PURE__*/function () {
        function _ComponentsOverviewButtonGroupComponent() {
          _classCallCheck(this, _ComponentsOverviewButtonGroupComponent);

          this.buttonToggleHTML = "<mat-button-toggle-group>\n  <mat-button-toggle value=\"left\">\n    <mat-icon [icIcon]=\"icFormatAlignLeft\"></mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"center\">\n    <mat-icon [icIcon]=\"icFormatAlignCenter\"></mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"right\">\n    <mat-icon [icIcon]=\"icFormatAlignRight\"></mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"justify\">\n    <mat-icon [icIcon]=\"icFormatAlignJustify\"></mat-icon>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n\n<mat-button-toggle-group class=\"mt-6\">\n  <mat-button-toggle value=\"left\">Left</mat-button-toggle>\n  <mat-button-toggle value=\"center\">Center</mat-button-toggle>\n  <mat-button-toggle value=\"right\">Right</mat-button-toggle>\n</mat-button-toggle-group>\n\n<mat-button-toggle-group class=\"mt-6\" appearance=\"legacy\">\n  <mat-button-toggle value=\"left\">Left</mat-button-toggle>\n  <mat-button-toggle value=\"center\">Center</mat-button-toggle>\n  <mat-button-toggle value=\"right\">Right</mat-button-toggle>\n</mat-button-toggle-group>\n\n<mat-button-toggle-group class=\"mt-6\" vertical>\n  <mat-button-toggle value=\"left\">Top</mat-button-toggle>\n  <mat-button-toggle value=\"center\">Center</mat-button-toggle>\n  <mat-button-toggle value=\"right\">Bottom</mat-button-toggle>\n</mat-button-toggle-group>";
          this.icFormatAlignLeft = _iconify_icons_ic_twotone_format_align_left__WEBPACK_IMPORTED_MODULE_0__["default"];
          this.icFormatAlignCenter = _iconify_icons_ic_twotone_format_align_center__WEBPACK_IMPORTED_MODULE_1__["default"];
          this.icFormatAlignRight = _iconify_icons_ic_twotone_format_align_right__WEBPACK_IMPORTED_MODULE_2__["default"];
          this.icFormatAlignJustify = _iconify_icons_ic_twotone_format_align_justify__WEBPACK_IMPORTED_MODULE_3__["default"];
        }

        _createClass(_ComponentsOverviewButtonGroupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ComponentsOverviewButtonGroupComponent;
      }();

      _ComponentsOverviewButtonGroupComponent.ɵfac = function ComponentsOverviewButtonGroupComponent_Factory(t) {
        return new (t || _ComponentsOverviewButtonGroupComponent)();
      };

      _ComponentsOverviewButtonGroupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _ComponentsOverviewButtonGroupComponent,
        selectors: [["vex-components-overview-button-group"]],
        decls: 53,
        vars: 5,
        consts: [["fxLayout", "column", "fxLayout.gt-sm", "row", 1, "card"], [1, "p-6"], [1, "title", "mt-0", "mb-4"], ["fxLayout", "column", "fxLayoutAlign", "start center"], ["value", "left"], [3, "icIcon"], ["value", "center"], ["value", "right"], ["value", "justify"], [1, "mt-6"], ["appearance", "legacy", 1, "mt-6"], ["vertical", "", 1, "mt-6"], ["fxFlex", "", 1, "border-l"], [1, "body-2", "text-secondary", "m-0"], [1, "vex-tabs"], ["label", "DESCRIPTION"], [1, "subheading-1", "font-medium", "mb-0"], ["label", "SOURCE CODE"], [3, "vexHighlight"]],
        template: function ComponentsOverviewButtonGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Preview");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-button-toggle-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-button-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-button-toggle", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-button-toggle", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-button-toggle", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-button-toggle-group", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-button-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-button-toggle", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-button-toggle", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-button-toggle-group", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-button-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-button-toggle", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-button-toggle", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-button-toggle-group", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-button-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Top");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-button-toggle", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-button-toggle", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Button Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "<mat-button-toggle-group>");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-tab-group", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-tab", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons, a group should share a common container. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "h4", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Active and available toggle buttons:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, " A toggle button\u2019s state makes it clear which button is active. Hover and focus states express the available selection options for buttons in a toggle group. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-tab", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "code", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icIcon", ctx.icFormatAlignLeft);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icIcon", ctx.icFormatAlignCenter);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icIcon", ctx.icFormatAlignRight);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icIcon", ctx.icFormatAlignJustify);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("vexHighlight", ctx.buttonToggleHTML);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTab, _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_4__.HighlightDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzLW92ZXJ2aWV3LWJ1dHRvbi1ncm91cC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    72642:
    /*!************************************************************************************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-overview/components/components-overview-button-group/components-overview-button-group.module.ts ***!
      \************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsOverviewButtonGroupModule": function ComponentsOverviewButtonGroupModule() {
          return (
            /* binding */
            _ComponentsOverviewButtonGroupModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _components_overview_button_group_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components-overview-button-group.component */
      87584);
      /* harmony import */


      var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../../@vex/components/highlight/highlight.module */
      49979);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      42542);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ComponentsOverviewButtonGroupModule = function _ComponentsOverviewButtonGroupModule() {
        _classCallCheck(this, _ComponentsOverviewButtonGroupModule);
      };

      _ComponentsOverviewButtonGroupModule.ɵfac = function ComponentsOverviewButtonGroupModule_Factory(t) {
        return new (t || _ComponentsOverviewButtonGroupModule)();
      };

      _ComponentsOverviewButtonGroupModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ComponentsOverviewButtonGroupModule
      });
      _ComponentsOverviewButtonGroupModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__.IconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggleModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ComponentsOverviewButtonGroupModule, {
          declarations: [_components_overview_button_group_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewButtonGroupComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__.IconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggleModule],
          exports: [_components_overview_button_group_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewButtonGroupComponent]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ui_components_components-button-group_components-button-group_module_ts-es5.js.map