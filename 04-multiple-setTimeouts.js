console.log('1) Beginning of script.');

setTimeout(() => {
    console.log('2) 50ms passed.');

    setTimeout(() => {
        console.log('3) 100ms (nested in 50ms.)');
    }, 100);
}, 50);

setTimeout(() => {
    console.log('4) 3000ms passed.');
}, 3000);

setTimeout(() => {
    console.log('5) 500ms passed.');
}, 500);

console.log('6) End of script.');
