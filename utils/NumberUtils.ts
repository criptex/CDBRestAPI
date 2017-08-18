export class NumberUtils{

    public static trunc(value : number, numberOfDecimals : number) : number{
        var factor = Math.pow(10, numberOfDecimals);
        return Math.floor(value * factor) / factor;
    }

    public static round(value : number, numberOfDecimals : number) : number {
        var factor = Math.pow(10, numberOfDecimals);
        return Math.round(value * factor) / factor;
    }
}