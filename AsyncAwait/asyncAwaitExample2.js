// Example of Async Await
//add fuction
function search(firstName) {
    const cars = ["Sid", "Sai", "Sidhodhan"];
    for (let i = 0; i <= 3; i++) {
        if (cars[i] == firstName) {
            console.log(firstName + " Is Found In Record");
            break;
        }
    }
}
// timeout for 3 sec
function searchNameInArray(firstName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(search(firstName));
        }, 1000);
    });
}

//async fuction
async function asyncCall() {
    const prompt = require('prompt-sync')();
    let firstName = prompt("Enter Your Fist Name: ");
    console.log("Searching....");
    await searchNameInArray(firstName);

}
//Call Function
asyncCall();