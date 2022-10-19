let firstNumber = Math.floor(Math.random() * 1000) + 100;
let secondNumber = Math.floor(Math.random() * 1000) + 100;
let thirdNumber = Math.floor(Math.random() * 1000) + 100;
let fourthNumber = Math.floor(Math.random() * 1000) + 100;
let fifthNumber = Math.floor(Math.random() * 1000) + 100;
console.log("Five Three Digit Number:" + firstNumber + " " + secondNumber + " " + thirdNumber + " " + fourthNumber + " " + fifthNumber);
if ((firstNumber > secondNumber) && (firstNumber > thirdNumber) && (firstNumber > fourthNumber) && (firstNumber > fifthNumber)) {
    console.log("Maximum value is:" + firstNumber);
}
else if ((secondNumber > firstNumber) && (secondNumber > thirdNumber) && (secondNumber > fourthNumber) && (secondNumber > fifthNumber)) {
    console.log("Maximum value is:" + secondNumber);
}
else if ((thirdNumber > secondNumber) && (thirdNumber > firstNumber) && (thirdNumber > fourthNumber) && (thirdNumber > fifthNumber)) {
    console.log("Maximum value is:" + thirdNumber);
}
else if ((fourthNumber > secondNumber) && (fourthNumber > thirdNumber) && (fourthNumber > firstNumber) && (fourthNumber > fifthNumber)) {
    console.log("Maximum value is:" + fourthNumber);
}
else if ((fifthNumber > secondNumber) && (fifthNumber > thirdNumber) && (fifthNumber > fourthNumber) && (fifthNumber > firstNumber)) {
    console.log("Maximum value is:" + fifthNumber);
}
else {
    console.log("Not Found");
}

if ((firstNumber < secondNumber) && (firstNumber < thirdNumber) && (firstNumber < fourthNumber) && (firstNumber < fifthNumber)) {
    console.log("Minimum  value is:" + firstNumber);
}
else if ((secondNumber < firstNumber) && (secondNumber < thirdNumber) && (secondNumber < fourthNumber) && (secondNumber < fifthNumber)) {
    console.log("Minimum value is:" + secondNumber);
}
else if ((thirdNumber < secondNumber) && (thirdNumber < firstNumber) && (thirdNumber < fourthNumber) && (thirdNumber < fifthNumber)) {
    console.log("Minimum  value is:" + thirdNumber);
}
else if ((fourthNumber < secondNumber) && (fourthNumber < thirdNumber) && (fourthNumber < firstNumber) && (fourthNumber < fifthNumber)) {
    console.log("Minimum  value is:" + fourthNumber);
}
else if ((fifthNumber < secondNumber) && (fifthNumber < thirdNumber) && (fifthNumber < fourthNumber) && (fifthNumber < firstNumber)) {
    console.log("Minimum  value is:" + fifthNumber);
}
else {
    console.log("Not Found");
}
