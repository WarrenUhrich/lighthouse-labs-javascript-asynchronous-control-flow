console.log('1) Beginning of script.');

// First argument: A function (code you want to run after set recurring time.)
// Second argument: Time to wait (recurring) / (in milliseconds.)
setInterval(() => {
    console.log('2)', 1000, 'ms interval ran!');
}, 1000);

console.log('3) End of script.');
