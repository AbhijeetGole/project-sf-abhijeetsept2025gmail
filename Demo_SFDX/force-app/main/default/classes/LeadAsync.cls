public class LeadAsync{
    @future
	public static void logFutureExecution(String message) {
    	System.debug('Future method executed with message: ' + message);
	}
}