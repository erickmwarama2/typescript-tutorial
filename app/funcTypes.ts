let combineValues: (a: number, b: number) => number;

combineValues = function (n1: number, n2: number) {
    console.log('The result is ', n1 + n2);
    return n1 + n2;
}

combineValues(9, 8);

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    let val = n1 + n2;
    cb(val);
}

function displayNumber(num: number) {
    console.log("The displayed number is: ", num);
}

addAndHandle(45, 36, displayNumber);