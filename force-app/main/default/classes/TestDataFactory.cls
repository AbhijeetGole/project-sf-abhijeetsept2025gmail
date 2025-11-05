@isTest
public class TestDataFactory {
  // Method to create a single Account
     public static Account createAccount(String name, String industry) {
        Account acc = new Account(Name = name, Industry = industry);
        insert acc;
        return acc;
    }
}