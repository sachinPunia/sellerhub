(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_pages_auth_register_register_module_ts"], {
    /***/
    90913:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/pages/auth/register/register-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterRoutingModule": function RegisterRoutingModule() {
          return (
            /* binding */
            _RegisterRoutingModule
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


      var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register.component */
      3337);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent
      }];

      var _RegisterRoutingModule = function _RegisterRoutingModule() {
        _classCallCheck(this, _RegisterRoutingModule);
      };

      _RegisterRoutingModule.ɵfac = function RegisterRoutingModule_Factory(t) {
        return new (t || _RegisterRoutingModule)();
      };

      _RegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _RegisterRoutingModule
      });
      _RegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_RegisterRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule]
        });
      })();
      /***/

    },

    /***/
    3337:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/pages/auth/register/register.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterComponent": function RegisterComponent() {
          return (
            /* binding */
            _RegisterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-visibility */
      52069);
      /* harmony import */


      var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-visibility-off */
      36526);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../@vex/animations/fade-in-up.animation */
      33848);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_url_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/url-api.service */
      40652);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var ngx_quicklink__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-quicklink */
      85530);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/core */
      5015);

      function RegisterComponent_mat_icon_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-icon", 21);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icIcon", ctx_r0.icVisibility);
        }
      }

      function RegisterComponent_mat_icon_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-icon", 21);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icIcon", ctx_r1.icVisibilityOff);
        }
      }

      function RegisterComponent_mat_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", row_r3.code);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r3.name);
        }
      }

      var _c0 = function _c0() {
        return ["/login"];
      };

      var _RegisterComponent = /*#__PURE__*/function () {
        function _RegisterComponent(router, fb, cd, urlApi, snackbar) {
          _classCallCheck(this, _RegisterComponent);

          this.router = router;
          this.fb = fb;
          this.cd = cd;
          this.urlApi = urlApi;
          this.snackbar = snackbar;
          this.selectCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
          this.inputType = "password";
          this.visible = false;
          this.icVisibility = _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_0__["default"];
          this.icVisibilityOff = _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_1__["default"];
        }

        _createClass(_RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.fb.group({
              name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
              email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
              password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
              phonenumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
            });
            this.getCountryData();
          }
        }, {
          key: "registerNewUser",
          value: function registerNewUser() {
            var _this = this;

            if (this.name == "" || this.name == undefined) {
              this.snackbar.open("Please enter first name", "Ok", {
                duration: 10000
              });
            } else if (this.email == "" || this.email == undefined) {
              this.snackbar.open("Please enter email address", "Ok", {
                duration: 10000
              });
            } else if (this.password == "" || this.password == undefined) {
              this.snackbar.open("Please enter your password", "Ok", {
                duration: 10000
              });
            } // else if(this.country == "" || this.country == undefined){
            //   this.snackbar.open('Please select your country', 'Ok', {
            //     duration: 10000
            //   });
            // }
            else if (this.phonenumber == "" || this.phonenumber == undefined) {
                this.snackbar.open("Please enter your phone number", "Ok", {
                  duration: 10000
                });
              } else {
                localStorage.setItem("userLoginName", this.name);
                localStorage.setItem("userLoginEmail", this.email);
                localStorage.setItem("userLoginPass", this.password);
                localStorage.setItem("userLoginCountry", this.country);
                localStorage.setItem("userloginPhone", this.phonenumber);
                var data = {
                  "code": "",
                  "companyName": "",
                  "contactName": "",
                  "country": this.country,
                  "emailAddress": this.email,
                  "firstName": this.name,
                  "lastName": "",
                  "password": this.password,
                  "resellerid": 0,
                  "telephone": this.phonenumber
                };
                this.urlApi.postRegistration(data).subscribe(function (successData) {
                  debugger; // this.gotoLogin();

                  _this.snackbar.open(successData.errorMessage, "Ok", {
                    duration: 10000
                  });

                  setTimeout(function () {
                    _this.gotoLogin();
                  }, 3000);
                });
              }
          }
        }, {
          key: "gotoLogin",
          value: function gotoLogin() {
            this.router.navigate(["/login"]);
          }
        }, {
          key: "getCountryData",
          value: function getCountryData() {
            var _this2 = this;

            this.urlApi.getListCountry().subscribe(function (response) {
              console.log(response);
              _this2.countryList = response;
            });
          }
        }, {
          key: "onCountryChange",
          value: function onCountryChange(e) {
            debugger;
            this.country = e;
          }
        }, {
          key: "send",
          value: function send() {
            this.router.navigate(["/"]);
          }
        }, {
          key: "toggleVisibility",
          value: function toggleVisibility() {
            if (this.visible) {
              this.inputType = "password";
              this.visible = false;
              this.cd.markForCheck();
            } else {
              this.inputType = "text";
              this.visible = true;
              this.cd.markForCheck();
            }
          }
        }, {
          key: "getCountry",
          value: function getCountry() {}
        }]);

        return _RegisterComponent;
      }();

      _RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || _RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_url_api_service__WEBPACK_IMPORTED_MODULE_3__.UrlAPIService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
      };

      _RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _RegisterComponent,
        selectors: [["vex-register"]],
        decls: 48,
        vars: 12,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "w-full", "h-full"], [1, "card", "overflow-hidden", "w-full", "max-w-xl"], ["fxLayout", "column", "fxLayoutAlign", "center center", 2, "background-image", "url('assets/img/demo/popup-register-image-1.png')", "background-size", "cover", "height", "235px"], ["fxLayout", "column", "fxLayoutGap", "5px", 1, "p-6", 3, "formGroup"], [1, "text-secondary", "text-left", "text-black"], ["fxFlex", "auto", "fxLayout", "column"], ["fxFlex", "grow"], ["formControlName", "name", "matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["fxFlex", "grow", 1, "mt-10"], ["formControlName", "email", "matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["formControlName", "password", "matInput", "", "required", "", 3, "type", "ngModel", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", "matTooltip", "Toggle Visibility", "type", "button", 3, "click"], [3, "icIcon", 4, "ngIf"], ["fxLayout", "column", "fxLayout.gt-xs", "row", "fxLayoutGap", "0px", "fxLayoutGap.gt-xs", "20px", 1, "mt-10"], [3, "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "phonenumber", "matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["color", "primary", "mat-raised-button", "", "type", "button", "mat-raised-button", "", 1, "mt-10", 3, "click"], [3, "routerLink"], ["color", "primary"], ["color", "black"], [3, "icIcon"], [3, "value"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Start automating your ecommerce business today!");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "E-Mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_19_listener() {
              return ctx.toggleVisibility();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, RegisterComponent_mat_icon_20_Template, 1, 1, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, RegisterComponent_mat_icon_21_Template, 1, 1, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function RegisterComponent_Template_mat_select_valueChange_26_listener($event) {
              return ctx.onCountryChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, RegisterComponent_mat_option_27_Template, 2, 2, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Contact Telephone");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_31_listener($event) {
              return ctx.phonenumber = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_32_listener() {
              return ctx.registerNewUser();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " GET STARTED NOW ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Already have an account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "b", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Sign in to SellersHub");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "You can upgrade, downgrade or cancel your plan at any time.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "By clicking on '");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Get Started Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "' you are accepting our terms of usage and privacy policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInUp", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx.inputType)("ngModel", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.visible);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.visible);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.countryList);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.phonenumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutGapDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, ngx_quicklink__WEBPACK_IMPORTED_MODULE_15__["ɵɵLinkDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__.IconDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption],
        styles: ["[_nghost-%COMP%] {\n  align-content: center;\n  align-items: center;\n  background: #fff url(\"/assets/img/demo/login-bg2.jpeg\");\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  justify-items: center;\n  width: 100%;\n}\n\n.mt-10[_ngcontent-%COMP%] {\n  margin-top: -10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNFLDRCQUFBO0FBRUYiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZiB1cmwoJy9hc3NldHMvaW1nL2RlbW8vbG9naW4tYmcyLmpwZWcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm10LTEwIHtcbiAgbWFyZ2luLXRvcDogLTEwcHggIWltcG9ydGFudDtcbn0gIFxuIl19 */"],
        data: {
          animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInUp400ms]
        }
      });
      /***/
    },

    /***/
    63125:
    /*!**************************************************************!*\
      !*** ./src/app/pages/pages/auth/register/register.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterModule": function RegisterModule() {
          return (
            /* binding */
            _RegisterModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register-routing.module */
      90913);
      /* harmony import */


      var _register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register.component */
      3337);
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      68399);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _RegisterModule = function _RegisterModule() {
        _classCallCheck(this, _RegisterModule);
      };

      _RegisterModule.ɵfac = function RegisterModule_Factory(t) {
        return new (t || _RegisterModule)();
      };

      _RegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _RegisterModule
      });
      _RegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterRoutingModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__.IconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_RegisterModule, {
          declarations: [_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterRoutingModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__.IconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pages_auth_register_register_module_ts-es5.js.map