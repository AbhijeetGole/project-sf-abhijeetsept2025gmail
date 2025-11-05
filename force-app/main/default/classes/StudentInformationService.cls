@RestResource(urlMapping='/studentsinfo/*')
global class StudentInformationService {

    global class StudentInfo{
        String studentName{get;set;}
        String studentAddress{get;set;}
        String studentPhone{get;set;}
        String schoolName{get;set;}
    }
    
    @HttpGet
    global static StudentInfo getStudent(){
        RestRequest request = RestContext.Request;
        String studentId = request.requestURI.substring(request.RequestURI.lastIndexOf('/')+1);
        student__c student = [SELECT id, Name__c, Address__c, phone_number__c,school__r.Name FROM Student__c where
                             id=:studentId];
        StudentInfo stdInfo = new StudentInfo();
        stdInfo.studentName = student.Name__c;
        stdInfo.studentAddress = student.Address__c;
        stdInfo.studentPhone = student.phone_number__c;
        stdInfo.schoolName = student.school__r.Name;
        return stdInfo;
    }
    
    @HttpDelete
    global static string deleteStudent(){
        RestRequest request = RestContext.Request;
        String studentId = request.requestURI.substring(request.RequestURI.lastIndexOf('/')+1);
        student__c student = [SELECT id FROM Student__c where id=:studentId];
        String id = student.Id;
        delete student;
        return id+' record deleted!';
    }
    
     @HttpPost
    global static string insertStudent(String name, String address, String email){
        Student__c student = new Student__c();
        student.Name__c = name;
        student.Address__c = address;
        student.Email__c = email;
        insert student;
        return student.id+' record created!';
    }
    
}