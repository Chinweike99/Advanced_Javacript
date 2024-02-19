#!/usr/bin/node

const delayPromise = (delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Promise resolved after ${delay} milliseconds`);
		}, delay);
	});
};

delayPromise(2000)
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.error(error);
	});

