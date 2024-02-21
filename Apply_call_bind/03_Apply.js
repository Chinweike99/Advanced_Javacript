#!/usr/bin/node

/* Complex Examples on understanding apply method */

// Modifying `this` context in Prototype Inheritance

function Animal(name){
	this.name = name;
}
function Dog(name, breed){
	Animal.apply(this, [name]);
	this.breed = breed;
}
const dog = new Dog('Max', 'Labrador');
console.log(dog);
