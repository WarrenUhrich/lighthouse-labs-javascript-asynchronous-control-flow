console.log('1) Start of script.');

setTimeout(function() {
    console.log('2) 50ms setTimeout.');
}, 50);

setTimeout(function() {
    console.log('3) 3000ms setTimeout.');
}, 3000);

setTimeout(function() {
    console.log('4) 1000ms setTimeout.');
}, 1000);

setTimeout(function() {
    console.log('5) 500ms setTimeout.');
}, 500);

console.log('6) End of script.');

// 1, 6, 2, 5, 4, 3