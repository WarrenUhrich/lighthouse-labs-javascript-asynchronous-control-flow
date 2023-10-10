console.log('1) Beginning of script.');

setTimeout(() => { // When setTimeout registers, it keeps track of current time.
    console.log('2) Middle of script.');
}, 3000);

for(let i = 0; i < 10_000; i++) {
    console.log('3) i =', i);
}

console.log('4) End of script.');
