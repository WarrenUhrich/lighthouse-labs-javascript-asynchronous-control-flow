const fs = require('fs');

const fileName = 'please-read-me.txt';

console.log('1) Before readFile...');

fs.readFile(fileName, {encoding: 'utf-8'}, function(err, data) {
    if(err) {
        return console.log('2) fs.readFile error encountered:', err); // Stop function right here! No need to continue if error.
    }
    
    console.log('2) Contents of file', fileName, 'are:', '\r\n', data);
});

console.log('3) After readFile.');
 