class EventBus {
    constructor() {
        this.events = Object.create(null)
    }
    on(name, fn) {
        if (!this.events[name]) {
            this.events[name] = []
        }
        this.events[name].push(fn)
    }
    off(name) {
        if (this.events[name]) {
            delete this.events[name]
        }
    }
    once() {

    }
    emit(name, ...args) {
        this.events[name] && this.events[name].forEach(fn => {
            fn(...args)
        });
    }
}