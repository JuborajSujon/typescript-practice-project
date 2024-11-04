{
  // destructuring 
  const user = {
    id: 345,
    name: {
      firstName: "Mezbaul",
      middleName: "Abedin",
      lastName: "Persian"
    },
    contactNo: "0170000000",
    address: "dhaka"
  }


  const { contactNo } = user;

  const { name: { middleName: midName } } = user;

  // array destructuring 
  const myFriends = ["chandler", "joes", "ross", "rachel"];

  const [a, , bestFried, ...rest] = myFriends;
}