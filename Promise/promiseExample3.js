// Example of Promise No 3
function firstname(firstName) {
    return firstName
}
function error() {
    return "Name is null";
}
let demo = () => {
    return new Promise((resolve, reject) => {
        const prompt = require('prompt-sync')();
        let firstName = prompt("Enter Your Fist Name: ");
        if (firstName == "") {
            reject(error());
        }
        else {
            resolve(firstname(firstName));

        }

    });
}
demo()
    .then((value) => console.log("Hi guys, My name is" + value))
    .catch((error) => console.log("Invalid", error));
