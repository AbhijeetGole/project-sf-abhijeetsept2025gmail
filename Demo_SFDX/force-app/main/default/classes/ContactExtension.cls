public class ContactExtension {
    public List<Contact> contacts { get; set; }

    public ContactExtension(ApexPages.StandardController std) {
        contacts = [SELECT FirstName, LastName, Email FROM Contact LIMIT 10];
    }
}