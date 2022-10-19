var date = prompt("Enter date");
var month = prompt("Enter Month");
if ((31 > date) && (date > 1)) {
    if ((6 > month) && (month > 3)) {
        console.log("True");
    }
    else {
        console.log("False");
    }
}
else {
    console.log("False");
}
