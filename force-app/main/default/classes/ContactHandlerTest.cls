@isTest
public class ContactHandlerTest {
	 @isTest
    static void testCreateContact() {
        String lastName = 'LContact';
		Test.startTest();
        ContactHandler.createContact(lastName);
        Test.stopTest();

        Contact c = [SELECT LastName FROM Contact WHERE LastName = :lastName LIMIT 1];
        System.assertEquals(lastName, c.LastName, 'Contact lastName should match the input');
    }
}