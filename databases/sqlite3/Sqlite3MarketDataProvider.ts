import {IMarketDataProvider} from '../../interfaces/IMarketDataProvider'
import {CDI} from '../../model/CDI';
import * as sqlite3 from 'sqlite3';

export class Sqlite3MarketDataProvider implements IMarketDataProvider{
    
    database : sqlite3.Database;
    
    constructor(){
        this.database = new sqlite3.Database("./databases/sqlite3/marketdb.sqlite");   
    }

    getCDIList(startDate: Date, endDate: Date, callback : (CDIs : CDI[]) => void) : void{
        
        console.log("You are using Sqlite3");

        var query = 'Select * from MarketData where date >= "'+startDate.toISOString()+'" and date < "'+endDate.toISOString()+'" order by date';
        
        var cdis : CDI[];

        this.database.all(query,[], (err, rows) => {
            if(err)
                throw err; 

            cdis = new Array(rows.length);
            for(var i = 0; i < rows.length; i++){
                cdis[i] = new CDI(rows[i].date, rows[i].value);
            }
            
            callback(cdis);
        });
    }
} 