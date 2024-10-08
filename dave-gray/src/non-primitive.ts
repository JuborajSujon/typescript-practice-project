let stringArr = ["John", "Jane", "Jack", "Jill"];

let guitars = ["Strat", "Les Paul", 5150];

let mixed = ["John", 5, true];

stringArr[0] = "Tom";
stringArr.push("Tom");
guitars[0] = 1984;
guitars.unshift("Strat");

let test = [];
test.push(5);

let bands: string[] = [];
bands.push("Van Halen");

// Tuple
let myTuple: [string, number, boolean] = ["Dave", 32, true];

myTuple[1] = 42;

// Object
let myObj: object;
myObj = [];
console.log(typeof myObj);

myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: 32,
  prop3: true,
  prop4: ["John", "Jane"],
};

interface Guitarist {
  name: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
  name: "John",
  active: true,
  albums: [1984, 5150, "OU812"],
};

// evh = jp;

console.log(evh);

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}`;
};

console.log(greetGuitarist(jp));
