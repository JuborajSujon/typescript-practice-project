"use strict";
/**
 * Example -1
 *
 */
const userDetais = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
userDetais("1", { name: "John", age: 30 });
const userDetais2 = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
userDetais2("1", { name: "John", age: 30 });
/**
 * Example -2
 *
 */
const sayHello = (user) => {
    console.log(`Hello ${user.age > 30 ? "Miss. " : "Ms. "} ${user.name}`);
};
sayHello({ name: "Jane", age: 30 });
const sayHello2 = (user) => {
    console.log(`Hello ${user.age > 30 ? "Miss. " : "Ms. "} ${user.name}`);
};
sayHello({ name: "Jane", age: 30 });
