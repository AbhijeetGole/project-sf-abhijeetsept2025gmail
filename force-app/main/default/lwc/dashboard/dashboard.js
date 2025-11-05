import { LightningElement, track } from 'lwc';
import getDashboardData from '@salesforce/apex/DashboardController.getDashboardData';

export default class Dashboard extends LightningElement {
  @track totalAccounts = 0;
  @track totalContacts = 0;
  @track openOpportunities = 0;
  @track data = [];
  @track visibleData = [];
  @track page = 1;
  pageSize = 5;

  columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Industry', fieldName: 'Industry' },
    { label: 'Phone', fieldName: 'Phone' }
  ];

  connectedCallback() {
    getDashboardData()
      .then(result => {
        this.totalAccounts = result.totalAccounts;
        this.totalContacts = result.totalContacts;
        this.openOpportunities = result.openOpportunities;
        this.data = result.accounts;
        this.updateVisibleData();
      })
      .catch(error => {
        console.error('Error loading dashboard', error);
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