import { LightningElement, api } from 'lwc';

export default class RoomTile extends LightningElement {
    @api room;

    handleClick(event) {
        event.stopPropagation(); // Prevent double firing
        this.dispatchEvent(new CustomEvent('bookroom', {
            detail: this.room,
            bubbles: true,
            composed: true
        }));
    }
}