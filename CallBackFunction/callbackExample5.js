// Callback Function Example
function printMobileNumber(mobileNumber, otp, checkOtp) {
    console.log("Mobile Number: " + mobileNumber);
    // callback function
    checkOtp(otp);
}

// callback function
function checkOtp(otp) {
    const prompt = require('prompt-sync')();
    let inputOtp = prompt("Enter Otp You Recived: ");
    if (inputOtp == otp) {
        console.log("Sucessful Validation!!!");
    } else {
        console.log("Unsucessful Validation!!!");
        console.log("Otp genrated: " + otp);
        console.log("Otp You enter: " + inputOtp);
    }
}
let mobileNumber = "9309951100";
let otp = Math.floor(Math.random() * 7000) + 1000;
// calling the function after 2 seconds
//Otp Validation pass parameter mobileNumber And random otp
setTimeout(printMobileNumber, 5000, mobileNumber, otp, checkOtp);