console.log('1) Beginning of script.');

const callback = () => {
    console.log('2) Middle of script.');
};
const timeout = 2000;

// First argument: A function (code to run after a set time.)
// Second argument: Time to wait (in milliseconds.)
setTimeout(callback, timeout);

console.log('3) End of script.');
