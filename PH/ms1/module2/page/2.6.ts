{
  // Constraints in Typescript

  interface Student {
    id: number;
    name: string;
    email: string;
  }

  const addCourseToStudent = <T extends Student> (student: T ) => {
    const course = "Next Level Web Development"

    return {
      ...student,
      course
    }
  }

  const student1 = addCourseToStudent({
    id: 222,
    name: "sujon",
    email: "s@gmail.com",
    devType: "NLWD"
  })


  const student2 = addCourseToStudent({
    id: 333,
    name: "sujon",
    email: "s@gmail.com",
    hasWatch: "Apple"
  })


  const students3 = addCourseToStudent({emni:"emni"})

  


  // 
}