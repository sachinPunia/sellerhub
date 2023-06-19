(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_page-layouts_blank_blank_module_ts"], {
    /***/
    54962:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/blank/blank-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlankRoutingModule": function BlankRoutingModule() {
          return (
            /* binding */
            _BlankRoutingModule
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


      var _blank_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./blank.component */
      40124);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _blank_component__WEBPACK_IMPORTED_MODULE_0__.BlankComponent
      }];

      var _BlankRoutingModule = function _BlankRoutingModule() {
        _classCallCheck(this, _BlankRoutingModule);
      };

      _BlankRoutingModule.ɵfac = function BlankRoutingModule_Factory(t) {
        return new (t || _BlankRoutingModule)();
      };

      _BlankRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _BlankRoutingModule
      });
      _BlankRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_BlankRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
        });
      })();
      /***/

    },

    /***/
    40124:
    /*!****************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/blank/blank.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlankComponent": function BlankComponent() {
          return (
            /* binding */
            _BlankComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */
      43410);
      /* harmony import */


      var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../@vex/directives/container/container.directive */
      90080);

      var _c0 = function _c0() {
        return ["Blank Page"];
      };

      var _BlankComponent = /*#__PURE__*/function () {
        function _BlankComponent() {
          _classCallCheck(this, _BlankComponent);
        }

        _createClass(_BlankComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BlankComponent;
      }();

      _BlankComponent.ɵfac = function BlankComponent_Factory(t) {
        return new (t || _BlankComponent)();
      };

      _BlankComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _BlankComponent,
        selectors: [["vex-blank"]],
        decls: 4,
        vars: 2,
        consts: [["current", "Blank Page", 3, "crumbs"], ["vexContainer", "", 1, "p-gutter"], [1, "title", "m-0"]],
        template: function BlankComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "vex-secondary-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Content comes here...");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.SecondaryToolbarComponent, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_1__.ContainerDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGFuay5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    61750:
    /*!*************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/blank/blank.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlankModule": function BlankModule() {
          return (
            /* binding */
            _BlankModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _blank_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./blank-routing.module */
      54962);
      /* harmony import */


      var _blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./blank.component */
      40124);
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
      44241);
      /* harmony import */


      var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../@vex/directives/container/container.module */
      7302);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BlankModule = function _BlankModule() {
        _classCallCheck(this, _BlankModule);
      };

      _BlankModule.ɵfac = function BlankModule_Factory(t) {
        return new (t || _BlankModule)();
      };

      _BlankModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _BlankModule
      });
      _BlankModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _blank_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlankRoutingModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_3__.ContainerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_BlankModule, {
          declarations: [_blank_component__WEBPACK_IMPORTED_MODULE_1__.BlankComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _blank_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlankRoutingModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_3__.ContainerModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ui_page-layouts_blank_blank_module_ts-es5.js.map