({
    handleMessage: function (component, event, helper) {
        const msg = event.getParam("message");
        const type = event.getParam("type");
        const from = event.getParam("from");
        const id = Date.now();

        let messages = component.get("v.messages");
        messages.push({ id, message: msg, type, from });
        component.set("v.messages", messages);

        setTimeout($A.getCallback(() => {
            let updated = component.get("v.messages").filter(m => m.id !== id);
            component.set("v.messages", updated);
        }), 10000);
    }
})