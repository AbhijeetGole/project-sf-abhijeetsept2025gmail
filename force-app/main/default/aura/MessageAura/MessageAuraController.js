({
    sendHandler: function (component, event, helper) {
        //1 Empty
        // 3
        const inputElement = component.find("inputBox"); if (inputElement) {
            const msg = inputElement.get("v.value");
            const messages = component.get("v.messages"); messages.push({
                id: messages.length, value: msg,
                from: "AURA"
            });
            component.set("v.messages", messages);
            const messagePayload = {
                message: msg,
                from: "AURA"
            };
            const msgChanel = component.find("messageChannel"); msgChanel.publish(messagePayload);
            inputElement.set("v.value", "");
        }
    },
    // 2
    messageHandler: function (component, event, helper) {
        if (
            event && event.getParam("message") &&
            //3
            event.getParam("from") !== "AURA") {
            //2
            const msg = event.getParam("message");
            const messages = component.get("v.messages"); messages.push({
                id: messages.length, value: msg,
                from: "LWC"
            });
            component.set("v.messages", messages);
        }
    }
})

// ({
//     sendHandler: function (component, event, helper) {
//         var inputElement = component.find("inputBox");
//         if (inputElement) {
//             var msg = inputElement.get("v.value");
//             var messages = component.get("v.messages");
//             messages.push({
//                 id: messages.length,
//                 value: msg,
//                 from: "AURA"
//             });
//             component.set("v.messages", messages);
//             var messagePayload = {
//                 message: msg,
//                 from: "AURA"
//             };
//             var msgChanel = component.find("messageChannel");
//             if (msgChanel && msgChanel.publish) {
//                 msgChanel.publish(messagePayload);
//             }
//             inputElement.set("v.value", "");
//         }
//     },
//     messageHandler: function (component, event, helper) {
//         if (event && event.getParam("message") && (event.getParam("from") !== "AURA")) {
//             var msg = event.getParam("message");
//             var messages = component.get("v.messages");
//             var source = event.getParam("from");

//                 messages.push({
//                     id: messages.length,
//                     value: msg,
//                     from: "LWC"
//                 });
//                 component.set("v.messages", messages);
//             }
//     }
// })