"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var cdi_1 = require("../../model/cdi");
var DateUtils_1 = require("../../Utils/DateUtils");
var config = require('./mongoconfig.json');
var MarketData = require('./models/MarketData');
var MongoMarketDataProvider = (function () {
    function MongoMarketDataProvider() {
        mongoose.connect(this.getConnectionUrl());
    }
    MongoMarketDataProvider.prototype.getCDIList = function (startDate, endDate, callback) {
        var _this = this;
        console.log("You are using MongoDB");
        mongoose.model('CDI')
            .find(function (err, result) { callback(_this.convert(result)); })
            .where('RefDate')
            .gt(DateUtils_1.DateUtils.decrease1Day(startDate).getTime())
            .lt(DateUtils_1.DateUtils.decrease1Day(endDate).getTime())
            .sort({ RefDate: 1 });
    };
    MongoMarketDataProvider.prototype.getConnectionUrl = function () {
        return "mongodb://" +
            config.user + ":" +
            config.password + "@" +
            config.url + ":" +
            config.port + "/" +
            config.database;
    };
    MongoMarketDataProvider.prototype.convert = function (result) {
        var rs = new Array(result.length);
        for (var i = 0; i < result.length; i++) {
            rs[i] = new cdi_1.CDI(result[i].RefDate, result[i].Value);
        }
        return rs;
    };
    return MongoMarketDataProvider;
}());
exports.MongoMarketDataProvider = MongoMarketDataProvider;
