public class HttpCalloutCtrl {

    @AuraEnabled // @AuraEnabled make it accessible at client side
    public static Map<String, Object> getCalloutResponseContents(String url){
        
        Http http = new Http();
        
        HttpRequest req = new HttpRequest();
        req.setEndpoint(url);
        req.setMethod('GET');
        
        HttpResponse res = new HttpResponse();
        
        // Making request
        res = http.send(req);
        
       // System.debug('Response '+res.getBody());
        
        Map<String, Object> resultsMap = (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
        return resultsMap;
    }
}