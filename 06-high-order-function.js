console.log('1) Start of script.');

const highOrderFunction = (callbackFunction) => {
    const data = {
        pets: [
            {name: 'Leo', type: 'Gecko'},
            {name: 'Vinny', type: 'Dog'}
        ]
    };
    
    console.log('2) highOrderFunction running, data:', data);

    setTimeout(() => {
        console.log('3) highOrder setTimeout started!');
        callbackFunction();
    }, 3000);

    console.log('4) highOrderFunction AFTER setTimeout.');
};

console.log('5) Before RUNNING highOrderFunction...');
highOrderFunction(() => {
    console.log('6) Running callback!');
});
console.log('7) After RUNNING highOrderFunction.');

console.log('8) End of script.');
