//Table of the powers of 2
const prompt = require('prompt-sync')();
let power = prompt("Enter Power OF 2: ");
console.log("Table OF Power Of 2");
for (let i = 0; i <= power; i++) {
    console.log(Math.pow(2, i));
}