"use strict";
// Literal types
let myNameLiteral;
let userNameLiteral;
userNameLiteral = "Jhon";
// function
const add = (a, b) => {
    return a + b;
};
add(1, 2);
const sub = (a, b) => {
    return a - b;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = (a, b) => {
    return a * b;
};
const logMsg = (msg) => {
    console.log(msg);
};
logMsg("Hello");
logMsg(multiply(2, 3).toString());
// optional parameter
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 0) => {
    return a + b + c;
};
logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));
logMsg(sumAll(1, 2, 3));
logMsg(sumAll(1, 2));
// Rest parameter
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr, 0);
};
logMsg(total(1, 2, 3, 4, 5));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
