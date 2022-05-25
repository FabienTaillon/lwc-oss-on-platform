public with sharing class UsersWireApi {

    private static final String ENDPOINT_URL = 'https://jsonplaceholder.typicode.com/users/';

    @AuraEnabled(cacheable=true)
    public static String getUser(String id) {

        HttpRequest req = new HttpRequest();
        req.setEndpoint(ENDPOINT_URL+id);
        req.setMethod('GET');
        
        Http http = new Http();
        HTTPResponse res = http.send(req);
        return res.getBody();
    }
}
