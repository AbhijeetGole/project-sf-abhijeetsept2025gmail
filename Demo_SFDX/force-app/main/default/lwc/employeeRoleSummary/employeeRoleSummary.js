import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class EmployeeRoleSummary extends LightningElement {
  roleSummary = [];

  @wire(CurrentPageReference) pageRef;

  connectedCallback() {
    registerListener('employeelistupdate', this.handleEmployeeList, this);
  }

  disconnectedCallback() {
    unregisterAllListeners(this);
  }

  handleEmployeeList(payload) {
    const summaryMap = {};
    payload.forEach(emp => {
      summaryMap[emp.role] = (summaryMap[emp.role] || 0) + 1;
    });

    this.roleSummary = Object.keys(summaryMap).map(role => ({
      role,
      count: summaryMap[role]
    }));
  }
}