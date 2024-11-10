{
  // type assertion

  let anything: any;

  anything = 'Next level web development';

  (anything as string).length;

  const kgToGm = (value: string | number | undefined) => {
    if (typeof value === 'string') {
      const convertedValue = parseFloat(value)*1000;
      return convertedValue;
    }
    if (typeof value === 'number') {
      return value * 1000;
    }
  }

  


  // 
}