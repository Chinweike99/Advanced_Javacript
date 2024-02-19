#!/usr/bin/node

// Learning Promise with techsith on youtube
// Basic Examples
let promiseToClean = new Promise(function(resolve, reject) {
	let isClean = false;

	if (isClean){
		resolve("Clean");
	}else{
		reject("Unclean");
	}
});

promiseToClean.then(function(fromResolve) {
	console.log("The room is " + fromResolve);
}).catch(function(fromReject){
	console.log("The room is " + fromReject);
});

console.log("");

// Intermediate
// Using Dependency
let cleanRoom = () => {
	return new Promise((resolve, reject) => {
		resolve(" Cleaned the room");
	});
};
cleanRoom().then(() => {
	console.log(" Room cleaned");
});

console.log("");
let removeGarbage = (message) => {
	return new Promise((resolve, reject) => {
		resolve(message + " Remove Garbage");
	});
};
console.log("");

let winIcecream = (message) => {
	return new Promise((resolve, reject) => {
		resolve(message + " Won Icecream");
	});
};


cleanRoom().then((result) => {
	return removeGarbage(result);
}).then((result) => {
	return winIcecream(result);
}).then((result) => {
	console.log("Finished" + result);
})

// Not using dependency (Having al functions excute same time)
Promise.all([cleanRoom(),removeGarbage(), winIcecream()]).then(function(){
	console.log("All finished");
});

// If Just one of the function would be allowed to finish
Promise.race([cleanRoom(),removeGarbage(), winIcecream()]).then(function(){
	        console.log("One Function is finished");
});
