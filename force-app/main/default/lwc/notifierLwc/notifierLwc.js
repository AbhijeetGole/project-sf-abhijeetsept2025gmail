import { LightningElement, wire } from 'lwc';
import { MessageContext, publish } from 'lightning/messageService';
import systemAlertChannel from "@salesforce/messageChannel/systemAlertChannel__c";

export default class NotifierLwc extends LightningElement {
    @wire(MessageContext) msgContext;

    sendAlert() {
        const payload = {
            message: '🚨 Scheduled maintenance at midnight.',
            type: 'alert',
            from: 'NotifierLWC'
        };
        publish(this.msgContext, systemAlertChannel, payload);
    }
}