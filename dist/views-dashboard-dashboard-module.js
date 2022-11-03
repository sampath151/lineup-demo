(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"],{

/***/ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js ***!
  \***************************************************************************/
/*! exports provided: ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective, ButtonsModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function() { return ButtonCheckboxDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function() { return ButtonRadioDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioGroupDirective", function() { return ButtonRadioGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CHECKBOX_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return RADIO_CONTROL_VALUE_ACCESSOR$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return RADIO_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons
/** @type {?} */
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return ButtonCheckboxDirective; })),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = /** @class */ (function () {
    function ButtonCheckboxDirective() {
        /**
         * Truthy value, will be set to ngModel
         */
        this.btnCheckboxTrue = true;
        /**
         * Falsy value, will be set to ngModel
         */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    // view -> model
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.onClick = 
    // view -> model
    /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.toggle = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.writeValue = 
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonCheckboxDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[btnCheckbox]',
                    providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    ButtonCheckboxDirective.propDecorators = {
        btnCheckboxTrue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        btnCheckboxFalse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-pressed',] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
    return ButtonCheckboxDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return ButtonRadioDirective; })),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = /** @class */ (function () {
    function ButtonRadioDirective(el, cdr, group, renderer) {
        this.el = el;
        this.cdr = cdr;
        this.group = group;
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "value", {
        /** Current value of radio component or group */
        get: /**
         * Current value of radio component or group
         * @return {?}
         */
        function () {
            return this.group ? this.group.value : this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.group) {
                this.group.value = value;
                return;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "disabled", {
        /** If `true` — radio button is disabled */
        get: /**
         * If `true` — radio button is disabled
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            this._disabled = disabled;
            this.setDisabledState(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.btnRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.el.nativeElement.attributes.disabled || !this.uncheckable && this.btnRadio === this.value) {
            return;
        }
        this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;
        this._onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype._onChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.group) {
            this.group.onTouched();
            this.group.onChange(value);
            return;
        }
        this.onTouched();
        this.onChange(value);
    };
    // ControlValueAccessor
    // model -> view
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype.writeValue = 
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    ButtonRadioDirective.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
            return;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    };
    ButtonRadioDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[btnRadio]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    ButtonRadioDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: ButtonRadioGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    ButtonRadioDirective.propDecorators = {
        btnRadio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        uncheckable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-pressed',] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
    return ButtonRadioDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var RADIO_CONTROL_VALUE_ACCESSOR$1 = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return ButtonRadioGroupDirective; })),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioGroupDirective = /** @class */ (function () {
    function ButtonRadioGroupDirective(cdr) {
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioGroupDirective.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (this.radioButtons) {
            this.radioButtons.forEach((/**
             * @param {?} buttons
             * @return {?}
             */
            function (buttons) {
                buttons.setDisabledState(disabled);
            }));
        }
    };
    ButtonRadioGroupDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[btnRadioGroup]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
                },] }
    ];
    /** @nocollapse */
    ButtonRadioGroupDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    ButtonRadioGroupDirective.propDecorators = {
        radioButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                     * @return {?}
                     */
                    function () { return ButtonRadioDirective; })),] }]
    };
    return ButtonRadioGroupDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    /**
     * @return {?}
     */
    ButtonsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    ButtonsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
                    exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
                },] }
    ];
    return ButtonsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-bootstrap-buttons.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n\n  \n<div class=\"animated fadeIn\">\n \n  <div class=\"row\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">89.9%</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-xs my-3\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">12.124</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-xs my-3\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">$98.111,00</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-xs my-3\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">2 TB</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-xs my-3\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</div> -->\n\n\n<!-- new widget end -->\n\n\n\n<!-- \n\n<div class=\"animated fadeIn\">\n\n  \n  <div class=\"row\">\n\n\n\n    <div class=\"col-md-12 col-lg-8 fullsizebanner\">\n      <div class=\"element-body p-0\">\n       \n\n        <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n          </ol>\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n              <div class=\"dashboard-banner\">\n                <div class=\"row\" routerLink=\"/accessibility/aaccessibility\" >\n                  <div class=\"col-md-6 content\">\n                    <h3>Accessibility Guidelines </h3>\n                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                \n                  </div>\n                  <div class=\"col-md-6\">\n                    <img class=\"d-block ft-rt\" src=\"assets/Accessibility.svg\" alt=\"Second slide\">\n                  </div>\n                </div>\n             \n              \n            </div>\n            </div>\n            <div class=\"carousel-item\">\n              <div class=\"dashboard-banner\">\n                <div class=\"row\" routerLink=\"/bestpractices/uxbest\" >\n                  <div class=\"col-md-6 content\">\n                    <h3>UI UX Best Practices </h3>\n                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.. </p>\n                      \n                  </div>\n                  <div class=\"col-md-6\">\n                    <img class=\"d-block ft-rt\" src=\"assets/best-practice-banner-img.svg\" alt=\"Second slide\">\n                  </div>\n                </div>\n             \n              \n            </div>\n            </div>\n            <div class=\"carousel-item\">\n              <div class=\"dashboard-banner\">\n                <div class=\"row\" routerLink=\"/components/breadcrums\">\n                  <div class=\"col-md-6 content\">\n                    <h3>Frontend Elements</h3>\n                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.. </p>\n                      \n                  </div>\n                  <div class=\"col-md-6\">\n                    <img class=\"d-block ft-rt \" src=\"assets/front-end-elements.svg\" alt=\"Second slide\">\n                  </div>\n                </div>\n             \n              \n            </div>\n            </div>\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n              <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n          </div>\n         \n        </div>\n      </div>\n    </div> \n\n    <div class=\"col-sm-6 col-lg-4\" routerLink=\"/getstart/installation\">\n      <div class=\"element-widget\">\n        <div class=\"header\">\n          <h3>Installation</h3>\n        </div>\n        <div class=\"row body\">\n          \n          <div class=\"col-sm-8\">\n          <p>Use the command <mark>npm install --save asg-lineup</mark> to add scss files and folder to the project.</p>\n\n        </div>\n        <div class=\"col-sm-4\">\n        \n          <img class=\"d-block img-v-100 \"  src=\"assets/Icons/dashboard/new/installation.png\" alt=\"\">\n        </div>\n\n        </div>\n        <div style=\"clear:both;\"></div>\n        <div class=\"footer\">\n          <div class=\"ft-lft\">Last updated on  23rd Jan 2021</div>\n          <div class=\"ft-rit\">Learn more</div>\n          <div style=\"clear:both\"></div>\n        </div>\n        \n      </div>\n       \n    </div> \n\n    <div class=\"col-sm-6 col-lg-4\"  routerLink=\"/guidelines/iconography\">\n      <div class=\"element-widget\">\n        <div class=\"header\">\n          <h3>Iconography</h3>\n        </div>\n        <div class=\"row body\">\n          \n          <div class=\"col-sm-8\">\n          <p>Icons, which are visual representations, help communicate an idea and emphasize certain actions and information.</p>\n\n        </div>\n        <div class=\"col-sm-4\">\n        \n          <img class=\"d-block img-v-100 \"  src=\"assets/Icons/dashboard/new/iconography.png\" alt=\"\">\n        </div>\n\n        </div>\n        <div class=\"footer\">\n          <div class=\"ft-lft\">Last updated on  23rd Jan 2021</div>\n          <div class=\"ft-rit\">Learn more  </div>\n          <div style=\"clear:both\"></div>\n        </div>\n        \n      </div>\n       \n    </div> \n\n    <div class=\"col-sm-6 col-lg-4\" routerLink=\"/guidelines/color\">\n      <div class=\"element-widget\">\n        <div class=\"header\">\n          <h3>Colors</h3>\n        </div>\n        <div class=\"row body\">\n          \n          <div class=\"col-sm-8\">\n          <p>Colors provide your interface a sense of visual continuity, bring attention to primary actions, and highlight important information. </p>\n\n        </div>\n        <div class=\"col-sm-4\">\n        \n          <img  class=\"d-block img-v-100 \" src=\"assets/Icons/dashboard/new/colours.png\" alt=\"\">\n        </div>\n\n        </div>\n        <div class=\"footer\">\n          <div class=\"ft-lft\">Last updated on  23rd Jan 2021</div>\n          <div class=\"ft-rit\">Learn more</div>\n          <div style=\"clear:both\"></div>\n        </div>\n        \n      </div>\n       \n    </div> \n\n    <div class=\"col-sm-6 col-lg-4\" routerLink=\"/components/breadcrums\">\n      <div class=\"element-widget\">\n        <div class=\"header\">\n          <h3>Components</h3>\n        </div>\n        <div class=\"row body\">\n          \n          <div class=\"col-sm-8\">\n          <p>Components are reusable interface elements combined to create consistent and delightful user experience across products. </p>\n\n        </div>\n        <div class=\"col-sm-4\">\n        \n          <img class=\"d-block img-v-100 \" src=\"assets/Icons/dashboard/new/components.png\" alt=\"\">\n        </div>\n\n        </div>\n        <div class=\"footer\">\n          <div class=\"ft-lft\">Last updated on  23rd Jan 2021</div>\n          <div class=\"ft-rit\">Learn more</div>\n          <div style=\"clear:both\"></div>\n        </div>\n        \n      </div>\n       \n    </div> \n\n\n    <div class=\"col-sm-6 col-lg-4\" routerLink=\"/accessibility/aaccessibility\">\n      <div class=\"element-widget\">\n        <div class=\"header\">\n          <h3>Accessibility</h3>\n        </div>\n        <div class=\"row body\">\n          \n          <div class=\"col-sm-8\">\n          <p>Accessibility refers to the design of products for all users, regardless of ability. It ensures that users with disabilities can understand</p>\n\n        </div>\n        <div class=\"col-sm-4\">\n        \n          <img class=\"d-block img-v-100 \"  src=\"assets/Icons/dashboard/accessibility.png\" alt=\"\">\n        </div>\n\n        </div>\n        <div class=\"footer\">\n          <div class=\"ft-lft\">Last updated on  23rd Jan 2021</div>\n          <div class=\"ft-rit\">Learn more</div>\n          <div style=\"clear:both\"></div>\n        </div>\n        \n      </div>\n       \n    </div> \n\n\n    <div class=\"col-sm-6 col-lg-4\" routerLink=\"/bestpractices/uxbest\">\n      <div class=\"element-widget\">\n        <div class=\"header\">\n          <h3>Best Practices</h3>\n        </div>\n        <div class=\"row body\">\n          \n          <div class=\"col-sm-8\">\n          <p>Follow the best practices when designing and developing the UI for user-friendly and better product experience</p>\n\n        </div>\n        <div class=\"col-sm-4\">\n        \n          <img class=\"d-block img-v-100 \"  src=\"assets/Icons/dashboard/new/best-practices.png\" alt=\"\">\n        </div>\n\n        </div>\n        <div class=\"footer\">\n          <div class=\"ft-lft\">Last updated on  23rd Jan 2021</div>\n          <div class=\"ft-rit\">Learn more</div>\n          <div style=\"clear:both\"></div>\n        </div>\n        \n      </div>\n       \n    </div> \n\n\n    <div class=\"col-sm-6 col-lg-4\" routerLink=\"/guidelines/feedback\">\n      <div class=\"element-widget\">\n        <div class=\"header\">\n          <h3>Feedback</h3>\n        </div>\n        <div class=\"row body\">\n          \n          <div class=\"col-sm-8\">\n          <p>To Improves user satisfaction, engagement and to share the experience with our product.</p>\n\n        </div>\n        <div class=\"col-sm-4\">\n        \n          <img class=\"d-block img-v-100 \"  src=\"assets/Icons/dashboard/feedback.png\" alt=\"\">\n        </div>\n\n        </div>\n        <div class=\"footer\">\n          <div class=\"ft-lft\">Last updated on  23rd Jan 2021</div>\n          <div class=\"ft-rit\">Learn more</div>\n          <div style=\"clear:both\"></div>\n        </div>\n        \n      </div>\n       \n    </div> \n   \n   \n   \n  </div> \n  \n</div> \n -->\n\n\n<!-- -------------------------------------wide banner dashboard------------------------------------- -->\n\n\n<!-- \n<div class=\"animated fadeIn\">\n\n  \n  <div class=\"row\">\n\n\n\n    <div class=\"col-md-12 col-lg-8 fullsizebanner\">\n      <div class=\"element-body p-0\">\n       \n\n        <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n          </ol>\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n              <div class=\"dashboard-banner\">\n                <div class=\"row dashboard-banner01\" routerLink=\"/accessibility/aaccessibility\" >\n                  \n                  <div class=\"col-md-3\">\n                    <img class=\"\" src=\"assets/img/common/colors-illustration.png\" alt=\"Second slide\">\n                  </div>\n                  <div class=\"col-md-8 content\">\n                    <h2>Special Colors</h2>\n                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                \n                  </div>\n                </div>\n             \n              \n            </div>\n            </div>\n            <div class=\"carousel-item\">\n              <div class=\"dashboard-banner\">\n                <div class=\"row dashboard-banner02\" routerLink=\"/bestpractices/uxbest\" >\n                  <div class=\"col-md-3\">\n                    <img class=\"\" src=\"assets/img/common/front-end-illustration.png\" alt=\"Second slide\">\n                  </div>\n                  <div class=\"col-md-8 content\">\n                    <h2>UX Best Practice </h2>\n                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.. </p>                      \n                  </div>\n                  \n                </div>\n             \n              \n            </div>\n            </div>\n            <div class=\"carousel-item\">\n              <div class=\"dashboard-banner\">\n                <div class=\"row dashboard-banner03\" routerLink=\"/components/breadcrums\">\n                  <div class=\"col-md-3\">\n                    <img class=\"\" src=\"assets/img/common/front-end-illustration.png\" alt=\"Second slide\">\n                  </div>\n                  <div class=\"col-md-8 content\">\n                    <h2>Front-end Component</h2>\n                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.. </p>\n                      \n                  </div>\n                 \n                </div>\n             \n              \n            </div>\n            </div>\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n              <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n          </div>\n         \n        </div>\n      </div>\n    </div> \n\n    <div class=\"col-sm-6 col-lg-4\" routerLink=\"/getstart/installation\">\n      <div class=\"element-widget\">\n        <div class=\"header\">\n          <svg class=\"widget-icon\" style=\"fill:#8BC9D1\">\n            <use [attr.xlink:href]=\"'#installation-icon'\" />\n          </svg>  \n        </div>\n        <div class=\"row body\">\n          <div class=\"col-sm-12\">\n            \n            <h3>Installation</h3>\n          <p>Use the command <mark>npm install --save asg-lineup</mark> to add scss files and folder to the project.</p>\n\n        </div>\n      \n\n        </div>\n        <div style=\"clear:both;\"></div>\n        <div class=\"footer\">\n          <div class=\"ft-lft paragraph-2\">Last updated on  23rd Jan 2021</div>\n          <div class=\"ft-rit paragraph-2\">Learn more <svg class=\"icon\">\n            <use [attr.xlink:href]=\"'#right-arrow'\" />\n          </svg> \n        </div>\n          <div style=\"clear:both\"></div>\n        </div>\n        \n      </div>\n       \n    </div> \n\n    <div class=\"col-sm-6 col-lg-4\"  routerLink=\"/guidelines/iconography\">\n      <div class=\"element-widget\">\n        <div class=\"header\">\n          <svg class=\"widget-icon\" style=\"fill:#6CD89E;\">\n            <use [attr.xlink:href]=\"'#iconography-icon'\" />\n          </svg>  \n        </div>\n        <div class=\"row body\">\n          \n          <div class=\"col-sm-12\">\n\n          <h3>Iconography</h3>\n          <p>Icons, which are visual representations, help communicate an idea and emphasize certain actions and information.</p>\n\n        </div>\n        \n\n        </div>\n        <div class=\"footer\">\n          <div class=\"ft-lft paragraph-2\">Last updated on  23rd Jan 2021</div>\n          <div class=\"ft-rit paragraph-2\">Learn more <svg class=\"icon\">\n            <use [attr.xlink:href]=\"'#right-arrow'\" />\n          </svg> \n        </div>\n          <div style=\"clear:both\"></div>\n        </div>\n        \n      </div>\n       \n    </div> \n\n    <div class=\"col-sm-6 col-lg-4\" routerLink=\"/guidelines/color\">\n      <div class=\"element-widget\">\n        <div class=\"header\">\n          <svg class=\"widget-icon\" style=\"fill:#C493D6;\">\n            <use [attr.xlink:href]=\"'#colors-icon'\" />\n          </svg>  \n        </div>\n        <div class=\"row body\">\n          <div class=\"col-sm-12\">\n          <h3>Colors</h3>\n          <p>Colors provide your interface a sense of visual continuity, bring attention to primary actions, and highlight important information. </p>\n\n        </div>\n       \n\n        </div>\n        <div class=\"footer\">\n          <div class=\"ft-lft paragraph-2\">Last updated on  23rd Jan 2021</div>\n          <div class=\"ft-rit paragraph-2\">Learn more <svg class=\"icon\">\n            <use [attr.xlink:href]=\"'#right-arrow'\" />\n          </svg> \n        </div>\n          <div style=\"clear:both\"></div>\n        </div>\n        \n      </div>\n       \n    </div> \n\n    <div class=\"col-sm-6 col-lg-4\" routerLink=\"/components/breadcrums\">\n      <div class=\"element-widget\">\n        <div class=\"header\">\n          <svg class=\"widget-icon\"  style=\"fill:#EADD96;\">\n            <use [attr.xlink:href]=\"'#components-icon'\" />\n          </svg>  \n        </div>\n        <div class=\"row body\">\n          \n          <div class=\"col-sm-12\">\n          <h3>Components</h3>\n          <p>Components are reusable interface elements combined to create consistent and delightful user experience across products. </p>\n\n        </div>\n        \n\n        </div>\n        <div class=\"footer\">\n          <div class=\"ft-lft paragraph-2\">Last updated on  23rd Jan 2021</div>\n          <div class=\"ft-rit paragraph-2\">Learn more <svg class=\"icon\">\n            <use [attr.xlink:href]=\"'#right-arrow'\" />\n          </svg> \n        </div>\n          <div style=\"clear:both\"></div>\n        </div>\n        \n      </div>\n       \n    </div> \n\n\n    <div class=\"col-sm-6 col-lg-4\" routerLink=\"/accessibility/aaccessibility\">\n      <div class=\"element-widget\">\n        <div class=\"header\">\n          <svg class=\"widget-icon\" style=\"fill:#6CCAD8;\">\n            <use [attr.xlink:href]=\"'#accessibility-icon'\" />\n          </svg>  \n        </div>\n        <div class=\"row body\">\n          \n          <div class=\"col-sm-12\">\n            <h3>Accessibility</h3>\n          <p>Accessibility refers to the design of products for all users, regardless of ability. It ensures that users with disabilities can understand</p>\n\n        </div>\n\n        </div>\n        <div class=\"footer\">\n          <div class=\"ft-lft paragraph-2\">Last updated on  23rd Jan 2021</div>\n          <div class=\"ft-rit paragraph-2\">Learn more <svg class=\"icon\">\n            <use [attr.xlink:href]=\"'#right-arrow'\" />\n          </svg> \n        </div>\n          <div style=\"clear:both\"></div>\n        </div>\n        \n      </div>\n       \n    </div> \n\n\n    <div class=\"col-sm-6 col-lg-4\" routerLink=\"/bestpractices/uxbest\">\n      <div class=\"element-widget\">\n        <div class=\"header\">\n          <svg class=\"widget-icon\" style=\"fill:#C6C269\">\n            <use [attr.xlink:href]=\"'#best-practices-icon'\" />\n          </svg>  \n        </div>\n        <div class=\"row body\">\n          \n          <div class=\"col-sm-12\">\n            <h3>Best Practices</h3>\n          <p>Follow the best practices when designing and developing the UI for user-friendly and better product experience</p>\n\n        </div>\n\n        </div>\n        <div class=\"footer\">\n          <div class=\"ft-lft paragraph-2\">Last updated on  23rd Jan 2021</div>\n          <div class=\"ft-rit paragraph-2\">Learn more <svg class=\"icon\">\n            <use [attr.xlink:href]=\"'#right-arrow'\" />\n          </svg> \n        </div>\n          <div style=\"clear:both\"></div>\n        </div>\n        \n      </div>\n       \n    </div> \n\n\n    <div class=\"col-sm-6 col-lg-4\" routerLink=\"/guidelines/feedback\">\n      <div class=\"element-widget\">\n        <div class=\"header\">\n          <svg class=\"widget-icon\" style=\"fill:#7AC680;\">\n            <use [attr.xlink:href]=\"'#feedback-icon'\" />\n          </svg>  \n        </div>\n        <div class=\"row body\">\n          \n          <div class=\"col-sm-12\">\n\n          <h3>Feedback</h3>\n          <p>To Improves user satisfaction, engagement and to share the experience with our product.</p>\n\n        </div>\n\n        </div>\n        <div class=\"footer\">\n          <div class=\"ft-lft paragraph-2\">Last updated on  23rd Jan 2021</div>\n          <div class=\"ft-rit paragraph-2\">Learn more <svg class=\"icon\">\n            <use [attr.xlink:href]=\"'#right-arrow'\" />\n          </svg> \n        </div>\n          <div style=\"clear:both\"></div>\n        </div>\n        \n      </div>\n       \n    </div> \n   \n   \n   \n  </div> \n  \n</div>  -->\n\n\n\n\n<!-- -------------------------------------height banner dashboard------------------------------------- -->\n\n\n\n<div class=\"animated fadeIn\">\n\n  \n  <div class=\"row\">\n\n\n\n    <div class=\"col-md-12 col-lg-4 fullsizebanner\">\n      <div class=\"element-body p-0\">\n       \n\n        <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n          </ol>\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n              <div class=\"dashboard-banner-h\">\n                <div class=\"row dashboard-banner01-h\" routerLink=\"/accessibility/aaccessibility\" >\n                  \n                  <div class=\"col-md-12\">\n                    <img class=\"\" src=\"assets/img/common/colors-illustration2.png\" alt=\"Second slide\">\n                  </div>\n                  <div class=\"col-md-12 content\">\n                    <!-- <h2>Special Colors</h2>\n                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                 -->\n                 <img class=\"\" src=\"assets/img/common/bannerimg-01-btm.png\" alt=\"Second slide\">\n                  </div>\n                </div>\n             \n              \n            </div>\n            </div>\n            <div class=\"carousel-item\">\n              <div class=\"dashboard-banner-h\">\n                <div class=\"row dashboard-banner02-h\" routerLink=\"/bestpractices/uxbest\" >\n                  <div class=\"col-md-12\">\n                    <img class=\"\" src=\"assets/img/common/colors-illustration3.png\" alt=\"Second slide\">\n                  </div>\n                  <div class=\"col-md-12 content\">\n                    <!-- <h2>UX Best Practice </h2>\n                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.. </p>                      \n                   -->\n                   <img class=\"\" src=\"assets/img/common/bannerimg-02-btm.png\" alt=\"Second slide\">\n                    </div>\n                  \n                </div>\n             \n              \n            </div>\n            </div>\n            <div class=\"carousel-item\">\n              <div class=\"dashboard-banner-h\">\n                <div class=\"row dashboard-banner03-h\" routerLink=\"/components/breadcrums\">\n                  <div class=\"col-md-12\">\n                    <img class=\"\" src=\"assets/img/common/colors-illustration4.png\" alt=\"Second slide\">\n                  </div>\n                  <div class=\"col-md-12 content\">\n                    <!-- <h2>Front-end Component</h2>\n                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.. </p>\n                       -->\n                       <img class=\"\" src=\"assets/img/common/bannerimg-3-btm.png\" alt=\"Second slide\">\n                  </div>\n                 \n                </div>\n             \n              \n            </div>\n            </div>\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n              <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n          </div>\n         \n        </div>\n      </div>\n    </div> \n\n    <div class=\"col-lg-8 p-0\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 col-lg-6\" routerLink=\"/getstart/installation\">\n          <div class=\"element-widget\">\n            <div class=\"header\">\n              <svg class=\"widget-icon\" style=\"fill:#990099\">\n                <use [attr.xlink:href]=\"'#installation-icon'\" />\n              </svg>  \n            </div>\n            <div class=\"row body\">\n              <div class=\"col-sm-12 p-0\">\n                \n                <h3>Installation</h3>\n              <p>Use the command <mark>npm install --save asg-lineup</mark> to add scss files and folder to the project.</p>\n    \n            </div>\n          \n    \n            </div>\n            <div style=\"clear:both;\"></div>\n            <div class=\"footer\">\n              <div class=\"ft-lft paragraph-2\">Last updated on  23rd Jan 2021</div>\n              <div class=\"ft-rit paragraph-2 primary-new\">Learn more <svg class=\"icon primary-new\" >\n                <use [attr.xlink:href]=\"'#right-arrow'\" />\n              </svg> \n            </div>\n              <div style=\"clear:both\"></div>\n            </div>\n            \n          </div>\n           \n        </div> \n    \n        <div class=\"col-sm-6 col-lg-6\"  routerLink=\"/guidelines/iconography\">\n          <div class=\"element-widget\">\n            <div class=\"header\">\n              <svg class=\"widget-icon\" style=\"fill:#990099;\">\n                <use [attr.xlink:href]=\"'#iconography-icon'\" />\n              </svg>  \n            </div>\n            <div class=\"row body\">\n              \n              <div class=\"col-sm-12 p-0\">\n    \n              <h3>Iconography</h3>\n              <p>Icons, which are visual representations, help communicate an idea and emphasize certain actions and information.</p>\n    \n            </div>\n            \n    \n            </div>\n            <div class=\"footer\">\n              <div class=\"ft-lft paragraph-2\">Last updated on  23rd Jan 2021</div>\n              <div class=\"ft-rit paragraph-2 primary-new\">Learn more <svg class=\"icon primary-new\" >\n                <use [attr.xlink:href]=\"'#right-arrow'\" />\n              </svg> \n            </div>\n              <div style=\"clear:both\"></div>\n            </div>\n            \n          </div>\n           \n        </div> \n    \n        <div class=\"col-sm-6 col-lg-6\" routerLink=\"/guidelines/color\">\n          <div class=\"element-widget\">\n            <div class=\"header\">\n              <svg class=\"widget-icon\" style=\"fill:#990099;\">\n                <use [attr.xlink:href]=\"'#colors-icon'\" />\n              </svg>  \n            </div>\n            <div class=\"row body\">\n              <div class=\"col-sm-12 p-0\">\n              <h3>Colors</h3>\n              <p>Colors provide your interface a sense of visual continuity, bring attention to primary actions, and highlight important information. </p>\n    \n            </div>\n           \n    \n            </div>\n            <div class=\"footer\">\n              <div class=\"ft-lft paragraph-2\">Last updated on  23rd Jan 2021</div>\n              <div class=\"ft-rit paragraph-2 primary-new\">Learn more <svg class=\"icon primary-new\" >\n                <use [attr.xlink:href]=\"'#right-arrow'\" />\n              </svg> \n            </div>\n              <div style=\"clear:both\"></div>\n            </div>\n            \n          </div>\n           \n        </div> \n    \n        <div class=\"col-sm-6 col-lg-6\" routerLink=\"/components/breadcrums\">\n          <div class=\"element-widget\">\n            <div class=\"header\">\n              <svg class=\"widget-icon\"  style=\"fill:#990099;\">\n                <use [attr.xlink:href]=\"'#components-icon'\" />\n              </svg>  \n            </div>\n            <div class=\"row body\">\n              \n              <div class=\"col-sm-12 p-0\">\n              <h3>Components</h3>\n              <p>Components are reusable interface elements combined to create consistent and delightful user experience across products. </p>\n    \n            </div>\n            \n    \n            </div>\n            <div class=\"footer\">\n              <div class=\"ft-lft paragraph-2\">Last updated on  23rd Jan 2021</div>\n              <div class=\"ft-rit paragraph-2 primary-new\">Learn more <svg class=\"icon primary-new\" >\n                <use [attr.xlink:href]=\"'#right-arrow'\" />\n              </svg> \n            </div>\n              <div style=\"clear:both\"></div>\n            </div>\n            \n          </div>\n           \n        </div> \n      </div>\n    </div>\n   \n\n\n    <div class=\"col-sm-6 col-lg-4\" routerLink=\"/accessibility/aaccessibility\">\n      <div class=\"element-widget\">\n        <div class=\"header\">\n          <svg class=\"widget-icon\" style=\"fill:#990099;\">\n            <use [attr.xlink:href]=\"'#accessibility-icon'\" />\n          </svg>  \n        </div>\n        <div class=\"row body\">\n          \n          <div class=\"col-sm-12 p-0\">\n            <h3>Accessibility</h3>\n          <p>Accessibility refers to the design of products for all users, regardless of ability. It ensures that users with disabilities can understand</p>\n\n        </div>\n\n        </div>\n        <div class=\"footer\">\n          <div class=\"ft-lft paragraph-2\">Last updated on  23rd Jan 2021</div>\n          <div class=\"ft-rit paragraph-2 primary-new\">Learn more <svg class=\"icon primary-new\" >\n            <use [attr.xlink:href]=\"'#right-arrow'\" />\n          </svg> \n        </div>\n          <div style=\"clear:both\"></div>\n        </div>\n        \n      </div>\n       \n    </div> \n\n\n    <div class=\"col-sm-6 col-lg-4\" routerLink=\"/bestpractices/uxbest\">\n      <div class=\"element-widget\">\n        <div class=\"header\">\n          <svg class=\"widget-icon\" style=\"fill:#990099\">\n            <use [attr.xlink:href]=\"'#best-practices-icon'\" />\n          </svg>  \n        </div>\n        <div class=\"row body\">\n          \n          <div class=\"col-sm-12 p-0\">\n            <h3>Best Practices</h3>\n          <p>Follow the best practices when designing and developing the UI for user-friendly and better product experience</p>\n\n        </div>\n\n        </div>\n        <div class=\"footer\">\n          <div class=\"ft-lft paragraph-2\">Last updated on  23rd Jan 2021</div>\n          <div class=\"ft-rit paragraph-2 primary-new\">Learn more <svg class=\"icon primary-new\" >\n            <use [attr.xlink:href]=\"'#right-arrow'\" />\n          </svg> \n        </div>\n          <div style=\"clear:both\"></div>\n        </div>\n        \n      </div>\n       \n    </div> \n\n\n    <div class=\"col-sm-6 col-lg-4\" routerLink=\"/guidelines/feedback\">\n      <div class=\"element-widget\">\n        <div class=\"header\">\n          <svg class=\"widget-icon\" style=\"fill:#990099;\">\n            <use [attr.xlink:href]=\"'#feedback-icon'\" />\n          </svg>  \n        </div>\n        <div class=\"row body\">\n          \n          <div class=\"col-sm-12 p-0\">\n\n          <h3>Feedback</h3>\n          <p>To Improves user satisfaction, engagement and to share the experience with our product.</p>\n\n        </div>\n\n        </div>\n        <div class=\"footer\">\n          <div class=\"ft-lft paragraph-2\">Last updated on  23rd Jan 2021</div>\n          <div class=\"ft-rit paragraph-2 primary-new\">Learn more <svg class=\"icon primary-new\" >\n            <use [attr.xlink:href]=\"'#right-arrow'\" />\n          </svg> \n        </div>\n          <div style=\"clear:both\"></div>\n        </div>\n        \n      </div>\n       \n    </div> \n   \n   \n   \n  </div> \n  \n</div> \n\n\n\n\n<script>\n  var videoElement = document.getElementById(\"videoElement\");\n\n// Autoplay the video if application is visible\nif (document.visibilityState == \"visible\") {\nvideoElement.play();\n}\n\n// Handle page visibility change events\nfunction handleVisibilityChange() {\nif (document.visibilityState == \"hidden\") {\nvideoElement.pause();\n} else {\nvideoElement.play();\n}\n}\n\ndocument.addEventListener('visibilitychange', handleVisibilityChange, false);\n</script>\n\n\n\n\n\n");

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");




var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _asgui_asgui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @asgui/asgui/dist/js/coreui-utilities */ "./node_modules/@asgui/asgui/dist/js/coreui-utilities.js");
/* harmony import */ var _asgui_asgui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_asgui_asgui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _asgui_asgui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @asgui/asgui-plugin-chartjs-custom-tooltips */ "./node_modules/@asgui/asgui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js");
/* harmony import */ var _asgui_asgui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_asgui_asgui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__);




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.radioModel = 'Month';
        // lineChart1
        this.lineChart1Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
        this.lineChart1Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart1Options = {
            tooltips: {
                enabled: false,
                custom: _asgui_asgui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 40 - 5,
                            max: 84 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart1Colours = [
            {
                backgroundColor: Object(_asgui_asgui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--primary'),
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart1Legend = false;
        this.lineChart1Type = 'line';
        // lineChart2
        this.lineChart2Data = [
            {
                data: [1, 18, 9, 17, 34, 22, 11],
                label: 'Series A'
            }
        ];
        this.lineChart2Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart2Options = {
            tooltips: {
                enabled: false,
                custom: _asgui_asgui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 1 - 5,
                            max: 34 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart2Colours = [
            {
                backgroundColor: Object(_asgui_asgui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--info'),
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart2Legend = false;
        this.lineChart2Type = 'line';
        // lineChart3
        this.lineChart3Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'Series A'
            }
        ];
        this.lineChart3Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart3Options = {
            tooltips: {
                enabled: false,
                custom: _asgui_asgui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart3Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }
        ];
        this.lineChart3Legend = false;
        this.lineChart3Type = 'line';
        // barChart1
        this.barChart1Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
                label: 'Series A',
                barPercentage: 0.6,
            }
        ];
        this.barChart1Labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
        this.barChart1Options = {
            tooltips: {
                enabled: false,
                custom: _asgui_asgui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart1Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.3)',
                borderWidth: 0
            }
        ];
        this.barChart1Legend = false;
        this.barChart1Type = 'bar';
        // mainChart
        this.mainChartElements = 27;
        this.mainChartData1 = [];
        this.mainChartData2 = [];
        this.mainChartData3 = [];
        this.mainChartData = [
            {
                data: this.mainChartData1,
                label: 'Current'
            },
            {
                data: this.mainChartData2,
                label: 'Previous'
            },
            {
                data: this.mainChartData3,
                label: 'BEP'
            }
        ];
        /* tslint:disable:max-line-length */
        this.mainChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        /* tslint:enable:max-line-length */
        this.mainChartOptions = {
            tooltips: {
                enabled: false,
                custom: _asgui_asgui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"],
                intersect: true,
                mode: 'index',
                position: 'nearest',
                callbacks: {
                    labelColor: function (tooltipItem, chart) {
                        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            callback: function (value) {
                                return value.charAt(0);
                            }
                        }
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            stepSize: Math.ceil(250 / 5),
                            max: 250
                        }
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.mainChartColours = [
            {
                backgroundColor: Object(_asgui_asgui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["hexToRgba"])(Object(_asgui_asgui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--info'), 10),
                borderColor: Object(_asgui_asgui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--info'),
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: Object(_asgui_asgui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--success'),
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: Object(_asgui_asgui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--danger'),
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5]
            }
        ];
        this.mainChartLegend = false;
        this.mainChartType = 'line';
        // social box charts
        this.brandBoxChartData1 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Facebook'
            }
        ];
        this.brandBoxChartData2 = [
            {
                data: [1, 13, 9, 17, 34, 41, 38],
                label: 'Twitter'
            }
        ];
        this.brandBoxChartData3 = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'LinkedIn'
            }
        ];
        this.brandBoxChartData4 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Google+'
            }
        ];
        this.brandBoxChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.brandBoxChartOptions = {
            tooltips: {
                enabled: false,
                custom: _asgui_asgui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.brandBoxChartColours = [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff'
            }
        ];
        this.brandBoxChartLegend = false;
        this.brandBoxChartType = 'line';
    }
    DashboardComponent.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        // generate random values for mainChart
        for (var i = 0; i <= this.mainChartElements; i++) {
            this.mainChartData1.push(this.random(50, 200));
            this.mainChartData2.push(this.random(80, 100));
            this.mainChartData3.push(65);
        }
    };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html")).default
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/views/dashboard/dashboard-routing.module.ts");








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot()
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-dashboard-dashboard-module.js.map