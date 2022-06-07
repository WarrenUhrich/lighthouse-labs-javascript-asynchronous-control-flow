console.log('1) Beginning of script.');

// First argument: A function (code you want to run after set time.)
// Second argument: Time to wait (milliseconds.)
setTimeout(() => {
    console.log('2)', 500, 'ms timeout ran!');
}, 3000);

for (let i = 0; i < 100000; i++) {
    console.log('3) Current iteration: ', i);
}

console.log('4) End of script.');
