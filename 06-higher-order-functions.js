// Higher order functions do at least one of:
// 1) A function that accepts another as an argument.
// 2) Returns a function that can be run.

const higherOrderFunction = function(callbackFunction) {
    const animalsArr = ['giraffe', 'ostrich'];

    console.log('1) higherOrderFunction begins! before setTimout:',  animalsArr); // NO MONKEY!
    setTimeout(function() {
        console.log('2) setTimeout callback begins!');
        callbackFunction(animalsArr);
        console.log('3) setTimeout callback ends! after callbackFunction:', animalsArr); // MONKEY IS HERE!
    }, 3000);
    console.log('4) higherOrderFunction ends. after setTimout:',  animalsArr); // NO MONKEY!
};

console.log('5) before running higherOrderFunction!');

higherOrderFunction(function(animals) {
    animals.push('monkey');
    console.log('6) hello from our custom callback! animals:', animals); // MONKEY IS HERE!
});

console.log('7) after running higherOrderFunction!');

// 5) before running higherOrderFunction!
// 1) higherOrderFunction begins!
// 4) higherOrderFunction ends.
// 7) after running higherOrderFunction!
// 2) setTimeout callback begins!
// 6) hello from our custom callback!
// 3) setTimeout callback begins!