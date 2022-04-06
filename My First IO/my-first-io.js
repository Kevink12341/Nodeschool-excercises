const fs = require('fs');
const Buffer = require('buffer');

let data = fs.readFileSync(process.argv[2]);
const str = Buffer.Buffer.from(data,'hex');
const count = str.toString('utf8')
const numbers = count.split('\n')
console.log(numbers.length-1)