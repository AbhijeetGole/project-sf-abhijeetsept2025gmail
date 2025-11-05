public class QueryExceptionExample {
    public static void runExample() {
        try {
            // Suppose no Account exists with Name = 'XYZ'
            Account acc = [SELECT Id, Name FROM Account WHERE Name = 'XYZ']; //Throws QueryException: List has no rows for assignment
        } catch (QueryException e) {
            System.debug('QueryException: ' + e.getMessage());
        }
    }
}