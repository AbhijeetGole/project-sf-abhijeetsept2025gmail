import { LightningElement, api } from 'lwc';

export default class MovieComp extends LightningElement {
    @api movieName;
    @api releaseYear;
    @api genre;
}