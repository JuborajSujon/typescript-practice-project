{
  // Type Assertion / Type Narrowing 
  let anything: any;
  anything = "Next level web development";

  (anything as string).length


  // example 2
  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === 'string') {
      const convertedValue = parseFloat(value);
      return `The converted value is : ${convertedValue}`;
    }

    if (typeof value === 'number') {
      return value * 1000;
    }
  }

  const result1 = kgToGm(1000) as number

  type CustomError = {
    message: string;
  }

  try {

  } catch(error) {
    console.log(( error as CustomError).message)
  }
}