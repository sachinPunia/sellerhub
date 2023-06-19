(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_pages_errors_error-404_error-404_module_ts"], {
    /***/
    26990:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/pages/errors/error-404/error-404-routing.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error404RoutingModule": function Error404RoutingModule() {
          return (
            /* binding */
            _Error404RoutingModule
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


      var _error_404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./error-404.component */
      35811);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _error_404_component__WEBPACK_IMPORTED_MODULE_0__.Error404Component,
        data: {
          containerEnabled: true,
          toolbarShadowEnabled: true
        }
      }];

      var _Error404RoutingModule = function _Error404RoutingModule() {
        _classCallCheck(this, _Error404RoutingModule);
      };

      _Error404RoutingModule.ɵfac = function Error404RoutingModule_Factory(t) {
        return new (t || _Error404RoutingModule)();
      };

      _Error404RoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _Error404RoutingModule
      });
      _Error404RoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_Error404RoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
        });
      })();
      /***/

    },

    /***/
    35811:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/pages/errors/error-404/error-404.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error404Component": function Error404Component() {
          return (
            /* binding */
            _Error404Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-search */
      46440);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);

      var _Error404Component = /*#__PURE__*/function () {
        function _Error404Component() {
          _classCallCheck(this, _Error404Component);

          this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_0__["default"];
        }

        _createClass(_Error404Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _Error404Component;
      }();

      _Error404Component.ɵfac = function Error404Component_Factory(t) {
        return new (t || _Error404Component)();
      };

      _Error404Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _Error404Component,
        selectors: [["vex-error404"]],
        decls: 9,
        vars: 1,
        consts: [[1, "w-full", "p-gutter", "text-center"], ["src", "assets/img/illustrations/data_center.svg", 1, "w-full", "max-w-lg", "mx-auto", "mb-6"], [1, "display-3", "font-medium", "m-0"], [1, "headline", "m-0"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "bg-card", "rounded-full", "overflow-hidden", "relative", "ltr:pl-5", "rtl:pr-5", "h-12", "max-w-md", "w-full", "shadow-8", "mx-auto", "mt-6"], ["fxFlex", "none", "height", "24px", "width", "24px", 1, "text-secondary", 3, "icon"], ["fxFlex", "auto", "placeholder", "Search for other pages ...", "type", "text", 1, "border-0", "h-12", "outline-none", "ltr:pl-4", "rtl:pr-4", "placeholder:text-secondary", "bg-card"]],
        template: function Error404Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "404");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Page not found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ic-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.icSearch);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_3__.IconDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci00MDQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    667:
    /*!******************************************************************!*\
      !*** ./src/app/pages/pages/errors/error-404/error-404.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error404Module": function Error404Module() {
          return (
            /* binding */
            _Error404Module
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _error_404_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./error-404-routing.module */
      26990);
      /* harmony import */


      var _error_404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-404.component */
      35811);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _Error404Module = function _Error404Module() {
        _classCallCheck(this, _Error404Module);
      };

      _Error404Module.ɵfac = function Error404Module_Factory(t) {
        return new (t || _Error404Module)();
      };

      _Error404Module.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _Error404Module
      });
      _Error404Module.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _error_404_routing_module__WEBPACK_IMPORTED_MODULE_0__.Error404RoutingModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__.IconModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_Error404Module, {
          declarations: [_error_404_component__WEBPACK_IMPORTED_MODULE_1__.Error404Component],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _error_404_routing_module__WEBPACK_IMPORTED_MODULE_0__.Error404RoutingModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__.IconModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pages_errors_error-404_error-404_module_ts-es5.js.map