import { LightningElement, track } from 'lwc';

export default class QuickNotesUtility extends LightningElement {
    @track noteText = '';
    @track recordId = '';
    @track confirmation = '';

    handleNoteChange(event) {
        this.noteText = event.target.value;
    }

    handleRecordIdChange(event) {
        this.recordId = event.target.value;
    }

    saveNote() {
        // Simulate saving logic (could be replaced with Apex call)
        this.confirmation += `\nNote saved ${this.noteText} ${this.recordId ? ' for record ' + this.recordId : ''}!`;
        this.noteText = '';
        this.recordId = '';
    }

    
    clear() {
        // Simulate saving logic (could be replaced with Apex call)
        this.confirmation = '';
        this.noteText = '';
        this.recordId = '';
    }
}