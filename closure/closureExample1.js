// JavaScript variables can belong to the local or global scope.

// Global variables can be made local (private) with closures.
// The variable add is assigned to the return value of a self-invoking function.

// The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

// This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

// This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

// A self-invoking expression is invoked (started) automatically, without being called.


// // Initiate counter
// let counter = 0;

// // Function to increment counter
// function add() {
//     counter += 1;
//     return counter;

// }

// // Call add() 3 times
// add();
// add();
// console.log(add());
// // The counter should now be 3


// function add() {
//     let counter = 0;
//     function plus() { counter += 1; }
//     plus();
//     return counter;
// }
// console.log(add());



const add = (function () {
    let counter = 0;
    return () => { counter += 1; return counter }
})();

add();
add();
console.log(add());
