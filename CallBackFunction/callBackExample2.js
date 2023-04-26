// Callback Function Example
function firstname(firstName, lastName, myFunction) {
    console.log("First Name:", firstName);
    // callback function
    lastname(lastName);
}

// callback function
function lastname(lastName) {
    console.log("Last Name: ", lastName);
}

// calling the function after 2 seconds
setTimeout(firstname, 2000, "Sidhodhan", "Kamble", lastname);