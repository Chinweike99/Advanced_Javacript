#!/usr/bin/node

/*Intermediate callbackFunctions*/

// Simulating an asynchronous operation (fetching user data)
function getUserData(userId, callback){
	setTimeout(() => {
		const userdata = { id: userId, name: "Kate Lazarus", age: 30}
		callback(userdata);
	}, 1000);
}

function getInfo(info){
	console.log(`USER ID: ${info.id}\nname: ${info.name}\nAge: ${info.age}`);
}

getUserData(192, getInfo);

console.log('');

/* Callback with Array.map
 * Uses the map method to apply the callback to each element of array
 */
const names = ["Jacob Noah", "Alice kate", "Trevor"];
function getName(name, callback){
	return name.map(callback);
}
function getLength(names){    // callback function to get the length of each name
	return names.length;
}
const getNames = getName(names, getLength);
console.log(getNames);

console.log("");
/*
console.log("Callback with XMLHttpRequest");
function fetchData(url, callback){
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readystate === XMLHttpRequest.DONE && xhr.status === 200){
			const responseData = JSON.parse(xhr.responseText);
			callback(responseData);
		}
	};
	xhr.send;
}
function processReply(info){
	console.log(info);
}
fetchData("https://api.example.com/data", processReply);*/
