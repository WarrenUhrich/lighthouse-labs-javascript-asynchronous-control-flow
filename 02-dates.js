console.log('1) Beginning of script.');

// C-Style loops require which 3 pieces?
// 1) Variable / Assignment
// 2) Condition for Termination (when to stop)
// 3) What to do per-iteration
for(let i = 0; i < 5000; i++) {
    const date = new Date();
    console.log('2)', date);
}

// Loops are synchronous.
// Step 3) only runs once the above loop is done.

console.log('3) End of script.');
