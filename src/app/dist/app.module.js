"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var budget_component_1 = require("./budget/budget.component");
var add_form_component_1 = require("./add-form/add-form.component");
var convert_component_1 = require("./convert/convert.component");
var home_component_1 = require("./home/home.component");
var navbar_component_1 = require("./navbar/navbar.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var footer_component_1 = require("./footer/footer.component");
var budget_item_list_component_1 = require("./budget-item-list/budget-item-list.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                budget_component_1.BudgetComponent,
                add_form_component_1.AddFormComponent,
                convert_component_1.ConvertComponent,
                home_component_1.HomeComponent,
                navbar_component_1.NavbarComponent,
                footer_component_1.FooterComponent,
                budget_item_list_component_1.BudgetItemListComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
