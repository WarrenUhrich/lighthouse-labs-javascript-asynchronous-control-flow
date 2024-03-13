console.log('1) Start of script.');

setTimeout(function() {
    console.log('2) Middle of script (hello from inside of our setTimeout callback!)');
}, 1);

for(let i = 0; i < 10_000; i++) { // Will the 2) show partway thru the for?
    console.log('3) i = ', i);
}

console.log('4) End of script.');
