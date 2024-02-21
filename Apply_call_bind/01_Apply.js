#!/usr/bin/node

/* Basic Concepts and examples on Apply  method */
// Passing Arguments to Built-in Functions
console.log("1. Passing Arguments to Built-in Functions.");
const numbers = [1, 2, 3, 4, 5, 79, 6];
const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);
console.log("min number is: ", min);
console.log(max);

console.log("");
console.log("Using `apply` with context Object");
const person = {name: "Alice"};
function welcome(){
	return `Hello ${this.name}, Welcome!`;
}
const person1 = welcome.apply(person);
console.log(person1);

// Summing Array Elements
console.log("");
console.log("Summing Array Element");
const numb = [2,4,3,5,9,19];
const sum = Array.prototype.reduce.apply(numb, [(acc, curr) => acc + curr, 0]);
console.log(sum);

// Concatenating Arrays using Apply
console.log("");
console.log("Concatenating Arrays");
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['f', 'g', 'h', 'i', 'j'];
const combinedArrays = Array.prototype.concat.apply(arr1, arr2);
console.log(combinedArrays);
