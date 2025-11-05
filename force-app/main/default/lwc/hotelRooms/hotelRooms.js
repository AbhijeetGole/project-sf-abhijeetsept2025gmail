import { LightningElement } from 'lwc';
export default class HotelRooms extends LightningElement {
    hotelRoomsInfo;
    selectedHotelRoom;

    constructor(){ 
        super(); 
        this.selectedHotelRoom = {roomName:'',roomCapacity:''}; 
        this.hotelRoomsInfo = [ 
            {roomName:'A-01',roomCapacity:'4'}, 
            {roomName:'A-02',roomCapacity:'2'}, 
            {roomName:'A-03',roomCapacity:'1'}, 
            {roomName:'B-01',roomCapacity:'3'}, 
            {roomName:'B-02',roomCapacity:'5'},
            {roomName:'C-01',roomCapacity:'6'}, 
            {roomName:'C-02',roomCapacity:'2'} 
        ] 
        // Providing Event Listener through Imperative way 
        this.template.addEventListener('tileclick',this.tileClickHandler.bind(this)); 
        // Also try to provide event handler / event listener using arrow function.
    } 
        // provided event listener for hotelRoom's 'tileclick' event 
        tileClickHandler(evt){ this.selectedHotelRoom = evt.detail; }
}