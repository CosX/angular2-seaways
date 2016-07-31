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
var common_1 = require('@angular/common');
var spawn_1 = require('./models/spawn');
var w = window.innerWidth;
var h = window.innerHeight;
window.addEventListener('resize', function () {
    w = window.innerWidth;
    h = window.innerHeight;
});
var rand = function (start, stop) {
    return Math.floor(Math.random() * stop) + start;
};
var convertRange = function (value, r1, r2) {
    return (value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0];
};
var SpawnComponent = (function () {
    function SpawnComponent() {
        this.elements = [];
    }
    SpawnComponent.prototype.ngOnInit = function () {
        setInterval(this.generate.bind(this), this.spawn.ticker * 1000);
        window.requestAnimationFrame(this.frame.bind(this));
    };
    SpawnComponent.prototype.frame = function () {
        var _this = this;
        var eliminations = [];
        this.elements.forEach(function (el, i) {
            el.x += (1 * el.velocity);
            if (el.x > w) {
                eliminations.push(i);
            }
        });
        eliminations.forEach(function (i) { return _this.elements.splice(i, 1); });
        window.requestAnimationFrame(this.frame.bind(this));
    };
    SpawnComponent.prototype.generate = function () {
        if (this.spawn.rarity < Math.random()) {
            var r = Math.random();
            var z = convertRange(2 - r, [1, 2], [0.9, 2]);
            var v = convertRange(r + 1, [1, 2], [1, 3]);
            var initpoint = 0;
            if (this.spawn.direction === spawn_1.Direction.Lower) {
                initpoint = h / 2 - 50;
                v = convertRange(2 - r, [1, 2], [0.4, 6]);
            }
            if (z < 1.4 && z > 1.05) {
                z = 1.4;
            }
            this.elements.push({
                classname: "" + this.spawn.classname + rand(1, this.spawn.totalclasses),
                y: initpoint,
                x: -100,
                zoom: z,
                velocity: v,
                zindex: Math.floor(z * 10000)
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', spawn_1.Spawn)
    ], SpawnComponent.prototype, "spawn", void 0);
    SpawnComponent = __decorate([
        core_1.Component({
            selector: 'spawner',
            template: "\n  <div class=\"container\" *ngFor=\"let el of elements\">\n    <div class=\"{{el.classname}}\" [ngStyle]=\"{'left':el.x, 'top':el.y, 'zoom': el.zoom, '-moz-transform': el.scale, 'z-index': el.zindex}\"></div>\n  </div>\n  ",
            directives: [common_1.NgStyle]
        }), 
        __metadata('design:paramtypes', [])
    ], SpawnComponent);
    return SpawnComponent;
}());
exports.SpawnComponent = SpawnComponent;
//# sourceMappingURL=app.spawner.js.map