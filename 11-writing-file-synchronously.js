const { writeFileSync, readFileSync } = require('fs');

// const writeFileSync = require('fs').writeFileSync;

// const fs = require('fs');
// fs.writeFileSync();

// const writeFileSync = fs.writeFileSync;

const file = './sample.txt';

console.log('1) Program start.');

console.log('2) Before readFile.');
let content = readFileSync(file, {encoding: 'utf-8'});
console.log('3) After readFile.');

console.log('4) Before writeFile.');
content += '\n11-writing-file-synchronously.js was here.';
writeFileSync(file, content, {encoding: 'utf-8'});
console.log('5) After writeFile.');

console.log('6) Program end.');
