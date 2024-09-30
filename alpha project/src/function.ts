//Function Declare

//example 1
function greet(name: string): string {
  return `Hello , ${name}`;
}

//example 2
let myFunc: Function;
myFunc = () => {
  console.log("Hello");
};

//Function Parameter

myFunc = (a: string, b: string) => {
  console.log(`Hello ${a} ${b}`);
};

// Optional Parameters
function optionalName(param1: string, param2: string) {
  return `Hello ${param1} ${param2}`;
}

//example 1
const optionalExpress = (a: string, b: string, c?: string) => {
  console.log(c); //undefine
  console.log(`Hello ${a} ${b}`);
};

//example 2
function optionalGreet(name: string, age?: number): string {
  if (age) {
    return `Hello, ${name}. You are ${age} years old.`;
  } else {
    return `Hello, ${name}.`;
  }
}

//Default Parameter Values
function defaultName(param1: string, param2: string = "true") {
  console.log(param2); //true
  console.log(`Hello ${param1} ${param2}`);
}

//example 1
const defaultExpress = (a: string, b: string, c: string = "true") => {
  console.log(c); //true
  console.log(`Hello ${a} ${b}`);
};

// example 2
function defaultGreet(name: string, greeting: string = "Hello, "): string {
  return `${greeting} ${name}.`;
}

//Explicitly `return` type
function divide(a: number, b: number): number {
  return a / b;
}

// Implicitly `return` type
function divide1(a: number, b: number) {
  return a / b;
}

// void return type
function logMessage(message: string): void {
  console.log(message);
}

//Assigning Function to Variable
const myFuncVariable = () => {
  console.log("Hello");
};

let minus: (a: number, b: number) => number;

minus = function (a: number, b: number): number {
  return a - b;
};

//Function as Parameter

function processUserInput(process: (input: string) => string): void {
  process("Hello");
}

processUserInput(function (name) {
  return `Hello, ${name}`;
});

processUserInput((name) => {
  return `Hello, ${name}`;
});

//Arrow Function
const subtract = (a: number, b: number): number => {
  return a - b;
};

// rest parameter
function sum1(...nums: number[]): number {
  return nums.reduce((prev, curr) => prev + curr, 0);
}
