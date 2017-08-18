import * as mongoose from 'mongoose';
import {CDI} from '../../model/cdi';
import {IMarketDataProvider} from '../../interfaces/IMarketDataProvider';
import {DateUtils} from '../../Utils/DateUtils';
var config = require('./mongoconfig.json');
var MarketData = require('./models/MarketData');

export class MongoMarketDataProvider implements IMarketDataProvider{
	user : string;
	password : string;
	url : string;
	port : string;
	database: string;

	constructor(){
		mongoose.connect(this.getConnectionUrl());
	}

	getCDIList(startDate: Date, endDate: Date, callback : (CDIs : CDI[]) => void) : void {

		console.log("You are using MongoDB")

		mongoose.model('CDI')
		.find((err, result) => { callback(this.convert(result));})
		.where('RefDate')
		.gt(DateUtils.decrease1Day(startDate).getTime())
		.lt(DateUtils.decrease1Day(endDate).getTime())
		.sort({RefDate: 1});
	}

	private getConnectionUrl() : string {
		return "mongodb://"+
				config.user+":"+
				config.password+"@"+
				config.url+":"+
				config.port+"/"+
				config.database;
	}

	private convert(result : any) : CDI[] {
		var rs : CDI[] = new Array(result.length);
		for(var i = 0; i < result.length; i++){
			rs[i] = new CDI(result[i].RefDate, result[i].Value);
		}
		return rs;
	}
}

