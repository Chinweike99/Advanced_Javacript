#!/usr/bin/node

function greet(name, callback){
	setTimeout(() => {
		callback(`Hello ${name}`);
	}, 200);
}

function greetingMessage(message){
	console.log(message);
}

greet('James', greetingMessage);

console.log("");


// callback function with asynchronous operations.
function performOperation(x, y, operation, callback){
	let result = operation(x, y)
	callback(result);
}
function displayResult(result){
	console.log("Result", result);
}

function addition(x, y){
	return x + y;
}
performOperation(6, 7, addition, displayResult);

console.log("");
console.log("");


// callback with setTimeout
function delayedOutput(callback){
	setTimeout(callback, 2000);
}
function output(){
	console.log("Message delayed");
}
delayedOutput(output);

console.log("");
console.log("");

// Callback with Array.forEach
let numbers = [3, 5, 8, 9];
function processNumbers(arr, callback){
	arr.forEach(callback);
}
function doubleNum(num){
	let doublen = num * 2;
	console.log(doublen);
}
processNumbers(numbers, doubleNum);


console.log("");
console.log("");
// callback with EventListeners

