{
  // Function with Generics 

  const createArray = (param: string): string[] => {
    return [param]
  }

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param]
  }

  const result1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh")


  interface User {id:number, name:string}
  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Sujon"
  })




  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2]
  }

  const result2 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const resGenericTuple = createArrayWithTuple<string, {name: string}>("Bangladesh", {name: "asia"})


  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course
    }
  }

  interface Student {
    name: string;
    email: string;
    devType?: string;
    hasWatch?: string;
  }

  const student1 = addCourseToStudent<Student>({
    name: "Mr. X",
    email: "a@a.com",
    devType: "next lvl developer",
  })

  const student2 = addCourseToStudent<Student>({
    name: "Mr. X",
    email: "a@a.com",
    hasWatch: "Apple Watch",
  })

  // 
}