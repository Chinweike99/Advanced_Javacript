#!/usr/bin/node

/** Basic examples on call method in JavaScript **/

/* Simple function call */
function sayHello(){
	return (`Hello, ${this.name}, your salary is ${this.salary}`);
}
const person = {name: 'larry', salary: 10000};
const person2 = { name: "Chinwe Akwolu", salary: 11000 };
const greet = sayHello.call(person);
const greet2 = sayHello.call(person2);
console.log(greet);
console.log(greet2);
console.log('');


console.log("Accessing built-in methods!");
/* Accessing built-in methods */
numbers = [1, 7, 9, 10, 4];
const maximum = Math.max.call(null, ...numbers);
const minimum = Math.min.call(null, ...numbers);
console.log(minimum);
console.log(maximum);
console.log('');


console.log("Using call to invoke methods on different Objects!");
/* Invoking call on different objects */
car1 = {name: "Toyota", brand: "camry", year: 2023};
car2 = {name: "Mercedes", brand: "G-wagon", year: 2023};

function getcar(){
	return (`${this.name} ${this.brand}, ${this.year}`);
}
const firstCar = getcar.call(car1);
const secondCar = getcar.call(car2);
console.log("Your first car is:", firstCar);
console.log("Your second car is:", secondCar);
