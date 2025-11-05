public class FilteredContactController {
    public List<Contact> contacts { get; set; }

    public FilteredContactController() {
        contacts = [SELECT FirstName, LastName, Email, MailingCity FROM Contact WHERE MailingCity = ''];
    }
}