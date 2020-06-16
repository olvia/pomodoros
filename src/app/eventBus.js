class EventBus {
    constructor() {
        this.pairs = [];
    }

    subscribe(eventType, callback) {
        const pair = this.findEventCallbacksPair(eventType);

        if (pair) {
            pair.callbacks.push(callback);
        } else {
            this.pairs.push(new eventCallbacksPair(eventType, callback));
        }
    }

    publish(eventType, args) {
        const pair = this.findEventCallbacksPair(eventType);

        if (!pair) {
            // console.error("no subscribers for event " + eventType);
            return;
        }

        pair.callbacks.forEach(callback => {
            if(typeof callback === 'function'){
                callback(args);
            }});
    }

    findEventCallbacksPair(eventType) {
        return this.pairs.find(eventObject => eventObject.eventType === eventType);
    }
}

class eventCallbacksPair {
    constructor(eventType, callback) {
        this.eventType = eventType;
        this.callbacks = [callback];
    }
}

export const eventBus = new EventBus();
