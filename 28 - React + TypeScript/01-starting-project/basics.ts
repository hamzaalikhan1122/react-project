//Primitives: number, string, boolean
//More complex typles: arrays,objects
//Function types, parameters

//Primitives

let age: number;

age = 12;

let username: string;

username = "John";

let isInstructor: boolean;

isInstructor = true;

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
  hobbies: string[];
};

let person: Person;

person = {
  name: "John",
  age: 32,
  hobbies: ["Sports", "Cooking"],
};

// person = {
//     isEmployee: true,
// }

let people: Person[];

//Type inference

let course: string | number = "React - The Complete Guide";

course = 12341;

//Function & Types

function add(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, 0);

updatedArray[0].split("");
