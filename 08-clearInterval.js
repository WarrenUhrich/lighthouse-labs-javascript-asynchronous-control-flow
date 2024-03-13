console.log('1) Start of script.');

let count = 10;

const myInterval = setInterval(function() {
    count--;
    console.log('2) 1000ms (1s) interval, count:', count);

    if(count === 0) {
        clearInterval(myInterval);
    }
}, 1000);

console.log('3) End of script.');
