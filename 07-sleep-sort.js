console.log('Beginning of script.');

const delays = [5000, 1000, 6000, 98, 1500, 1, 3002, 3000, 3001, 1900, 1200];

for(let delay of delays) {
    setTimeout(() => {
        console.log('Timeout ran with delay:', delay);
    }, delay);
}

console.log('End of script.');
