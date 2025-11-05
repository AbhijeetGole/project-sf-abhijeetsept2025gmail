@isTest(SeeAllData=false)
public class ContactTest_NoSeeAllData {

       @isTest
    public static void testQueryRealContacts() {
        List<Contact> contacts = [SELECT Id, FirstName FROM Contact LIMIT 5];
        System.debug('Real Contacts: ' + contacts);
    }
    /*@isTest
    public static void testContactInsert() {
        // Create test data
        Account acc = new Account(Name = 'Test Account');
        insert acc;

        Contact con = new Contact(FirstName = 'John', LastName = 'Doe', AccountId = acc.Id);
        insert con;

        Contact result = [SELECT FirstName, LastName FROM Contact WHERE Id = :con.Id];
        System.assertEquals('John', result.FirstName);
    }*/
}