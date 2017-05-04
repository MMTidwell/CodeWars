// lower case
// 8 kyu
function convertLowerCase(str) {
	console.log(str.toLowerCase());
}
convertLowerCase("Hello world!")
console.log(" ");

// uppercase letters.
// 8 kyu
function capitalizeEachWord(str) {
	console.log(str.toUpperCase());
}
capitalizeEachWord("Hello world!")
console.log(" ");


// math
// 8 kyu
function buyOrPass(stockPrice,allTimeHigh) {
	allTimeHigh = allTimeHigh * .80;
	if (stockPrice <= allTimeHigh) {
		console.log("Buy");
	} else {
		console.log("Pass");
	}
}
buyOrPass(46.74,58.43);
buyOrPass(200,200);
buyOrPass(100, 180);
console.log(" ");


// object
// 8 kyu
function Player() {
	var player = {
		name: "Player",
		position: "Right Winger",
		age: 25,
		dribbling: 85,
		pass: 70,
		shoot: 65 
	}
}



