type stringOrNumber = number | string;
type User = { name: string; age: number};

function combine(input1: stringOrNumber, input2: stringOrNumber) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    } else {
        return input1.toString() + input2.toString();
    }
}

function logResult(num: number): undefined {
    console.log("The value");
    return undefined;
}

const combinedAges = combine("30", 26);
console.log("combined value is ", combinedAges);