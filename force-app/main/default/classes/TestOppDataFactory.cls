public class TestOppDataFactory {
    public static Opportunity createOpportunity(String name, Date closeDate, Decimal amount, String stageName) {
        Opportunity opp = new Opportunity(
            Name = name,
            CloseDate = closeDate,
            Amount = amount,
            StageName = stageName
        );
        insert opp;
        return opp;
    }
}