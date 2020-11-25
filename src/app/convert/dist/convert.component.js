"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConvertComponent = void 0;
var core_1 = require("@angular/core");
var ConvertComponent = /** @class */ (function () {
    function ConvertComponent() {
        this.selectedCur1 = 0;
        this.selectedCur2 = 0;
        this.result = 0;
        this.rates = {
            USD: 1,
            AED: 3.67,
            ARS: 78.3,
            AUD: 1.42,
            BGN: 1.67,
            BRL: 5.77,
            BSD: 1,
            CAD: 1.33,
            CHF: 0.916,
            CLP: 771.26,
            CNY: 6.69,
            COP: 3852.25,
            CZK: 23.35,
            DKK: 6.37,
            DOP: 58.15,
            EGP: 15.66,
            EUR: 0.857,
            FJD: 2.14,
            GBP: 0.772,
            GTQ: 7.79,
            HKD: 7.75,
            HRK: 6.48,
            HUF: 314.71,
            IDR: 14767.11,
            ILS: 3.41,
            INR: 74.43,
            ISK: 140.97,
            JPY: 104.6,
            KRW: 1133.26,
            KZT: 432.84,
            MVR: 15.37,
            MXN: 21.26,
            MYR: 4.15,
            NOK: 9.52,
            NZD: 1.51,
            PAB: 1,
            PEN: 3.61,
            PHP: 48.41,
            PKR: 159.84,
            PLN: 3.96,
            PYG: 7004.09,
            RON: 4.17,
            RUB: 79.1,
            SAR: 3.75,
            SEK: 8.89,
            SGD: 1.36,
            THB: 31.17,
            TRY: 8.36,
            TWD: 28.58,
            UAH: 28.38,
            UYU: 42.97,
            VND: 23182.5,
            ZAR: 16.29
        };
        this.date = '31/10/2020';
    }
    ConvertComponent.prototype.ngOnInit = function () {
    };
    ConvertComponent.prototype.convertClick = function () {
        this.result = this.money / this.selectedCur1 * this.selectedCur2;
    };
    ConvertComponent.prototype.swap = function () {
        this.temp = this.selectedCur1;
        this.selectedCur1 = this.selectedCur2;
        this.selectedCur2 = this.temp;
    };
    ConvertComponent = __decorate([
        core_1.Component({
            selector: 'app-convert',
            templateUrl: './convert.component.html',
            styleUrls: ['./convert.component.css']
        })
    ], ConvertComponent);
    return ConvertComponent;
}());
exports.ConvertComponent = ConvertComponent;
