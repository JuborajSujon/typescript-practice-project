// String

let userName: string = "John";

let dynamicUserName: any = "John";
dynamicUserName = 32;

// Number

let userAge: number = 32;

let dynamicAge: any = 32;
dynamicAge = "John";

// Boolean

let isActive: boolean = true;

let dynamicIsActive: any = true;

// Array

let userNames: string[] = ["John", "Jane"];

let dynamicUserNames: any[] = ["John", "Jane"];

// Object

let personDetails: { name: string; age: number } = {
  name: "John",
  age: 32,
};

let dynamicUser: any = {
  name: "John",
  age: 32,
};

// Function

function sayHello(user: { name: string; age: number }): void {
  console.log(`Hello ${user.age > 30 ? "Miss. " : "Ms. "} ${user.name}`);
}

let dynamicSayHello: (user: any) => void = (user) => {
  console.log(`Hello ${user.age > 30 ? "Miss. " : "Ms. "} ${user.name}`);
};

// Tuple

let userDetails: [string, number] = ["John", 32];

let dynamicUserDetails: any = ["John", 32];

// Enum

enum Status {
  active,
  inactive,
}

let userStatusDynamic: Status = Status.active;

let dynamicUserStatus: any = Status.active;
