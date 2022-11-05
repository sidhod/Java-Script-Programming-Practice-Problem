// Callback Function Example
function checkUserName(userName, password, checkPassword) {
    if (userName == "Sidhodhan") {
        console.log("Correct User name");
        // callback function
        checkPassword(password);
    } else {
        console.log("Invalid User name")
    }

}

// callback function
function checkPassword(password) {
    if (password == "Pass@123") {
        console.log("Correct Password");
        console.log("Login successful");
    }
}

// calling the function after 2 seconds
//Pass username password and callbackfunction
setTimeout(checkUserName, 2000, "Sidhodhan", "Pass@123", checkPassword);