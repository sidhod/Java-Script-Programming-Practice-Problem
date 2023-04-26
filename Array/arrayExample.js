
var array
// let names = ["Sai", "Sidhodhan", "Shubham", "Aniket"];
// //length of array
// console.log(names.length);

// //print data and index
// names.forEach((value, index) => {
//     console.log(value, index);
// });

// //push use to add  data at the end
// names.push("sakshi");
// console.log(names);

// //pop remove last element in array
// names.pop();
// console.log(names);

// //join method
// console.log(names.join(","));

// //tostring method
// console.log(names.toString());

// //shift method:remove From front
// names.shift();
// console.log(names);

// //unshift method:add from start
// names.unshift("sudha");
// console.log(names);
// //The concat() method creates a new array by merging (concatenating) existing arrays:
// let names1 = ["abc"];
// const newArray = names.concat(names1);
// console.log(newArray);

// //The splice() method adds new items to an array.
// names.splice(0, 1, "xyz");
// console.log(names);

// //The slice() method slices out a piece of an array into a new array.
// console.log(names.slice(0, 1));
// console.log("Slice array: " + names);

// //sort() sort array
// names.sort();
// console.log("Sort array: " + names);

// //reverse() reverse array
// names.reverse();
// console.log("Reverse array: " + names);




// //Example2
let numbers = [1, 2, 3, 4, 6, 7, 8, 9];
//length of array
console.log(numbers.length);

//print data and index
numbers.forEach((value, index) => {
    console.log(value, index);
});

//push use to add  data at the end
numbers.push(5);
console.log(numbers);

//pop remove last element in array
numbers.pop();
console.log(numbers);

//join method
console.log(numbers.join(","));

//tostring method
console.log(numbers.toString());

//shift method:remove From end
numbers.shift();
console.log(numbers);

//unshift method:add from start
numbers.unshift(12);
console.log(numbers);

//The concat() method creates a new array by merging (concatenating) existing arrays:
let numbers1 = [45];
const newArray = numbers.concat(numbers1);
console.log(newArray);

//The splice() method adds new items to an array.
numbers.splice(3, 0, 14);
console.log("splice: " + numbers);

//The slice() method slices out a piece of an array into a new array.
console.log(numbers.slice(0, 1));
console.log("Slice array: " + numbers);

//sort() sort array
numbers.sort();
console.log("Sort array: " + numbers);

//reverse() reverse array
numbers.reverse();
console.log("Reverse array: " + numbers);

var Es6_Feature;
//Es6 Feature
// //1.Default function parameters
// function add(a, b = 2) {
//     return a + b;
// }
// console.log(add(3));

// //2.template literals
// let firtName = "Sidhodhan";
// let lastName = "kamble";
// console.log(`My name is ${firtName} ${lastName}`);

// //3.Multi Line String
// let multiLineString = `Hi Guys My Name Is Sidhodhan Kamble
// I am 22 Year old.
// I am From Pune`;
// console.log(multiLineString);

// //4.Spread Operator
// let num1 = [1, 2, 3, 4, 5];
// let num2 = [6, 7, 8, 9, 10];
// let num3 = [...num1, ...num2];
// console.log(num3);

// //For object
// let obj1 = {
//     Name: "Sid",
//     Age: 22,
// }
// let obj2 = {
//     Name: "Sid",
//     Age: 23,
// }
// let obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// //5.Destructuring assignment
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let [a, b, c, ...rest] = numbers;
// console.log(a, b, c, ...rest);

// //6. Arrow function
// const add=(a, b)=>{
//     return "addition", a + b;
// }
// console.log(add(5, 10));

// //8. let, const to replace var
// console.log(a); // undefined
// var a = 10;
// console.log(a); // Cannot access 'a' before initialization
// let a = 10;

//9.promise 
// function firstname(firstName) {
//     return firstName
// }
// function error() {
//     return "Name is null";
// }
// let demo = () => {
//     return new Promise((resolve, reject) => {
//         const prompt = require('prompt-sync')();
//         let firstName = prompt("Enter Your Fist Name: ");
//         if (firstName == "") {
//             reject(error());
//         }
//         else {
//             resolve(firstname(firstName));

//         }

//     });
// }
// demo()
//     .then((value) => console.log("Hi guys, My name is" + value))
//     .catch((error) => console.log("Invalid", error));




var ES7;
// //Include() method
// let str = "Hi Guys!"
// console.log(str.includes("Hi"));


// //Index Operator(exponetial operator in math)
// console.log(3 ** 5);//normal
// console.log(Math.pow(3, 5));//using math.pow()

// //print all keys and values
// let obj1 = {
//     firstName: "Sidhodhan",
//     lastName: "Kamble",
//     Age: 22,

// }
// console.log("keys: " + Object.keys(obj1));
// console.log("Values: " + Object.values(obj1));
// console.log(`value-${obj1.firstName}`);

var ES9
//1.await in loop:ES9 adds asynchronous iterators, allowing await to be 
// used with for-loops to perform asynchronous operations step by step.
// 

// // 2. promise.finally()
// const demo = () => {
//     return new Promise((resolve, reject) => {
//         let flag = true;
//         if (flag == true) {
//             resolve("validate")
//         } else {
//             reject("Invalidate");
//         }
//     });
// }
// demo()
//     .then((value) => console.log("after resolve-->", value))
//     .catch((error) => console.log("after reject-->", error))
//     .finally(() => { console.log("Must show") });

// //3.Rest, Spread: the Rest indefinite length parameters… can be converted into an array and passed in.
// function restParams(a, b, ...c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// restParams(1, 2, 3, 4, 5);

// //4.RegExp:itcan return matching packets
// const regExpDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
// const match = regExpDate.exec('2020-06-25');
// const year = match[1]; // 2020
// const month = match[2]; // 06
// const day = match[3]; // 25
// console.log(match[0]);
//5.
let add = (a, b) => {
    return a + b;
}
function project() {
    return new Promise((resolve, reject) => {
        resolve(add(5, 10))
    }
    );
}
project()
    .then((output) => console.log(output));