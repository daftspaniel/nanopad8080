class Minibus {

    constructor() {
        this.subscriptions = {};
    }

    subscribe(event, target) {
        if (!this.subscriptions[event]) {
            this.subscriptions[event] = []
        }
        this.subscriptions[event].push(target);
    }

    post(event, dataProvider) {
        let subs = this.subscriptions[event];
        if (!subs) {
            return;
        }
        for (let i = 0; i < subs.length; i++) {
            let listener = subs[i];
            listener(dataProvider);
        }
    }
}

let msgBus = new Minibus();