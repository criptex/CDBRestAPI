import {IMarketDataProvider} from '../interfaces/IMarketDataProvider';
import {CDI} from '../model/cdi';

export class TestMarketDataProvider implements IMarketDataProvider{

    getCDIList(startDate: Date, endDate: Date, callback : (CDIs : CDI[]) => void) : void{
        
        var values = [13.63,13.63,13.63,13.63,13.63,13.63,13.63,13.63,13.63,13.63,13.63,13.63,13.63,13.63,13.63,13.63,13.63,13.88,13.88,13.88,13.88,13.88,13.88,13.88,13.88,13.88,13.88,13.88,13.88];
        var CDIs = new Array(values.length);
        for(var i = 0; i < values.length; i++)
            CDIs[i] = new CDI(new Date(), values[i]);
        callback(CDIs);
    }
}