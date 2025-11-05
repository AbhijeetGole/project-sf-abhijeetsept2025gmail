import { api, LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class HotelRoom extends LightningElement {
    @api
    hotelRoomInfo = { roomName: 'A-01', roomCapacity: 2 };

    @api
    showRoomInfo = false;

    // for application event
    @wire(CurrentPageReference)
    pageReference;

    selectTileHandler() {
        console.log('selectTileHandler!');
        // Child to Parent communication happens using custom event

        // Creating a custom event
        const tileClickEvent = new CustomEvent('tileclick', {
            detail: this.hotelRoomInfo,
            bubbles:true // required only if parent trying to provide
                        // event listener imperatively in the .js file.
        });

        // Dispatching the custom event / raise the event
        this.dispatchEvent(tileClickEvent);

        //raise an application event
        fireEvent(this.pageReference,'pubsubtileclick',this.hotelRoomInfo);
    }
}