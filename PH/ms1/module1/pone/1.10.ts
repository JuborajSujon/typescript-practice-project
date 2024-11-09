{
  // union types and intersection types 
  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";

  type FullstackDeveloper = "frondendDeveloper" | "experDeveloper"

  type Developer = FrontendDeveloper | FullstackDeveloper;

  const newDeveloper: FrontendDeveloper = "fakibazDeveloper";


  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "AB+";

  }

  const user1: User = {
    name: 'persian',
    gender: "female",
    bloodGroup: "AB+"
  }

  type FrontendDev = {
    skills: string[];
    designation1: "Frontend Developer";
  }

  type BackendDev = {
    skills: string[];
    designation2: "Backend Developer";
  }

  type FullstackDev = FrontendDev & BackendDev;

  const fullStack: FullstackDev = {
    skills: ["html", "css", 'express'],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",

  }

}