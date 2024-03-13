const fs = require('fs');

const fileName = 'please-write-me-async.txt';
const fileContent = `Hello, World!
We are writing to this document from our NodeJS script.

Neato! This was written asynchronously. 😎
`;

console.log('1) Before fs.writeFile...');

fs.writeFile(fileName, fileContent, {encoding: 'utf-8'}, function(err) {
    if(err) {
        return console.log('2) fs.writeFile error encountered:', err);
    }

    console.log('2)', fileName, 'was written to!');
});

console.log('3) After fs.writeFile.');
