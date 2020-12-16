const EventEmitter = require('events');
const util = require('util');
function MyEmitter() {
    EventEmitter.call(this);
    // use nextTick to emit the event once a handler is assigned
    process.nextTick(() => {
        // 刚构造完毕，必须使用nextTick才可以发射事件
        this.emit('event');
    });
}
util.inherits(MyEmitter, EventEmitter);
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occurred!');
});
