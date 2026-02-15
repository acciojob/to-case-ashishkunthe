function toCase(text) {
  // write your code here
	const upperCase=text.toUpperCase()
	const lowerCase=text.toLowerCase()

	return lowerCase+"-"+upperCase
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
