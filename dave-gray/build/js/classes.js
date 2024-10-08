"use strict";
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `I am ${this.age} years old.`;
    }
}
const Dave = new Coder("Dave Gray", "Jazz", 32);
// console.log(Dave.getAge());
// console.log(Dave.lang);
// console.log(Dave.age);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}.`;
    }
}
const Sara = new WebDev("Macbook", "Sara Wilson", "Rock", 25);
class Fluttist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}.`;
    }
}
const Page = new Fluttist("Jimmy Page", "guitar");
console.log(Page.play("strums"));
//////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
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
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) &&
            value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error("Param is not an array of strings");
        }
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zeppelin"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Van Halen"];
console.log(MyBands.data);
