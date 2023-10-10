console.log('1) Beginning of script.');

let count = 0;

// First argument: a function (code you want to run after a RECURRING time.)
// Second argument: Time to wait between running the callback (in milliseconds.)
setInterval(() => {
    count++;
    console.log('2)', 1000, 'ms interval ran', count, 'times!');
}, 1000);

console.log('3) End of script.');
