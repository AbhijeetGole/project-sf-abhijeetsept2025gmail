public with sharing class PaginatedTableController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Industry, Phone FROM Account ORDER BY Name LIMIT 100];
    }
}