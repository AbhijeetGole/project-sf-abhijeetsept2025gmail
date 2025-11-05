import { LightningElement, track, wire } from 'lwc';
import { MessageContext, subscribe, APPLICATION_SCOPE } from 'lightning/messageService';
import systemAlertChannel from "@salesforce/messageChannel/systemAlertChannel__c";

export default class ListenerLwc extends LightningElement {
    @track messages = [];
    @wire(MessageContext) msgContext;
    subscription;

    connectedCallback() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.msgContext,
                systemAlertChannel,
                (msg) => this.handleMessage(msg),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    handleMessage(msg) {
        const id = Date.now();
        this.messages.push({ ...msg, id });

        setTimeout(() => {
            this.messages = this.messages.filter(m => m.id !== id);
        }, 10000);
    }
}
