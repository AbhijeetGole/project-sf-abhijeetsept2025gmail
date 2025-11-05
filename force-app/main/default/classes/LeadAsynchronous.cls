public class LeadAsynchronous {

    /*
    •	Can only accept primitive data types or collections of primitives (e.g., Id, String, Integer, List<Id>).
	•	It cannot accept sObjects, custom objects, or class instances as parameters.
	Why Primitive Parameters Only?
	•	Because future methods run later, passing full records risks data inconsistency if those records are 
		modified before execution.
	•	Instead, pass record IDs and query the latest data inside the method.

		Error do not support List of Non Primitive data types
	   	@future
    	public static void updateLeadRecords(List<Lead> existingRecords){}
	*/    
    @future
    public static void updateLeadRecords(Set<Id> existingRecordIds){
        List<Lead> existingRecords = [SELECT Id, LeadSource FROM Lead WHERE Id IN :existingRecordIds];
        for(Lead record : existingRecords){
            record.LeadSource = 'Web';
        }
        update existingRecords;

        // calling another future method - NOT ALLOWED
        // createLeadRecords();
    }

	@future
    public static void createLeadRecords(){
        Lead anotherLead = new Lead(LastName='Test Lead Single', Status='Open - Not Contacted', 
                                    Company='debellate Technologies', Industry='Finance');
        insert anotherLead;
    }
}