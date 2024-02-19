#!/usr/bin/node

// Advanced example to understanding the concept of Promise in JavaScript
// Simulating fetching data from an API with error handling.

const fetchUserData = (userId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			const users = [
				{ id: 1, name: "Simeon Ophrah", email:"simeonophrah23@gmail.com"},
				{ id: 2, name: "Esther colman", email:"esthercollman43@gmail.com"},
				{ id: 3, name: "Matthew Jake", email:"jakematthew001@gmail.com"},
				{ id: 4, name: "Odogwu Ophrah", email:"Bolawalejames900@gmail.com"},
				{ id: 5, name: "Eze Obalim", email:"obalimeze991@gmail.com"}
			];
			const user = users.find(user => user.id === userId);
			
			if (user){
				resolve(user);
			}else{
				reject(new error("User undfined:"));
			}
		}, 1000);
	});
}

const userId = 4;
fetchUserData(userId)
	.then((user) => {
		console.log(user);
	})
	.catch((error) => {
		console.log(error);
	});



