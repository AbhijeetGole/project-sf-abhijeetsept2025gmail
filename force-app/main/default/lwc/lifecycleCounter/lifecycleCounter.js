import { LightningElement, track } from 'lwc';

export default class LifecycleCounter extends LightningElement {
  @track count = 0;
  timer;

  constructor() {
    super();
    console.log('Constructor: Component is being created');
  }

  connectedCallback() {
    console.log('connectedCallback: Component added to DOM');
    this.timer = setInterval(() => {
      this.count += 1;
      console.log(`Counter: ${this.count}`);
    }, 1000);
  }

  renderedCallback() {
    console.log('renderedCallback: Component rendered');
  }

  disconnectedCallback() {
    console.log('disconnectedCallback: Component removed from DOM');
    clearInterval(this.timer);
  }

  errorCallback(error, stack) {
    console.error('errorCallback: Error occurred', error);
  }
}