"use strict";
var Element = (function () {
    function Element() {
    }
    Object.defineProperty(Element.prototype, "scale", {
        get: function () {
            return "scale(" + this.zoom + "," + this.zoom + ")";
        },
        enumerable: true,
        configurable: true
    });
    return Element;
}());
exports.Element = Element;
//# sourceMappingURL=element.js.map