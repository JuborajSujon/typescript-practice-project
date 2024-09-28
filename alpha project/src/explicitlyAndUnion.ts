/**
 * String
 * 1. Explicitly define type at declare time
 */

let username: string = "John";
username = "Jane";

/**
 * 2. Union type give us facality various type data can store or assign the variable
 */

let userNameOrId: string | number;

userNameOrId = "John";
userNameOrId = 32;

/**
 * Number
 * 1. Explicitly define type at declare time
 */

let age: number = 32;
age = 34;

/**
 * 2. Union type give us facality various type data can store or assign the variable
 */

let ageOrScore: number | string;

ageOrScore = 32;
ageOrScore = "Thirty two";

/**
 * Boolean
 * 1. Explicitly define type at declare time
 */

let isAdmin: boolean = true;

/**
 * 2. Union type give us facality various type data can store or assign the variable
 */

let isAdminOrStatus: boolean | string;
isAdminOrStatus = true;
isAdminOrStatus = "active";

/**
 * Tuple
 * 1. Explicitly define type at declare time
 */

let user: [string, number, boolean] = ["John", 32, true];

/**
 * 2. Union type give us facality various type data can store or assign the variable
 */

let userOrAdmin: [string, number, boolean] | string;
userOrAdmin = ["John", 32, true];
userOrAdmin = "active";

/**
 * Enum
 * 1. Explicitly define type at declare time
 */

enum Role {
  Admin,
  User,
  Guest,
}
let userRole: Role = Role.Admin; // Explicitly using the Admin enum

/**
 * 2. Union type give us facality various type data can store or assign the variable
 */

enum Status {
  Active,
  Inactive,
}

let userStatus: Status | string;

userStatus = Status.Active;
userStatus = "Pending";

/**
 * Array
 * 1. Explicitly define type at declare time
 */

let scores: number[] = [85, 90, 92];

let a: string[] = [];

a.push("John", "32", "true");

/**
 * 2. Union type give us facality various type data can store or assign the array , this example you can store `string` and `number` type data in array
 */

let b: (string | number | boolean)[] = [];

b.push("John", 32, true);

//example 2
let scoresOrComments: number[] | string[];
scoresOrComments = [85, 90, 92];
scoresOrComments = ["Good", "Bad"];

/**
 * Object
 * 1. Explicitly define type at declare time
 */

let c: object;
c = { name: "John", age: 32 };

// explicitly define type but you can also use as array because array is also object in javascript

//array

let d: object;

d = [{ name: "John", age: 32 }, "Hello", true];

let e: {
  name: string;
  age: number;
  isAdult: boolean;
};

e = { name: "John", age: 32, isAdult: true };

//example 2

let users: {
  name: string;
  age: number;
  isAdult: boolean;
} = {
  name: "John",
  age: 32,
  isAdult: true,
};

/**
 * 2. Union type give us facality various type data can store or assign the variable
 */

let userOrGuest: { name: string; age: number; isAdmin: boolean } | string;
userOrGuest = { name: "Alice", age: 30, isAdmin: true };
userOrGuest = "Guest User";
