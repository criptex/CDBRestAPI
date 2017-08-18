"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MarketDataProviderProxy = (function () {
    function MarketDataProviderProxy(mongoMDP, sqliteMDP) {
        this.mongoMDP = mongoMDP;
        this.sqliteMDP = sqliteMDP;
    }
    MarketDataProviderProxy.prototype.getCDIList = function (startDate, endDate, callback) {
        var mongoStartDate = new Date("2017-01-02T00:00:00.000Z");
        var mongoEndDate = new Date("2017-07-27T00:00:00.000Z");
        if (startDate >= mongoStartDate && endDate <= mongoEndDate) {
            this.mongoMDP.getCDIList(startDate, endDate, callback);
        }
        else {
            this.sqliteMDP.getCDIList(startDate, endDate, callback);
        }
    };
    return MarketDataProviderProxy;
}());
exports.MarketDataProviderProxy = MarketDataProviderProxy;
