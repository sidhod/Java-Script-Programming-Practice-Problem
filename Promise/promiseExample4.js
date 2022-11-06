// Example of Promise
function display(firstName, lastName) {
    console.log("My Name is " + firstName + " " + lastName)

}
function error1() {
    return "First Name is empty";
}
function error2() {
    return "Last Name is empty";
}
let demo = () => {
    return new Promise((resolve, reject) => {
        const prompt = require('prompt-sync')();
        let firstName = prompt("Enter Your Fist Name: ");
        let lastName = prompt("Enter Your Last Name: ");
        if (firstName == "") {
            reject(error1());
        }
        else if (lastName == "") {
            reject(error2());
        } else {
            resolve(display(firstName, lastName));

        }

    });
}
demo()
    .then()
    .catch((error) => console.log("Invalid", error));
