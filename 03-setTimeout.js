console.log('1) Beginning of script.');

// First argument: a function (a callback we want to run after a set amount of time)
// Second argument: Time to wait (in milliseconds)
setTimeout(function() {
    console.log('2)', 3000, 'ms has passed!');
}, 3000);

console.log('3) End of script.');
