{
  // Generic constraint with keyof operator

  
  interface Vehicle {
    bike: string;
    car: string;
    ship: string;
  }

  const vehicle: Vehicle = {
    bike: "Yamaha",
    car: "Toyota",
    ship: "Yuta"
  }


  type Owner = "bike" | "car" | "ship"; // manually

  type Owner1 = keyof Vehicle;

  const bike: Owner1 = "bike";

  const user = {
    name: "Sujon",
    age: 23,
    adderss: "dhaka"
  }

  const  getPropertyValue  = <X, Y extends keyof X> (obj: X, key: Y)=> {
    return obj[key]
  }

  const result = getPropertyValue(user, "name");
  const result1 = getPropertyValue(vehicle, bike);
  




  // 
}