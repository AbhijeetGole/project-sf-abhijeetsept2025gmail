public class LeadService {
    public static void createLead(String firstName, String lastName) {
        try {
            Lead l = new Lead(FirstName=firstName, LastName=lastName, Company='TestCo');
            insert l;
            System.debug('Lead inserted successfully: ' + l.Id);
        } catch (DmlException e) {
            System.debug('DML Exception: ' + e.getMessage());
        } catch (Exception ex) {
            System.debug('General Exception: ' + ex.getMessage());
        } finally {
            System.debug('Lead creation attempt completed.');
        }
    }
}