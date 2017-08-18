"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cdi_1 = require("../model/cdi");
var TestMarketDataProvider = (function () {
    function TestMarketDataProvider() {
    }
    TestMarketDataProvider.prototype.getCDIList = function (startDate, endDate, callback) {
        var values = [13.63, 13.63, 13.63, 13.63, 13.63, 13.63, 13.63, 13.63, 13.63, 13.63, 13.63, 13.63, 13.63, 13.63, 13.63, 13.63, 13.63, 13.88, 13.88, 13.88, 13.88, 13.88, 13.88, 13.88, 13.88, 13.88, 13.88, 13.88, 13.88];
        var CDIs = new Array(values.length);
        for (var i = 0; i < values.length; i++)
            CDIs[i] = new cdi_1.CDI(new Date(), values[i]);
        callback(CDIs);
    };
    return TestMarketDataProvider;
}());
exports.TestMarketDataProvider = TestMarketDataProvider;
