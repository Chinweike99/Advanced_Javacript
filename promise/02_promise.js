#!/usr/bin/node

// Intermediate examples to understand promise
// Simulating fetching data from server

const fetchData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = {id:1, name: "Samuel Law", age: 34};
			resolve(data);
		}, 1000);
	});
};

fetchData()
	.then((data) => {
		console.log("Fetched data is:", data);
	})
	.catch((error) => {
		console.log("Catched error is:", error);
	});
