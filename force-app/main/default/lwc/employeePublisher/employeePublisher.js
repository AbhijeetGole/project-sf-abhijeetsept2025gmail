import { LightningElement, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class EmployeePublisher extends LightningElement {
  @wire(CurrentPageReference) pageRef;

  employeeList = [
    { id: 1, name: 'Mahi', role: 'Developer' },
    { id: 2, name: 'Yuvi', role: 'Designer' },
    { id: 3, name: 'Sourav', role: 'Tester' },
    { id: 4, name: 'Rahul', role: 'Developer' },
    { id: 5, name: 'Sachin', role: 'Manager' }
  ];

  publishEmployees() {
    fireEvent(this.pageRef, 'employeelistupdate', this.employeeList);
  }
}