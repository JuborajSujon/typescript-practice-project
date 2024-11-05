{
  // oop --> Class

  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // parameter properties 


    constructor(public name:string, public species: string, public sound:string) {
      // this.name = name;
      // this.species = species;
      // this.sound = sound;
    }

    makesSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard", "Dog", "Ghew Ghew");
  const cat = new Animal("Persian Bai", "Cat", "Mew Mew");

  dog.makesSound();




  // 
}