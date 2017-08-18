"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberUtils = (function () {
    function NumberUtils() {
    }
    NumberUtils.trunc = function (value, numberOfDecimals) {
        var factor = Math.pow(10, numberOfDecimals);
        return Math.floor(value * factor) / factor;
    };
    NumberUtils.round = function (value, numberOfDecimals) {
        var factor = Math.pow(10, numberOfDecimals);
        return Math.round(value * factor) / factor;
    };
    return NumberUtils;
}());
exports.NumberUtils = NumberUtils;
