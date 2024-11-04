{
  //learn function
  //normal function
  function add(a:number, b:number):number {
    return a+b
  }

  add(2, 2)


  //arrow function

  const addArr = (a: number, b: number): number => a + b
  

  // object --> function --> method

  const poorUser = {
    name: "Sujon Miah",
    balance: 0,
    addBalance(balance: number): string {
      return `My new balance is: ${this.balance + balance}`
    }
  }

  const arr: number[] = [1, 2, 3, 4];
  const newArray = arr.map((item:number):number => item * item)

  // 
}