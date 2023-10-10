const fs = require('fs');

console.log('1) Before fs.readFile.');

fs.readFile('./sample.txt', {encoding: 'utf-8'}, (error, fileContents) => {
    if(error) {
        console.log(error);
    } else {
        console.log('2) Contents of file:', fileContents);
    }
});

console.log('3) After fs.readFile.');
