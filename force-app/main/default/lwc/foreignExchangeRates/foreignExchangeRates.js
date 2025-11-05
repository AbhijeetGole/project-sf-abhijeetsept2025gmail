import { LightningElement, track } from 'lwc';
import getCalloutResponseContents from '@salesforce/apex/HttpCalloutCtrl.getCalloutResponseContents';

export default class ForeignExchangeRates extends LightningElement {
    @track listOfCurrency = [];
    @track response;

    handleClick() {
        const url = 'https://v6.exchangerate-api.com/v6/b400f9288477d4184d65d3d6/latest/USD'; // Replace with your actual endpoint
        getCalloutResponseContents({ url })
           .then(result => {
                console.log('Raw result from Apex:', result);
                this.response = result;

                if (result && result.conversion_rates) {
                    const rates = result.conversion_rates;
                    this.listOfCurrency = Object.entries(rates).map(
                        ([key, value]) => `${key}: ${value}`
                    );
                } else {
                    console.error('Rates not found in response:', result);
                }
            })
            .catch(error => {
                console.error('Error fetching exchange rates:', error);
            });

    }
}