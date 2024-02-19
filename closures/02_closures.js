#!/usr/bin/node

// Intermediate example
function createCounter(){
	count = 0;
	
	/* Inner function (Closure to increase count */
	function increaseCount(){
		count++;
		console.log("Your count is:", count);
	}
	return increaseCount;
}

const count1 = createCounter();
const counter2 = createCounter();

count1();
count1();
count1();
counter2();
count1();
counter2();
count1();
counter2();

console.log("")
