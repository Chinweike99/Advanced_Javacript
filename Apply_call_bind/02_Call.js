#!/usr/bin/node

/* Intermediate examples on call Metod */

/* Using Call with construction function */
console.log("Using call with construction functions");
function animal(name, type){
	this.name = name;
	this.type = type;
}
function callAnimal(){
	return `${name} is a ${type} aimal`;
}
const animal1 = animal("Dog", "domestic");
const callAni = callAnimal.call(animal1);
console.log(callAni);
