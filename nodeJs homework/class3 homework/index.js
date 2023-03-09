const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('registered', (studentName) => {
  console.log(`Welcome, ${studentName}! You have registered succesfully.`);
});


const newStudentName = 'Antonio';
myEmitter.emit('registered', newStudentName);