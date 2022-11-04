//Find Magic Number
let low = 0;
let high = 100;
let mid = (low + high) / 2;

let input = 0
console.log("enter 0 if num is less")
console.log("enter 1 if num is greater")
console.log("enter 2 if num is match")
while (low < high && input != 1) {
    const prompt = require('prompt-sync')();
    let input = prompt("is this your no " + mid);
    if (input == 0) {
        high = mid;
        mid = Math.ceil((low + high) / 2);
    }
    else if (input == 1) {
        low = mid;
        mid = (low + high) / 2;
    }
    else if (input == 2) {
        console.log("This is your Magic number" + mid);
        break;
    }
}
