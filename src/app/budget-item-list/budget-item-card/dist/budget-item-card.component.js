"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BudgetItemCardComponent = void 0;
var core_1 = require("@angular/core");
var BudgetItemCardComponent = /** @class */ (function () {
    function BudgetItemCardComponent() {
        this.isIncome = false;
    }
    BudgetItemCardComponent.prototype.ngOnInit = function () { };
    BudgetItemCardComponent.prototype.onClickMe = function () {
        alert('Edit file');
    };
    __decorate([
        core_1.Input()
    ], BudgetItemCardComponent.prototype, "isIncome");
    BudgetItemCardComponent = __decorate([
        core_1.Component({
            selector: 'app-budget-item-card',
            templateUrl: './budget-item-card.component.html',
            styleUrls: ['./budget-item-card.component.css']
        })
    ], BudgetItemCardComponent);
    return BudgetItemCardComponent;
}());
exports.BudgetItemCardComponent = BudgetItemCardComponent;
