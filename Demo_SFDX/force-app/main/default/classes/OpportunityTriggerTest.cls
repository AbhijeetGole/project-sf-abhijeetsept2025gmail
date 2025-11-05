@isTest
public class OpportunityTriggerTest {

    @isTest
    public static void testOpportunityTrigger() {
       
        /*Opportunity opp = new Opportunity(
            Name = 'Big Deal',
            CloseDate = Date.today().addDays(30),
            Amount = 50000
            // StageName intentionally left blank
        );
        insert opp;*/
        
         // Use TestOppDataFactory to create Opportunity without StageName
        Opportunity opp = TestOppDataFactory.createOpportunity(
            'Big Deal',
            Date.today().addDays(30),
            50000,
            null // StageName intentionally left null
        );

        Opportunity insertedOpp = [SELECT StageName FROM Opportunity WHERE Id = :opp.Id];
        System.assertEquals('Qualification', insertedOpp.StageName, 'StageName should default to Qualification');
    }
}