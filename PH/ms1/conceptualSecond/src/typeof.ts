{
  // Movie name 
  const MovieName = "Deadpool";


  //use "Typeof"
  type MovieName = typeof MovieName;


  const movie = {
    title: "Rock On",
    director: "Firoz Bhai"
  }

  type movieDetails = typeof movie;

  const newMovie: movieDetails = {
    title: "Deadpool",
    director: "Mir vai",
  }

// in guard check 
  type DetailsLog = {
    message: string;
    level: "info" | "warn" | "error";
  }

  function logMessage(input: string | number | DetailsLog) {
    if (typeof input === 'string') {
      console.log("simple message info", input);
    }

    else if (typeof input === 'number') {
      console.log("Error code:", input);
    }
    else if ("message" in input && "level" in input) {
      console.log(`danger level ${input.level} instructions for next level dev ${input.message}`)
    }
  }

  // const test = logMessage("string type er input");
  // const test = logMessage(23);
  const test = logMessage({
    message: "Vai ready to",
    level: "error"
  });

  console.log(test)


  // 
}