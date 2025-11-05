public class LimitMonitor {
    public static void checkLimits() {
        	/*	Integer i = 0;
 		       while(i<10000){
 				   System.debug('Executing');
                   i++;
				}*/
        // big soql query
		List<Account> accounts = [SELECT Id, Type, Name, ParentId, BillingStreet, BillingCity, BillingState, BillingPostalCode, BillingCountry, BillingLongitude, BillingLatitude, BillingGeocodeAccuracy, BillingAddress, ShippingStreet, ShippingCity, ShippingState, ShippingPostalCode, ShippingCountry, ShippingLatitude, ShippingLongitude, ShippingGeocodeAccuracy, ShippingAddress, Phone, Fax, AccountNumber, Website, PhotoUrl, Sic, Industry, AnnualRevenue, NumberOfEmployees, Ownership, TickerSymbol, Description, Rating, Site, AccountSource, DunsNumber, Tradestyle, NaicsCode, NaicsDesc, YearStarted, SicDesc, DandbCompanyId, OperatingHoursId, CustomerPriority__c, SLA__c, Active__c, NumberofLocations__c, UpsellOpportunity__c, SLASerialNumber__c, SLAExpirationDate__c FROM Account];

        System.debug('🔍 DML Used: ' + Limits.getDMLStatements() + ' / ' + Limits.getLimitDMLStatements());
        System.debug('📦 SOQL Used: ' + Limits.getQueries() + ' / ' + Limits.getLimitQueries());
        System.debug('🧠 Heap Used: ' + Limits.getHeapSize() + ' / ' + Limits.getLimitHeapSize());
        System.debug('⏱️ CPU Time Used: ' + Limits.getCpuTime() + ' / ' + Limits.getLimitCpuTime());
    }
}