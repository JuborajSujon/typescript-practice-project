{
  //learn spread operator 
  const bros1: string[] = ["a", "b", "c"];
  const bros2: string[] = ['d', "e", 'f'];

  bros1.push(...bros2)

  const obj1 = {
    ts: "a",
    js: "b"
  }

  const obj2 = {
    rjs: "c",
    njs: "d"
  }

  const obj3 = {
    ...obj1,
    ...obj2
  }


  //learn rest operator

  //without rest operator 
  // const greetFriends = (friend: string, friend2: string, friend3: string) => {
  //   console.log(`Hi ${friend} ${friend2} ${friend3}`)
  // }

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend:string)=>console.log(`Hi ${friend}`))
    
  }

  greetFriends("Abul", "Kabul", "babul");
}