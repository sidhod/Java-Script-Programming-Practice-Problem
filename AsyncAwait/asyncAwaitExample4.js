// Example of Async Await No 4
//otp validation
function genrateOtp() {
    let otpgenrate = Math.floor(Math.random() * 7000) + 1000;
    return otpgenrate;

}
// timeout for 3 sec
function sendOtp() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(genrateOtp());
        }, 3000);
    });
}

function otpvalidation(otp, otpgenrate) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (otp == otpgenrate) {
                resolve(genrateOtp());
            } else {
                console.log("Validation Fails..")
            }

        }, 3000);
    });
}

//async fuction
async function asyncCall() {
    console.log("Wait....Otp is genrated");
    let otpgenrate = await sendOtp();
    console.log("--Otp Send To Your Mobile--");
    const prompt = require('prompt-sync')();
    let otp = prompt("Enter Otp You Got On Mobile: ");
    console.log("Wait For Otp Validation");
    await otpvalidation(otp, otpgenrate);
}
//Call Function
asyncCall();