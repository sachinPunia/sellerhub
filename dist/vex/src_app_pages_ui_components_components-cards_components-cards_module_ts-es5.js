(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_components_components-cards_components-cards_module_ts"], {
    /***/
    91963:
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-cards/components-cards-routing.module.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsCardsRoutingModule": function ComponentsCardsRoutingModule() {
          return (
            /* binding */
            _ComponentsCardsRoutingModule
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


      var _components_cards_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components-cards.component */
      77096);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _components_cards_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsCardsComponent
      }];

      var _ComponentsCardsRoutingModule = function _ComponentsCardsRoutingModule() {
        _classCallCheck(this, _ComponentsCardsRoutingModule);
      };

      _ComponentsCardsRoutingModule.ɵfac = function ComponentsCardsRoutingModule_Factory(t) {
        return new (t || _ComponentsCardsRoutingModule)();
      };

      _ComponentsCardsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ComponentsCardsRoutingModule
      });
      _ComponentsCardsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ComponentsCardsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
        });
      })();
      /***/

    },

    /***/
    77096:
    /*!************************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-cards/components-cards.component.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsCardsComponent": function ComponentsCardsComponent() {
          return (
            /* binding */
            _ComponentsCardsComponent
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


      var _components_overview_components_components_overview_cards_components_overview_cards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../components-overview/components/components-overview-cards/components-overview-cards.component */
      24637);

      var _c0 = function _c0() {
        return ["Components", "Cards"];
      };

      var _ComponentsCardsComponent = /*#__PURE__*/function () {
        function _ComponentsCardsComponent() {
          _classCallCheck(this, _ComponentsCardsComponent);

          this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_0__["default"];
        }

        _createClass(_ComponentsCardsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ComponentsCardsComponent;
      }();

      _ComponentsCardsComponent.ɵfac = function ComponentsCardsComponent_Factory(t) {
        return new (t || _ComponentsCardsComponent)();
      };

      _ComponentsCardsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
        type: _ComponentsCardsComponent,
        selectors: [["vex-components-cards"]],
        decls: 5,
        vars: 4,
        consts: [["current", "Cards"], [3, "crumbs"], ["vexContainer", ""], [1, "block"]],
        template: function ComponentsCardsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "vex-page-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "vex-secondary-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "vex-breadcrumbs", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "vex-page-layout-content", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "vex-components-overview-cards", 3);

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
        directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_5__.PageLayoutComponent, _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_6__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbsComponent, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_8__.PageLayoutContentDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_9__.ContainerDirective, _components_overview_components_components_overview_cards_components_overview_cards_component__WEBPACK_IMPORTED_MODULE_10__.ComponentsOverviewCardsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzLWNhcmRzLmNvbXBvbmVudC5zY3NzIn0= */"],
        data: {
          animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__.stagger80ms, _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__.scaleIn400ms, _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInRight400ms, _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__.fadeInUp400ms]
        }
      });
      /***/
    },

    /***/
    40048:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-cards/components-cards.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsCardsModule": function ComponentsCardsModule() {
          return (
            /* binding */
            _ComponentsCardsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _components_cards_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components-cards-routing.module */
      91963);
      /* harmony import */


      var _components_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components-cards.component */
      77096);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _components_overview_components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../components-overview/components/components-overview-buttons/components-overview-buttons.module */
      10419);
      /* harmony import */


      var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../@vex/components/page-layout/page-layout.module */
      46383);
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
      44241);
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
      75592);
      /* harmony import */


      var _components_overview_components_components_overview_cards_components_overview_cards_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components-overview/components/components-overview-cards/components-overview-cards.module */
      27054);
      /* harmony import */


      var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../@vex/directives/container/container.module */
      7302);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ComponentsCardsModule = function _ComponentsCardsModule() {
        _classCallCheck(this, _ComponentsCardsModule);
      };

      _ComponentsCardsModule.ɵfac = function ComponentsCardsModule_Factory(t) {
        return new (t || _ComponentsCardsModule)();
      };

      _ComponentsCardsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _ComponentsCardsModule
      });
      _ComponentsCardsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _components_cards_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsCardsRoutingModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__.IconModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexLayoutModule, _components_overview_components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsOverviewButtonsModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule, _components_overview_components_components_overview_cards_components_overview_cards_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsOverviewCardsModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_7__.ContainerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_ComponentsCardsModule, {
          declarations: [_components_cards_component__WEBPACK_IMPORTED_MODULE_1__.ComponentsCardsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _components_cards_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsCardsRoutingModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__.IconModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexLayoutModule, _components_overview_components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsOverviewButtonsModule, _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule, _components_overview_components_components_overview_cards_components_overview_cards_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsOverviewCardsModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_7__.ContainerModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ui_components_components-cards_components-cards_module_ts-es5.js.map