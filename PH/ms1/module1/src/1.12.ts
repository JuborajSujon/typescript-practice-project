{
  //nullable types 
  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching")
    } else {
      console.log("persian")
    }
  }
  searchName("persian")

  // unknown type 
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === 'number') {
      const convertedSpeed = value * 1000;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    }

    if (typeof value === 'string') {
      const [result, unit] = value.split(' ');
      const convertedSpeed = parseInt(result) * 1000;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    }

    else {
      console.log("wrong input");
    }
  }

  getSpeedInMeterPerSecond("1000 kmh^-1")


  // never
  const throwError = (msg: string):never => {
    throw new Error(msg)
  }

  throwError('getError')



  
}