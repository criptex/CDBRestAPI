"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CDI_1 = require("../../model/CDI");
var sqlite3 = require("sqlite3");
var Sqlite3MarketDataProvider = (function () {
    function Sqlite3MarketDataProvider() {
        this.database = new sqlite3.Database("./databases/sqlite3/marketdb.sqlite");
    }
    Sqlite3MarketDataProvider.prototype.getCDIList = function (startDate, endDate, callback) {
        console.log("You are using Sqlite3");
        var query = 'Select * from MarketData where date >= "' + startDate.toISOString() + '" and date < "' + endDate.toISOString() + '" order by date';
        var cdis;
        this.database.all(query, [], function (err, rows) {
            if (err)
                throw err;
            cdis = new Array(rows.length);
            for (var i = 0; i < rows.length; i++) {
                cdis[i] = new CDI_1.CDI(rows[i].date, rows[i].value);
            }
            callback(cdis);
        });
    };
    return Sqlite3MarketDataProvider;
}());
exports.Sqlite3MarketDataProvider = Sqlite3MarketDataProvider;
