"use strict";
function combine(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
function logResult(num) {
    console.log("The value");
    return undefined;
}
const combinedAges = combine("30", 26);
console.log("combined value is ", combinedAges);
