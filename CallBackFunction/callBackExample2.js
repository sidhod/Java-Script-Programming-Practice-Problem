// Callback Function Example
function firstname(firstname, lastname, myFunction) {
    console.log("First Name:", firstname);
    // callback function
    myFunction(lastname);
}

// callback function
function lastname(lastname) {
    console.log("Last Name: ", lastname);
}

// calling the function after 2 seconds
setTimeout(firstname, 2000, "Sidhodhan", "Kamble", lastname);