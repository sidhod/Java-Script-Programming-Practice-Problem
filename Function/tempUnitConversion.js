//Help user find degF or degC based on their Conversion Selection. Use
// Case Statement and ensure that the inputs are within the Freezing Point (
// 0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
console.log("1.DegreeC to DegreeF");
console.log("2.DegreeF to DegreeC");
const prompt = require('prompt-sync')();
let choice = prompt("Enter your choice:");
switch (choice) {
    case '1':
        let degC = prompt("Enter In Degree C:");
        DegreeF(degC);
        break;
    case '2':
        let degF = prompt("Enter In F:");
        DegreeC(degF);
        break;
    default:
        console.log("Enter valid choice");


}
function DegreeF(degC) {
    let degF = (degC * 9 / 5) + 32;
    console.log(degC + " In F " + degF);
}
function DegreeC(degF) {
    let degC = (degF * 9 / 5) + 32;
    console.log(degF + " In C " + degC);
}
