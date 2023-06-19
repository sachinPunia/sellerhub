(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_app_pages_ui_components_components-overview_components_components-overview-lists_-b6f346"], {
    /***/
    43356:
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-overview/components/components-overview-lists/components-overview-lists.component.ts ***!
      \*************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsOverviewListsComponent": function ComponentsOverviewListsComponent() {
          return (
            /* binding */
            _ComponentsOverviewListsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      77746);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/divider */
      1769);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../../@vex/components/highlight/highlight.directive */
      82781);

      var _ComponentsOverviewListsComponent = /*#__PURE__*/function () {
        function _ComponentsOverviewListsComponent() {
          _classCallCheck(this, _ComponentsOverviewListsComponent);

          this.listHTML = "<mat-list class=\"list mat-elevation-z1\">\n  <h3 mat-subheader>Contacts</h3>\n  <mat-list-item>\n    <img mat-list-avatar src=\"assets/img/avatars/1.jpg\">\n    <h3 matLine>John</h3>\n    <p matLine>\n      <span>Brunch?</span>\n      <span class=\"subline\">-- Did you want to go on Sunday? I was thinking</span>\n    </p>\n  </mat-list-item>\n  <mat-list-item>\n    <img mat-list-avatar src=\"assets/img/avatars/2.jpg\">\n    <h3 matLine>Peter</h3>\n    <p matLine>\n      <span>Summer BBQ</span>\n      <span class=\"subline\">-- Wish I could come, but I have some special</span>\n    </p>\n  </mat-list-item>\n  <mat-list-item>\n    <img mat-list-avatar src=\"assets/img/avatars/3.jpg\">\n    <h3 matLine>Nancy</h3>\n    <p matLine>\n      <span>Oui oui</span>\n      <span class=\"subline\">-- Have you booked the Paris trip?</span>\n    </p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <h3 mat-subheader>Other</h3>\n  <mat-list-item>\n    <img mat-list-avatar src=\"assets/img/avatars/4.jpg\">\n    <h3 matLine>Frank</h3>\n    <p matLine>\n      <span>Pretty decent!</span>\n      <span class=\"subline\">-- You look pretty... decent!</span>\n    </p>\n  </mat-list-item>\n  <mat-list-item>\n    <img mat-list-avatar src=\"assets/img/avatars/5.jpg\">\n    <h3 matLine>Donald</h3>\n    <p matLine>\n      <span>That's great!</span>\n      <span class=\"subline\">-- Great work mate!</span>\n    </p>\n  </mat-list-item>\n</mat-list>";
        }

        _createClass(_ComponentsOverviewListsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ComponentsOverviewListsComponent;
      }();

      _ComponentsOverviewListsComponent.ɵfac = function ComponentsOverviewListsComponent_Factory(t) {
        return new (t || _ComponentsOverviewListsComponent)();
      };

      _ComponentsOverviewListsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ComponentsOverviewListsComponent,
        selectors: [["vex-components-overview-lists"]],
        decls: 83,
        vars: 1,
        consts: [["fxLayout", "column", "fxLayout.gt-sm", "row", 1, "card"], [1, "p-6"], [1, "card", "max-w-full", "overflow-hidden", "w-300"], ["mat-subheader", ""], ["mat-list-avatar", "", "src", "assets/img/avatars/1.jpg"], ["matLine", ""], [1, "text-secondary"], ["mat-list-avatar", "", "src", "assets/img/avatars/2.jpg"], ["mat-list-avatar", "", "src", "assets/img/avatars/3.jpg"], ["mat-list-avatar", "", "src", "assets/img/avatars/4.jpg"], ["mat-list-avatar", "", "src", "assets/img/avatars/5.jpg"], ["fxFlex", "", 1, "border-l"], [1, "title", "mt-0", "mb-4"], [1, "body-2", "text-secondary", "m-0"], [1, "vex-tabs"], ["label", "DESCRIPTION"], [1, "semi-bold"], ["label", "SOURCE CODE"], [3, "vexHighlight"]],
        template: function ComponentsOverviewListsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Contacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "John");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Brunch?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "-- Did you want to go on Sunday? I was thinking");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Peter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Summer BBQ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "-- Wish I could come, but I have some special");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Nancy");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Oui oui");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "-- Have you booked the Paris trip?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Other");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Frank");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Pretty decent!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "-- You look pretty... decent!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Donald");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "That's great!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "-- Great work mate!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h2", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Lists");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "<mat-list>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-tab-group", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-tab", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Lists are made up of a continuous column of rows. Each row contains a tile. Primary actions fill the tile, and supplemental actions are represented by icons and text. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Lists are best suited to presenting a homogeneous data type or sets of data types, such as images and text. They are optimized for reading comprehension while differentiating either between similar data types, or qualities within a single data type. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "List alternatives:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "If more than three lines of text need to be shown in list tiles, use cards instead ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "If the primary distinguishing content consists of images, use a grid list ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Density");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "When the mouse and keyboard are the primary input methods, measurements may be condensed to accommodate denser layouts. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-tab", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "code", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vexHighlight", ctx.listHTML);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListSubheaderCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListAvatarCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatLine, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTab, _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.HighlightDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzLW92ZXJ2aWV3LWxpc3RzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    750:
    /*!**********************************************************************************************************************************!*\
      !*** ./src/app/pages/ui/components/components-overview/components/components-overview-lists/components-overview-lists.module.ts ***!
      \**********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsOverviewListsModule": function ComponentsOverviewListsModule() {
          return (
            /* binding */
            _ComponentsOverviewListsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _components_overview_lists_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components-overview-lists.component */
      43356);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/list */
      77746);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../../@vex/components/highlight/highlight.module */
      49979);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ComponentsOverviewListsModule = function _ComponentsOverviewListsModule() {
        _classCallCheck(this, _ComponentsOverviewListsModule);
      };

      _ComponentsOverviewListsModule.ɵfac = function ComponentsOverviewListsModule_Factory(t) {
        return new (t || _ComponentsOverviewListsModule)();
      };

      _ComponentsOverviewListsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ComponentsOverviewListsModule
      });
      _ComponentsOverviewListsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ComponentsOverviewListsModule, {
          declarations: [_components_overview_lists_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewListsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule],
          exports: [_components_overview_lists_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewListsComponent]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default-src_app_pages_ui_components_components-overview_components_components-overview-lists_-b6f346-es5.js.map