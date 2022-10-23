/*Unit Conversion of
different Length units
1. Feet to Inch 3. Inch to Feet
2. Feet to Meter 4. Meter to Feet
*/
const prompt = require('prompt-sync')();

console.log("Select choice 1.Feet to Inch 2.Feet to Meter 3.Inch to Feet 4.Meter to Feet");
let num = prompt();
if (num == 1) {
    let Feet = prompt("Enter In Feet");
    let Inch = Feet * 12;
    console.log(Feet + " Feet To Inch " + Inch);

}
else if (num == 2) {
    let Feet = prompt("Enter In Feet");
    let meter = Feet * 0.3048;
    console.log(Feet + " Feet To Meter " + meter);
}
else if (num == 3) {
    let Inch = prompt("Enter In Inch");
    let Feet = Inch / 12;
    console.log(Inch + " Inch To Feet " + Feet);
}
else if (num == 4) {
    let meter = prompt("Enter In Meter");
    let Feet = meter / 0.3048;
    console.log(meter + " Meter To Feet " + Feet);
}
else {
    console.log("Not Found");
}
