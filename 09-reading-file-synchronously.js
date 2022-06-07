const fs = require('fs');

console.log('1) Before reading from file.');

const fileContents = fs.readFileSync('./sample.txt', {encoding: 'utf-8'});

console.log('2) Contents of file:', fileContents);

console.log('3) After reading from file.');
