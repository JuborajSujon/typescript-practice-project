{
  // class --> object blue print --> method
  // inheritance --> parent class --> child 
  // abstraction --> engine kivabe kaaj korche na jene karjosiddhi
  // encapsulation --> alada kore fela 
  // polymorphism --> class --> instance create --> function 
  
  
  class MusicalInstrument {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    play() {
      console.log(`Plying the ${this.name}`)
    }
  }

  class Guitar extends MusicalInstrument { 
    constructor(name: string) {
      super(name)
    }

    tune() {
      console.log(`Tuning kortechi ....${this.name}`)
    }
  };

  class Piano extends MusicalInstrument {
    constructor(name: string) {
      super(name)
    }

    openLid() {
      console.log(`Opening the lid ... ${this.name}`)
    }
  }


  const guiterist = new Guitar("James");
  console.log(guiterist, guiterist.tune())

  

  // 
}