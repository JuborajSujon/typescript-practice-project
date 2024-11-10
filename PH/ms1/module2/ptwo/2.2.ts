{
  // interface

  type User1 = {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };


  const user1: User1 = {
    name: "Sujon",
    age: 34
  }

  const user3: UserWithRole1 = {
    name: "Sujon",
    age: 34,
    role: "Manager"
  }


  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user2: User2 = {
    name: "Sujon",
    age: 34
  }

  const user4: UserWithRole2 = {
    name: "Sujon",
    age: 34,
    role: "Manager"
  }

  interface UserWithRole3 extends User1 {
    role: string;
  }

  const user5: UserWithRole3 = {
    name: "Sujon",
    age: 34,
    role: "manager"
  }

  // js --> object, array --> object and function --> object

  type Roll1 = number[];

  // index signature 
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber1: Roll2 = [1, 2, 3];

  // type alias in function
  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

  // interface in function 
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add2: Add2 = (num1, num2) => num1 + num2;


  

  // 
}