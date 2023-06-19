(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_pages_auth_login_login_module_ts"], {
    /***/
    36570:
    /*!**********************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/twotone-log-in.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      var data = {
        "body": "<path d=\"M9 2h9c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-2h2v2h9V4H9v2H7V4c0-1.1.9-2 2-2z\" fill=\"currentColor\"/><path d=\"M10.09 15.59L11.5 17l5-5l-5-5l-1.41 1.41L12.67 11H3v2h9.67z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    },

    /***/
    65739:
    /*!****************************************************************!*\
      !*** ./src/app/pages/pages/auth/login/login-routing.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginRoutingModule": function LoginRoutingModule() {
          return (
            /* binding */
            _LoginRoutingModule
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


      var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.component */
      87071);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
      }];

      var _LoginRoutingModule = function _LoginRoutingModule() {
        _classCallCheck(this, _LoginRoutingModule);
      };

      _LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) {
        return new (t || _LoginRoutingModule)();
      };

      _LoginRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _LoginRoutingModule
      });
      _LoginRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_LoginRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
        });
      })();
      /***/

    },

    /***/
    87071:
    /*!***********************************************************!*\
      !*** ./src/app/pages/pages/auth/login/login.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-visibility */
      52069);
      /* harmony import */


      var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-visibility-off */
      36526);
      /* harmony import */


      var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../@vex/animations/fade-in-up.animation */
      33848);
      /* harmony import */


      var _iconify_icons_ic_twotone_log_in__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-log-in */
      36570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var src_app_services_url_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/url-api.service */
      40652);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);
      /* harmony import */


      var ngx_quicklink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-quicklink */
      85530);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);

      function LoginComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "We need an email address to log you in");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_mat_icon_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 23);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icIcon", ctx_r1.icVisibility);
        }
      }

      function LoginComponent_mat_icon_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 23);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icIcon", ctx_r2.icVisibilityOff);
        }
      }

      function LoginComponent_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "We need a password to log you in");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_mat_spinner_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-spinner", 24);
        }
      }

      var _c0 = function _c0() {
        return ["/forgot-password"];
      };

      var _c1 = function _c1() {
        return ["/register"];
      };

      var _LoginComponent = /*#__PURE__*/function () {
        function _LoginComponent(router, fb, cd, snackbar, urlApi) {
          _classCallCheck(this, _LoginComponent);

          this.router = router;
          this.fb = fb;
          this.cd = cd;
          this.snackbar = snackbar;
          this.urlApi = urlApi;
          this.inputType = 'password';
          this.visible = false;
          this.icVisibility = _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_0__["default"];
          this.icVisibilityOff = _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_1__["default"];
          this.icSign = _iconify_icons_ic_twotone_log_in__WEBPACK_IMPORTED_MODULE_3__["default"];
          this.isLoading = false;
        }

        _createClass(_LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isLoading = false;
            this.form = this.fb.group({
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
            });
          }
        }, {
          key: "send",
          value: function send() {
            this.router.navigate(['/']);
          }
        }, {
          key: "signinUser",
          value: function signinUser() {
            var _this = this;

            var userStorage = localStorage.getItem('userLoginEmail');
            var passStorage = localStorage.getItem('userLoginPass');

            if (this.email == "" || this.email == undefined) {
              this.snackbar.open('Please enter your email', 'Try Again', {
                duration: 10000
              });
            } else if (this.password == "" || this.password == undefined) {
              this.snackbar.open('Please enter your password', 'Try Again', {
                duration: 10000
              });
            } else {
              this.isLoading = true;
              this.urlApi.userAuth(this.email, this.password);
              setTimeout(function () {
                _this.isLoading = true;
              }, 500);
            }
          }
        }, {
          key: "toggleVisibility",
          value: function toggleVisibility() {
            if (this.visible) {
              this.inputType = 'password';
              this.visible = false;
              this.cd.markForCheck();
            } else {
              this.inputType = 'text';
              this.visible = true;
              this.cd.markForCheck();
            }
          }
        }]);

        return _LoginComponent;
      }();

      _LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_url_api_service__WEBPACK_IMPORTED_MODULE_4__.UrlAPIService));
      };

      _LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _LoginComponent,
        selectors: [["vex-login"]],
        decls: 40,
        vars: 15,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "w-full", "h-full"], [1, "card", "overflow-hidden", "w-full", "max-w-sm"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "p-6", "pb-0"], [1, "fill-current", "text-center"], ["src", "assets/img/demo/logo.png", 1, "w-64"], [1, "text-center", "mt-4"], [1, "title", "m-0"], [1, "body-2", "text-secondary", "m-0"], ["fxLayout", "column", "fxLayoutGap", "16px", 1, "p-6", 3, "formGroup"], ["fxFlex", "auto", "fxLayout", "column"], ["appearance", "outline", "fxFlex", "grow"], ["formControlName", "email", "matInput", "", "required", "", "autofocus", "", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["formControlName", "password", "matInput", "", "required", "", 3, "ngModel", "type", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", "matTooltip", "Toggle Visibility", "type", "button", 3, "click"], [3, "icIcon", 4, "ngIf"], ["diameter", "30", "class", "float-center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["color", "primary", 1, "caption"], ["color", "primary", "mat-raised-button", "", "type", "button", 3, "click"], ["color", "text-secondary", 3, "icIcon"], [3, "routerLink"], [1, "text-center"], [3, "icIcon"], ["diameter", "30", 1, "float-center"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "User Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Sign in with your credentials below.");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "E-Mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, LoginComponent_mat_error_16_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() {
              return ctx.toggleVisibility();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, LoginComponent_mat_icon_22_Template, 1, 1, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, LoginComponent_mat_icon_23_Template, 1, 1, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, LoginComponent_mat_error_24_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, LoginComponent_mat_spinner_25_Template, 1, 0, "mat-spinner", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-checkbox", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Remember Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_29_listener() {
              return ctx.signinUser();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " SIGN IN ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "mat-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Forgot Password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Sign up Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " 2021 \xA9 Sellershub. All Rights Reserved. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInUp", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("email").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.password)("type", ctx.inputType);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.visible);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.visible);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("password").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icIcon", ctx.icSign);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c1));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__.IconDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, ngx_quicklink__WEBPACK_IMPORTED_MODULE_18__["ɵɵLinkDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatSpinner],
        styles: ["[_nghost-%COMP%] {\n  align-content: center;\n  align-items: center;\n  background: #fff url(\"/assets/img/demo/login-bg3.jpeg\");\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  justify-items: center;\n  width: 100%;\n}\n\n.float-center[_ngcontent-%COMP%] {\n  left: 50% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNBLG9CQUFBO0FBRUEiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZiB1cmwoJy9hc3NldHMvaW1nL2RlbW8vbG9naW4tYmczLmpwZWcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5mbG9hdC1jZW50ZXIge1xubGVmdDogNTAlICFpbXBvcnRhbnQ7XG59ICBcbiJdfQ== */"],
        data: {
          animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInUp400ms]
        },
        changeDetection: 0
      });
      /***/
    },

    /***/
    46759:
    /*!********************************************************!*\
      !*** ./src/app/pages/pages/auth/login/login.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginModule": function LoginModule() {
          return (
            /* binding */
            _LoginModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-routing.module */
      65739);
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.component */
      87071);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LoginModule = function _LoginModule() {
        _classCallCheck(this, _LoginModule);
      };

      _LoginModule.ɵfac = function LoginModule_Factory(t) {
        return new (t || _LoginModule)();
      };

      _LoginModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _LoginModule
      });
      _LoginModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_LoginModule, {
          declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pages_auth_login_login_module_ts-es5.js.map