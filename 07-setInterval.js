console.log('1) Start of script.');

let count = 0;

// First argument is going to a callback (function.)
// Second argument is going to an amount of time in ms.
setInterval(function() {
    count++;
    console.log('2) 3000ms (3s) interval, count:', count);
}, 3000);

console.log('3) End of script.');
