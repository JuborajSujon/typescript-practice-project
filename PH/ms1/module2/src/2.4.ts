{
  //Generic with interface

  type GenericArray<T> = Array<T>

  interface User  {
    name: string;
    age: number;

  }

   // Generic Object 
  const user: GenericArray<User>  = [
    {
      name: "sujon",
      age: 100,
    },
    {
      name: "Jhankar Mahbub",
      age: 100
    }
  ]

  interface Developer<T, X=null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    }
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string; 
    model: string;
    display:string
  }

  interface AppleWatch {
    brand: string;
    model: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engine: string;
  }

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Sujon Miah",
    computer: {
      brand: "Asus",
      model: "X",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "emilab",
      model: "Kw66",
      display: "OLED" 
    }
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Rich Dev",
    computer: {
      brand: "HP",
      model: "X",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "Something",
      display: "OLED",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engine: "V4"
    }
  }

  //
}