export class DateUtils{
    
	public static decrease1Day(date: Date) : Date {
		date.setDate(date.getDate()-1);
		return date;
	}
}