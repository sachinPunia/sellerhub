(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_pages_invoice_invoice_module_ts"], {
    /***/
    41140:
    /*!***************************************************************!*\
      !*** ./src/app/pages/pages/invoice/invoice-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvoiceRoutingModule": function InvoiceRoutingModule() {
          return (
            /* binding */
            _InvoiceRoutingModule
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


      var _invoice_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./invoice.component */
      15164);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _invoice_component__WEBPACK_IMPORTED_MODULE_0__.InvoiceComponent,
        data: {
          toolbarShadowEnabled: true,
          containerEnabled: true
        }
      }];

      var _InvoiceRoutingModule = function _InvoiceRoutingModule() {
        _classCallCheck(this, _InvoiceRoutingModule);
      };

      _InvoiceRoutingModule.ɵfac = function InvoiceRoutingModule_Factory(t) {
        return new (t || _InvoiceRoutingModule)();
      };

      _InvoiceRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _InvoiceRoutingModule
      });
      _InvoiceRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_InvoiceRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
        });
      })();
      /***/

    },

    /***/
    15164:
    /*!**********************************************************!*\
      !*** ./src/app/pages/pages/invoice/invoice.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvoiceComponent": function InvoiceComponent() {
          return (
            /* binding */
            _InvoiceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-mail */
      89242);
      /* harmony import */


      var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-phone */
      60217);
      /* harmony import */


      var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../@vex/animations/fade-in-up.animation */
      33848);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);

      var _InvoiceComponent = /*#__PURE__*/function () {
        function _InvoiceComponent() {
          _classCallCheck(this, _InvoiceComponent);

          this.icMail = _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_0__["default"];
          this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_1__["default"];
        }

        _createClass(_InvoiceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _InvoiceComponent;
      }();

      _InvoiceComponent.ɵfac = function InvoiceComponent_Factory(t) {
        return new (t || _InvoiceComponent)();
      };

      _InvoiceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _InvoiceComponent,
        selectors: [["vex-invoice"]],
        decls: 138,
        vars: 3,
        consts: [[1, "p-gutter", "container"], [1, "card", "p-16"], ["fxLayout", "row"], ["fxFlex", "50%"], ["src", "assets/img/demo/logo.svg", 1, "h-40"], [1, "mt-12"], [1, "body-2", "text-secondary", "mt-0"], [1, "title", "m-0"], [1, "text-secondary"], [1, "m-0"], ["fxFlex", "50%", "fxLayout", "column", "fxLayoutAlign", "start end", 1, "text-right", "body-1"], [1, "display-2", "m-0"], [1, "mt-6"], [1, "text-secondary", "body-2"], [1, "text-left", "pl-4"], [1, "m-0", "mt-3"], ["inline", "true", "size", "1.25em", 1, "mr-2", 3, "icon"], [1, "table", "w-full", "mt-24"], [1, "body-2", "text-secondary"], [1, "body-2", "text-secondary", "text-right"], [1, "py-6", "border-b"], [1, "py-6", "border-b", "font-medium", "text-right"], ["fxLayout", "column", "fxLayoutAlign", "start end", 1, "mt-8"], [1, "subheading-2", "font-medium", "pr-6"], [1, "text-secondary", "text-right"], [1, "pl-12"], [1, "headline", "font-medium", "text-right", "pt-6"], [1, "headline", "font-medium", "pl-12", "pt-6"]],
        template: function InvoiceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "RECIPIENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "David Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "712 Clarkson Ave");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Brooklyn, NY");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "11203, USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h1", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "INVOICE");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "INVOICE NO.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "2019/0592");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "INVOICE DATE");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "10/04/2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "PROJECT NO.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "D-23-44");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "COMPANY");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "IceCold Tech Ltd.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "907 Eastern Pkwy");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Brooklyn, NY");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "11213, USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "p", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "ic-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "hello@example.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "ic-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "+1 (961) 400-3535");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "table", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "td", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "SERVICE");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "td", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "PRICE PER");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "td", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "UNIT");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "td", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "QUANTITY");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "td", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "TOTAL");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "New Dashboard Prototype, Design & Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "$35.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Hour");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "$1,400.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Graphic Pack - Monthly Subscription (includes Updates)");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "$49.99");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "User");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "$249.95");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Logo & Branding Pack");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "$499.99");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Piece");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "$499.99");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Bug Fixes");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "$15.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Hour");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "10");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "$150.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "table", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "td", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "SUBTOTAL");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "td", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "$2,299.94\u202C");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "td", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "TAX (19%)");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "td", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "$436.99\u202C");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "td", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "DISCOUNT (5%)");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "td", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "-$114.99\u202C");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "td", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "TOTAL");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "$2,621.94\u202C");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInUp", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.icMail);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.icPhone);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__.IconDirective],
        styles: ["@media print {\n  .p-gutter[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    box-shadow: none !important;\n  }\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludm9pY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHFCQUFBO0VBQ0Y7O0VBRUE7SUFDRSwyQkFBQTtFQUNGO0FBQ0Y7O0FBSUU7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBRkoiLCJmaWxlIjoiaW52b2ljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBwcmludCB7XHJcbiAgLnAtZ3V0dGVyIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4udGFibGUge1xyXG4gIHRkIHtcclxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZyk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcclxuICB9XHJcbn1cclxuIl19 */"],
        data: {
          animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInUp400ms]
        }
      });
      /***/
    },

    /***/
    72912:
    /*!*******************************************************!*\
      !*** ./src/app/pages/pages/invoice/invoice.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvoiceModule": function InvoiceModule() {
          return (
            /* binding */
            _InvoiceModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./invoice-routing.module */
      41140);
      /* harmony import */


      var _invoice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./invoice.component */
      15164);
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

      var _InvoiceModule = function _InvoiceModule() {
        _classCallCheck(this, _InvoiceModule);
      };

      _InvoiceModule.ɵfac = function InvoiceModule_Factory(t) {
        return new (t || _InvoiceModule)();
      };

      _InvoiceModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _InvoiceModule
      });
      _InvoiceModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoiceRoutingModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__.IconModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_InvoiceModule, {
          declarations: [_invoice_component__WEBPACK_IMPORTED_MODULE_1__.InvoiceComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoiceRoutingModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__.IconModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pages_invoice_invoice_module_ts-es5.js.map