function pow(x, n) {
	let result = 1;

	for (let i = 0; i < n; i++) {
		result *= n;
	}

	return result;
}

let x = prompt("Enter a value for X: ", "");
let n = prompt("Enter a value for N: ", "");

if (n < 0) {
	alert('Please enter an integer greater than 0');
} else {
	alert( pow(x,n) );
}