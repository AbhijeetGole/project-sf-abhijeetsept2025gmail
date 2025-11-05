public class AccountService {

    public static void createAccount(String name, Boolean violateRule) {
        try {
            if (String.isBlank(name)) {
                throw new BusinessRuleException('Account name cannot be blank.');
            }

            if (violateRule) {
                throw new BusinessRuleException('Business rule violation: Cannot create account.');
            }
            
            // Simulate a general exception: division by zero
            Integer x = 1 / 0; // This will throw a MathException

            Account acc = new Account(Name = name);
            insert acc;
            System.debug('Account created: ' + acc.Id);

        } catch (BusinessRuleException bre) {
            System.debug('Custom Exception Caught: ' + bre.getMessage());

        } catch (Exception e) {
            System.debug('General Exception Caught: ' + e.getMessage());
        }
    }
}