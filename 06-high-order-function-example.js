console.log('1) Beginning of script.');

const highOrderFunction = (callbackFunction) => {
    const data = {
        foods: ['Cereal', 'Cake', 'Pizza', 'Ramen']
    };

    console.log('2) Before highOrderFunction setTimeout.', data);

    setTimeout(() => {
        data.foods.push('Sushi');
        console.log('3) Inside highOrderFunction setTimeout.', data);
        callbackFunction(data);
    }, 3000);

    console.log('4) After highOrderFunction setTimeout.', data);
};

console.log('5) Before highOrderFunction executes.');
highOrderFunction((data) => {
    console.log('6) Inside callback function. Updated data is:', data);
});
console.log('7) Before highOrderFunction executes.');

console.log('8) End of script.');
