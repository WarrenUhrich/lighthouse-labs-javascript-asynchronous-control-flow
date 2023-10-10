const { readFile, writeFile } = require('fs');

const file = './sample.txt';

console.log('1) Program start.');

console.log('2) Before readFile.');
readFile(file, {encoding: 'utf-8'}, (err, content) => {
    content += '\n12-writing-file-asynchronously.js was here.';
    
    console.log('3) Before writeFile.');
    writeFile(file, content, {encoding: 'utf-8'}, (err) => {
        if(err) {
            console.log(err);
        }else{
            console.log('4) Wrote to file:', file);
        }
    });
    console.log('5) After writeFile.');

});
console.log('6) After readFile.');

console.log('7) Program end.');
