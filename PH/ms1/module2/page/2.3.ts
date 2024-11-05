{
  //

  type GenericArray<T> = Array<T>
  // const rollNumbers: number[] = [2, 3, 4];
  // const rollNumbers: Array<number> = [2, 3, 4];
  const rollNumbers: GenericArray<number> = [2, 3, 4];

  // const mentors: string[] = ["mango", "orange"];
  // const mentors: Array<string> = ["mango", "orange"];
  const mentors: GenericArray<string> = ["mango", "orange"];

  // const boolArray: boolean[] = [true, false];
  // const boolArray: Array<boolean> = [true, false];
  const boolArray: GenericArray<boolean> = [true, false];

  type person = {name:string, age:number}

  const user: GenericArray<person> = [
    {
      name: "sujon",
      age: 100
    },
    {
      name: "mahbub",
      age: 110
    }
  ]

  // Generic Tuple

  type GenericTuple<X, Y> = [X, Y];
  type person2 = {
    name: string;
    email: string;
  }

  const people: GenericTuple<string, string> = ["Mr.X", "Mrs. Y"];

  const userWithID: GenericTuple<number, person2> = [1234, {name: "sujon", email:"s@gmail.com"}]

  

  

  // 
}