const fs = require('fs');

console.log('Before deleting file.');

fs.unlink('./new-file.txt', (error) => {
    if ( error ) {
        console.error(error);
    } else {
        console.log('new-file.txt successfully deleted.');
    }
});

console.log('After deleting file.');
