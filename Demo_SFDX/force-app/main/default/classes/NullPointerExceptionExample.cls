public class NullPointerExceptionExample {
    public static void runExample() {
        try {
            Account acc = null;
            System.debug(acc.Name); //accessing property on null → Exception
        } catch (NullPointerException e) {
            System.debug('NullPointerException: ' + e.getMessage());
        }
    }
}