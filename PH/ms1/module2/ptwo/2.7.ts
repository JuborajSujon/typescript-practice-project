{
  //Generic constraint with keyof opertor

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  }


  type Owner = "bike" | "car" | "ship"; // manually

  type OWner = keyof Vehicle;

  const user = {
    name: "Mr. Sujon",
    age: 26,
    address: "dhaka"
  }

  const getPropertyValue = <T, Y extends keyof T>(obj: T, key: Y) => {
    return obj[key]
  }

  getPropertyValue(user, "name")

  // 
}