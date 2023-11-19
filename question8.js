const events = require('events');

const eventEmitter = new events.EventEmitter();

// Click to the subscribe event
eventEmitter.on('subscribe', () => {
  console.log('User has subscribed!');
});

eventEmitter.emit('subscribe', 'College Wallah');
