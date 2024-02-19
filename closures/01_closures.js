#!/usr/bin/node

// Basic examples 

function externalFunction() {
	let externalVar = "Accessed outer variable";

	function internalFunction(){
		console.log(externalVar);
	}
	// Returning the inner function
	return internalFunction;
}

// Calling outer function as to get the inner function
const internalFunc = externalFunction();
internalFunc();
