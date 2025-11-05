global class receiveParametersOrgChild {
    webservice static String createContactRecord(string firstName, string lastName,string title, string email){
        Contact rec = new Contact();
        rec.firstName = firstName;
        rec.lastName = lastName;
        rec.title = title;
        rec.email = email;
        
        insert rec;
        return 'Success';
    }
}