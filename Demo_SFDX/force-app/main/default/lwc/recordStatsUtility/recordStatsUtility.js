import { LightningElement, track } from 'lwc';

export default class RecordStatsUtility extends LightningElement {
    @track selectedObject = 'Case';
    @track stats = null;

    objectOptions = [
        { label: 'Case', value: 'Case' },
        { label: 'Lead', value: 'Lead' },
        { label: 'Opportunity', value: 'Opportunity' }
    ];

    handleObjectChange(event) {
        this.selectedObject = event.detail.value;
        this.fetchStats();
    }

    fetchStats() {
        // Simulate fetching stats (replace with Apex call)
        this.stats = {
            total: Math.floor(Math.random() * 100),
            statusBreakdown: [
                { label: 'Open', count: Math.floor(Math.random() * 50) },
                { label: 'Closed', count: Math.floor(Math.random() * 50) }
            ]
        };
    }

    connectedCallback() {
        this.fetchStats();
    }
}