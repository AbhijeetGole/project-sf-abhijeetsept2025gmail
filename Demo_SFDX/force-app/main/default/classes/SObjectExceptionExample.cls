public class SObjectExceptionExample {
    public static void runExample() {
        try {
            /*//1: Accessing a Non-Existent Field
           	Lead l = new Lead();
			l.put('NonExistentField', 'Test'); // Throws SObjectException*/
            
            //2: Using get() with Invalid Field Name
			Lead l = new Lead(LastName='Test');
			String value = (String)l.get('InvalidField'); // Throws SObjectException
            
        } catch (SObjectException e) {
            System.debug('SObjectException: ' + e.getMessage());
        }
    }
}