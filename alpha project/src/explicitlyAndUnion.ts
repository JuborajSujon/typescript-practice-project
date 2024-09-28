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
