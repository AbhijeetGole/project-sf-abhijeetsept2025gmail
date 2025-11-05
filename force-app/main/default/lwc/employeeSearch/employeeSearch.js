import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class EmployeeSearch extends LightningElement {
  allEmployees = [];
  filteredEmployees = [];

  @wire(CurrentPageReference) pageRef;

  connectedCallback() {
    registerListener('employeelistupdate', this.handleEmployeeList, this);
  }

  disconnectedCallback() {
    unregisterAllListeners(this);
  }

  handleEmployeeList(payload) {
    this.allEmployees = payload;
    this.filteredEmployees = payload;
  }

  handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredEmployees = this.allEmployees.filter(emp =>
      emp.name.toLowerCase().includes(searchTerm)
    );
  }
}