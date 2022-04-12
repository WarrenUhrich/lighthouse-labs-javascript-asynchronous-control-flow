const fs = require('fs');

console.log('Before reading file.');

fs.readFile('./sample.txt', {encoding: 'utf-8'}, (error, fileContents) => {
    if ( error ) {
        console.error(error);
    } else {
        console.log('Contents of sample.txt:', fileContents);
    }
});

console.log('After reading file.');
