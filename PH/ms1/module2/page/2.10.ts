{
  //Mapped types

  const arrOfNumbers: number[] = [4, 5, 8];

  // const arrOfString: string[] = ["4", "5", "8"];

  const arrOfString: string[] = arrOfNumbers.map((number) => number.toString())
  
  console.log(arrOfString)

  
  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // lookup type

  // type AreaString = {
  //   height: string;
  //   width: string;
  // };


  type AreaString<T> = {
    [index in keyof T]: T[index]
  }


  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50
  }

  // 
}