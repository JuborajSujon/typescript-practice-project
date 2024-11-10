{
  // generic type

  type GenericArray<T> = Array<T>
  const add = (x: number, y: number) => x + y;

  // const rollNumbers: number[] = [3, 6, 8];
  // const rollNumbers:  Array<number> = [3, 6, 8];
  const rollNumbers:  GenericArray<number> = [3, 6, 8];

  // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  // const mentors: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolArray:  boolean[] = [true, false, true];
  // const boolArray: Array<boolean> = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];


  // Generic Object 
  interface Person{
    name: string;
    age: number;
  }

  const user: GenericArray<Person> = [
    {
      name: "Sujon",
      age: 34
    },
    {
      name: "Mezba",
      age: 34
    }
  ]

  // Generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const human: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const UserWithID: GenericTuple<number, { name: string; email:string}> = [1234, { name: "Sujon", email: "a@a.com" }];



  // 
}