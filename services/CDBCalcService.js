"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnitPrice_1 = require("../model/UnitPrice");
var NumberUtils_1 = require("../Utils/NumberUtils");
var CDBCalcService = (function () {
    function CDBCalcService(marketDataProvider) {
        this.marketDataProvider = marketDataProvider;
    }
    CDBCalcService.prototype.getUnitPrice = function (cdb, callback) {
        this.marketDataProvider.getCDIList(cdb.investmentDate, cdb.currrentDate, function (CDIs) {
            var taxaAcumulada = 1;
            for (var i = 0; i < CDIs.length; i++) {
                taxaAcumulada *= 1 + NumberUtils_1.NumberUtils.round(CDIs[i].getDailyValue(), 8) * (cdb.rate / 100);
                taxaAcumulada = NumberUtils_1.NumberUtils.trunc(taxaAcumulada, 16);
            }
            callback(new UnitPrice_1.UnitPrice(NumberUtils_1.NumberUtils.round(taxaAcumulada, 8) * 1000));
        });
    };
    return CDBCalcService;
}());
exports.CDBCalcService = CDBCalcService;
