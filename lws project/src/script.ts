class Player {
  private name: string;
  public age: number;
  public country: string;
  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(`Name: ${this.name} Age: ${this.age} Country: ${this.country}`);
  }
}

const mashrafi = new Player("Mashrafi", 30, "Bangladesh");
const sakib = new Player("Sakib", 35, "Bangladesh");

sakib.name = "Sakib Al Hasan";
sakib.age = 35;

console.log(sakib.name);
