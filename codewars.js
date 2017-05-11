(function() {

    "use strict";

    // lower case
    function convertLowerCase(str) {
        console.log(str.toLowerCase());
    }
    convertLowerCase("Hello world!");
    console.log(" ");

    // uppercase letters.
    function capitalizeEachWord(str) {
        console.log(str.toUpperCase());
    }
    capitalizeEachWord("Hello world!");
    console.log(" ");


    // math
    function buyOrPass(stockPrice,allTimeHigh) {
        allTimeHigh = allTimeHigh * 0.80;
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
    function  kidoCount(n){
        var x = [];
        for (var i = 1; i < n; i = i + 2) {
            x.push(i);
        }
        return x;
    }
    console.log(kidoCount(10));
    console.log(" ");


    // checking to see if a number is square
    function isSquare(n){
        console.log(Math.sqrt(n) % 1 === 0);
    }
    isSquare(-1);
    isSquare(3);
    isSquare(4);
    isSquare(25);
    isSquare(26);
    isSquare(84);
    console.log(" ");


    // find the middle letter
    function getMiddle(s) {
        var l = s.length;
        var m = l / 2;

        if (l % 2 == 0) {
            console.log(s[--m] + s[++m]);
        } else if (s.length == 1) {
            console.log(s[0]);
        } else {
            console.log(s[Math.round(--m)]);
        }
    }
    getMiddle("test");
    getMiddle("testing");
    getMiddle("middle");
    getMiddle("A");
    console.log(" ");


    // count vowels
    function getCount(str) {
        str = str.split("");
        var vowelsCount = 0;

        for (var i = 0; i < str.length; i++) {
            if (str[i] === "a") {
                vowelsCount++;
            }
        }
        console.log(vowelsCount);
    }
    getCount("abracadabra");
    console.log(" ");


    // sring * number
    function repeatStr(n, s) {
        var result = s.repeat(n);
        console.log(result);
    }
    repeatStr(3, "*");
    repeatStr(5, "#");
    repeatStr(2, "ha ");
    console.log("");


    // turn int into negative int
    function makeNegative(num) {
        if (num > 0) {
            return num * -1;
        } else if (num == 0) {
            return 0;
        } else {
            return num;
        }
    }
    console.log(makeNegative(42));
    console.log(makeNegative(-6));
    console.log(makeNegative(0));
    console.log("");


    // get cuboid
    var Kata;

    Kata = (function() {
      function Kata() {}

      Kata.getVolumeOfCuboid = function(length, width, height) {
        return ((length * width) * height);
      };

      return Kata;

    })();
    console.log(Kata.getVolumeOfCuboid(1,2,2));
    console.log(Kata.getVolumeOfCuboid(6.3,2,5));
    console.log("");


    // count
    function hoopCount (n) {
        var count = (n < 10) ? "Keep at it until you get it" : "Great, now move on to tricks";
        console.log(count);
    }
    hoopCount(3)
    hoopCount(11)
    console.log('');


    function math(x, y, z) {
        if (x == "+") {
            console.log(y + z);
        } else if (x == "-") {
            console.log(y - z);
        } else if (x == "/") {
            console.log(y / z);
        } else {
            console.log(y * z);
        }
    }
    math("+", 2, 3);
    math("-", 2, 3);
    math("/", 2, 3);
    math("*", 2, 3);
    console.log("");


    function removeSpace(str) {
        str = str.split(" ");
        var newString = str.join("");
        console.log(newString);
    }
    removeSpace("This is a string");
    console.log("");
    






})();