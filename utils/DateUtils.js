"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateUtils = (function () {
    function DateUtils() {
    }
    DateUtils.decrease1Day = function (date) {
        date.setDate(date.getDate() - 1);
        return date;
    };
    return DateUtils;
}());
exports.DateUtils = DateUtils;
