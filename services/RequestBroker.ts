import * as express from 'express';
import * as bodyParser from 'body-parser'
import {CDB} from '../model/CDB';
import {UnitPrice} from '../model/UnitPrice'
import {ICDBCalcService} from '../interfaces/ICDBCalcService';

export class RequestBroker{

    app : express.Application;
    cdbCalcService : ICDBCalcService;

    constructor(cdbCalcService : ICDBCalcService){
        this.cdbCalcService = cdbCalcService;
        this.configExpress();
    }

    public start() : void{
        this.app.listen(3000);
        console.log('Server Running on Port 3000...');
    }

    public requestCDI(req : express.Request, res : express.Response) : void {
        var cdb = new CDB(new Date(req.body.InvestmentDate), new Date(req.body.CurrentDate), req.body.CdbRate);
        this.cdbCalcService.getUnitPrice(cdb, (unitPrice) => res.json(unitPrice));
    }

    private configExpress(){
        this.app = express();
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(bodyParser.json());
        this.app.post('/api/cdb', (req, res) => {this.requestCDI(req, res);});
    }
}