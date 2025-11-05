import { LightningElement, track, wire } from 'lwc';
//2
import messageDemo from "@salesforce/messageChannel/messageDemo__c";
//2 
import { MessageContext, publish, subscribe, unsubscribe, APPLICATION_SCOPE } from 'lightning/messageService';

export default class MessageLwc extends LightningElement {
    // 1
    @track messages = [];
    // 2
    @wire(MessageContext) msgContext;

    //3
    subscription = null;

    //3 
    connectedCallback() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.msgContext, messageDemo, msg => {
                    this.messageHandler(msg);
                },
                { scope: APPLICATION_SCOPE })
        }
    }
   
    //3 
    disconnectedCallback() {
        unsubscribe(this.subscription); 
        this.subscription = null;
    }
    
    //3 
    messageHandler(msgPayload) {
        if (msgPayload && msgPayload.from !== 'LWC') {
            console.log('LWC messageHandler!');
            this.messages.push({
                id: this.messages.length, 
                value: msgPayload.message, 
                from: msgPayload.from
            });
        }
    }

    //1 
    sendHandler() {
        const inputElement = this.template.querySelector("lightning-input");
        if (inputElement) {
            const msg = inputElement.value;
            this.messages.push({
                id: this.messages.length, 
                value: msg,
                from: 'LWC'
            });
            // 2
            const messagePayload = {
                message: msg,
                from: 'LWC'
            }
            publish(this.msgContext, messageDemo, messagePayload);
            // 1
            inputElement.value = "";
        }
    }
}