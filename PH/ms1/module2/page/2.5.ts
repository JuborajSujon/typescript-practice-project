{
  //Function with Generic 

  const createArray = (param: string): string[] => {
    return [param]
  }

  const res1 = createArray("Bangladesh")


  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param]
  }

  const resGeneric = createArrayWithGeneric < string >("Bangladesh");
  const resGeneric1 = createArrayWithGeneric<boolean>(true);
  
  interface person {
    id: number;
    name: string;
    age: number;
  }

  const sujon: person = {
    id: 222,
    name: "sujon",
    age: 34
  }

  const resGeneric2 = createArrayWithGeneric<person>(sujon);

  // with tuple 
  const createArrayWithTuple = <T,Q>(param1: T, param2:Q): [T, Q] => {
    return [param1, param2]
  }

  const resTuple = createArrayWithTuple<string, number>("Bangladesh", 1971);

  const resTuple2 = createArrayWithTuple <string, object>("Bangladesh",{name:"Asia"})

  
  // Example 3
  
  const addCourseToStudent = <T> (student: T ) => {
    const course = "Next Level Web Development"

    return {
      ...student,
      course
    }
  }

  const student1 = addCourseToStudent({
    name: "sujon",
    email: "s@gmail.com",
    devType: "NLWD"
  })


  const student2 = addCourseToStudent({
    name: "sujon",
    email: "s@gmail.com",
    hasWatch: "Apple"
  })



  // 
}