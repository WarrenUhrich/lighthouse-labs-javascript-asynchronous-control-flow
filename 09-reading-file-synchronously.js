const fs = require('fs');

const fileName = 'please-read-me.txt';

console.log('1) Before readFileSync...');

const fileContents = fs.readFileSync(fileName, {encoding: 'utf-8'});

console.log('2) Contents of file', fileName, 'are:', '\r\n\t', fileContents);

console.log('3) After readFileSync.');
