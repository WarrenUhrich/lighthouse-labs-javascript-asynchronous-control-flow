console.log('1) Start of script.');

const callback = function() {
    console.log('2) Hello from our callback!');
};

const timeInMs = 3000; // 3000ms = 1s

// Accepts 2 arguments:
// 1) Callback function.
// 2) An amount of time in ms.
setTimeout(callback, timeInMs); // How does an async feature behave?

console.log('3) End of script.');
