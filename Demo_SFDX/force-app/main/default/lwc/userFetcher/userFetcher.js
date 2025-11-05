import { LightningElement, track } from 'lwc';

export default class UserFetcher extends LightningElement {
  @track user = {};
  @track error;

  connectedCallback() {
    console.log('connectedCallback: Fetching user data...');
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        this.user = data;
        console.log('User data fetched:', data);
      })
      .catch(err => {
        this.error = err;
        console.error('Error fetching user:', err);
      });
  }

  renderedCallback() {
    console.log('renderedCallback: Component rendered with user data');
  }

  errorCallback(error, stack) {
    console.error('errorCallback: Error occurred', error);
  }
}