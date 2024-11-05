{
  //Generic with interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  interface EmilabWatch {
    brand: string;
    model: string;
    display: string;
  }


  
  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Sujon",
    computer: {
      brand: "Asus",
      model: "4545",
      releaseYear: 2012,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED"
    }
  }

  type AppleWatch = {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike  {
    model: string;
    engine: string
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Rich Dev",
    computer: {
      brand: "HP",
      model: "4545",
      releaseYear: 2012,
    },
    smartWatch: {
      brand: "Apple",
      model: "kw66",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "V4",
      engine: "Turbo"
    }
  }






  // 
}