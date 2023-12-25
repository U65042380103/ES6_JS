//JavaScript var,let,const
// var x = 10;
// let y = 20;
// const z = 30;
// console.log(x,y,z);
// {
//   let y = 200;
//   console.log(x,y,z);
// }
// console.log(x,y,z);

//Arrow Functions
let x = 10;
let y  = 20;
const z = (x, y) => x * y;
console.log(z(x,y));

//The Spread (...) Operator
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

//The For/Of Loop
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  text += x + " ";
}
console.log(text);
//JavaScript Maps

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
  ]);
for (let k of fruits){
  console.log(k[0]);
}
//JavaScript Sets
// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
for (let value of letters.values()){
  console.log(value);
}

// JavaScript Classes
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const myCar1 = new Car("Ford", 2014);
console.log(myCar1);