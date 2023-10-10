console.log('1) Beginning of script.');

let count = 10;

const myInterval = setInterval(() => {
    count--;
    console.log('2)', 1000, 'ms interval; count = ', count);

    if(count === 0) {
        clearInterval(myInterval);
    }
}, 1000);
// console.log(myInterval);

console.log('3) End of script.');
