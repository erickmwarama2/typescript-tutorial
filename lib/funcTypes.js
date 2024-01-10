"use strict";
let combineValues;
combineValues = function (n1, n2) {
    console.log('The result is ', n1 + n2);
    return n1 + n2;
};
combineValues(9, 8);
function addAndHandle(n1, n2, cb) {
    let val = n1 + n2;
    cb(val);
}
function displayNumber(num) {
    console.log("The displayed number is: ", num);
}
addAndHandle(45, 36, displayNumber);
