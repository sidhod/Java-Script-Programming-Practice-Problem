//Check given number is prime or not
const prompt = require('prompt-sync')();
let num = prompt("Enter Number: ");
let flag = false;
for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
        flag = true;
        break;
    }
}
if (flag == false) {
    console.log(num + " is prime number");
}
else {
    console.log(num + " is not prime number");
}