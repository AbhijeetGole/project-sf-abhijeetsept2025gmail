import { LightningElement } from 'lwc'; 
import { NavigationMixin } from 'lightning/navigation'; 
export default class DemoNavigation extends NavigationMixin(LightningElement) 
{ 
    openSalesforceSite(){ this[NavigationMixin.Navigate](
        { type:'standard__webPage', attributes:{ url:'https://developer.salesforce.com' } });
    } 
    openAccountHome(){ 
        this[NavigationMixin.Navigate]({ type:'standard__objectPage', attributes:{ objectApiName:'Account', actionName:'home' } });
    } 
    createNewContact(){ 
        this[NavigationMixin.Navigate]({ type:'standard__objectPage', attributes:{ objectApiName:'Contact', actionName:'new' } });
    } 
    openOppListView(){ 
        this[NavigationMixin.Navigate]({ type:'standard__objectPage', attributes:{ objectApiName:'Opportunity', actionName:'list' } }); 
    } 
    openCaseRecord(){ 
        this[NavigationMixin.Navigate]({ type:'standard__recordPage', attributes:{ recordId:'500WU00001Ea3YHYAZ', objectApiName:'Case', actionName:'view' } }); 
    } 
    openAccountRelatedContacts(){ 
        this[NavigationMixin.Navigate]({ type:'standard__recordRelationshipPage', attributes:{ recordId:'001WU00001DtBmSYAV', objectApiName:'Account', relationshipApiName:'Contacts', actionName:'view' } }); 
    } 
    openLWCComp(){ 
        this[NavigationMixin.Navigate]({ type:'standard__component', attributes:{ // componentName:'c__childLwcComp' 
        componentName:'c__wrapperAuraComp' } }); 
    } 
}