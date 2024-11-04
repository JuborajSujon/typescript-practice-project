{// Primitive Data Types Define

  // string 
  let fullName1 = "sujon miah" // implicity 
  let fullName2:string = "sujon miah" //explicity


  // number
  let num1 = 23  // implicity 
  let num2: number = 23 //explicity
  
  // boolean 
  let isAdmin = true; // implicity 
  let isUser: boolean = false; //explicity

  // null 
  let user = null; // implicity 
  let user1: null = null // explicity

  // undefine 
  let person = undefined;  //implicity 
  let person1: undefined = undefined; //explicity

  
  //any 
  let d: any = "sujon";
  d = 10;

  //array 
  const student = ["jamal", "kamal"] // implicity 
  const student1: string[] = ["Jamal", "kamal"] //explicity

  const student2: (string | number | boolean)[] = ["jamal", 42, true];
  
  const student3: Array<string | number | boolean> = ["Jamal", 42, true];
  
  const student4: [string, number, boolean] = ["Jamal", 42, true];

  // tuple --- array -->  order ---> type of values

  let coordinates : [number, number] = [5, 7]

  let myTuple: [string, number];
  myTuple = ["Hello", 42];

  let optionalTuple: [string, number?] = ["hello"] //optional elements in tuples

  let restParametersTuple: [string, ...number[]] = ["Hello", 42, 99, 100]; //
  
  let greeting: string = myTuple[0]; // Accessing Tuple Elements


  let myTuple2: [name: string, age: number] = ["Alice", 30]; //Tuple with Named Elements (for Clarity)
 

  


  //



}
  
