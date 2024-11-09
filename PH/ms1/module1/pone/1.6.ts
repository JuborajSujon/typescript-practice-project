{
  // normal function

  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // arrow function   
  const addArrow = (num1: number, num2: number): number => num1 + num2;
  
  // object Method
  const poorUser = {
    name: "Sujon",
    age: 0,
    addBalance(amount: number) {
      return this.age + amount;
    }
  }

  // callback 
  const arr: number[] = [1, 2, 3];

  const newArray: number[] = arr.map((ele: number): number => ele * ele);

}