#!/usr/bin/node

/* Intermediate examples on Apply method*/

// Using  `apply` with constructor functions
function Person(name, age){
	this.name = name;
	this.age = age;
}
const alice = {};
Person.apply(alice, ["Chidi", 23]);
console.log(alice);

console.log("");
console.log("Applying Functions with Variable Arguments");
function greet(greeting, name){
	return `${greeting}, ${name}`;
}
function hmmm(){
	return ("My frieeennnd");
}
const greeted = greet.apply(true, ['Hello', 'Noah']);
console.log(greeted);


// Appy with Prototype
console.log("");
console.log("Using Apply with Prototype");
function person(name, age){
	this.name = name;
	this.age = age;
}
person.prototype.greet = function (){
	return `Hey dear, my name is ${this.name}, and i'm ${this.age}`;
}
const johnny = new person();
person.apply(johnny, ["John Dumelo", 31]);
console.log(johnny.greet());
