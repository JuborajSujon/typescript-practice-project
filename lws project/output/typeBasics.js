"use strict";
console.log("Learn Type Basics");
/**Example 1: When a variable declare and assign value
 * 1. You cann't re-assign , if you try you get error, causes at assign time typeScript check, what type variable assign ? and he remember for later.
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
/**Example 3: When a fuction declare with static parameter
 * 1. Parameter implicitly
 *
 */
