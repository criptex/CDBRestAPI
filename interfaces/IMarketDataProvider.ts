import {CDI} from '../model/cdi';

export interface IMarketDataProvider{

	getCDIList(startDate: Date, endDate: Date, callback : (CDIs : CDI[]) => void) : void;
}