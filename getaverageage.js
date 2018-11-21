function getAveragAge(user) {
	let sumOfUserAge = user.reduce((sum, current) => sum + current.age, 0);
	let lengthOfArray = user.length;

	return sumOfUserAge / lengthOfArray;
}

let users = [
	{name: "John", age: 25},
	{name: "Pete", age: 30},
	{name: "Mary", age: 29}
];

console.log(getAveragAge(users));