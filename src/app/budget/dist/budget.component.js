"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BudgetComponent = void 0;
var core_1 = require("@angular/core");
var BudgetComponent = /** @class */ (function () {
    function BudgetComponent() {
        this.budgetItems = new Array();
        this.totalBudget = 0;
    }
    BudgetComponent.prototype.ngOnInit = function () {
        this.totalBudget = 0;
        if (localStorage.hasOwnProperty("savedData")) {
            this.budgetItems = JSON.parse(localStorage.getItem("savedData"));
            for (var i = 0; i < this.budgetItems.length; i++) {
                this.totalBudget += this.budgetItems[i].amount;
            }
        }
    };
    BudgetComponent.prototype.addItem = function (newItem) {
        this.budgetItems.push(newItem);
        this.totalBudget += newItem.amount;
        localStorage.setItem("savedData", JSON.stringify(this.budgetItems));
    };
    BudgetComponent.prototype.deleteItem = function (item) {
        var index = this.budgetItems.indexOf(item);
        this.budgetItems.splice(index, 1);
        this.totalBudget -= item.amount;
        localStorage.setItem("savedData", JSON.stringify(this.budgetItems));
    };
    BudgetComponent.prototype.updateItem = function (updateEvent) {
        this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent["new"];
        this.totalBudget -= updateEvent.old.amount;
        this.totalBudget += updateEvent["new"].amount;
        localStorage.setItem("savedData", JSON.stringify(this.budgetItems));
    };
    BudgetComponent = __decorate([
        core_1.Component({
            selector: 'app-budget',
            templateUrl: './budget.component.html',
            styleUrls: ['./budget.component.css']
        })
    ], BudgetComponent);
    return BudgetComponent;
}());
exports.BudgetComponent = BudgetComponent;
