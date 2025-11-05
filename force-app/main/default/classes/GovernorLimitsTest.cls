public class GovernorLimitsTest {

    public static void testLimits() {
        List<Account> accounts = new List<Account>();

        // Simulate heap growth
        while (true) {
            // Monitor heap usage
            Integer currentHeap = Limits.getHeapSize();
            Integer maxHeap = Limits.getLimitHeapSize();

            if (currentHeap * 2 >= maxHeap) {
                System.debug('Heap usage approaching limit. Breaking loop.');
                break;
            }

            // Add dummy Account records to grow heap
            accounts.add(new Account(Name='Test Account ' + accounts.size()));
        }

        // Simulate SOQL query
        List<Account> queriedAccounts = [SELECT Id, Name FROM Account LIMIT 10];

        // Simulate DML operation
        for (Integer i = 0; i < 10; i++) {
            Account acc = new Account(Name='DML Test ' + i);
            insert acc;
        }

        // Log current usage and limits
        System.debug('🔍 Heap Used: ' + Limits.getHeapSize() + ' / ' + Limits.getLimitHeapSize());
        System.debug('🧮 DML Statements Used: ' + Limits.getDMLStatements() + ' / ' + Limits.getLimitDMLStatements());
        System.debug('📦 SOQL Queries Used: ' + Limits.getQueries() + ' / ' + Limits.getLimitQueries());
        System.debug('⏱️ CPU Time Used: ' + Limits.getCpuTime() + ' / ' + Limits.getLimitCpuTime());
    }
}