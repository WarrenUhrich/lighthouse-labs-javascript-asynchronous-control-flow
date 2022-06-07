console.log('1) Beginning of script.');

setTimeout(() => {
    console.log('2) 50ms timeout ran!');
}, 50);

// First argument: A function (code you want to run after set time.)
// Second argument: Time to wait (milliseconds.)
setTimeout(() => {
    console.log('3)', 3000, 'ms timeout ran!');
}, '3000');

setTimeout(() => {
    console.log('4) 3000ms timeout ran!');
}, 3000);

setTimeout(() => {
    console.log('5) 500ms timeout ran!');
}, 500);

setTimeout(() => {
    console.log('6) 1ms timeout ran!');
}, 1);

setTimeout(() => {
    console.log('7) 1000ms timeout ran!');
}, 1000);

setTimeout(() => {
    console.log('8) 2000ms timeout ran!');
}, 2000);

console.log('9) End of script.');
