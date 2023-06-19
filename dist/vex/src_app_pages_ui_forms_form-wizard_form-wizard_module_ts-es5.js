(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_forms_form-wizard_form-wizard_module_ts"], {
    /***/
    16496:
    /*!********************************************************!*\
      !*** ./src/@vex/animations/fade-in-right.animation.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "fadeInRightAnimation": function fadeInRightAnimation() {
          return (
            /* binding */
            _fadeInRightAnimation
          );
        },

        /* harmony export */
        "fadeInRight400ms": function fadeInRight400ms() {
          return (
            /* binding */
            _fadeInRight400ms
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      17238);

      function _fadeInRightAnimation(duration) {
        return (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInRight', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateX(-20px)',
          opacity: 0
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateX(0)',
          opacity: 1
        }))])]);
      }

      var _fadeInRight400ms = _fadeInRightAnimation(400);
      /***/

    },

    /***/
    92180:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/ui/forms/form-wizard/form-wizard-routing.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormWizardRoutingModule": function FormWizardRoutingModule() {
          return (
            /* binding */
            _FormWizardRoutingModule
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


      var _form_wizard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form-wizard.component */
      69183);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _form_wizard_component__WEBPACK_IMPORTED_MODULE_0__.FormWizardComponent
      }];

      var _FormWizardRoutingModule = function _FormWizardRoutingModule() {
        _classCallCheck(this, _FormWizardRoutingModule);
      };

      _FormWizardRoutingModule.ɵfac = function FormWizardRoutingModule_Factory(t) {
        return new (t || _FormWizardRoutingModule)();
      };

      _FormWizardRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _FormWizardRoutingModule
      });
      _FormWizardRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_FormWizardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
        });
      })();
      /***/

    },

    /***/
    69183:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/ui/forms/form-wizard/form-wizard.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormWizardComponent": function FormWizardComponent() {
          return (
            /* binding */
            _FormWizardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-description */
      75320);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../@vex/animations/stagger.animation */
      48535);
      /* harmony import */


      var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../@vex/animations/fade-in-up.animation */
      33848);
      /* harmony import */


      var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../@vex/animations/scale-in.animation */
      49597);
      /* harmony import */


      var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../@vex/animations/fade-in-right.animation */
      16496);
      /* harmony import */


      var _iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-vertical-split */
      64440);
      /* harmony import */


      var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-visibility */
      52069);
      /* harmony import */


      var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-visibility-off */
      36526);
      /* harmony import */


      var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-done-all */
      6910);
      /* harmony import */


      var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-more-vert */
      40077);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */
      43410);
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.component */
      64076);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);
      /* harmony import */


      var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../@vex/directives/container/container.directive */
      90080);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/stepper */
      94553);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/core */
      5015);

      function FormWizardComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "mat-icon", 3);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("icIcon", ctx_r1.icDoneAll);
        }
      }

      function FormWizardComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "mat-icon", 3);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("icIcon", ctx_r2.icDoneAll);
        }
      }

      function FormWizardComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0, "Create Account");
        }
      }

      function FormWizardComponent_mat_option_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r22);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](option_r22);
        }
      }

      function FormWizardComponent_ng_template_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0, "Select a Password");
        }
      }

      function FormWizardComponent_button_70_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FormWizardComponent_button_70_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r23.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("icIcon", ctx_r6.icVisibility);
        }
      }

      function FormWizardComponent_button_71_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FormWizardComponent_button_71_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r25.hidePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("icIcon", ctx_r7.icVisibilityOff);
        }
      }

      function FormWizardComponent_button_78_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FormWizardComponent_button_78_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r27.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("icIcon", ctx_r8.icVisibility);
        }
      }

      function FormWizardComponent_button_79_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FormWizardComponent_button_79_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r29.hidePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("icIcon", ctx_r9.icVisibilityOff);
        }
      }

      function FormWizardComponent_ng_template_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0, "Confirm Creation");
        }
      }

      function FormWizardComponent_ng_template_110_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "mat-icon", 3);
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("icIcon", ctx_r12.icDoneAll);
        }
      }

      function FormWizardComponent_ng_template_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "mat-icon", 3);
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("icIcon", ctx_r13.icDoneAll);
        }
      }

      function FormWizardComponent_ng_template_114_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0, "Create Account");
        }
      }

      function FormWizardComponent_mat_option_144_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](option_r31);
        }
      }

      function FormWizardComponent_ng_template_157_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0, "Select a Password");
        }
      }

      function FormWizardComponent_button_167_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FormWizardComponent_button_167_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r32.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("icIcon", ctx_r17.icVisibility);
        }
      }

      function FormWizardComponent_button_168_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FormWizardComponent_button_168_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r34.hidePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("icIcon", ctx_r18.icVisibilityOff);
        }
      }

      function FormWizardComponent_button_175_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FormWizardComponent_button_175_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r36.showPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("icIcon", ctx_r19.icVisibility);
        }
      }

      function FormWizardComponent_button_176_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FormWizardComponent_button_176_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r38.hidePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("icIcon", ctx_r20.icVisibilityOff);
        }
      }

      function FormWizardComponent_ng_template_186_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0, "Confirm Creation");
        }
      }

      var _c0 = function _c0() {
        return ["Forms", "Form Wizard"];
      };

      var _FormWizardComponent = /*#__PURE__*/function () {
        function _FormWizardComponent(fb, cd, snackbar) {
          _classCallCheck(this, _FormWizardComponent);

          this.fb = fb;
          this.cd = cd;
          this.snackbar = snackbar;
          this.phonePrefixOptions = ['+1', '+27', '+44', '+49', '+61', '+91'];
          this.passwordInputType = 'password';
          this.icDoneAll = _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_8__["default"];
          this.icDescription = _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_0__["default"];
          this.icVerticalSplit = _iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_5__["default"];
          this.icVisibility = _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_6__["default"];
          this.icVisibilityOff = _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_7__["default"];
          this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_9__["default"];
        }

        _createClass(_FormWizardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            /**
             * Horizontal Stepper
             * @type {FormGroup}
             */
            this.accountFormGroup = this.fb.group({
              username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
              name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
              email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
              phonePrefix: [this.phonePrefixOptions[3]],
              phone: []
            });
            this.passwordFormGroup = this.fb.group({
              password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.minLength(6)])],
              passwordConfirm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]
            });
            this.confirmFormGroup = this.fb.group({
              terms: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.requiredTrue]
            });
            /**
             * Vertical Stepper
             * @type {FormGroup}
             */

            this.verticalAccountFormGroup = this.fb.group({
              username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
              name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
              email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
              phonePrefix: [this.phonePrefixOptions[3]],
              phone: []
            });
            this.verticalPasswordFormGroup = this.fb.group({
              password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.minLength(6)])],
              passwordConfirm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]
            });
            this.verticalConfirmFormGroup = this.fb.group({
              terms: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.requiredTrue]
            });
          }
        }, {
          key: "showPassword",
          value: function showPassword() {
            this.passwordInputType = 'text';
            this.cd.markForCheck();
          }
        }, {
          key: "hidePassword",
          value: function hidePassword() {
            this.passwordInputType = 'password';
            this.cd.markForCheck();
          }
        }, {
          key: "submit",
          value: function submit() {
            this.snackbar.open('Hooray! You successfully created your account.', null, {
              duration: 5000
            });
          }
        }]);

        return _FormWizardComponent;
      }();

      _FormWizardComponent.ɵfac = function FormWizardComponent_Factory(t) {
        return new (t || _FormWizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBar));
      };

      _FormWizardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
        type: _FormWizardComponent,
        selectors: [["vex-form-wizard"]],
        decls: 199,
        vars: 48,
        consts: [["current", "Form Wizard"], ["fxFlex", "auto", 3, "crumbs"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ml-2"], [3, "icIcon"], ["vexContainer", "", 1, "p-gutter"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "title", "mb-4"], [1, "w-10", "h-10", "rounded-full", "text-primary", "mr-3", "flex", "items-center", "justify-center", "bg-primary-light"], ["height", "20px", "width", "20px", 3, "icon"], [1, "block"], [1, "card", "overflow-hidden"], [3, "linear"], ["stepper", "matHorizontalStepper"], ["matStepperIcon", "edit"], ["matStepperIcon", "done"], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [1, "title", "m-0"], [1, "subheading-1"], ["fxLayout", "column", "fxLayoutGap", "8px", 1, "mt-4"], ["fxFlex", "auto"], ["formControlName", "username", "matInput", "", "required", ""], ["formControlName", "name", "matInput", "", "required", ""], ["fxLayout", "column", "fxLayout.gt-xs", "row", "fxLayoutGap", "8px", "fxLayoutGap.gt-xs", "24px"], ["formControlName", "email", "matInput", "", "required", ""], ["align", "end"], ["fxFlex", "auto", "fxLayout", "row", "fxLayoutGap", "8px"], ["fxFlex", "none", 1, "vex-flex-form-field"], ["formControlName", "phonePrefix"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "auto", 1, "vex-flex-form-field"], ["formControlName", "phone", "matInput", ""], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "8px", 1, "actions"], ["color", "primary", "mat-button", "", "type", "button", 3, "disabled", "click"], ["color", "primary", "mat-raised-button", "", "matStepperNext", "", 3, "disabled"], ["formControlName", "password", "matInput", "", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click", 4, "ngIf"], ["formControlName", "passwordConfirm", "matInput", "", "required", "", 3, "type"], ["color", "primary", "mat-button", "", "matStepperPrevious", "", "type", "button"], ["formControlName", "terms", 1, "checkbox"], ["color", "primary", "mat-raised-button", "", "matStepperNext", "", 3, "disabled", "click"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "title", "mt-6", "mb-4"], ["verticalStepper", "matVerticalStepper"], [3, "value"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"]],
        template: function FormWizardComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "vex-secondary-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "vex-breadcrumbs", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "ic-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Horizontal Form Wizard");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "mat-horizontal-stepper", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, FormWizardComponent_ng_template_13_Template, 1, 1, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, FormWizardComponent_ng_template_14_Template, 1, 1, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "mat-step", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, FormWizardComponent_ng_template_17_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "h2", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Create Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "Set up your account for testing purposes.");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "Account Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](26, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "This will be your unique login name.");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](32, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "How may we call you?");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, "E-Mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](39, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "mat-hint", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, "example@example.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "mat-form-field", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "mat-select", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](47, FormWizardComponent_mat_option_47_Template, 2, 2, "mat-option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "mat-form-field", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](50, "Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](51, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](52, "mat-hint", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FormWizardComponent_Template_button_click_54_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r40);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](12);

              return _r0.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](55, "RESET ");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](57, "NEXT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](58, "mat-step", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](60, FormWizardComponent_ng_template_60_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "h2", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](62, "Select a Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](64, "Enter your password you will use to log in.");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](67, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](68, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](69, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](70, FormWizardComponent_button_70_Template, 2, 1, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](71, FormWizardComponent_button_71_Template, 2, 1, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](73, "Your password should be atleast 6 characters long.");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](76, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](77, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](78, FormWizardComponent_button_78_Template, 2, 1, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](79, FormWizardComponent_button_79_Template, 2, 1, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](81, "Please type in your password again.");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](82, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](84, "PREVIOUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](86, "NEXT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](87, "mat-step", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](88, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](89, FormWizardComponent_ng_template_89_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](90, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](91, "You're almost there!");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](92, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](93, "To finish registration, accept our terms of service and click on \"Create Account\". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](94, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "mat-checkbox", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](96, " I agree to the terms of service and the usual stuff. * ");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](97, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](98, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](99, "PREVIOUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FormWizardComponent_Template_button_click_100_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](101, " CREATE ACCOUNT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](102, "h2", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](103, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](104, "ic-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](105, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](106, "Vertical Form Wizard");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](107, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](108, "mat-vertical-stepper", 10, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](110, FormWizardComponent_ng_template_110_Template, 1, 1, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](111, FormWizardComponent_ng_template_111_Template, 1, 1, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](112, "mat-step", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](113, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](114, FormWizardComponent_ng_template_114_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](115, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](116, "Create Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](117, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](118, "Set up your account for testing purposes.");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](119, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](120, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](121, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](122, "Account Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](123, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](124, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](125, "This will be your unique login name.");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](126, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](127, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](128, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](129, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](130, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](131, "How may we call you?");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](132, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](133, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](134, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](135, "E-Mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](136, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](137, "mat-hint", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](138, "example@example.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](139, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](140, "mat-form-field", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](141, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](142, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](143, "mat-select", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](144, FormWizardComponent_mat_option_144_Template, 2, 2, "mat-option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](145, "mat-form-field", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](146, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](147, "Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](148, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](149, "mat-hint", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](150, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](151, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FormWizardComponent_Template_button_click_151_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r40);

              var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](109);

              return _r11.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](152, "RESET ");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](153, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](154, " NEXT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](155, "mat-step", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](156, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](157, FormWizardComponent_ng_template_157_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](158, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](159, "Select a Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](160, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](161, "Enter your password you will use to log in.");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](162, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](163, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](164, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](165, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](166, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](167, FormWizardComponent_button_167_Template, 2, 1, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](168, FormWizardComponent_button_168_Template, 2, 1, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](169, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](170, "Your password should be atleast 6 characters long.");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](171, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](172, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](173, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](174, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](175, FormWizardComponent_button_175_Template, 2, 1, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](176, FormWizardComponent_button_176_Template, 2, 1, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](177, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](178, "Please type in your password again.");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](179, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](180, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](181, "PREVIOUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](182, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](183, " NEXT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](184, "mat-step", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](185, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](186, FormWizardComponent_ng_template_186_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](187, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](188, "You're almost there!");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](189, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](190, "To finish registration, accept our terms of service and click on \"Create Account\". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](191, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](192, "mat-checkbox", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](193, " I agree to the terms of service and the usual stuff. * ");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](194, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](195, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](196, "PREVIOUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](197, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FormWizardComponent_Template_button_click_197_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](198, " CREATE ACCOUNT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](47, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("icIcon", ctx.icMoreVert);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@stagger", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@scaleIn", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("icon", ctx.icDescription);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeInRight", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeInUp", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("linear", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("stepControl", ctx.accountFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.accountFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.phonePrefixOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx.accountFormGroup.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx.accountFormGroup.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("stepControl", ctx.passwordFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.passwordFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", ctx.passwordInputType);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.passwordInputType === "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.passwordInputType === "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", ctx.passwordInputType);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.passwordInputType === "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.passwordInputType === "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx.passwordFormGroup.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("stepControl", ctx.confirmFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.confirmFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx.confirmFormGroup.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@scaleIn", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("icon", ctx.icVerticalSplit);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeInRight", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeInUp", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("linear", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("stepControl", ctx.verticalAccountFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.verticalAccountFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.phonePrefixOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx.verticalAccountFormGroup.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx.verticalAccountFormGroup.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("stepControl", ctx.verticalPasswordFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.verticalPasswordFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", ctx.passwordInputType);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.passwordInputType === "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.passwordInputType === "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", ctx.passwordInputType);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.passwordInputType === "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.passwordInputType === "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx.verticalPasswordFormGroup.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("stepControl", ctx.verticalConfirmFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.verticalConfirmFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx.verticalConfirmFormGroup.invalid);
          }
        },
        directives: [_vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_10__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbsComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__.IconDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_12__.ContainerDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutAlignDirective, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperIcon, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStep, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepLabel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutGapDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatHint, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperNext, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperPrevious, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatSuffix],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXdpemFyZC5jb21wb25lbnQuc2NzcyJ9 */"],
        data: {
          animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__.stagger80ms, _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInUp400ms, _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__.scaleIn400ms, _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__.fadeInRight400ms]
        },
        changeDetection: 0
      });
      /***/
    },

    /***/
    98966:
    /*!******************************************************************!*\
      !*** ./src/app/pages/ui/forms/form-wizard/form-wizard.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormWizardModule": function FormWizardModule() {
          return (
            /* binding */
            _FormWizardModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form-wizard-routing.module */
      92180);
      /* harmony import */


      var _form_wizard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form-wizard.component */
      69183);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/stepper */
      94553);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
      44241);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
      75592);
      /* harmony import */


      var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../@vex/directives/container/container.module */
      7302);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _FormWizardModule = function _FormWizardModule() {
        _classCallCheck(this, _FormWizardModule);
      };

      _FormWizardModule.ɵfac = function FormWizardModule_Factory(t) {
        return new (t || _FormWizardModule)();
      };

      _FormWizardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _FormWizardModule
      });
      _FormWizardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormWizardRoutingModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__.MatStepperModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexLayoutModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__.IconModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_4__.ContainerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_FormWizardModule, {
          declarations: [_form_wizard_component__WEBPACK_IMPORTED_MODULE_1__.FormWizardComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormWizardRoutingModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__.MatStepperModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexLayoutModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule, _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__.IconModule, _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule, _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_4__.ContainerModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ui_forms_form-wizard_form-wizard_module_ts-es5.js.map