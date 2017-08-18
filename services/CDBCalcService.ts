import {CDB} from '../model/cdb';
import {CDI} from '../model/cdi';
import {UnitPrice} from '../model/UnitPrice';
import {IMarketDataProvider} from '../interfaces/IMarketDataProvider';
import {NumberUtils} from '../Utils/NumberUtils';

export class CDBCalcService{

    marketDataProvider : IMarketDataProvider;

    constructor(marketDataProvider : IMarketDataProvider){
        this.marketDataProvider = marketDataProvider;
    }

    public getUnitPrice(cdb : CDB, callback : (unitPrice : UnitPrice) => void ) : void {
        this.marketDataProvider.getCDIList(cdb.investmentDate, cdb.currrentDate, function(CDIs : CDI[]){

        var taxaAcumulada = 1;
        
                for(var i=0; i < CDIs.length; i++){
                    taxaAcumulada *= 1 + NumberUtils.round(CDIs[i].getDailyValue(), 8) * (cdb.rate/100);
                    taxaAcumulada = NumberUtils.trunc(taxaAcumulada, 16); 
                }
        
                callback(new UnitPrice(NumberUtils.round(taxaAcumulada, 8) * 1000));
        });
    }
}