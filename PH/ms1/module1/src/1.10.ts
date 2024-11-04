{
  //
  // union types 
  // type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';

  // type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper';


  // type Developer = FrontendDeveloper | FullstackDeveloper;


  // const newDeveloper: FrontendDeveloper = 'juniorDeveloper';

  // type User = {
  //   name: string;
  //   email: string;
  //   gender: 'male' | 'female';
  //   bloodGroup: "O+" | "A+" | "AB+";
  // }

  // const person: User = {
  //   name: "Sujon",
  //   email: "a@gmail.com",
  //   gender: "female",
  //   bloodGroup: "O+"
  // }


  type FrontendDeveloper = {
    skill: string[];
    designation1: 'Frontend Developer';
  }

  type BackendDeveloper = {
    skill: string[];
    designation2: 'Backend Developer';
  }

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skill: ["React", "Express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer"
  }
}