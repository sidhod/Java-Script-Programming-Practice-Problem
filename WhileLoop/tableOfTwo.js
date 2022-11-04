// //Write a program that takes a command-line argument n and prints a
// table of the powers of 2 that are less than or equal to 2^n till 256 is
// reached..
const prompt = require('prompt-sync')();
let num = prompt("Enter Number: ");
let i = 0;
while (i <= num) {
    val = 2 ** i;
    console.log("2^" + i + "=" + val);
    if (val == 256) {
        break
    }

    i++;
}