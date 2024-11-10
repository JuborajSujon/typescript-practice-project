{
  // Constraints in typescript 
  const addCourseToStudent = <T extends {id: number, name: string, email: string}>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course
    }
  }

  interface Student {
    id: number;
    name: string;
    email: string;
    devType?: string;
    hasWatch?: string;
  }

  const student1 = addCourseToStudent<Student>({
    id: 222,
    name: "Mr. X",
    email: "a@a.com",
    devType: "next lvl developer",
  })

  const student2 = addCourseToStudent<Student>({
    id: 333,
    name: "Mr. X",
    email: "a@a.com",
    hasWatch: "Apple Watch",
  })

  const student3 = addCourseToStudent<Student>({
    id: 444,
    name: "Mr. Z",
    email: "c@c.com"
  })

  

  // 
}