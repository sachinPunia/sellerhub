(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_page-layouts_simple_page-layout-simple-tabbed_page-layout-simple-tabbed_module_ts"], {
    /***/
    12321:
    /*!********************************************************************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-tabbed/page-layout-simple-tabbed-routing.module.ts ***!
      \********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageLayoutSimpleTabbedRoutingModule": function PageLayoutSimpleTabbedRoutingModule() {
          return (
            /* binding */
            _PageLayoutSimpleTabbedRoutingModule
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


      var _page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page-layout-simple-tabbed.component */
      3908);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleTabbedComponent
      }];

      var _PageLayoutSimpleTabbedRoutingModule = function _PageLayoutSimpleTabbedRoutingModule() {
        _classCallCheck(this, _PageLayoutSimpleTabbedRoutingModule);
      };

      _PageLayoutSimpleTabbedRoutingModule.ɵfac = function PageLayoutSimpleTabbedRoutingModule_Factory(t) {
        return new (t || _PageLayoutSimpleTabbedRoutingModule)();
      };

      _PageLayoutSimpleTabbedRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _PageLayoutSimpleTabbedRoutingModule
      });
      _PageLayoutSimpleTabbedRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_PageLayoutSimpleTabbedRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
        });
      })();
      /***/

    },

    /***/
    3908:
    /*!***************************************************************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-tabbed/page-layout-simple-tabbed.component.ts ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageLayoutSimpleTabbedComponent": function PageLayoutSimpleTabbedComponent() {
          return (
            /* binding */
            _PageLayoutSimpleTabbedComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-more-vert */
      40077);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../@vex/components/page-layout/page-layout.component */
      32237);
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */
      43410);
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.component */
      64076);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);
      /* harmony import */


      var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../@vex/components/page-layout/page-layout-content.directive */
      19199);
      /* harmony import */


      var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../@vex/directives/container/container.directive */
      90080);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../page-layout-demo/page-layout-demo.component */
      32072);

      var _c0 = function _c0() {
        return ["Page Layouts", "Simple", "Tabbed"];
      };

      var _PageLayoutSimpleTabbedComponent = /*#__PURE__*/function () {
        function _PageLayoutSimpleTabbedComponent() {
          _classCallCheck(this, _PageLayoutSimpleTabbedComponent);

          this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_0__["default"];
        }

        _createClass(_PageLayoutSimpleTabbedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PageLayoutSimpleTabbedComponent;
      }();

      _PageLayoutSimpleTabbedComponent.ɵfac = function PageLayoutSimpleTabbedComponent_Factory(t) {
        return new (t || _PageLayoutSimpleTabbedComponent)();
      };

      _PageLayoutSimpleTabbedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _PageLayoutSimpleTabbedComponent,
        selectors: [["vex-page-layout-simple-tabbed"]],
        decls: 16,
        vars: 3,
        consts: [["current", "Simple - Tabbed"], ["fxFlex", "auto", 3, "crumbs"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ml-2"], [3, "icIcon"], ["vexContainer", "", 1, "vex-tabs", "p-0"], ["label", "Main Tab"], [1, "p-6"], ["label", "Side Tab"], ["label", "Extra Tab"]],
        template: function PageLayoutSimpleTabbedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "vex-page-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "vex-secondary-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "vex-breadcrumbs", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "vex-page-layout-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-tab", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-tab", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icIcon", ctx.icMoreVert);
          }
        },
        directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_1__.PageLayoutComponent, _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__.IconDirective, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutContentDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_5__.ContainerDirective, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTab, _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_6__.PageLayoutDemoComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxheW91dC1zaW1wbGUtdGFiYmVkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    82935:
    /*!************************************************************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-tabbed/page-layout-simple-tabbed.module.ts ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageLayoutSimpleTabbedModule": function PageLayoutSimpleTabbedModule() {
          return (
            /* binding */
            _PageLayoutSimpleTabbedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _page_layout_simple_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page-layout-simple-tabbed-routing.module */
      12321);
      /* harmony import */


      var _page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./page-layout-simple-tabbed.component */
      3908);
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
      44241);
      /* harmony import */


      var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../@vex/components/page-layout/page-layout.module */
      46383);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../page-layout-demo/page-layout-demo.module */
      58345);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
      75592);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../@vex/directives/container/container.module */
      7302);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PageLayoutSimpleTabbedModule = function _PageLayoutSimpleTabbedModule() {
        _classCallCheck(this, _PageLayoutSimpleTabbedModule);
      };

      _PageLayoutSimpleTabbedModule.ɵfac = function PageLayoutSimpleTabbedModule_Factory(t) {
        return new (t || _PageLayoutSimpleTabbedModule)();
      };

      _PageLayoutSimpleTabbedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _PageLayoutSimpleTabbedModule
      });
      _PageLayoutSimpleTabbedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _page_layout_simple_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleTabbedRoutingModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule, _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutDemoModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__.IconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_PageLayoutSimpleTabbedModule, {
          declarations: [_page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_1__.PageLayoutSimpleTabbedComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _page_layout_simple_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleTabbedRoutingModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule, _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutDemoModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__.IconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ui_page-layouts_simple_page-layout-simple-tabbed_page-layout-simple-tabbed_module_ts-es5.js.map