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
var app_spawner_1 = require('./app.spawner');
var spawn_1 = require('./models/spawn');
var clouds = {
    classname: 'cloud',
    rarity: 0.5,
    direction: spawn_1.Direction.Upper,
    totalclasses: 4,
    ticker: 1.5
};
var islands = {
    classname: 'island',
    rarity: 0.3,
    direction: spawn_1.Direction.Lower,
    totalclasses: 5,
    ticker: 4
};
var seagull = {
    classname: 'seagull',
    rarity: 0.4,
    direction: spawn_1.Direction.Upper,
    totalclasses: 1,
    ticker: 2
};
var fish = {
    classname: 'fish',
    rarity: 0.2,
    direction: spawn_1.Direction.Lower,
    totalclasses: 1,
    ticker: 3
};
var date = new Date().getHours();
var AppComponent = (function () {
    function AppComponent() {
        this.clouds = clouds;
        this.islands = islands;
        this.seagull = seagull;
        this.fish = fish;
        this.isNight = date > 19 || date < 4;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div id=\"sun\"></div>\n  <div id=\"sky\" *ngIf=\"isNight\" style=\"background: linear-gradient(#B48170 30%, #FD9F23)\"></div>\n  <div id=\"sky\" *ngIf=\"!isNight\"></div>\n  <div id=\"sea\">\n  \t<div class=\"ripple duration-1\"></div>\n  \t<div class=\"ripple duration-2\"></div>\n  \t<div class=\"ripple duration-3\"></div>\n  \t<div class=\"ripple duration-4\"></div>\n  \t<div class=\"ripple duration-5\"></div>\n  \t<div class=\"ripple duration-6\"></div>\n  \t<div class=\"ripple duration-7\"></div>\n  </div>\n  <div id=\"boat\">\n  \t<div id=\"person\"><div id=\"wave\"></div></div>\n  </div>\n  <div *ngIf=\"isNight\" id=\"overlay\"></div>\n  <spawner [spawn]=\"clouds\"></spawner>\n  <spawner [spawn]=\"islands\"></spawner>\n  <spawner [spawn]=\"seagull\"></spawner>\n  <spawner [spawn]=\"fish\"></spawner>\n  ",
            directives: [app_spawner_1.SpawnComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map