import {CDI} from './CDI';
import {NumberUtils} from '../utils/NumberUtils';

export class CDB{

    investmentDate : Date;
    currrentDate : Date;
    rate : number;
    
    constructor(investmentDate : Date, currentDate : Date, rate : number){
        this.investmentDate = investmentDate;
        this.currrentDate = currentDate;
        this.rate = rate;
    }
}