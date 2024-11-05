{
  //Promise
  type something = {
    something: string;
  }

  // simulate 
  const createPromis = ():Promise<something> => {
    return new Promise<something>((resolve, reject) =>{
      const data: something = {something : "something"};

      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data.")
      }
    })
  }

  // calling create promise function

  const showData = async (): Promise<something> => {
    const data: something = await createPromis();
    console.log(data)
    return data
  }

  showData();

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  }

  // get data from server 
  const getTodo = async(): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data)

    return data
  }

  getTodo()

  
    
    
    
  // 
}