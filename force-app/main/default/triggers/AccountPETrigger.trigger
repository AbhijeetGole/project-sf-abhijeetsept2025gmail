trigger AccountPETrigger on Account (after update) {
    
    if(Trigger.isAfter && Trigger.isUpdate){
        List<Account_Platform_Event__e > listOfAccounts = new List<Account_Platform_Event__e>();
        for(Account a: Trigger.new){
            Account_Platform_Event__e evt = new Account_Platform_Event__e();
            evt.Account_Name__c = a.Name;
            evt.Phone__c = a.Phone;
            evt.Salary__c = a.AnnualRevenue;
            
            listOfAccounts.add(evt);
        }
        if(listOfAccounts.size() > 0 ){
            EventBus.publish(listOfAccounts);// publishing platform event
        }
    }

}