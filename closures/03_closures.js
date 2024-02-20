#!/usr/bin/node

// using the concept of closure to calculate salary
function salary(){
	let baseSalary = 10000;

	function calculateSalary(bonus){
		let totalSalary = baseSalary + bonus;
		console.log(totalSalary);
	}
	return calculateSalary;
}

const salary1 = salary();
salary1(3000);
salary1(9000);
console.log("");

// Using closure for private counter
function createCounter(){
	let count = 0;
	
	return {
		increament: function(){
		count++;
		console.log(count);
		},
	
		decreament: function (){
		count--;
		console.log(count);
		},
		getCount: function(){
		return count;
		}
	};
}

const counter = createCounter();
counter.increament();
counter.increament();
counter.increament();
console.log(counter.getCount());
counter.decreament();
console.log(counter.getCount());

console.log("");

// Closure in Memoization
function memoize(func){
	const cache = {};

	return function(...args) {
		const key = JSON.stringify(args);
		if (!(key in cache)) {
			cache[key] = func(...args);
		}
		return cache[key];
	};
}

const fibonacci = memoize(function(n) {
	if (n <= 1) return n;
	return fibonacci(n-1) + fibonacci(n - 2);
});

console.log(fibonacci(10));
console.log(fibonacci(11));
























