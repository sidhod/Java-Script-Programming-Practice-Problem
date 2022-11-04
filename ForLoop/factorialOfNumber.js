// program that computes a factorial of a number taken as input.
const prompt = require('prompt-sync')();
let fact = prompt("Enter Number: ");
let product = 1;
for (let k = fact; k >= 1; k--) {
    product = product * k;
}
console.log("Factorial of " + fact + " is " + product);