//prime numbers in given range

const prompt = require('prompt-sync')();
let n1 = prompt("Enter Number1: ");
let n2 = prompt("Enter Number2: ");
for (let i = n1; i < n2; i++) {
    let flag = 0;
    for (let j = 2; j <= i / 2; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        console.log(i);
    }
}