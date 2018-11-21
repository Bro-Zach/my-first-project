function checkSpam(str) {
	let newString = str.toLowerCase();
	if ( newString.includes("viagra") || newString.includes("free") || newString.includes("xxx") ) {
		return "true";
	} else {
		return "false";
	}
}

