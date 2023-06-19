(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_pages_guides_guides_module_ts"],{

/***/ 84328:
/*!**********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-launch.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {

var data = {
	"body": "<path d=\"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ 85722:
/*!****************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-movie-filter.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

var data = {
	"body": "<path opacity=\".3\" d=\"M16.63 11.37L18 12l-1.37.63L16 14l-.63-1.37L14 12l1.37-.63L16 10H5.77L4.01 6.47V18h16v-8H16l.63 1.37zm-5.69 3.57L10 17l-.94-2.06L7 14l2.06-.94L10 11l.94 2.06L13 14l-2.06.94z\" fill=\"currentColor\"/><path d=\"M10 11l-.94 2.06L7 14l2.06.94L10 17l.94-2.06L13 14l-2.06-.94zm8.01-7l2 4h-3l-2-4h-2l2 4h-3l-2-4h-2l2 4h-3l-2-4h-1c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 1.99-.9 1.99-2V4h-3.99zm2 14h-16V6.47L5.77 10H16l-.63 1.37L14 12l1.37.63L16 14l.63-1.37L18 12l-1.37-.63L16 10h4.01v8z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ 93186:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/apps/help-center/help-center-guides/help-center-guides-guide/help-center-guides-guide.component.ts ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpCenterGuidesGuideComponent": function() { return /* binding */ HelpCenterGuidesGuideComponent; }
/* harmony export */ });
/* harmony import */ var _iconify_icons_ic_twotone_launch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-launch */ 84328);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ 34348);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ 68399);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 1769);










class HelpCenterGuidesGuideComponent {
    constructor(guide) {
        this.guide = guide;
        this.icLaunch = _iconify_icons_ic_twotone_launch__WEBPACK_IMPORTED_MODULE_0__.default;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_1__.default;
    }
    ngOnInit() {
    }
}
HelpCenterGuidesGuideComponent.ɵfac = function HelpCenterGuidesGuideComponent_Factory(t) { return new (t || HelpCenterGuidesGuideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
HelpCenterGuidesGuideComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HelpCenterGuidesGuideComponent, selectors: [["vex-help-center-guides-guide"]], decls: 26, vars: 3, consts: [["fxLayout", "row", "fxLayoutAlign", "start center", "mat-dialog-title", ""], ["fxFlex", "auto", 1, "title", "m-0"], ["mat-icon-button", "", "type", "button", 1, "text-secondary"], [3, "icIcon"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], [1, "-mx-6", "text-border"], ["fxLayout", "column", 1, "my-6"], ["align", "end"], ["cdkFocusInitial", "", "color", "primary", "mat-button", "", "mat-dialog-close", "", "type", "button"]], template: function HelpCenterGuidesGuideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn\u2019t listen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "She packed her seven versalia, put her initial into the belt and made herself on the way.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-dialog-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "CLOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.guide.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icLaunch);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icClose);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__.IconDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwLWNlbnRlci1ndWlkZXMtZ3VpZGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 49183:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/apps/help-center/help-center-guides/help-center-guides-routing.module.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpCenterGuidesRoutingModule": function() { return /* binding */ HelpCenterGuidesRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 85530);
/* harmony import */ var _help_center_guides_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-center-guides.component */ 98679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);





const routes = [
    {
        path: '',
        component: _help_center_guides_component__WEBPACK_IMPORTED_MODULE_0__.HelpCenterGuidesComponent
    }
];
class HelpCenterGuidesRoutingModule {
}
HelpCenterGuidesRoutingModule.ɵfac = function HelpCenterGuidesRoutingModule_Factory(t) { return new (t || HelpCenterGuidesRoutingModule)(); };
HelpCenterGuidesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HelpCenterGuidesRoutingModule });
HelpCenterGuidesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HelpCenterGuidesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 98679:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/apps/help-center/help-center-guides/help-center-guides.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuideCategory": function() { return /* binding */ GuideCategory; },
/* harmony export */   "HelpCenterGuidesComponent": function() { return /* binding */ HelpCenterGuidesComponent; }
/* harmony export */ });
/* harmony import */ var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@vex/utils/track-by */ 21081);
/* harmony import */ var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-description */ 75320);
/* harmony import */ var _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-movie-filter */ 85722);
/* harmony import */ var _help_center_guides_guide_help_center_guides_guide_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help-center-guides-guide/help-center-guides-guide.component */ 93186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/grid */ 94568);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ 68399);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 5015);












function HelpCenterGuidesComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HelpCenterGuidesComponent_a_10_Template_a_click_0_listener() { const guide_r4 = ctx.$implicit; return guide_r4.onClick(guide_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guide_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icIcon", guide_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](guide_r4.label);
} }
function HelpCenterGuidesComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HelpCenterGuidesComponent_a_15_Template_a_click_0_listener() { const guide_r6 = ctx.$implicit; return guide_r6.onClick(guide_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guide_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icIcon", guide_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](guide_r6.label);
} }
function HelpCenterGuidesComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HelpCenterGuidesComponent_a_20_Template_a_click_0_listener() { const guide_r8 = ctx.$implicit; return guide_r8.onClick(guide_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guide_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icIcon", guide_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](guide_r8.label);
} }
function HelpCenterGuidesComponent_a_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HelpCenterGuidesComponent_a_25_Template_a_click_0_listener() { const guide_r10 = ctx.$implicit; return guide_r10.onClick(guide_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guide_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icIcon", guide_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](guide_r10.label);
} }
var GuideCategory;
(function (GuideCategory) {
    GuideCategory[GuideCategory["firstSteps"] = 0] = "firstSteps";
    GuideCategory[GuideCategory["accountSettings"] = 1] = "accountSettings";
    GuideCategory[GuideCategory["apiHelp"] = 2] = "apiHelp";
    GuideCategory[GuideCategory["billing"] = 3] = "billing";
})(GuideCategory || (GuideCategory = {}));
class HelpCenterGuidesComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.guides = [
            {
                id: 1,
                label: 'How secure is my password?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__.default,
                category: GuideCategory.accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 2,
                label: 'Can I change my username?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__.default,
                category: GuideCategory.accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 3,
                label: 'How do I change my email?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__.default,
                category: GuideCategory.accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 4,
                label: 'Where can I change my timezone?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__.default,
                category: GuideCategory.accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 5,
                label: 'How do I change my password?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__.default,
                category: GuideCategory.accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 6,
                label: 'Which technologies are used?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__.default,
                category: GuideCategory.apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 7,
                label: 'How do I make a request?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__.default,
                category: GuideCategory.apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 8,
                label: 'What are the API Limits?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__.default,
                category: GuideCategory.apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 9,
                label: 'How can I apply for the API?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__.default,
                category: GuideCategory.apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 10,
                label: 'When can I start developing?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__.default,
                category: GuideCategory.apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 11,
                label: 'Can I get a refund?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__.default,
                category: GuideCategory.billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 12,
                label: 'How do I pay?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__.default,
                category: GuideCategory.billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 13,
                label: 'Which payment methods are supported?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__.default,
                category: GuideCategory.billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 14,
                label: 'Do I need to pay VAT?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__.default,
                category: GuideCategory.billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 15,
                label: 'Where do I find my purchase code?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__.default,
                category: GuideCategory.billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 16,
                label: 'How do I download the template?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__.default,
                category: GuideCategory.firstSteps,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 17,
                label: 'Installation Guide',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__.default,
                category: GuideCategory.firstSteps,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 18,
                label: 'Creating your first page',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__.default,
                category: GuideCategory.firstSteps,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 19,
                label: 'Customizing your template',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__.default,
                category: GuideCategory.firstSteps,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 20,
                label: 'How do I contact support?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__.default,
                category: GuideCategory.firstSteps,
                onClick: guide => this.openDialog(guide)
            }
        ];
        this.accountSettings = this.guides.filter(guide => guide.category === GuideCategory.accountSettings);
        this.apiHelp = this.guides.filter(guide => guide.category === GuideCategory.apiHelp);
        this.billing = this.guides.filter(guide => guide.category === GuideCategory.billing);
        this.firstSteps = this.guides.filter(guide => guide.category === GuideCategory.firstSteps);
        this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackById;
    }
    ngOnInit() {
    }
    openDialog(guide) {
        this.dialog.open(_help_center_guides_guide_help_center_guides_guide_component__WEBPACK_IMPORTED_MODULE_3__.HelpCenterGuidesGuideComponent, {
            data: guide,
            width: '600px'
        });
    }
}
HelpCenterGuidesComponent.ɵfac = function HelpCenterGuidesComponent_Factory(t) { return new (t || HelpCenterGuidesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
HelpCenterGuidesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HelpCenterGuidesComponent, selectors: [["vex-help-center-guides"]], decls: 26, vars: 8, consts: [[1, "bg-card", "py-16", "px-gutter"], [1, "display-1", "mt-12", "mb-4", "text-center"], [1, "subheading-2", "text-hint", "text-center", "max-w-lg", "mx-auto", "m-0"], ["gdAlignColumns", "start start", "gdColumns", "1fr 1fr", "gdColumns.lt-md", "1fr", "gdGap", "24px", 1, "my-12", "container"], [1, "card", "max-w-full", "overflow-hidden", "p-3"], ["mat-subheader", ""], ["class", "rounded overflow-hidden", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mat-list-item", "", 1, "rounded", "overflow-hidden", 3, "click"], ["mat-list-icon", "", 3, "icIcon"], ["matLine", ""]], template: function HelpCenterGuidesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Guides");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "First Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, HelpCenterGuidesComponent_a_10_Template, 4, 2, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "API Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, HelpCenterGuidesComponent_a_15_Template, 4, 2, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Billing");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, HelpCenterGuidesComponent_a_20_Template, 4, 2, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "First Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, HelpCenterGuidesComponent_a_25_Template, 4, 2, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.accountSettings)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.apiHelp)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.billing)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.firstSteps)("ngForTrackBy", ctx.trackById);
    } }, directives: [_angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatef"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatex"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privateba"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListSubheaderCssMatStyler, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListIconCssMatStyler, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__.IconDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatLine], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwLWNlbnRlci1ndWlkZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1150:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/apps/help-center/help-center-guides/help-center-guides.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpCenterGuidesModule": function() { return /* binding */ HelpCenterGuidesModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _help_center_guides_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-center-guides-routing.module */ 49183);
/* harmony import */ var _help_center_guides_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help-center-guides.component */ 98679);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ 68399);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _help_center_guides_guide_help_center_guides_guide_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-center-guides-guide/help-center-guides-guide.component */ 93186);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);











class HelpCenterGuidesModule {
}
HelpCenterGuidesModule.ɵfac = function HelpCenterGuidesModule_Factory(t) { return new (t || HelpCenterGuidesModule)(); };
HelpCenterGuidesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HelpCenterGuidesModule });
HelpCenterGuidesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _help_center_guides_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpCenterGuidesRoutingModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HelpCenterGuidesModule, { declarations: [_help_center_guides_component__WEBPACK_IMPORTED_MODULE_1__.HelpCenterGuidesComponent, _help_center_guides_guide_help_center_guides_guide_component__WEBPACK_IMPORTED_MODULE_2__.HelpCenterGuidesGuideComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _help_center_guides_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpCenterGuidesRoutingModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule] }); })();


/***/ }),

/***/ 79137:
/*!*************************************************************!*\
  !*** ./src/app/pages/pages/guides/guides-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuidesRoutingModule": function() { return /* binding */ GuidesRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 85530);
/* harmony import */ var _guides_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guides.component */ 57434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);





const routes = [
    {
        path: '',
        component: _guides_component__WEBPACK_IMPORTED_MODULE_0__.GuidesComponent,
        data: {
            toolbarShadowEnabled: true
        }
    }
];
class GuidesRoutingModule {
}
GuidesRoutingModule.ɵfac = function GuidesRoutingModule_Factory(t) { return new (t || GuidesRoutingModule)(); };
GuidesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GuidesRoutingModule });
GuidesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GuidesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 57434:
/*!********************************************************!*\
  !*** ./src/app/pages/pages/guides/guides.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuidesComponent": function() { return /* binding */ GuidesComponent; }
/* harmony export */ });
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ 46440);
/* harmony import */ var _iconify_icons_ic_twotone_phone_in_talk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-phone-in-talk */ 31221);
/* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-mail */ 89242);
/* harmony import */ var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-description */ 75320);
/* harmony import */ var _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-movie-filter */ 85722);
/* harmony import */ var _apps_help_center_help_center_guides_help_center_guides_guide_help_center_guides_guide_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../apps/help-center/help-center-guides/help-center-guides-guide/help-center-guides-guide.component */ 93186);
/* harmony import */ var _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../apps/help-center/help-center-guides/help-center-guides.component */ 98679);
/* harmony import */ var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@vex/utils/track-by */ 21081);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@vex/animations/stagger.animation */ 48535);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../@vex/animations/fade-in-up.animation */ 33848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ 68399);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/grid */ 94568);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 5015);





















function GuidesComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GuidesComponent_a_15_Template_a_click_0_listener() { const guide_r4 = ctx.$implicit; return guide_r4.onClick(guide_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guide_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icIcon", guide_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](guide_r4.label);
} }
function GuidesComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GuidesComponent_a_20_Template_a_click_0_listener() { const guide_r6 = ctx.$implicit; return guide_r6.onClick(guide_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guide_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icIcon", guide_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](guide_r6.label);
} }
function GuidesComponent_a_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GuidesComponent_a_25_Template_a_click_0_listener() { const guide_r8 = ctx.$implicit; return guide_r8.onClick(guide_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guide_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icIcon", guide_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](guide_r8.label);
} }
function GuidesComponent_a_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GuidesComponent_a_30_Template_a_click_0_listener() { const guide_r10 = ctx.$implicit; return guide_r10.onClick(guide_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guide_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icIcon", guide_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](guide_r10.label);
} }
class GuidesComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.guides = [
            {
                id: 1,
                label: 'How secure is my password?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_3__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 2,
                label: 'Can I change my username?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_3__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 3,
                label: 'How do I change my email?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_4__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 4,
                label: 'Where can I change my timezone?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_3__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 5,
                label: 'How do I change my password?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_4__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 6,
                label: 'Which technologies are used?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_3__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 7,
                label: 'How do I make a request?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_4__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 8,
                label: 'What are the API Limits?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_3__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 9,
                label: 'How can I apply for the API?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_4__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 10,
                label: 'When can I start developing?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_3__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 11,
                label: 'Can I get a refund?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_3__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 12,
                label: 'How do I pay?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_4__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 13,
                label: 'Which payment methods are supported?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_4__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 14,
                label: 'Do I need to pay VAT?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_3__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 15,
                label: 'Where do I find my purchase code?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_3__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 16,
                label: 'How do I download the template?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_3__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.firstSteps,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 17,
                label: 'Installation Guide',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_4__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.firstSteps,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 18,
                label: 'Creating your first page',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_4__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.firstSteps,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 19,
                label: 'Customizing your template',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_3__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.firstSteps,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 20,
                label: 'How do I contact support?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_3__.default,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.firstSteps,
                onClick: guide => this.openDialog(guide)
            }
        ];
        this.accountSettings = this.guides.filter(guide => guide.category === _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.accountSettings);
        this.apiHelp = this.guides.filter(guide => guide.category === _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.apiHelp);
        this.billing = this.guides.filter(guide => guide.category === _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.billing);
        this.firstSteps = this.guides.filter(guide => guide.category === _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_6__.GuideCategory.firstSteps);
        this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_7__.trackById;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_0__.default;
        this.icPhoneInTalk = _iconify_icons_ic_twotone_phone_in_talk__WEBPACK_IMPORTED_MODULE_1__.default;
        this.icMail = _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_2__.default;
    }
    ngOnInit() {
    }
    openDialog(guide) {
        this.dialog.open(_apps_help_center_help_center_guides_help_center_guides_guide_help_center_guides_guide_component__WEBPACK_IMPORTED_MODULE_5__.HelpCenterGuidesGuideComponent, {
            data: guide,
            width: '600px'
        });
    }
}
GuidesComponent.ɵfac = function GuidesComponent_Factory(t) { return new (t || GuidesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog)); };
GuidesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: GuidesComponent, selectors: [["vex-guides"]], decls: 49, vars: 19, consts: [[1, "text-center", "p-gutter", "pb-24", "header"], [1, "container"], [1, "display-2", "mt-16", "mb-8"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "border", "rounded-full", "bg-card", "py-2", "pl-6", "pr-3", "text-secondary", "max-w-xl", "mx-auto", "shadow-8"], ["fxFlex", "none", "size", "24px", 3, "icon"], ["fxFlex", "auto", "placeholder", "Search for answers...", "type", "text", 1, "border-0", "ml-4", "placeholder:text-secondary", "subheading-2", "outline-none", "font-medium", "w-0", "bg-card"], ["color", "primary", "fxFlex", "none", "mat-raised-button", "", "type", "button", 1, "rounded-full"], ["gdAlignColumns", "start start", "gdColumns", "1fr 1fr", "gdColumns.lt-md", "1fr", "gdGap", "24px", 1, "text-left", "mt-24", "mb-12", "container"], [1, "card", "max-w-full", "overflow-hidden", "p-3"], ["mat-subheader", ""], ["class", "rounded overflow-hidden", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "bg-card", "py-16", "px-gutter", "footer"], [1, "display-1", "mt-0", "mb-4", "text-center"], [1, "subheading-2", "text-hint", "text-center", "max-w-lg", "mx-auto", "m-0"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "24px", 1, "mt-16", "max-w-3xl", "mx-auto"], ["fxFlex", "", "routerLinkActive", "", 1, "text-center", "p-6", "border", "rounded"], ["size", "42px", 1, "text-hint", 3, "icon"], [1, "title", "mb-0", "mt-4"], [1, "subheading-2", "m-0", "text-hint"], ["mat-list-item", "", 1, "rounded", "overflow-hidden", 3, "click"], ["mat-list-icon", "", 3, "icIcon"], ["matLine", ""]], template: function GuidesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Hello, how can we help?");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "ic-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "SEARCH");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "First Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, GuidesComponent_a_15_Template, 4, 2, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "API Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, GuidesComponent_a_20_Template, 4, 2, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Billing");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, GuidesComponent_a_25_Template, 4, 2, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "First Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, GuidesComponent_a_30_Template, 4, 2, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Still have questions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "ic-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "+1 (840) 423-3404");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "Call us anytime for a quick solution");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](44, "ic-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "support@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "Send us a mail to resolve your issue");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@stagger", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", ctx.icSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.accountSettings)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.apiHelp)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.billing)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.firstSteps)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", ctx.icPhoneInTalk);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", ctx.icMail);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutAlignDirective, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__.IconDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_15__["ɵgrid_privatef"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_15__["ɵgrid_privatex"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_15__["ɵgrid_privateba"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListSubheaderCssMatStyler, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutGapDirective, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterLinkActive, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListIconCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatLine], styles: [".header[_ngcontent-%COMP%] {\n  background-color: var(--background-base);\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23e6e6e6' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23e6e6e6'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/illustrations/it_support.svg\");\n  background-position: bottom right;\n  background-repeat: no-repeat;\n  background-size: 250px;\n  padding-bottom: 250px;\n}\n\n@media (min-width: 960px) {\n  .footer[_ngcontent-%COMP%] {\n    padding-bottom: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1aWRlcy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy9saWIvbGliL3N1YnN0aXR1dGVDbGFzc0FwcGx5QXRSdWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0VBQ0EsNjVDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpRUFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQ0U7RUFQRjtJQ0hBLG9CQUFtQjtFRGFqQjtBQUNGIiwiZmlsZSI6Imd1aWRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYmFzZSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgODAwIDgwMCclM0UlM0NnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZTZlNmU2JyBzdHJva2Utd2lkdGg9JzEnJTNFJTNDcGF0aCBkPSdNNzY5IDIyOUwxMDM3IDI2MC45TTkyNyA4ODBMNzMxIDczNyA1MjAgNjYwIDMwOSA1MzggNDAgNTk5IDI5NSA3NjQgMTI2LjUgODc5LjUgNDAgNTk5LTE5NyA0OTMgMTAyIDM4Mi0zMSAyMjkgMTI2LjUgNzkuNS02OS02MycvJTNFJTNDcGF0aCBkPSdNLTMxIDIyOUwyMzcgMjYxIDM5MCAzODIgNjAzIDQ5MyAzMDguNSA1MzcuNSAxMDEuNSAzODEuNU0zNzAgOTA1TDI5NSA3NjQnLyUzRSUzQ3BhdGggZD0nTTUyMCA2NjBMNTc4IDg0MiA3MzEgNzM3IDg0MCA1OTkgNjAzIDQ5MyA1MjAgNjYwIDI5NSA3NjQgMzA5IDUzOCAzOTAgMzgyIDUzOSAyNjkgNzY5IDIyOSA1NzcuNSA0MS41IDM3MCAxMDUgMjk1IC0zNiAxMjYuNSA3OS41IDIzNyAyNjEgMTAyIDM4MiA0MCA1OTkgLTY5IDczNyAxMjcgODgwJy8lM0UlM0NwYXRoIGQ9J001MjAtMTQwTDU3OC41IDQyLjUgNzMxLTYzTTYwMyA0OTNMNTM5IDI2OSAyMzcgMjYxIDM3MCAxMDVNOTAyIDM4Mkw1MzkgMjY5TTM5MCAzODJMMTAyIDM4MicvJTNFJTNDcGF0aCBkPSdNLTIyMiA0MkwxMjYuNSA3OS41IDM3MCAxMDUgNTM5IDI2OSA1NzcuNSA0MS41IDkyNyA4MCA3NjkgMjI5IDkwMiAzODIgNjAzIDQ5MyA3MzEgNzM3TTI5NS0zNkw1NzcuNSA0MS41TTU3OCA4NDJMMjk1IDc2NE00MC0yMDFMMTI3IDgwTTEwMiAzODJMLTI2MSAyNjknLyUzRSUzQy9nJTNFJTNDZyBmaWxsPSclMjNlNmU2ZTYnJTNFJTNDY2lyY2xlIGN4PSc3NjknIGN5PScyMjknIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNTM5JyBjeT0nMjY5JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzYwMycgY3k9JzQ5Mycgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc3MzEnIGN5PSc3MzcnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNTIwJyBjeT0nNjYwJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzMwOScgY3k9JzUzOCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PScyOTUnIGN5PSc3NjQnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNDAnIGN5PSc1OTknIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMTAyJyBjeT0nMzgyJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzEyNycgY3k9JzgwJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzM3MCcgY3k9JzEwNScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc1NzgnIGN5PSc0Micgcj0nNScvJTNFJTNDY2lyY2xlIGN4PScyMzcnIGN5PScyNjEnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMzkwJyBjeT0nMzgyJyByPSc1Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvaWxsdXN0cmF0aW9ucy9pdF9zdXBwb3J0LnN2ZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSByaWdodDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1MHB4O1xyXG5cclxuICBAc2NyZWVuIG1kIHtcclxuICAgIEBhcHBseSBwYi00O1xyXG4gIH1cclxufVxyXG4iLCJAdGFpbHdpbmQgYmFzZTtcbkB0YWlsd2luZCBjb21wb25lbnRzO1xuQHRhaWx3aW5kIHV0aWxpdGllczsiXX0= */"], data: { animation: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_8__.stagger60ms,
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_9__.fadeInUp400ms
        ] } });


/***/ }),

/***/ 63105:
/*!*****************************************************!*\
  !*** ./src/app/pages/pages/guides/guides.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuidesModule": function() { return /* binding */ GuidesModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _guides_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guides-routing.module */ 79137);
/* harmony import */ var _guides_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guides.component */ 57434);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ 68399);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _apps_help_center_help_center_guides_help_center_guides_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apps/help-center/help-center-guides/help-center-guides.module */ 1150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);











class GuidesModule {
}
GuidesModule.ɵfac = function GuidesModule_Factory(t) { return new (t || GuidesModule)(); };
GuidesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: GuidesModule });
GuidesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _guides_routing_module__WEBPACK_IMPORTED_MODULE_0__.GuidesRoutingModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__.IconModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
            _apps_help_center_help_center_guides_help_center_guides_module__WEBPACK_IMPORTED_MODULE_2__.HelpCenterGuidesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GuidesModule, { declarations: [_guides_component__WEBPACK_IMPORTED_MODULE_1__.GuidesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _guides_routing_module__WEBPACK_IMPORTED_MODULE_0__.GuidesRoutingModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__.IconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _apps_help_center_help_center_guides_help_center_guides_module__WEBPACK_IMPORTED_MODULE_2__.HelpCenterGuidesModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_guides_guides_module_ts-es2015.js.map