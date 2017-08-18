"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CDI = (function () {
    function CDI(date, value) {
        this.date = date;
        this.value = value;
    }
    CDI.prototype.getDailyValue = function () {
        return Math.pow(1 + this.value / 100, 1 / 252) - 1;
    };
    return CDI;
}());
exports.CDI = CDI;
