{
  //defne a simple book type
  type Book = {
    title: string;
    author: string;
    yearPublished: number;
  };

  // Use "keyof" to get keys of the Book type
  type BookKeys = keyof Book;

  // Book[title] = "Typescript";


  function getBookPropertry<T, K extends keyof T>(book: T, key: K):T[K] {
    return book[key]
  }


  const myBook: Book = {
    title: "The great Typescript",
    author: "Mezbaul Abedin Persian",
    yearPublished: 2025
  }

  const author: string = getBookPropertry(myBook, "author");

  console.log(author);

  


  // 
}