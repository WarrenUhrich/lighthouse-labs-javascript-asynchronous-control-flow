console.log('Beginning of script.');

let intervalCount = 0;

const myInterval = setInterval(() => {
    intervalCount++; // intervalCount = intervalCount + 1; intervalCount += 1;
    console.log(`Interval has run ${intervalCount} time(s).`);
    if (intervalCount >= 3) clearInterval(myInterval);
    // There is also a clearTimeout() function, it just isn't as common.
}, 1000);

console.log('End of script.');
