({ subscribeToEvent : function(cmp, event, helper) { 
    // With aura:id finding pubSubModule 
    const pubSubModule = cmp.find('pubSubModule'); 
    // // Providing event listener for pubsubtileclick application event 
    // // The $A namespace is the entry point for using the framework in JavaScript code. 
    // // It allows you to interact with the Aura framework. 
    const callbackFunction = $A.getCallback(function(payload){ 
        cmp.set("v.selectedHotelRoomInfo",payload); }); 
    // Registering event listener for pubsubtileclick application event 
    pubSubModule.registerListener('pubsubtileclick',callbackFunction); 
	} 
})