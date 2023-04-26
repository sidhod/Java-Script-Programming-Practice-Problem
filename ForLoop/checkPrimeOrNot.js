//Check given number is prime or not
const prompt = require('prompt-sync')();
let num = prompt("Enter Number: ");
let flag = false;
for (let i = 2; i <= num/2; i++) {
    if(i%num==0){
        flag=true;
        break;
    }
}
if(flag==true)
{
    console.log(num+"is prime number");
}
else{
    console.log(num+"is not prime number");
}