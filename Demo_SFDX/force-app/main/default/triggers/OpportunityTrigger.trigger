trigger OpportunityTrigger on Opportunity (before insert) {
    for (Opportunity opp : Trigger.new) {
        // Default StageName to 'Qualification' if not set
        if (String.isBlank(opp.StageName)) {
            opp.StageName = 'Qualification';
        }
    }
}