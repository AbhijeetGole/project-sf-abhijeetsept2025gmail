/*
Variable        Usage

isExecuting     Returns true if the current context for the Apex code is a trigger, not a       
                Visualforce page, a Web service, or an executeanonymous() API call.
isInsert        Returns true if this trigger was fired due to an insert operation, from the 
                Salesforce user interface, Apex, or the API.
isUpdate	    Returns true if this trigger was fired due to an update operation, from the 
                Salesforce user interface, Apex, or the API.
isDelete	    Returns true if this trigger was fired due to a delete operation, from the 
                Salesforce user interface, Apex, or the API.
isBefore	    Returns true if this trigger was fired before any record was saved.
isAfter	        Returns true if this trigger was fired after all records were saved.
isUndelete	    Returns true if this trigger was fired after a record is recovered from the Recycle 
                Bin. This recovery can occur after an undelete operation from the Salesforce user interface, Apex, or the API.
new             Returns a list of the new versions of the sObject records.
                This sObject list is only available in insert, update, and undelete triggers, and the records can only be modified in before triggers.
newMap	        A map of IDs to the new versions of the sObject records.
                This map is only available in before update, after insert, after update, and after undelete triggers.
old	            Returns a list of the old versions of the sObject records.
                This sObject list is only available in update and delete triggers.
oldMap	        A map of IDs to the old versions of the sObject records.
                This map is only available in update and delete triggers.
operationType	Returns an enum of type System.TriggerOperation corresponding to the current 
                operation.
                Possible values of the System.TriggerOperation enum are: 
                BEFORE_INSERT, BEFORE_UPDATE, BEFORE_DELETE,
                AFTER_INSERT, AFTER_UPDATE, AFTER_DELETE, and AFTER_UNDELETE. 
                If you vary your programming logic based on different trigger types, consider using the switch statement with different permutations of unique trigger execution enum states.
size            The total number of records in a trigger invocation, both old and new.
*/
trigger LeadContextDemoTrigger on Lead (
    before insert, before update, before delete,
    after insert, after update, after delete, after undelete
) {
    
    // isExecuting
    if (Trigger.isExecuting) {
        System.debug('Trigger is executing in a valid context.');
    }
    
    // operationType with switch
    switch on Trigger.operationType {
        when BEFORE_INSERT {
            System.debug('Trigger Operation: BEFORE_INSERT');
        }
        when BEFORE_UPDATE {
            System.debug('Trigger Operation: BEFORE_UPDATE');
        }
        when BEFORE_DELETE {
            System.debug('Trigger Operation: BEFORE_DELETE');
        }
        when AFTER_INSERT {
            System.debug('Trigger Operation: AFTER_INSERT');
        }
        when AFTER_UPDATE {
            System.debug('Trigger Operation: AFTER_UPDATE');
        }
        when AFTER_DELETE {
            System.debug('Trigger Operation: AFTER_DELETE');
        }
        when AFTER_UNDELETE {
            System.debug('Trigger Operation: AFTER_UNDELETE');
        }
    }

    // Insert
    if (Trigger.isInsert) {
        System.debug('Insert operation detected.');
        if (Trigger.isBefore) {
            for (Lead l : Trigger.new) {
                l.Company = 'Default Company'; // Modify in BEFORE trigger
                System.debug('BEFORE INSERT: Lead Name = ' + l.LastName);
            }
        } else if (Trigger.isAfter) {
            for (Id id : Trigger.newMap.keySet()) {
                Lead l = Trigger.newMap.get(id);
                System.debug('AFTER INSERT: Lead ID = ' + id + ', Name = ' + l.LastName);
            }
        }
    }

      //Update
    if (Trigger.isUpdate) {
        System.debug('Update operation detected.');
        if (Trigger.isBefore) {
            for (Lead l : Trigger.new) {
                Lead oldL = Trigger.oldMap.get(l.Id);
                if (l.Status != oldL.Status) {
                    l.Title = 'Status changed from ' + oldL.Status;
                }
            }
        } else if (Trigger.isAfter) {
            for (Id id : Trigger.newMap.keySet()) {
                Lead newL = Trigger.newMap.get(id);
                Lead oldL = Trigger.oldMap.get(id);
                System.debug('AFTER UPDATE: ' + oldL.LastName + ' → ' + newL.LastName);
            }
        }
    }
    
    //Delete
    if (Trigger.isDelete) {
        System.debug('Delete operation detected.');
        for (Lead l : Trigger.old) {
            System.debug('Deleting Lead: ' + l.LastName);
        }
    }
    
    // Undelete
    if (Trigger.isUndelete) {
        System.debug('Undelete operation detected.');
        for (Id id : Trigger.newMap.keySet()) {
            Lead l = Trigger.newMap.get(id);
            System.debug('Recovered Lead: ' + l.LastName);
        }
    }
    
    //size
    System.debug('Total records in this trigger execution: ' + Trigger.size);
}
/*

// Before and After Insert
Lead lead = new Lead(Salutation='Mr.', LastName='Valid', Company='ValidCo',
                    Industry='Technology');
insert lead;

// Before and After Delete
List<Lead> leadsTobeDeleted = [SELECT Id FROM Lead WHERE LastName LIKE 'Va%'];
delete leadsTobeDeleted;

// After Undelete
List<Lead> leadsTobeUnDeleted = [SELECT Id FROM Lead WHERE isDeleted=true ALL ROWS];
undelete leadsTobeUnDeleted;
*/

/*
    // Insert
    Lead lead = new Lead(Salutation='Mr.', LastName='InsertCheck', FirstName='Test', Company='Initial Company',
                    Industry='Technology');
    insert lead;

    //List<Lead> leadsTobeDeleted = [SELECT Id FROM Lead WHERE LastName LIKE 'Insert%'];
    //delete leadsTobeDeleted;
*/

/*
// Update
Lead lead = new Lead(Salutation='Mr.', LastName='BeforeUpdate', FirstName='UpdateTest', 
                     Company='TriggerCo', Status='Open');
insert lead;

Lead lead = [SELECT Id, Status, LastName FROM Lead WHERE LastName='BeforeUpdate' LIMIT 1];
lead.status = 'Closded - Converted';// Triggers BEFORE logic
lead.LastName = 'AfterUpdate';
update lead;

List<Lead> leadsTobeDeleted = [SELECT Id FROM Lead WHERE LastName LIKE 'AfterUpdate%'];
delete leadsTobeDeleted;
*/

/*
    // Delete
    List<Lead> leadsTobeDeleted = [SELECT Id FROM Lead WHERE Company LIKE 'Def%'];
    delete leadsTobeDeleted;

    // Size check for size in all the transactions
*/