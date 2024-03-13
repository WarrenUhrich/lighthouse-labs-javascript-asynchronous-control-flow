const fs = require('fs');

const fileName = 'please-write-me.txt';
const fileContent = `Hello, World!
We are writing to this document from our NodeJS script.

Neato! This was written synchronously. 😲
`;

console.log('1) Before fs.writeFileSync...');

fs.writeFileSync(fileName, fileContent, {encoding: 'utf-8'});
console.log('2)', fileName, 'was written to!');

console.log('3) After fs.writeFileSync.');
