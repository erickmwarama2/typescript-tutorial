"use strict";
function add(n1, n2, printResult) {
    console.log(typeof n1);
    if (typeof n1 == "number" && typeof n2 === "number") {
        console.log("Incorrect input type");
    }
    const result = n1 + n2;
    if (printResult) {
        console.log("the result is ", n1 + n2);
    }
    return result;
}
const number1 = 5.0;
const number2 = 2.88;
const printResult = true;
const newNumber = 5;
console.log("the new number is ", newNumber);
const result = add(number1, number2, printResult);
console.log(result);
console.log("hello world");
console.log("compile");
