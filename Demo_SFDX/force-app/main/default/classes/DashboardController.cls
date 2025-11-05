public with sharing class DashboardController {
  @AuraEnabled(cacheable=true)
  public static Map<String, Object> getDashboardData() {
    Map<String, Object> result = new Map<String, Object>();
    result.put('totalAccounts', [SELECT COUNT() FROM Account]);
    result.put('totalContacts', [SELECT COUNT() FROM Contact]);
    result.put('openOpportunities', [SELECT COUNT() FROM Opportunity WHERE IsClosed = false]);
    result.put('accounts', [SELECT Id, Name, Industry, Phone FROM Account ORDER BY Name LIMIT 100]);
    return result;
  }
}