const fs = require('fs');

console.log('Before writing file.');

const myString = `Hello, World!
This is my test string for new-file.txt

Hope it works! :)
`;

fs.writeFile('./new-file.txt', myString, {encoding: 'utf-8'}, (error) => {
    if ( error ) {
        console.error(error);
    } else {
        console.log('new-file.txt successfully written to.');
    }
});

console.log('After writing file.');
