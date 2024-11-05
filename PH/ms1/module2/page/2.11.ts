{
  //Utility types

  // Pick utility 
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  }

  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;


  //Omit utility 
  type ContactInfo = Omit<Person, "name" | "age">;

  //Required utility 
  type PersonRequired = Required<Person>;

  //Partial utility
  type PersonPartial = Partial<Person>;

  //ReadOnly
  type PersonReadOnly = Readonly<Person>;
  const person1: PersonReadOnly = {
    name: "Mr. X",
    age: 33,
    contactNo: "0123"
  }

  // person1.name = "Jamal";  // cannot assign for readonly property

  // Record type 

  type MyobjRecord = Record<string,string>

  type MyObj = {
    a: string;
    b: string;
  }

  const obj1: MyobjRecord = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd"
  }


  const EmptyObj: Record<string, unknown> = {};



  // 
}