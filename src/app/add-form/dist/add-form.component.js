"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddFormComponent = void 0;
var core_1 = require("@angular/core");
var budget_items_models_1 = require("../shared/models/budget-items.models");
var AddFormComponent = /** @class */ (function () {
    function AddFormComponent() {
        this.item = new budget_items_models_1.BudgetItem('', null);
        this.formSubmit = new core_1.EventEmitter();
    }
    AddFormComponent.prototype.ngOnInit = function () {
        if (this.item.description != '') {
            this.isNewItem = false;
        }
        else {
            this.isNewItem = true;
            this.item = new budget_items_models_1.BudgetItem('', 0);
        }
    };
    AddFormComponent.prototype.onSubmit = function (form) {
        this.formSubmit.emit(form.value);
        form.reset();
    };
    __decorate([
        core_1.Input()
    ], AddFormComponent.prototype, "item");
    __decorate([
        core_1.Output()
    ], AddFormComponent.prototype, "formSubmit");
    AddFormComponent = __decorate([
        core_1.Component({
            selector: 'app-add-form',
            templateUrl: './add-form.component.html',
            styleUrls: ['./add-form.component.css']
        })
    ], AddFormComponent);
    return AddFormComponent;
}());
exports.AddFormComponent = AddFormComponent;
