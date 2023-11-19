const events = require('events');

const eventEmitter = new events.EventEmitter();

// We define an event handler
const subscribeEventHandler = () => {
  console.log('User has subscribed!');
};

// Subscribe to the "subscribe" event
eventEmitter.on('subscribe', subscribeEventHandler);

// Attempt to call the event
eventEmitter.emit('subscribe');

// Remove the event handler
eventEmitter.removeListener('subscribe', subscribeEventHandler);

// Attempt to call the event after removing the event handler
eventEmitter.emit('subscribe');
