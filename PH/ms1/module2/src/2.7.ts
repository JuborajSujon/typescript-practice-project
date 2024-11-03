{
  //generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  }

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle // make union form Vehicle

  
  const person1: Owner = "car";
  const person2: Owner2 = "ship";

  const  getPropertyValue =<X, Y extends keyof X> (object:X, key:Y) =>{
    return object[key]
  }


  const user = {
    name: "Sujon",
    age: 24,
    address: "dhaka"
  }

  const car = {
    name: "Toyota 100",
    year: 2015,
  }

  const result1 = getPropertyValue(user,  "name")
  const result2 = getPropertyValue(car,  "year")

 
  // 
}