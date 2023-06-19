(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_page-layouts_card_page-layout-card-tabbed_page-layout-card-tabbed_module_ts"], {
    /***/
    31171:
    /*!**************************************************************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed-routing.module.ts ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageLayoutCardTabbedRoutingModule": function PageLayoutCardTabbedRoutingModule() {
          return (
            /* binding */
            _PageLayoutCardTabbedRoutingModule
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


      var _page_layout_card_tabbed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page-layout-card-tabbed.component */
      98032);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _page_layout_card_tabbed_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutCardTabbedComponent
      }];

      var _PageLayoutCardTabbedRoutingModule = function _PageLayoutCardTabbedRoutingModule() {
        _classCallCheck(this, _PageLayoutCardTabbedRoutingModule);
      };

      _PageLayoutCardTabbedRoutingModule.ɵfac = function PageLayoutCardTabbedRoutingModule_Factory(t) {
        return new (t || _PageLayoutCardTabbedRoutingModule)();
      };

      _PageLayoutCardTabbedRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _PageLayoutCardTabbedRoutingModule
      });
      _PageLayoutCardTabbedRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_PageLayoutCardTabbedRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
        });
      })();
      /***/

    },

    /***/
    98032:
    /*!*********************************************************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed.component.ts ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageLayoutCardTabbedComponent": function PageLayoutCardTabbedComponent() {
          return (
            /* binding */
            _PageLayoutCardTabbedComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-more-vert */
      40077);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../@vex/components/page-layout/page-layout.component */
      32237);
      /* harmony import */


      var _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../@vex/components/page-layout/page-layout-header.directive */
      27087);
      /* harmony import */


      var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../@vex/components/page-layout/page-layout-content.directive */
      19199);
      /* harmony import */


      var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../@vex/directives/container/container.directive */
      90080);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../page-layout-demo/page-layout-demo.component */
      32072);

      var _PageLayoutCardTabbedComponent = /*#__PURE__*/function () {
        function _PageLayoutCardTabbedComponent() {
          _classCallCheck(this, _PageLayoutCardTabbedComponent);

          this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_0__["default"];
        }

        _createClass(_PageLayoutCardTabbedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PageLayoutCardTabbedComponent;
      }();

      _PageLayoutCardTabbedComponent.ɵfac = function PageLayoutCardTabbedComponent_Factory(t) {
        return new (t || _PageLayoutCardTabbedComponent)();
      };

      _PageLayoutCardTabbedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _PageLayoutCardTabbedComponent,
        selectors: [["vex-page-layout-card-tabbed"]],
        decls: 32,
        vars: 0,
        consts: [["mode", "card"], [1, "h-6"], ["vexContainer", ""], [1, "card"], ["label", "Main Tab"], [1, "p-6"], ["label", "Side Tab"], ["label", "Extra Tab"], ["label", "Additional Tab"], ["label", "Another Tab"], ["label", "One More Tab"], ["label", "Definitely the last Tab"], ["label", "Whoops another Tab"], ["label", "And one last Tab"]],
        template: function PageLayoutCardTabbedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "vex-page-layout", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "vex-page-layout-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "vex-page-layout-content", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-tab", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-tab", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-tab", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-tab", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-tab", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-tab", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-tab", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-tab", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }
        },
        directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_1__.PageLayoutComponent, _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_2__.PageLayoutHeaderDirective, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__.PageLayoutContentDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_4__.ContainerDirective, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTab, _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_5__.PageLayoutDemoComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxheW91dC1jYXJkLXRhYmJlZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    5684:
    /*!******************************************************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed.module.ts ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageLayoutCardTabbedModule": function PageLayoutCardTabbedModule() {
          return (
            /* binding */
            _PageLayoutCardTabbedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _page_layout_card_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page-layout-card-tabbed-routing.module */
      31171);
      /* harmony import */


      var _page_layout_card_tabbed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./page-layout-card-tabbed.component */
      98032);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../@vex/components/page-layout/page-layout.module */
      46383);
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
      44241);
      /* harmony import */


      var _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../page-layout-demo/page-layout-demo.module */
      58345);
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
      75592);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
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

      var _PageLayoutCardTabbedModule = function _PageLayoutCardTabbedModule() {
        _classCallCheck(this, _PageLayoutCardTabbedModule);
      };

      _PageLayoutCardTabbedModule.ɵfac = function PageLayoutCardTabbedModule_Factory(t) {
        return new (t || _PageLayoutCardTabbedModule)();
      };

      _PageLayoutCardTabbedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _PageLayoutCardTabbedModule
      });
      _PageLayoutCardTabbedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _page_layout_card_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutCardTabbedRoutingModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule, _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutDemoModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__.IconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_PageLayoutCardTabbedModule, {
          declarations: [_page_layout_card_tabbed_component__WEBPACK_IMPORTED_MODULE_1__.PageLayoutCardTabbedComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _page_layout_card_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutCardTabbedRoutingModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule, _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutDemoModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__.IconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ui_page-layouts_card_page-layout-card-tabbed_page-layout-card-tabbed_module_ts-es5.js.map