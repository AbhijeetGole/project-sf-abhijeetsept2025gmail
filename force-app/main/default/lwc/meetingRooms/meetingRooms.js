// removing booked rooms and those goes back to available rooms

import { LightningElement, track } from 'lwc';

export default class MeetingRooms extends LightningElement {
    allRooms = [
        { roomName: 'Koshi', roomCapacity: '5' },
        { roomName: 'Saraswati', roomCapacity: '20' },
        { roomName: 'Brahmaputra', roomCapacity: '25' },
        { roomName: 'Jhelum', roomCapacity: '15' },
        { roomName: 'Kaveri', roomCapacity: '30' }
    ];

    @track availableRooms = [...this.allRooms];
    @track bookedRooms = [];

    get noRooms() {
        return this.availableRooms.length === 0;
    }

    get noBookedRooms() {
        return this.bookedRooms.length === 0;
    }

    handleRoomBooking(event) {
        const bookedRoom = event.detail;

        // Remove from availableRooms
        this.availableRooms = this.availableRooms.filter(
            room => room.roomName !== bookedRoom.roomName
        );

        // Append to bookedRooms
        this.bookedRooms = [...this.bookedRooms, bookedRoom];
    }

    handleCancelBooking(event) {
        const roomToCancel = event.target.dataset.roomName;

        // Find the room object
        const canceledRoom = this.bookedRooms.find(room => room.roomName === roomToCancel);

        if (canceledRoom) {
            // Remove from bookedRooms
            this.bookedRooms = this.bookedRooms.filter(room => room.roomName !== roomToCancel);

            // Add back to availableRooms
            this.availableRooms = [...this.availableRooms, canceledRoom];
        }
    }
}


// Booking rooms
// import { LightningElement, track } from 'lwc';

// export default class MeetingRooms extends LightningElement {
//     allRooms = [
//         { roomName: 'Koshi', roomCapacity: '5' },
//         { roomName: 'Saraswati', roomCapacity: '20' },
//         { roomName: 'Brahmaputra', roomCapacity: '25' },
//         { roomName: 'Jhelum', roomCapacity: '15' },
//         { roomName: 'Kaveri', roomCapacity: '30' }
//     ];

//     @track availableRooms = [...this.allRooms];
//     @track bookedRooms = []; // New list to store booked rooms
//     @track selectedRoom = { roomName: '', roomCapacity: '' };

//     get noRooms() {
//         return this.availableRooms.length === 0;
//     }

//     get noBookedRooms() {
//         return this.bookedRooms.length === 0;
//     }

//     handleRoomBooking(event) {
//         const bookedRoom = event.detail;

//         // Update selected room
//         this.selectedRoom = bookedRoom;

//         // Remove from available rooms
//         this.availableRooms = this.availableRooms.filter(
//             room => room.roomName !== bookedRoom.roomName
//         );

//         // Append to booked rooms
//         this.bookedRooms = [...this.bookedRooms, bookedRoom];
//     }
// }