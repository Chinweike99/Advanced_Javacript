#!/usr/bin/node
/* bind method */
// Binding `this` to a function
const person = {
	name: "Alice",
	greet: function(){
		return `Hello ${this.name}!`;
	}
};
const greet = person.greet.bind(person);
console.log(greet());

/* using bind for chaining method */

const calculator = {
	value: 0,
	add: function(x) {
		this.value += x;
		return this;
	},
	subtract: function(x){
		this.value -= x;
		return this;
	},
	getResult: function(){
		return this.value;
	}
};
const result = calculator.add(5).subtract(3).add(10).getResult();
console.log(result);
