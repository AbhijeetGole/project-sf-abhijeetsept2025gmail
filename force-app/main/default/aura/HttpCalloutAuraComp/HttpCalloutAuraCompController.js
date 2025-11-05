({
	calloutCtrl : function(component, event, helper) {
		console.log('Inside calloutCtrl!');
        
        var action = component.get("c.getCalloutResponseContents");
        
        action.setParams({
            "url":"https://v6.exchangerate-api.com/v6/b400f9288477d4184d65d3d6/latest/USD"
        });
        
        action.setCallback(this,function(response){
            
            var state = response.getState();
            if(component.isValid && state === 'SUCCESS'){
               console.log('response.getReturnValue() => '+JSON.stringify(response.getReturnValue()));
               component.set("v.response",response.getReturnValue());
               var getAllRates = component.get("v.response")['conversion_rates'];
                console.log('getAllRates :-> '+JSON.stringify(getAllRates));
               var currencyList = [];
                for(var key in getAllRates){
                    currencyList.push(key+'='+getAllRates[key]);
                }
                component.set("v.ListOfCurrency",currencyList);
            }
        });
        
        $A.enqueueAction(action);
	}
})