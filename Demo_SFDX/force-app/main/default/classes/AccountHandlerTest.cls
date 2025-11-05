@isTest
public class AccountHandlerTest {
    
    @isTest
    public static void testCreateAccount() {
        Test.startTest();
        AccountHandler.createAccount('Test Account');
        Test.stopTest(); 

        Account acc = [SELECT Name FROM Account WHERE Name = 'Test Account' LIMIT 1];
        System.assertEquals('Test Account', acc.Name);

    }
    
    @isTest
    static void testUpdateAccountIndustry() {
        // Use factory to create test data
        Account acc = TestDataFactory.createAccount('TestCo', 'Finance');

        // Call method under test
        Test.startTest();
        AccountHandler.updateAccountIndustry(acc.Id, 'Technology');
        Test.stopTest();

        // Validate result
        Account updated = [SELECT Industry FROM Account WHERE Id = :acc.Id];
        System.assertEquals('Technology', updated.Industry, 'Industry should be updated to Technology');
    }
}