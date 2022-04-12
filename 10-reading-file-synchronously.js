const fs = require('fs');

console.log('Before reading file.');

const fileContents = fs.readFileSync('./sample.txt', {encoding: 'utf-8'});
console.log('Contents of sample.txt:', fileContents);

console.log('After reading file.');
