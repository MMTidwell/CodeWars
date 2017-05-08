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


// count in odd numbers
// 8 kyu
function  kidoCount(n){
	var x = [];
	for (i = 1; i < n; i = i + 2) {
		x.push(i);
	}
	return x;
}
console.log(kidoCount(10));









