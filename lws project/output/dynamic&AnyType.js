"use strict";
/**
 * Variable
 * 1. There is many situation comes, where we don't know what type data comes from server , our business logic can change data type , it is complex data type
 */
let h;
h = "John";
h = 32;
/**
 * Array
 * 1. As same type of variable Array also define any type of array , so you can define string type array, number type array or as you wish
 */
let i = [];
i.push("Jhon");
i.push(32);
console.log(i); //['Jhon', 32]
/**
 * Object
 * 1. Object also define any type of property value , so you can define those property as string type, number type or as you wish
 */
let j;
j = {
    name: "Jhon",
    age: 32,
};
