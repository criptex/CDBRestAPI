export class CDI{
	date : Date;
	value : number;

	constructor(date : Date, value : number){
		this.date = date;
		this.value = value;
	}

	public getDailyValue() : number{
		return Math.pow(1+this.value/100, 1/252)-1;
	}
}