@isTest(SeeAllData=true)
public class ContactTest_SeeAllData {

    @isTest
    public static void testQueryRealContacts() {
        List<Contact> contacts = [SELECT Id, FirstName FROM Contact LIMIT 5];
        System.debug('Real Contacts: ' + contacts);
    }
    
      /*@isTest
        public static void testInsertContact() {
            // You can access real data here, but we're inserting a new Contact
            Contact con = new Contact(FirstName = 'Alice', LastName = 'Wonderland');
            insert con;
    
            // Verify the contact was inserted
            Contact result = [SELECT FirstName, LastName FROM Contact WHERE Id = :con.Id];
            System.assertEquals('Alice', result.FirstName);
            System.assertEquals('Wonderland', result.LastName);
        }*/
}