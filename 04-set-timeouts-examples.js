console.log('Beginning of script.');

setTimeout(() => {
    console.log('3000ms timeout 1 has run!');
}, 3000);

setTimeout(() => {
    console.log('3000ms timeout 2 has run!');
}, 3000);

setTimeout(() => {
    console.log('3000ms timeout 3 has run!');

    // Nested timeout! When will this run?
    setTimeout(() => {
        console.log('1000ms timeout INSIDE of 3000ms timeout; nested!');
    }, 1000);
}, 3000);

setTimeout(() => {
    console.log('50ms timeout has run!');
}, 50);

setTimeout(() => {
    console.log('1500ms timeout has run!');
}, 1500);

setTimeout(() => {
    console.log('1000ms timeout has run!');
}, 1000);

console.log('End of script.');
