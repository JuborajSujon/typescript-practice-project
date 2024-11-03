{
  //Generics

  type GenericArray<T> = Array<T>

  // const rollNumbers: number[] = [3, 6, 8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];

  // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolArray : boolean[] = [true, false, true]
  const boolArray: GenericArray<boolean> = [true, false, true]

  // Generic Object 
  const user: GenericArray<{ name: string; age:number}>  = [
    {
      name: "sujon",
      age: 100,
    },
    {
      name: "Jhankar Mahbub",
      age: 100
    }
  ]
  
  // example function 
  const add = (num1: number, num2: number) => num1 + num2;
  

  //Generic Tuple
  type GenericTuple<X,Y> = [X, Y]

  const People: GenericTuple<string, string> = ["Mr. X", "Mr.Y"];
  const UserWithID: GenericTuple<number,{name:string, email:string}> = [111, {name:"sujon", email:"a@gmail.com"}]

  //
}