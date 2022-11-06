// Example of Promise
function display(username) {
    return "Welcome " + username;
}
function error() {
    return "Login Fails";
}
let demo = () => {
    return new Promise((resolve, reject) => {
        const prompt = require('prompt-sync')();
        let userName = prompt("Enter Your User Name: ");
        let password = prompt("Enter Your Password: ");
        if (userName == "Sidhodhan" && password == "pass123") {
            resolve(display(userName));
        }
        else {
            reject(error())
        }

    });
}
demo()
    .then((result) => {
        console.log(result);
        console.log("Login Successfully");
    })
    .catch((error) => console.log("Invalid", error));
