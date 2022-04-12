console.log('Beginning of script.');

setTimeout(() => {
    console.log('Timeout ran!');
}, 1);

for (let i = 0; i < 10000; i++) {
    console.log(`Current iteration: ${i}`);
}

console.log('End of script.');
