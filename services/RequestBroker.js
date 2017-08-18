"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var CDB_1 = require("../model/CDB");
var RequestBroker = (function () {
    function RequestBroker(cdbCalcService) {
        this.cdbCalcService = cdbCalcService;
        this.configExpress();
    }
    RequestBroker.prototype.start = function () {
        this.app.listen(3000);
        console.log('Server Running on Port 3000...');
    };
    RequestBroker.prototype.requestCDI = function (req, res) {
        var cdb = new CDB_1.CDB(new Date(req.body.InvestmentDate), new Date(req.body.CurrentDate), req.body.CdbRate);
        this.cdbCalcService.getUnitPrice(cdb, function (unitPrice) { return res.json(unitPrice); });
    };
    RequestBroker.prototype.configExpress = function () {
        var _this = this;
        this.app = express();
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.post('/api/cdb', function (req, res) { _this.requestCDI(req, res); });
    };
    return RequestBroker;
}());
exports.RequestBroker = RequestBroker;
