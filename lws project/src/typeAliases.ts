/**
 * Example -1
 *
 */
const userDetais = (
  id: string | number,
  user: { name: string; age: number }
) => {
  console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};

userDetais("1", { name: "John", age: 30 });

type stringOrNumber = string | number;
type userType = { name: string; age: number };
const userDetais2 = (id: stringOrNumber, user: userType) => {
  console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};

userDetais2("1", { name: "John", age: 30 });

/**
 * Example -2
 *
 */

const sayHello = (user: { name: string; age: number }) => {
  console.log(`Hello ${user.age > 30 ? "Miss. " : "Ms. "} ${user.name}`);
};

sayHello({ name: "Jane", age: 30 });

const sayHello2 = (user: userType) => {
  console.log(`Hello ${user.age > 30 ? "Miss. " : "Ms. "} ${user.name}`);
};

sayHello({ name: "Jane", age: 30 });
