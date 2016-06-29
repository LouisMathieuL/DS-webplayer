"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var creative_component_1 = require('./creative.component');
var schedule_service_1 = require('./schedule.service');
var AppComponent = (function () {
    function AppComponent(scheduleService) {
        this.scheduleService = scheduleService;
    }
    AppComponent.prototype.getSchedule = function () {
        var _this = this;
        this.scheduleService.getSchedule().then(function (s) { return _this.schedule = s; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getSchedule();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'web-player',
            template: "\n    <h1>My First Angular 2 Application</h1>\n    <div *ngIf=\"schedule\">\n      <creative-detail *ngFor=\"let creative of schedule.creatives\" [creative]=\"creative\"></creative-detail>\n    </div>",
            directives: [creative_component_1.CreativeComponent],
            providers: [schedule_service_1.ScheduleService]
        }), 
        __metadata('design:paramtypes', [schedule_service_1.ScheduleService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map