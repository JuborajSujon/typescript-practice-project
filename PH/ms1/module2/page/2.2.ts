{
  //primitive data with type alias
  type rollNumber = number;

  // interface 
  type User1 = {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };

  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  interface UserWithRole3 extends User1 {
    role: string;
  }

  
  const user1:UserWithRole1 = {
    name: "Sujon",
    age: 34,
    role: "manager"
  }


  // js --> object , array --> object, function --> object

  //Array example 

  type Roll1 = number[];

  const rollNumber1: Roll1 = [1, 2, 3];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber2: Roll2 = [1, 2, 3];


  // function example

  type Add = (num1: number, num2: number) => number;

  const add: Add = (a, b) => a + b;

  interface Add1 {
    (num1: number, num2: number): number;
  }
  
  const add1:Add1 = (a, b) => a + b;


  // 
}