"use strict";
/**
 * How to use Function
 * 1. Declare a function with `Function` cause `function` is javascript keyword
 */
let myFunc;
myFunc = () => {
    console.log("hello");
};
myFunc();
/**
 * Function Parameter
 * 1. As simple like variable rules work with function parameter
 */
const myFuncParam = (a, b) => {
    console.log(`Hello ${a} ${b}`);
};
myFuncParam("A", "B");
// myFuncParam("A", 4); // get error :: Argument of type 'number' is not assignable to parameter of type 'string'.
/**Optional Parameter */
const myFuncOptionalParam = (a, b, c) => {
    console.log(c); // undefine
    console.log(`Hello ${a} ${b}`);
};
myFuncOptionalParam("A", "B");
/**Parameter with default value */
const myFuncParamDefaultValue = (a, b, c = "true") => {
    console.log(c); //'true'
    console.log(`Hello ${a} ${b}`);
};
myFuncParamDefaultValue("A", "B", "false");
/**Function Return value `void` */
const myFuncReturnVoid = (a, b) => {
    console.log(`Hello ${a} ${b}`);
    console.log("Function return void");
};
const voidValue = myFuncReturnVoid("A", "B");
console.log("Void Value", voidValue);
/**Typescript check parameter and return as well as correct type */
const myFuncReturnValue = (a, b) => {
    return a + b;
};
const implicityReturn = myFuncReturnValue(3, 4);
console.log("Implicity Return type", typeof implicityReturn);
/**You cal also define return type when a function assign  */
const myFuncReturnTypeAssign = (a, b) => {
    console.log(`Hello ${a} ${b}`);
    return "Function return type assign as string";
};
myFuncReturnTypeAssign("A", "B");
