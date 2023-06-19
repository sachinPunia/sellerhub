(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_page-layouts_simple_page-layout-simple-large-header_page-layout-simple-large-b5383a"], {
    /***/
    32073:
    /*!********************************************************************************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header-routing.module.ts ***!
      \********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageLayoutSimpleLargeHeaderRoutingModule": function PageLayoutSimpleLargeHeaderRoutingModule() {
          return (
            /* binding */
            _PageLayoutSimpleLargeHeaderRoutingModule
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


      var _page_layout_simple_large_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page-layout-simple-large-header.component */
      88450);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _page_layout_simple_large_header_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleLargeHeaderComponent,
        data: {
          toolbarShadowEnabled: true
        }
      }];

      var _PageLayoutSimpleLargeHeaderRoutingModule = function _PageLayoutSimpleLargeHeaderRoutingModule() {
        _classCallCheck(this, _PageLayoutSimpleLargeHeaderRoutingModule);
      };

      _PageLayoutSimpleLargeHeaderRoutingModule.ɵfac = function PageLayoutSimpleLargeHeaderRoutingModule_Factory(t) {
        return new (t || _PageLayoutSimpleLargeHeaderRoutingModule)();
      };

      _PageLayoutSimpleLargeHeaderRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _PageLayoutSimpleLargeHeaderRoutingModule
      });
      _PageLayoutSimpleLargeHeaderRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_PageLayoutSimpleLargeHeaderRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
        });
      })();
      /***/

    },

    /***/
    88450:
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.component.ts ***!
      \***************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageLayoutSimpleLargeHeaderComponent": function PageLayoutSimpleLargeHeaderComponent() {
          return (
            /* binding */
            _PageLayoutSimpleLargeHeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../@vex/components/page-layout/page-layout.component */
      32237);
      /* harmony import */


      var _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../@vex/components/page-layout/page-layout-header.directive */
      27087);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../@vex/directives/container/container.directive */
      90080);
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.component */
      64076);
      /* harmony import */


      var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../@vex/components/page-layout/page-layout-content.directive */
      19199);
      /* harmony import */


      var _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../page-layout-demo/page-layout-demo.component */
      32072);

      var _c0 = function _c0() {
        return ["Page Layouts", "Simple", "Large Header"];
      };

      var _PageLayoutSimpleLargeHeaderComponent = /*#__PURE__*/function () {
        function _PageLayoutSimpleLargeHeaderComponent() {
          _classCallCheck(this, _PageLayoutSimpleLargeHeaderComponent);
        }

        _createClass(_PageLayoutSimpleLargeHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PageLayoutSimpleLargeHeaderComponent;
      }();

      _PageLayoutSimpleLargeHeaderComponent.ɵfac = function PageLayoutSimpleLargeHeaderComponent_Factory(t) {
        return new (t || _PageLayoutSimpleLargeHeaderComponent)();
      };

      _PageLayoutSimpleLargeHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _PageLayoutSimpleLargeHeaderComponent,
        selectors: [["vex-page-layout-simple-large-header"]],
        decls: 8,
        vars: 2,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center start"], ["vexContainer", ""], [1, "title", "m-0"], [3, "crumbs"]],
        template: function PageLayoutSimpleLargeHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutComponent, _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__.PageLayoutHeaderDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_2__.ContainerDirective, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutContentDirective, _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_5__.PageLayoutDemoComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxheW91dC1zaW1wbGUtbGFyZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    20986:
    /*!************************************************************************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.module.ts ***!
      \************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageLayoutSimpleLargeHeaderModule": function PageLayoutSimpleLargeHeaderModule() {
          return (
            /* binding */
            _PageLayoutSimpleLargeHeaderModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _page_layout_simple_large_header_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page-layout-simple-large-header-routing.module */
      32073);
      /* harmony import */


      var _page_layout_simple_large_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./page-layout-simple-large-header.component */
      88450);
      /* harmony import */


      var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../@vex/components/page-layout/page-layout.module */
      46383);
      /* harmony import */


      var _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../page-layout-demo/page-layout-demo.module */
      58345);
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
      44241);
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
      75592);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../@vex/directives/container/container.module */
      7302);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PageLayoutSimpleLargeHeaderModule = function _PageLayoutSimpleLargeHeaderModule() {
        _classCallCheck(this, _PageLayoutSimpleLargeHeaderModule);
      };

      _PageLayoutSimpleLargeHeaderModule.ɵfac = function PageLayoutSimpleLargeHeaderModule_Factory(t) {
        return new (t || _PageLayoutSimpleLargeHeaderModule)();
      };

      _PageLayoutSimpleLargeHeaderModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _PageLayoutSimpleLargeHeaderModule
      });
      _PageLayoutSimpleLargeHeaderModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _page_layout_simple_large_header_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleLargeHeaderRoutingModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule, _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutDemoModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_PageLayoutSimpleLargeHeaderModule, {
          declarations: [_page_layout_simple_large_header_component__WEBPACK_IMPORTED_MODULE_1__.PageLayoutSimpleLargeHeaderComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _page_layout_simple_large_header_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleLargeHeaderRoutingModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule, _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutDemoModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ui_page-layouts_simple_page-layout-simple-large-header_page-layout-simple-large-b5383a-es5.js.map