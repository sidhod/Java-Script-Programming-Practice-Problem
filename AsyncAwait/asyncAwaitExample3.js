// Example of Async Await
//add fuction
function checkLogin(userName, password) {
    if (userName == "Sid" && password == "pass@123") {
        console.log("Welcome Sid");
        console.log("Login Successful");
    }

}
// timeout for 3 sec
function login(userName, password) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(checkLogin(userName, password));
        }, 3000);
    });
}

//async fuction
async function asyncCall() {
    const prompt = require('prompt-sync')();
    let userName = prompt("Enter Your User Name: ");
    let password = prompt("Enter Your Password: ");
    console.log("Wait....");
    await login(userName, password);

}
//Call Function
asyncCall();