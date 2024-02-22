#!/usr/bin/node
/** Basic examples of using Arrow functions */

// Traditional function
const add =  function(a, b){
	return a + b;
}
console.log(add(4, 4));
// Arrow function
const mul = (a, b) => a * b;
console.log(mul(4, 4));

/* Concise string manipulation */
const toUpper = word => word.toUpperCase();
console.log(toUpper('hello my dearest friend from another mother!'));

const greet = name => `Hello, ${name}`;
console.log(greet("April"));

console.log("");
console.log("Simple Calculations");
const multi = num => num * num;
console.log(multi(4));

const modu = div => div % 7;
console.log(modu(11));



console.log("");
console.log("Returning objects");
const createPerson = (name, occu) => ({name, occu});
const person = createPerson("Chinwe", "Engineer");
console.log(person);

