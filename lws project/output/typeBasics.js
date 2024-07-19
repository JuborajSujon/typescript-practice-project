"use strict";
console.log("Learn Type Basics");
/**Example 1: When a variable declare and assign value
 * 1. You cann't re-assign , if you try you get error at compile time, causes at assign time typeScript check, what type variable assign ? and he remember for later.
 *
 */
let studentName = "John";
console.log(studentName);
// studentName = 34;  // Type 'number' is not assignable to type 'string'
studentName = "Jane"; // Not get error
console.log(studentName);
/**Example 2: When a variable declare only
 * 1. You can re-assign any time, causes at declare time variable value is `undefine`
 *
 */
let studentClass;
studentClass = "Nine";
studentClass = 9;
console.log(studentClass);
/**Example 3: When a fuction declare with static parameter without type
 * 1. Parameter implicitly set `any` type
 * 2. You can pass any type value inside the function
 *
 *
 * 3. second function parameter define with type so you can not pass different type variable
 * 4. if you try pass differnt type variable you will get error
 *
 */
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 4)); // 6
console.log(sum("two", 4)); //two4
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 4)); // 8
// console.log(multiply("two", 4));  // Argument of type 'string' is not assignable to parameter of type 'number'.
