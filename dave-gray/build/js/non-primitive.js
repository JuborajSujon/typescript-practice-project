"use strict";
let stringArr = ["John", "Jane", "Jack", "Jill"];
let guitars = ["Strat", "Les Paul", 5150];
let mixed = ["John", 5, true];
stringArr[0] = "Tom";
stringArr.push("Tom");
guitars[0] = 1984;
guitars.unshift("Strat");
let test = [];
test.push(5);
let bands = [];
bands.push("Van Halen");
// Tuple
let myTuple = ["Dave", 32, true];
myTuple[1] = 42;
// Object
let myObj;
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
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    name: "John",
    active: true,
    albums: [1984, 5150, "OU812"],
};
// evh = jp;
console.log(evh);
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitarist(jp));
// Enums
// Unlike most typescript features, enums are not a type-level addition to javascript but something added to the language and runtime.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.D);
