import { LightningElement, api } from 'lwc';

export default class GenericRecordEditor extends LightningElement {
    @api objectApiName = 'Account';
    @api recordId;

    get isAccount() {
        return this.objectApiName === 'Account';
    }

    get isContact() {
        return this.objectApiName === 'Contact';
    }

    get isOpportunity() {
        return this.objectApiName === 'Opportunity';
    }
}