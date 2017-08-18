import {CDB} from '../model/cdb';
import {UnitPrice} from '../model/UnitPrice'

export interface ICDBCalcService{

    getUnitPrice(cdb : CDB, callback : (unitPrice : UnitPrice) => void ) : void;
        
}