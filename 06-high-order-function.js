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
        data.pets.push({name: 'Pollo', type: 'Dog'});
        console.log('4) highOrder setTimeout after push!', data);
        callbackFunction(data);
    }, 3000);

    console.log('5) highOrderFunction AFTER setTimeout.', data);

    return data;
};

console.log('6) Before RUNNING highOrderFunction...');
const highOrderData = highOrderFunction((data) => {
    console.log('7) Running callback!', data);
});
console.log('8) After RUNNING highOrderFunction.', highOrderData);

console.log('9) End of script.');
