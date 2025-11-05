public class AccountHandler {
    
    public static void createAccount(String name) {
        Account acc = new Account(Name = name);
        insert acc;
    }
    
   public static void updateAccountIndustry(Id accountId, String newIndustry) {
        Account acc = [SELECT Id, Industry FROM Account WHERE Id = :accountId];
        acc.Industry = newIndustry;
        update acc;
    }
}