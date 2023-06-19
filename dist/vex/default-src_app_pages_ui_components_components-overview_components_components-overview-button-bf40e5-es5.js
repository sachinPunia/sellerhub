(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_app_pages_ui_components_components-overview_components_components-overview-button-bf40e5"], {
    /***/
    35291:
    /*!*****************************************************************************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.component.ts ***!
      \*****************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsOverviewButtonsComponent": function ComponentsOverviewButtonsComponent() {
          return (
            /* binding */
            _ComponentsOverviewButtonsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _iconify_icons_ic_twotone_favorite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-favorite */
      90378);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../../@vex/components/highlight/highlight.directive */
      82781);

      var _ComponentsOverviewButtonsComponent = /*#__PURE__*/function () {
        function _ComponentsOverviewButtonsComponent() {
          _classCallCheck(this, _ComponentsOverviewButtonsComponent);

          this.flatButtonsHTML = "<button mat-button>Button</button>\n<button mat-button color=\"primary\">Primary</button>\n<button mat-button color=\"accent\">Accent</button>\n<button mat-button color=\"warn\">Warn</button>\n<button mat-button disabled=\"true\">Disabled</button>";
          this.raisedButtonsHTML = "<button mat-raised-button>Button</button>\n<button mat-raised-button color=\"primary\">Primary</button>\n<button mat-raised-button color=\"accent\">Accent</button>\n<button mat-raised-button color=\"warn\">Warn</button>\n<button mat-raised-button disabled=\"true\">Disabled</button>";
          this.fabHTML = "<button mat-fab color=\"primary\"><mat-icon>grade</mat-icon></button>\n<button mat-fab color=\"accent\"><mat-icon>favorite</mat-icon></button>\n<button mat-fab color=\"warn\"><mat-icon>build</mat-icon></button>\n<button mat-fab disabled=\"true\"><mat-icon>lock</mat-icon></button>\n<button mat-mini-fab color=\"primary\"><mat-icon>favorite</mat-icon></button>\n<button mat-mini-fab color=\"accent\"><mat-icon>thumb_up</mat-icon></button>\n<button mat-mini-fab color=\"warn\"><mat-icon>build</mat-icon></button>\n<button mat-mini-fab disabled=\"true\"><mat-icon>lock</mat-icon></button>";
          this.iconButtonHTML = "<button mat-icon-button><mat-icon>menu</mat-icon></button>\n<button mat-icon-button color=\"primary\"><mat-icon>grade</mat-icon></button>\n<button mat-icon-button color=\"accent\"><mat-icon>favorite</mat-icon></button>\n<button mat-icon-button color=\"warn\"><mat-icon>build</mat-icon></button>\n<button mat-icon-button disabled=\"true\"><mat-icon>lock</mat-icon></button>";
          this.icFavorite = _iconify_icons_ic_twotone_favorite__WEBPACK_IMPORTED_MODULE_0__["default"];
        }

        _createClass(_ComponentsOverviewButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ComponentsOverviewButtonsComponent;
      }();

      _ComponentsOverviewButtonsComponent.ɵfac = function ComponentsOverviewButtonsComponent_Factory(t) {
        return new (t || _ComponentsOverviewButtonsComponent)();
      };

      _ComponentsOverviewButtonsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ComponentsOverviewButtonsComponent,
        selectors: [["vex-components-overview-buttons"]],
        decls: 106,
        vars: 16,
        consts: [["fxLayout", "column", "fxLayout.gt-sm", "row", 1, "card"], [1, "p-6"], [1, "title", "mt-0", "mb-4"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "24px"], ["fxLayout", "column", "fxLayoutGap", "8px"], ["mat-button", ""], ["color", "primary", "mat-button", ""], ["color", "accent", "mat-button", ""], ["color", "warn", "mat-button", ""], ["disabled", "", "mat-button", ""], ["mat-stroked-button", ""], ["color", "primary", "mat-stroked-button", ""], ["color", "accent", "mat-stroked-button", ""], ["color", "warn", "mat-stroked-button", ""], ["disabled", "", "mat-stroked-button", ""], ["mat-raised-button", ""], ["color", "primary", "mat-raised-button", ""], ["color", "accent", "mat-raised-button", ""], ["color", "warn", "mat-raised-button", ""], ["disabled", "", "mat-raised-button", ""], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "8px", 1, "mt-6"], ["color", "primary", "mat-icon-button", ""], [3, "icIcon"], ["color", "accent", "mat-icon-button", ""], ["color", "warn", "mat-icon-button", ""], ["disabled", "", "mat-icon-button", ""], ["color", "primary", "mat-mini-fab", ""], ["color", "accent", "mat-mini-fab", ""], ["color", "warn", "mat-mini-fab", ""], ["disabled", "", "mat-mini-fab", ""], ["color", "primary", "mat-fab", ""], ["color", "accent", "mat-fab", ""], ["color", "warn", "mat-fab", ""], ["disabled", "", "mat-fab", ""], ["fxFlex", "", 1, "border-l"], [1, "body-2", "text-secondary", "m-0"], [1, "vex-tabs"], ["label", "DESCRIPTION"], [1, "semi-bold"], ["label", "SOURCE CODE"], [3, "vexHighlight"]],
        template: function ComponentsOverviewButtonsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Preview");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "BUTTON");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "PRIMARY");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "ACCENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "WARN");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "DISABLED");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "BUTTON");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "PRIMARY");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "ACCENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "WARN");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "DISABLED");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "BUTTON");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "PRIMARY");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "ACCENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "WARN");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "DISABLED");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "mat-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "mat-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "mat-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "mat-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "mat-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "mat-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "mat-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "mat-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "mat-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "mat-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "mat-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "mat-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "h4", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "[mat-button]");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "mat-tab-group", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "mat-tab", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " Material buttons trigger an ink reaction on press. They may display text, imagery, or both. Flat buttons and raised buttons are the most commonly used types. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Flat buttons:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Flat buttons are text-only buttons.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "They may be used in dialogs, toolbars, or inline.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "They do not lift, but fill with color on press.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Raised buttons:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Raised buttons are rectangular-shaped buttons.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "They may be used inline.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "They lift and display ink reactions on press.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "mat-tab", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "code", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "code", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "code", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "code", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("vexHighlight", ctx.flatButtonsHTML);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("vexHighlight", ctx.raisedButtonsHTML);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("vexHighlight", ctx.iconButtonHTML);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("vexHighlight", ctx.fabHTML);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutGapDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTab, _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_1__.HighlightDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzLW92ZXJ2aWV3LWJ1dHRvbnMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    10419:
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.module.ts ***!
      \**************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsOverviewButtonsModule": function ComponentsOverviewButtonsModule() {
          return (
            /* binding */
            _ComponentsOverviewButtonsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components-overview-buttons.component */
      35291);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      42542);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);
      /* harmony import */


      var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../../@vex/components/highlight/highlight.module */
      49979);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ComponentsOverviewButtonsModule = function _ComponentsOverviewButtonsModule() {
        _classCallCheck(this, _ComponentsOverviewButtonsModule);
      };

      _ComponentsOverviewButtonsModule.ɵfac = function ComponentsOverviewButtonsModule_Factory(t) {
        return new (t || _ComponentsOverviewButtonsModule)();
      };

      _ComponentsOverviewButtonsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ComponentsOverviewButtonsModule
      });
      _ComponentsOverviewButtonsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ComponentsOverviewButtonsModule, {
          declarations: [_components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewButtonsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule],
          exports: [_components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewButtonsComponent]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default-src_app_pages_ui_components_components-overview_components_components-overview-button-bf40e5-es5.js.map