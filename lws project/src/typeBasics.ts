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

function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(2, 4)); // 8
// console.log(multiply("two", 4));  // Argument of type 'string' is not assignable to parameter of type 'number'.

/**Example 4: When a array declare with string type data
 * 1. typeScript implicitly define this array are string type
 * 2. You can not add other type data like number, array, object
 *
 */

const fruits = ["apple", "banana", "orange"];

// fruits.push(34); // get error
// fruits.push({name: "John"})

/**Example 4: When an array declare with mixed type data
 * 1. typeScript implicitly define this array are mixed type
 * 2. if you define mixed type in a array , only those typed are add. if you try to insert different type you will get error
 * 3. if you define with {} object at array assign time , you don't get error
 *
 */

const studentInfo = ["sakib", 13, true];

studentInfo.push(34); //["sakib",13, 34]
// studentInfo.push({class:9}) // get error

// const studentInfo = ["sakib", 13, true, {}];
// studentInfo.push({class:9})

/**Example 5: An array define two way */

// single type data
let animal: string[] = ["Tiger", "lion", "Zibra"];
let birds: Array<string> = ["Egal", "Macpai", "Hamimbird"];
let ids: Array<number>;
ids = [23, 34, 100, 124, 44];

// multi type data

let values1: (string | number)[] = ["Apple", 2, "Orange", 3, 4, "Banana"];
let values2: Array<string | number> = ["Apple", 2, "Orange", 3, 4, "Banana"];

// fixed array element type
let person1: [string, number] = ["Apple", 3];

/**Example 6: When an object declare with mixed type data
 * 1. It work like a schema
 * 2. You can not added property value in different type
 * 3. You can not added new property
 *
 */

const studentDetails = {
  name: "sakib",
  age: 15,
  isCaptain: true,
};

studentDetails.name = "rakib";
// studentDetails.name = 10; // get error

// studentDetails.roll = 10 // get error (new property)
