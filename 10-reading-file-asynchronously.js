const fs = require('fs');

console.log('1) Before reading from file.');

fs.readFile('./sample.txt', {encoding: 'utf-8'}, (error, fileContents) => {
    if (error) {
        console.error(error);
    } else {
        console.log('2) Contents of file:', fileContents);
    }
});

console.log('3) After reading from file.');
