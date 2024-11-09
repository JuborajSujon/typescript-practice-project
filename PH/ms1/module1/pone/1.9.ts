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
    name: "Sujon",
    age: 34,
    gender: "Male",
    contactNo: "017883948843",
    address: "dhaka"
  }

  const student2: Student = {
    name: "Mir",
    age: 34,
    gender: "Male",
    address: "dhaka"
  }

  type UserName = string;
  type isAdmin = boolean;
  
  const userName: UserName = "Persian";
  const Admin: isAdmin = true;

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

  

  // 
}