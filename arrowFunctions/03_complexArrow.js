#!/usr/bin/node

/* Complex Examples on Arrow funcions*/
// Implementing a custom forEach function
const myForEach = (array, callback) => {
	for (let i = 0; i < array.length; i++){
		callback(array[i], i, array);
	}
};

myForEach([4,9,1,2,3], (item, index) => console.log(`${index + 1}: ${item}`));

// Advanced object manipulation with arrow function
const users = [
	{ name: "Alice", age: 24},
	{ name: "Jacob", age: 25}
];
const getNames = users.map(user => user.name);
console.log(getNames);

const getAge = users.map(ages => ages.age);
console.log(getAge);
