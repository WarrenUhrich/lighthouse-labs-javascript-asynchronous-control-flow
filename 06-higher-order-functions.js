// A Higher Order function does 1 (or both) of the following:
// 1) A function that receives a function as an argument/parameter.
// 2) A function that returns a function as its result.

const higherOrderFunction = (callbackFunction) => {
    const data = ['giraffe', 'ostrich'];

    console.log('1) higherOrderFunction Start:', data);

    setTimeout(() => {
        console.log('2) setTimeout Start:', data);
        callbackFunction(data);
        console.log('3) setTimeout End:', data);
    }, 3000);
    
    console.log('4) higherOrderFunction End.', data);
};

console.log('5) Program Start.');

higherOrderFunction((animals) => {
    animals.push('gorilla');
    console.log('6) Callback function running!', animals);
});

console.log('7) Program End.');
