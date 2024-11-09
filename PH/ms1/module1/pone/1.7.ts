{
  // speard operator
  // rest operator
  // destructuring

  // learn spread operator 
  const bros1: string[] = ["Mir", "Firoz", "Mizan"];
  const bros2: string[] = ["Mir", "Firoz", "Mizan"];

  bros1.push(...bros2)

  const mentors1 = {
    typescript: "Sujon",
    redux: "Mir",
    dbms: "Mizan"
  }

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "naid"
  }

  const mentorList = {
    ...mentors1,
    ...mentors2
  }


  // learn rest operetor 
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string)=>console.log(`hi ${friend}`))
  }

  greetFriends("Abul", "kabul", "babul");


}