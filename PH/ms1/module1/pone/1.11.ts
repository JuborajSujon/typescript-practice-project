{
  // ternary operator || optional chaining || nullish coalescing

  const age: number = 15;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult")
  }

  const isAdult = age >= 18 ? "adult" : "not adult";

  // nullish coalescing

  const user2 = undefined;

  const isUser = user2 ?? "not user"

  console.log(isUser);

  // optional chaining

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      persentaddress: string;
      permanentAddress?: string;
    }
  }

  const user: User = {
    name: "persian",
    address: {
      city: "dhaka",
      road: "ali khan",
      persentaddress: "demra"
    }
  }

  const permanentAddress = user?.address?.permanentAddress ?? "NO Permanent Address"
  
  console.log(permanentAddress);
}