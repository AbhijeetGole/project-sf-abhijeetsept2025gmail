import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/PaginatedTableController.getAccounts';

export default class PaginatedTable extends LightningElement {
    @track data = [];
    @track visibleData = [];
    @track page = 1;
    pageSize = 4;

    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Industry', fieldName: 'Industry' },
        { label: 'Phone', fieldName: 'Phone' }
    ];

    connectedCallback() {
        this.fetchData();
    }

    fetchData() {
        getAccounts()
            .then(result => {
                this.data = result;
                this.updateVisibleData();
            })
            .catch(error => {
                console.error('Error fetching data', error);
            });
    }

    updateVisibleData() {
        const start = (this.page - 1) * this.pageSize;
        const end = start + this.pageSize;
        this.visibleData = this.data.slice(start, end);
    }

    handleNext() {
        if (this.page < this.totalPages) {
            this.page++;
            this.updateVisibleData();
        }
    }

    handlePrevious() {
        if (this.page > 1) {
            this.page--;
            this.updateVisibleData();
        }
    }

    get totalPages() {
        return Math.ceil(this.data.length / this.pageSize);
    }

    get isFirstPage() {
        return this.page === 1;
    }

    get isLastPage() {
        return this.page === this.totalPages;
    }
}