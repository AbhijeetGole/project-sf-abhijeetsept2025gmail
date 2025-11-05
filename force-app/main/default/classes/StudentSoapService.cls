global class StudentSoapService {
       webService static Student__c getStudentById(String stdId)
    {
       Student__c student=[SELECT id, Name__c,Phone_Number__c,School__c,Email__c 
                           FROM Student__c WHERE id=: stdId];
      return student;
    }

}