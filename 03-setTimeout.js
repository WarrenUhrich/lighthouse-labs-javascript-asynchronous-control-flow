console.log('1) Beginning of script.');

// First argument: A function (code you want to run after set time.)
// Second argument: Time to wait (milliseconds.)
setTimeout(() => {
    console.log('2)', 3000, 'ms timeout ran!');
}, 3000);

console.log('3) End of script.');
