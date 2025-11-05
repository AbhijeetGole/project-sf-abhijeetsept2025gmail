import { LightningElement, track } from 'lwc';
import getCalloutResponseContents from '@salesforce/apex/HttpCalloutCtrl.getCalloutResponseContents';

export default class ExchangeRateViewer extends LightningElement {
    @track targetCurrency = 'INR';
    @track exchangeRate;
    @track date;
    @track error;

    // Dropdown options
    get currencyOptions() {
        return [
            { label: 'Indian Rupee (INR)', value: 'INR' },
            { label: 'Euro (EUR)', value: 'EUR' },
            { label: 'British Pound (GBP)', value: 'GBP' },
            { label: 'Japanese Yen (JPY)', value: 'JPY' },
            { label: 'Canadian Dollar (CAD)', value: 'CAD' },
            { label: 'Australian Dollar (AUD)', value: 'AUD' }
        ];
    }

    handleCurrencyChange(event) {
        this.targetCurrency = event.detail.value;
    }

    handleClick() {
        const baseUrl = 'https://v6.exchangerate-api.com/v6/b400f9288477d4184d65d3d6/pair/USD/';
        const fullUrl = `${baseUrl}${this.targetCurrency}`;

        getCalloutResponseContents({ url: fullUrl })
            .then(result => {
                this.exchangeRate = result.conversion_rate;
                this.date = result.time_last_update_utc;
                this.error = null;
            })
            .catch(error => {
                console.error('Error fetching exchange rate:', error);
                this.error = 'Failed to fetch exchange rate';
                this.exchangeRate = null;
                this.date = null;
            });
    }
}