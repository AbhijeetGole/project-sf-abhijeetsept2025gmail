public class BusinessRuleException extends Exception {
    public String errorCode;

    public BusinessRuleException(String message, String errorCode) {
        //Unlike Java, Apex has restricted access to the base Exception class constructors, and you cannot pass parameters to super().
        //super(message);// Not allowed in Apex
        this.errorCode = errorCode;
    }

    public String getErrorCode() {
        return errorCode;
    }
}