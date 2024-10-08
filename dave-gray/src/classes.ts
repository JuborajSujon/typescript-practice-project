class Coder {
  secondLang!: string;
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `I am ${this.age} years old.`;
  }
}

const Dave = new Coder("Dave Gray", "Jazz", 32);

// console.log(Dave.getAge());
// console.log(Dave.lang);
// console.log(Dave.age);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}.`;
  }
}

const Sara = new WebDev("Macbook", "Sara Wilson", "Rock", 25);
// console.log(Sara.getLang());
// console.log(Sara.age);
// console.log(Sara.lang);

/////////////////////////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Fluttist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}.`;
  }
}

const Page = new Fluttist("Jimmy Page", "guitar");
console.log(Page.play("strums"));

//////////////////////////////////////////////////////

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Tom = new Peeps("Tom");
console.log(Peeps.count);

console.log(John.id);
console.log(Steve.id);
console.log(Tom.id);
console.log(Peeps.getCount());

/////////////////////////////////////////////

class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((el: string) => typeof el === "string")
    ) {
      this.dataState = value;
      return;
    } else {
      throw new Error("Param is not an array of strings");
    }
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zeppelin"];
console.log(MyBands.data);

MyBands.data = [...MyBands.data, "Van Halen"];
console.log(MyBands.data);
