{
  // type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  }

  const student1: Student = {
    name: "sujon miah",
    age: 34,
    gender: "male",
    contactNo: "01700000000",
    address: "dhaka"
  }

  const student2: Student = {
    name: "mezba",  
    age: 34,
    gender: "male",
    address: "dhaka"
  }



  // for function

  type Add = (a: number, b: number)=> number

  const add:Add = (a, b) => a + b;


}