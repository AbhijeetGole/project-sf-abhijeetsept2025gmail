({ 
    doInit : function(component, event, helper) { 
        component.set("v.hotelRoomsInfo", 
                      [ {roomName:'A-01',roomCapacity:'4'}, 
                       {roomName:'A-02',roomCapacity:'2'}, 
                       {roomName:'A-03',roomCapacity:'1'}, 
                       {roomName:'B-01',roomCapacity:'3'},
                       {roomName:'B-02',roomCapacity:'5'}, 
                       {roomName:'C-01',roomCapacity:'6'}, 
                       {roomName:'C-02',roomCapacity:'2'} 
                      ]); 
    }, 
    tileClickHandler:function(component,event,helper){
    component.set("v.selectedHotelRoom",event.getParam('roomName')+" Capacity:- "+event.getParam('roomCapacity')); 
    } 
})