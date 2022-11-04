//Write a function to check if the two numbers are Palindromes
const prompt = require('prompt-sync')();
let Number1 = prompt("Enter Number: ");
palindrome(Number1);

function palindrome(no) {
    let a, temp = 0;
    let b = no;
    while (no > 0) {
        a = no % 10;
        no = parseInt(no / 10);
        temp = temp * 10 + a;

    }
    console.log(temp, b);
    if (temp == b) {

        console.log("It is a Palindrome Number");
    }
    else {
        console.log("it is not a Palindrome Number");
    }
}