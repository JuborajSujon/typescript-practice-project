{
  // promise

  //simulate 

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  }

  const getTodo = async ():Promise<Todo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const data = await response.json();
    console.log(data)

    return data;

  }

  getTodo();

  type Something = {something: string}

  const createPromis = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = {something: "something"};

      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    })
  }

  // calling create promise function
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromis();
    console.log(data)

    return data;
  }

  showData();


  

  // 
}