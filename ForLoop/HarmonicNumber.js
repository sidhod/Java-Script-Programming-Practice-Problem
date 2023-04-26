//Table of the powers of 2
var prompt = require('prompt-sync')();
var num = prompt("Enter Number: ");
console.log("Harmonic Number");
var sum = 0;
for (let i = 1; i <= num; i++) {
    console.log("1/" + i + "=");
    sum = sum + 1 / num;
    console.log(sum);
}
