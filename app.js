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
// const EventEmitter = require('events'); //EventEmmiter is a class


// const Logger = require('./logger');
// const logger = new Logger();


// //listener
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// });

// logger.log('message');

// HTTP MODULE

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});



server.listen(3000);

console.log('Listening on port 3000...');