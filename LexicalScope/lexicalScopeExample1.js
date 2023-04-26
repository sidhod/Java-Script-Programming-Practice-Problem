// Lexical scope is the ability for a function scope 
// to access variables from the parent scope. 
// We call the child function to be lexically bound by that of the parent function.
//  The diagram below outlines the supposed hierarchy that the lexical 
//  scope maintains in JavaScript.
var a = 10; // variable a assigned to 10

var func = function () { // outermost function
    var b = 20;
    console.log("a and b is accessible (outer):", a, b);
    var innerFunc = function () { // innermost function
        var c = 30;
        console.log("a and b and c is accessible (innner):", a, b, c);
    }
    innerFunc();
    return;
}
func(); // invoke function func 
console.log("only a is accessible (global):", a);