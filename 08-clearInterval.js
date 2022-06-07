console.log('1) Beginning of script.');

let counter = 0;

// First argument: A function (code you want to run after set recurring time.)
// Second argument: Time to wait (recurring) / (in milliseconds.)
const myInterval = setInterval(() => {
    counter++;
    console.log('2)', 1000, 'ms interval ran!');
    if (counter > 3) {
        clearInterval(myInterval); // There is also a clearTimeout, if you need it!
    }
}, 1000);

console.log('3) End of script.');
