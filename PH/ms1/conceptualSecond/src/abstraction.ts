{
  //

  class CoffeeMachine {
    private isPowerOn: boolean = false;


    powerOn() {
      this.isPowerOn = true;
      console.log(`Coffee machine is on`);
    }

    makeCoffee() {
      if (this.isPowerOn) {
        console.log(`Coffee Brewing ...`)
      }
      else {
        console.log(`Bhai office chere bahire gelam`);
      }
    }

    powerOff() {
      this.isPowerOn = false;
      console.log(`Coffee machine is power off`)
    }


  }

  class HrChoto extends CoffeeMachine{
    constructor() {
      super()
    }
  }

  const myCoffeeMc = new CoffeeMachine();

  console.log(myCoffeeMc.powerOn())
  


  // 
}