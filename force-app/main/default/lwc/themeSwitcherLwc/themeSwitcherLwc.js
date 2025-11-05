import { LightningElement, track } from 'lwc';

export default class ThemeSwitcher extends LightningElement {
  @track isThemeB = false;

  get theme() {
    return this.isThemeB ? 'Theme B' : 'Theme A';
  }

  get themeClass() {
    return this.isThemeB ? 'theme-b' : 'theme-a';
  }

  handleToggle(event) {
    this.isThemeB = event.target.checked;
  }
}