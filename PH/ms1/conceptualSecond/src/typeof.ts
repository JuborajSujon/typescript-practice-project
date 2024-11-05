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


  type DetailsLog = {
    message: string;
    level: "info" | "warn" | "error";
  }


  // 
}