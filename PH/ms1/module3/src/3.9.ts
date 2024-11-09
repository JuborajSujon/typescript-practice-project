{
  //abstraction : 1. interface 2. abstract class

  // interface Vehicle1 {
  //   name: string;
  //   model: number;

  // }

  // const vehicle1: Vehicle1 = {
  //   name: "Toyota",
  //   model: 2000
  // }


  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }



  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am  startEngine the car engine`);
    }
    stopEngine(): void {
      console.log(`I am  stopEngine the car engine`);
    }
    move(): void {
      console.log(`I am  moving the car engine`);
    }

    test() {
      console.log(`I am just testing`);
    }
    

  }
  
  const toyotaCar = new Car1();
  toyotaCar.startEngine();


  // abstract class -> leader Class

  // idea generator
  abstract class Car2 {
   abstract startEngine(): void;
   abstract stopEngine(): void;
   abstract move(): void;

    test() {
      console.log(`I am just testing`);
    }
  }

  //
  class ToyoTaCar extends Car2 {
    startEngine(): void {
      console.log(`I am startEngine`)
    }
    stopEngine(): void {
      console.log(`I am stopEngine`)
    }

    move(): void {
      console.log(`I am moving`)
    }
  }

 


  // 
}