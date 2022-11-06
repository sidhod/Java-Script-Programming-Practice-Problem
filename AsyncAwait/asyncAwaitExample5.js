// Example of Async Await
const employeeData = [];
function insert(name, message, age) {

    employeeData.push(name);
    employeeData.push(message);
    employeeData.push(age);
}

function insertInArray(name, mobileNumber, age) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve((insert(name, mobileNumber, age)));
        }, 3000);
    });
}

//async fuction
async function asyncCall() {
    console.log("Welcome");
    const prompt = require('prompt-sync')();
    let name = prompt("Enter employee name: ");
    let mobileNumber = prompt("Enter employee Mobile Number: ");
    let age = prompt("Enter employee Age: ");
    console.log("--Data is Added To database--");
    console.log("wait...")
    await insertInArray(name, mobileNumber, age);
    console.log("--Data Inserted--");
    console.log(employeeData);
}
//Call Function
asyncCall();