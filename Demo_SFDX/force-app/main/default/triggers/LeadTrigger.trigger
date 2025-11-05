// Before Triggers are ideal for making changes to the triggering record, while After Triggers are suitable for working with 
// related records and system-generated field values.

trigger LeadTrigger on Lead (before insert, after insert) {

    switch on Trigger.operationType {
        when BEFORE_INSERT {
            for(Lead leadRecord : Trigger.new){
                if(String.isBlank(leadRecord.LeadSource)){
                    leadRecord.LeadSource = 'Other';
                }
                // validation rules on Industry fields
                if(String.isBlank(leadRecord.Industry)){
                    leadRecord.addError('The industry field cannot be blank');
                }
            }
        }
       when AFTER_INSERT {
            List<Task> leadTasks = new List<Task>();
            for(Lead leadRecord : Trigger.new){
                // create a task
                Task leadTask = new Task(Subject='Follow up on Lead Status', WhoId=leadRecord.Id);
                leadTasks.add(leadTask);
            }
            insert leadTasks;
        }
    }
}