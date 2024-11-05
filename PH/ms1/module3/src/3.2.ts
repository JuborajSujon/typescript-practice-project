{
  // inheritance in OOP
  class Person {
    constructor(
      public name: string,
      public age: number,
      public address: string,
    ) { }
    
    getSleep(numOfHours: number){
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  class Student extends Person{
    constructor(name:string, age:number, address:string) { 
      super(name, age, address);
    }
    
  }

  const jamal = new Student("Jamal Sheik", 20, "Dhaka");

  class Teacher extends Person {
    constructor(
      name: string,
      age: number,
      address: string,
      public designation: string,
    ) {
      super(name, age, address);
     }
    
    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} class`);
    }
  }

  const rofiqSir = new Teacher("Rofiq Sir", 44, "dhaka", "Professor");




  







  // 
}