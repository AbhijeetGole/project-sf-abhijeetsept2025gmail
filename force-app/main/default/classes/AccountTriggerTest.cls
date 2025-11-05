@isTest
private class AccountTriggerTest {
    @isTest
    static void testAccountTrigger() {
        Account acc = new Account(Name = 'Acme');
        insert acc;

        Account insertedAcc = [SELECT Name FROM Account WHERE Id = :acc.Id];
        System.assertEquals('Acme - Verified', insertedAcc.Name);
    }
}