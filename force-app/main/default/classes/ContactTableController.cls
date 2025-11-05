public class ContactTableController {
    public List<Contact> contacts { get; set; }

    public ContactTableController() {
        contacts = [SELECT FirstName, LastName, Email, Phone, MailingCity FROM Contact LIMIT 10];
    }
}