import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class EmployeeTable extends LightningElement {
  employees = [];

  @wire(CurrentPageReference) pageRef;

  connectedCallback() {
    registerListener('employeelistupdate', this.handleEmployeeList, this);
  }

  handleEmployeeList(payload) {
    this.employees = payload;
  }

  disconnectedCallback() {
    unregisterAllListeners(this);
  }
}