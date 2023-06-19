(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_page-layouts_simple_page-layout-simple-large-header-tabbed_page-layout-simpl-9ba320"], {
    /***/
    43811:
    /*!********************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/twotone-home.js ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      var data = {
        "body": "<path d=\"M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5l5 4.5V18z\" fill=\"currentColor\"/><path opacity=\".3\" d=\"M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    },

    /***/
    60964:
    /*!****************************************************************************!*\
      !*** ./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BreadcrumbComponent": function BreadcrumbComponent() {
          return (
            /* binding */
            _BreadcrumbComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _c0 = ["*"];

      var _BreadcrumbComponent = /*#__PURE__*/function () {
        function _BreadcrumbComponent() {
          _classCallCheck(this, _BreadcrumbComponent);
        }

        _createClass(_BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BreadcrumbComponent;
      }();

      _BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || _BreadcrumbComponent)();
      };

      _BreadcrumbComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _BreadcrumbComponent,
        selectors: [["vex-breadcrumb"]],
        hostAttrs: [1, "vex-breadcrumb", "body-2", "text-hint", "leading-none", "hover:text-primary", "no-underline", "trans-ease-out", "ltr:mr-2", "rtl:ml-2"],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    64076:
    /*!******************************************************************!*\
      !*** ./src/@vex/components/breadcrumbs/breadcrumbs.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BreadcrumbsComponent": function BreadcrumbsComponent() {
          return (
            /* binding */
            _BreadcrumbsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-home */
      43811);
      /* harmony import */


      var _utils_track_by__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../utils/track-by */
      21081);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./breadcrumb/breadcrumb.component */
      60964);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = function _c0() {
        return [];
      };

      function BreadcrumbsComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "vex-breadcrumb");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var crumb_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](crumb_r1);
        }
      }

      var _c1 = function _c1() {
        return ["/"];
      };

      var _BreadcrumbsComponent = /*#__PURE__*/function () {
        function _BreadcrumbsComponent() {
          _classCallCheck(this, _BreadcrumbsComponent);

          this.crumbs = [];
          this.trackByValue = _utils_track_by__WEBPACK_IMPORTED_MODULE_1__.trackByValue;
          this.icHome = _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_0__["default"];
        }

        _createClass(_BreadcrumbsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BreadcrumbsComponent;
      }();

      _BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) {
        return new (t || _BreadcrumbsComponent)();
      };

      _BreadcrumbsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _BreadcrumbsComponent,
        selectors: [["vex-breadcrumbs"]],
        inputs: {
          crumbs: "crumbs"
        },
        decls: 5,
        vars: 5,
        consts: [[1, "flex", "items-center"], [3, "routerLink"], ["inline", "true", "size", "20px", 3, "icon"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "w-1", "h-1", "bg-gray", "rounded-full", "ltr:mr-2", "rtl:ml-2"]],
        template: function BreadcrumbsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "vex-breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ic-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BreadcrumbsComponent_ng_container_4_Template, 5, 3, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.icHome);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.crumbs)("ngForTrackBy", ctx.trackByValue);
          }
        },
        directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__.IconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
        encapsulation: 2
      });
      /***/
    },

    /***/
    75592:
    /*!***************************************************************!*\
      !*** ./src/@vex/components/breadcrumbs/breadcrumbs.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BreadcrumbsModule": function BreadcrumbsModule() {
          return (
            /* binding */
            _BreadcrumbsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./breadcrumbs.component */
      64076);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);
      /* harmony import */


      var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./breadcrumb/breadcrumb.component */
      60964);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BreadcrumbsModule = function _BreadcrumbsModule() {
        _classCallCheck(this, _BreadcrumbsModule);
      };

      _BreadcrumbsModule.ɵfac = function BreadcrumbsModule_Factory(t) {
        return new (t || _BreadcrumbsModule)();
      };

      _BreadcrumbsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _BreadcrumbsModule
      });
      _BreadcrumbsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__.IconModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_BreadcrumbsModule, {
          declarations: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsComponent, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__.IconModule],
          exports: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsComponent]
        });
      })();
      /***/

    },

    /***/
    2747:
    /*!**********************************************************************************************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header-tabbed/page-layout-simple-large-header-tabbed-routing.module.ts ***!
      \**********************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageLayoutSimpleLargeHeaderTabbedRoutingModule": function PageLayoutSimpleLargeHeaderTabbedRoutingModule() {
          return (
            /* binding */
            _PageLayoutSimpleLargeHeaderTabbedRoutingModule
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


      var _page_layout_simple_large_header_tabbed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page-layout-simple-large-header-tabbed.component */
      22065);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _page_layout_simple_large_header_tabbed_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleLargeHeaderTabbedComponent,
        data: {
          toolbarShadowEnabled: true
        }
      }];

      var _PageLayoutSimpleLargeHeaderTabbedRoutingModule = function _PageLayoutSimpleLargeHeaderTabbedRoutingModule() {
        _classCallCheck(this, _PageLayoutSimpleLargeHeaderTabbedRoutingModule);
      };

      _PageLayoutSimpleLargeHeaderTabbedRoutingModule.ɵfac = function PageLayoutSimpleLargeHeaderTabbedRoutingModule_Factory(t) {
        return new (t || _PageLayoutSimpleLargeHeaderTabbedRoutingModule)();
      };

      _PageLayoutSimpleLargeHeaderTabbedRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _PageLayoutSimpleLargeHeaderTabbedRoutingModule
      });
      _PageLayoutSimpleLargeHeaderTabbedRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_PageLayoutSimpleLargeHeaderTabbedRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
        });
      })();
      /***/

    },

    /***/
    22065:
    /*!*****************************************************************************************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header-tabbed/page-layout-simple-large-header-tabbed.component.ts ***!
      \*****************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageLayoutSimpleLargeHeaderTabbedComponent": function PageLayoutSimpleLargeHeaderTabbedComponent() {
          return (
            /* binding */
            _PageLayoutSimpleLargeHeaderTabbedComponent
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


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../page-layout-demo/page-layout-demo.component */
      32072);

      var _c0 = function _c0() {
        return ["Page Layouts", "Simple", "Large Header & Tabbed"];
      };

      var _PageLayoutSimpleLargeHeaderTabbedComponent = /*#__PURE__*/function () {
        function _PageLayoutSimpleLargeHeaderTabbedComponent() {
          _classCallCheck(this, _PageLayoutSimpleLargeHeaderTabbedComponent);
        }

        _createClass(_PageLayoutSimpleLargeHeaderTabbedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PageLayoutSimpleLargeHeaderTabbedComponent;
      }();

      _PageLayoutSimpleLargeHeaderTabbedComponent.ɵfac = function PageLayoutSimpleLargeHeaderTabbedComponent_Factory(t) {
        return new (t || _PageLayoutSimpleLargeHeaderTabbedComponent)();
      };

      _PageLayoutSimpleLargeHeaderTabbedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _PageLayoutSimpleLargeHeaderTabbedComponent,
        selectors: [["vex-page-layout-simple-large-header-tabbed"]],
        decls: 17,
        vars: 2,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center start"], ["vexContainer", ""], [1, "title", "m-0"], [3, "crumbs"], ["vexContainer", "", 1, "vex-tabs", "p-0"], ["label", "Main Tab"], [1, "p-6"], ["label", "Side Tab"], ["label", "Extra Tab"]],
        template: function PageLayoutSimpleLargeHeaderTabbedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "vex-page-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "vex-page-layout-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Simple - Large Header & Tabbed");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "vex-breadcrumbs", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "vex-page-layout-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-tab", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-tab", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutComponent, _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__.PageLayoutHeaderDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_2__.ContainerDirective, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutContentDirective, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTab, _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_5__.PageLayoutDemoComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxheW91dC1zaW1wbGUtbGFyZ2UtaGVhZGVyLXRhYmJlZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    34228:
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header-tabbed/page-layout-simple-large-header-tabbed.module.ts ***!
      \**************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageLayoutSimpleLargeHeaderTabbedModule": function PageLayoutSimpleLargeHeaderTabbedModule() {
          return (
            /* binding */
            _PageLayoutSimpleLargeHeaderTabbedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _page_layout_simple_large_header_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page-layout-simple-large-header-tabbed-routing.module */
      2747);
      /* harmony import */


      var _page_layout_simple_large_header_tabbed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./page-layout-simple-large-header-tabbed.component */
      22065);
      /* harmony import */


      var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../@vex/components/page-layout/page-layout.module */
      46383);
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
      75592);
      /* harmony import */


      var _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../page-layout-demo/page-layout-demo.module */
      58345);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../@vex/directives/container/container.module */
      7302);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PageLayoutSimpleLargeHeaderTabbedModule = function _PageLayoutSimpleLargeHeaderTabbedModule() {
        _classCallCheck(this, _PageLayoutSimpleLargeHeaderTabbedModule);
      };

      _PageLayoutSimpleLargeHeaderTabbedModule.ɵfac = function PageLayoutSimpleLargeHeaderTabbedModule_Factory(t) {
        return new (t || _PageLayoutSimpleLargeHeaderTabbedModule)();
      };

      _PageLayoutSimpleLargeHeaderTabbedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _PageLayoutSimpleLargeHeaderTabbedModule
      });
      _PageLayoutSimpleLargeHeaderTabbedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _page_layout_simple_large_header_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleLargeHeaderTabbedRoutingModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule, _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutDemoModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_5__.ContainerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_PageLayoutSimpleLargeHeaderTabbedModule, {
          declarations: [_page_layout_simple_large_header_tabbed_component__WEBPACK_IMPORTED_MODULE_1__.PageLayoutSimpleLargeHeaderTabbedComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _page_layout_simple_large_header_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleLargeHeaderTabbedRoutingModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule, _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutDemoModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_5__.ContainerModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ui_page-layouts_simple_page-layout-simple-large-header-tabbed_page-layout-simpl-9ba320-es5.js.map