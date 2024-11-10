{
  // Generic with interface
  
  interface Developer<T, X = null>  {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    },
    smartWatch: T;
    bike?: X;
  }

  interface SmartWatch {
    brand: string;
    model: string;
    display?: string;
    heartTrack?: boolean;
    sleepTrack?: boolean;
  }

  const poorDeveloper: Developer<SmartWatch> = {
    name: "Poor Dev",
    computer: {
      brand: "Asus",
      model: "X-225UR",
      releaseYear: 2024,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66", 
      display: "OLED"
    }
  }


  const richDeveloper: Developer<SmartWatch> = {
    name: "Rich Dev",
    computer: {
      brand: "Asus",
      model: "X-225UR",
      releaseYear: 2024,
    },
    smartWatch: {
      brand: "Apple",
      model: "something", 
      heartTrack: true,
      sleepTrack: true,
    }
  }

  
  // 
}