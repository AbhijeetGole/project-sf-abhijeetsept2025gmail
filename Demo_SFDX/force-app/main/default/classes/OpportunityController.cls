// SOQL + DML - Bulkification
public class OpportunityController {

    public static void updateProfile(List<Id> oppIds){
        List<Opportunity> opps = [SELECT Id, Amount, Profile__c FROM Opportunity WHERE Id IN: oppIds];
        for(Opportunity opp : opps){
            // get opp record
            if(opp.Amount == null){
                opp.Profile__c = 'Low';
            } else if(opp.Amount <10000){
                opp.Profile__c = 'Low';
            } else if (opp.Amount > 50000){
                opp.Profile__c = 'High';
            } else{
                opp.Profile__c = 'Medium';
            }
        }
        // update all item at once
        update opps;
    }
}


/*// soql 101
// SOQL statement

public class OpportunityController {

    public static void updateProfile(List<Id> oppIds){
        // query all records first
        List<Opportunity> opps = [SELECT Id, Amount, Profile__c FROM Opportunity WHERE Id IN: oppIds];
        // iterate over all the items
        for(Opportunity opp : opps){
            // get opp record
            if(opp.Amount == null){
                opp.Profile__c = '';
            } else if(opp.Amount <10000){
                opp.Profile__c = 'Low';
            } else if (opp.Amount > 50000){
                opp.Profile__c = 'High';
            } else{
                opp.Profile__c = 'Medium';
            }
            update opp;
        }
    }
}*/

/*public class OpportunityController {

    public static void updateProfile(List<Id> oppIds){
        for(Id oppId : oppIds){
            // get opp record
            Opportunity opp = [SELECT Id, Amount, Profile__c FROM Opportunity WHERE Id =: oppId];
            if(opp.Amount <10000){
                opp.Profile__c = 'Low';
            } else if (opp.Amount > 50000){
                opp.Profile__c = 'High';
            } else{                                          
                opp.Profile__c = 'Medium';
            }
            // update opportunity
            update opp;
        }
    }
}*/