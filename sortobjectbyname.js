function sortByName(user) {
		let nameOfUsers = user.map(item => item.name);
		return nameOfUsers.sort();
}

let users = [
	{name: "John", age: 25},
	{name: "Pete", age: 30},
	{name: "Mary", age: 29}
];

console.log( sortByName(users) );