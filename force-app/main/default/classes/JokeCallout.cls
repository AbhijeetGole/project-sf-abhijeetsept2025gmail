public class JokeCallout {
    @AuraEnabled
    public static String getProgrammingJoke() {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        //Note: callout:JokeAPI refers to the Named Credential you created.
        request.setEndpoint('callout:JokeAPI/jokes/programming/random');
        request.setMethod('GET');

        HttpResponse response = http.send(request);

        if (response.getStatusCode() == 200) {
            List<Object> jokes = (List<Object>) JSON.deserializeUntyped(response.getBody());
            Map<String, Object> joke = (Map<String, Object>) jokes[0];
            String setup = (String) joke.get('setup');
            String punchline = (String) joke.get('punchline');
            return setup + ' — ' + punchline;
        } else {
            return 'Failed to fetch joke. Status: ' + response.getStatusCode();
        }
    }
}