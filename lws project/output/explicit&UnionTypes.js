"use strict";
/**
 * Variable
 * 1. Explicitly define type at declare time
 * 2. Union type give us facality various type data can store or assign the variable
 *
 */
// explicitly define type
let a;
//union type
let b;
/**
 * Array
 * 1. Explicitly define type at declare time `let a : string [] = []` now you can't push except `string`
 * 2. Union type give us facality various type data can store or assign the array , this example you can store `string` and `number` type data in array
 *
 */
// explicitly define type
let c = [];
//union type
let d = [];
/**
 * Object
 * 1. Explicitly define type at declare time `let a : object , then you can define object property (blueprint) as you wish.
 * 2. explicitly define type but you can also use as array because array is also object in javascript
 * 3. Specified Object define with custom blueprint or like schema , this type object you can not change property value with other type or you can not add new property
 */
// explicitly define type
let e;
e = {
    name: "Jhon",
    age: 32,
};
// explicitly define type as array
let f;
f = [1, 2, 3];
// specified object
let g;
g = {
    name: "Jhon",
    age: 32,
    adult: true,
};
