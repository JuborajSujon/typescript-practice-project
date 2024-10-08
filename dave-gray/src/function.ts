// type aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Vocalist = {
  name: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// Literal types
let myNameLiteral: "Jhon";

let userNameLiteral: "Jhon" | "Jane";
userNameLiteral = "Jhon";

// function

const add = (a: number, b: number): number => {
  return a + b;
};
add(1, 2);

const sub = (a: number, b: number): number => {
  return a - b;
};

type mathFunction = (a: number, b: number) => number;

// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = (a, b) => {
  return a * b;
};

const logMsg = (msg: any): void => {
  console.log(msg);
};

logMsg("Hello");
logMsg(multiply(2, 3).toString());

// optional parameter
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

const sumAll = (a: number, b: number, c: number = 0): number => {
  return a + b + c;
};

logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));
logMsg(sumAll(1, 2, 3));
logMsg(sumAll(1, 2));

// Rest parameter
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr, 0);
};

logMsg(total(1, 2, 3, 4, 5));

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};
