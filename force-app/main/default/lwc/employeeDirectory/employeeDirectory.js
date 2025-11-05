import { LightningElement } from 'lwc';

export default class EmployeeDirectory extends LightningElement {
    searchKey = '';
    sortedBy = 'name';
    sortedDirection = 'asc';

    employees = [
        { id: '1', name: 'Sachin Tendulkar', department: 'HR', email: 'sachin@example.com', joiningDate: '2020-01-15' },
        { id: '2', name: 'Rahul Dravid', department: 'Finance', email: 'rahul@example.com', joiningDate: '2019-03-22' },
        { id: '3', name: 'Sourav Ganguly', department: 'IT', email: 'sourav@example.com', joiningDate: '2021-07-10' }
    ];

    columns = [
        { label: 'Name', fieldName: 'name', sortable: true },
        { label: 'Department', fieldName: 'department', sortable: true },
        { label: 'Email', fieldName: 'email', type: 'email', sortable: true },
        { label: 'Joining Date', fieldName: 'joiningDate', type: 'date', sortable: true }
    ];

    get filteredEmployees() {
        return this.employees.filter(emp =>
            emp.name.toLowerCase().includes(this.searchKey.toLowerCase())
        );
    }

    handleSearch(event) {
        this.searchKey = event.target.value;
    }

    handleSort(event) {
        this.sortedBy = event.detail.fieldName;
        this.sortedDirection = event.detail.sortDirection;
        this.employees = [...this.employees].sort((a, b) => {
            const valA = a[this.sortedBy];
            const valB = b[this.sortedBy];
            return this.sortedDirection === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
        });
    }
}