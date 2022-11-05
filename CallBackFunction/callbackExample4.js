// Callback Function Example
const add = function (a, b, callback) {
    console.log("First Show add message: ")
    //callback Fuction
    callback(a, b)
}

function sum(a, b) {
    console.log("addition:", a + b);
}
add(1, 2, sum)