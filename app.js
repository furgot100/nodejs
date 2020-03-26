// const log = require('./logger'); // better to use constant, so we don't accidently overwrite by using vars

// log('message');



// Path module
// const path = require('path')

// var pathObj = path.parse(__filename)

// console.log(pathObj)


// OS module
// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// // console.log('Total Memory: ' + totalMemory);

// // Template string

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);


//  FILE SYSTEM MODULE
// const fs = require('fs');

// // const files =fs.readdirSync('./');
// // console.log(files);

// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files)
// });

// EVENT MODULE
const EventEmitter = require('events'); //EventEmmiter is a class
// class emitter extends EventEmitter {}

const emitter = new EventEmitter();

// NEW VERSION
// emitter.on('event', () => {
//     console.log('an event occured!');
// });

// OLD VERSION
// Register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called');
})

// Raise an event
emitter.emit('messageLogged');





