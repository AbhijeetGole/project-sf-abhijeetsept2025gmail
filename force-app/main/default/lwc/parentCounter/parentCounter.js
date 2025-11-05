import { LightningElement } from 'lwc';
export default class ParentCounter extends LightningElement {
    show;
  handleChange(evt){
        this.show = evt.detail.checked;
    }
}