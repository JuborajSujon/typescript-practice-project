let playerName = "Mashrafi";

console.log(playerName);

// function
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 4));

function multiply(a: number, b: number) {
  return a * b;
}

// array
let fruits = ["apple", "banana", "orange"]; //implicitly set string type

let studentInfo = ["sakib", 13, true]; // implicitly set mixed type

let anyType = []; // implicitly set any type

// object
let person = {
  name: "sakib",
  age: 13,
  isCaptain: true,
};
