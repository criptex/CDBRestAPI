import {CDI} from '../model/cdi';
import {IMarketDataProvider} from '../interfaces/IMarketDataProvider';
import {Sqlite3MarketDataProvider} from '../databases/sqlite3/Sqlite3MarketDataProvider';
import {MongoMarketDataProvider} from '../databases/mongo/MongoMarketDataProvider';

export class MarketDataProviderProxy implements IMarketDataProvider{

    mongoMDP : MongoMarketDataProvider;
    sqliteMDP : Sqlite3MarketDataProvider;
    
    constructor(mongoMDP : MongoMarketDataProvider, sqliteMDP : Sqlite3MarketDataProvider){
        this.mongoMDP = mongoMDP;
        this.sqliteMDP = sqliteMDP;
    }

	getCDIList(startDate: Date, endDate: Date, callback : (CDIs : CDI[]) => void) : void {
        var mongoStartDate = new Date("2017-01-02T00:00:00.000Z");
        var mongoEndDate = new Date("2017-07-27T00:00:00.000Z");

        if(startDate >= mongoStartDate && endDate <= mongoEndDate){
            this.mongoMDP.getCDIList(startDate, endDate, callback);
        }else{
            this.sqliteMDP.getCDIList(startDate, endDate, callback);
        }
    }
}