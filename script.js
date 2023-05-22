// const a = {
//   // properties
//   name: "Ram",
//   sing: () => {
//     console.log(`${a.name} can sing`);
//   },
// };
// console.log(a.sing());

// const person = () => {
//   const bio = () => {
//     return "Ravi has a height of and likes to sing";
//   };
//   return bio;
// };
// const per = person();
// console.log(per());

// // CLASS
// class Fruit {
//   constructor() {
//     console.log("I am inside the constructor");
//   }
//   bio() {
//     return "Ravi has a height of and likes to sing";
//   }
// }
// const obj = new Fruit();
// // console.log(obj.bio());

// This keyword
// this keywork is an object that the function is a property of

// function a() {
//   console.log(this);
// }
// a();

// class Fruit {
//   constructor(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
//   }
//   bio() {
//     console.log(`${this.firstName}, ${this.age}`);
//   }
// }
// const obj = new Fruit("Harry", 27);
// obj.bio();

// Study about Abstraction, Encapsulation, polymorphism and inheritance

// let name = "John";
// const sayHello = (greetings) => {
//   return `${greetings} ${name}`;
// };
// console.log(sayHello("Hola"));

// function greet(name, callback) {
//   console.log("Hello", name);
//   callback();
// }
// // greet("");

// function sayHello() {
//   console.log("Hello again");
// }

// greet("John", sayHello);

//======Recursion===========

// let sum = 0;
// let myArray = [3, 4, 5];
// const calculateSum = () => {
//   console.log(`sum is ${sum} and myArray length is ${myArray.length}`);
//   if (myArray.length) {
//     sum = sum + myArray.pop();
//     calculateSum(myArray);
//   }
//   return sum;
// };
// console.log(calculateSum());

// const mydocument = document.getElementById("first");
// console.log(mydocument);

//elem.style.background = "red"
//setTimeout(() => elem.style.background = "green", 3000)

//====querySelector
// const elem = document.querySelectorAll("info1");
// console.log(elem.innerHTML);

// const elem = document.querySelectorAll("ul > li:last-child");
// console.log(elem);
// for (let i = 0; i < elem.length; i++) {
//   console.log(elem[i].innerHTML);
// }
// for (let item of elem) {
//   console.log(item.innerHTML);
// }

// elem = document.querySelector("#display");
// elem.innerHTML = "<strong>Hello from the empty div innerHTML</strong>";
// console.log(elem);

// function myFunction() {
//   alert("I was clicked");
// }

// const elem = document.querySelector("#demo");
// elem.addEventListener("Click", () => {
//   elem.innerHTML = "Now the text is changed";
// });

// function myFunction() {
//   alert("Document is loaded now");
// }

// const elem = document.querySelector(".message");
// elem.addEventListener("mouseover", () => {
//   elem.innerHTML = "Now the text is changed";
//   elem.style.background = "red";
// });

// const elem2 = document.querySelector(".message");
// elem.addEventListener("mouseout", () => {
//   elem.innerHTML = "Now the text is changed";
//   elem.style.background = "green";
// });

//removeEventListner homework

//Json

{
  Students: [
    { name: "Paul", age: 23 },
    { name: "Sam", age: 24 },
  ];
}

let studentsData = '{"name": "Paul", "age": 23}';
console.log(studentsData);
const parsedData = JSON.parse(studentsData);
console.log("Parsed data".parsedData);
const stringData = Json.stringify(parsedData);
console.log("stringData".stringData);
