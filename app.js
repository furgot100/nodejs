// const log = require('./logger'); // better to use constant, so we don't accidently overwrite by using vars

// log('message');

const path = require('path')

var pathObj = path.parse(__filename)

console.log(pathObj)


