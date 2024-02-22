#!/usr/bin/node

/* Intermediate examples on Arrow functions*/

// Using binding
/*
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
	console.log(this);
});*/

// Callback functions in map and filter:
const numbers = [1, 2, 6, 9, 3];
const doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);


// Arrow function with multiply Parameter
const mult = (a, b) => (a * b);
console.log(mult(9, 2));

const fullName = (name, surname) => `${name} ${surname}`;
console.log(fullName("chinwe", "Kings"));

// Destructing Arguments
const sum = ({a, b}) => a + b;
const result  = sum({a: 10, b: 23});
console.log(result);



