// const log = require('./logger'); // better to use constant, so we don't accidently overwrite by using vars

// log('message');



// Path module
// const path = require('path')

// var pathObj = path.parse(__filename)

// console.log(pathObj)


// OS module
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);

// Template string

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

