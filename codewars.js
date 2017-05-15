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


    // math time
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


    // remove spaces in a string
    function removeSpace(str) {
        str = str.split(" ");
        var newString = str.join("");
        console.log(newString);
    }
    removeSpace("This is a string");
    console.log("");


    // for if comparison
    function openOrSenior(data){
      var status = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            status.push("Senior");
        } else {
            status.push("Open");
        }
      }
        console.log(status);
    }
    openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]);
    openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]);
    openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]);
    console.log("");


    // find the largest and smallest number in a string
    function highAndLow(numbers){
        var maxMin = [];

        numbers = numbers.split(" ");
        maxMin.push(Math.max.apply(null, numbers), Math.min.apply(null, numbers));
        maxMin = maxMin.join(" ");

        console.log(maxMin);
    }
    highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
    highAndLow("1 -1");
    highAndLow("1 1");
    console.log("");


    // string position
    function countSmileys(arr) {
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].length > 2) {
                if (arr[i][0] == ":" || arr[i][0] == ";") {
                    if (arr[i][1] == "-" || arr[i][1] == "~") {
                        if (arr[i][2] == ")" || arr[i][2] == "D") {
                            count++;
                        }
                    }
                }
            } else {
                if (arr[i][0] == ":" || arr[i][0] == ";") {
                    if (arr[i][1] == ")" || arr[i][1] == "D") {
                        count++;
                    }
                }
            }
        }
        console.log(count);
    }
    countSmileys([]);
    countSmileys([':D',':~)',';~D',':)']);
    countSmileys([':)',':(',':D',':O',':;']);
    countSmileys([';]', ':[', ';*', ':$', ';-D']);
    console.log("");


    function DNAStrand(dna){
        var haskell = [];
        dna = dna.split("");
        for (var i = 0; i < dna.length; i++) {
            if (dna[i] == "A") {
                haskell.push("T");
            } else if (dna[i] == "T") {
                haskell.push(("A"));
            } else if (dna[i] == "C") {
                haskell.push("G");
            } else if (dna[i] == "G") {
                haskell.push("C");
            }
        }
        haskell = haskell.join("")
        console.log(haskell);
    }
    DNAStrand("AAAA");
    DNAStrand("ATTGC");
    DNAStrand("GTAT");
    console.log("");


    // math
    function arithmetic(a, b, operator){
        if (operator == "add") {
            console.log(a + b);
        } else if (operator == "subtract") {
            console.log(a - b);
        } else if (operator == "multiply") {
            console.log(a * b);
        } else {
            console.log(a / b);
        }
    }
    arithmetic(1, 2, "add");
    arithmetic(8, 2, "subtract");
    arithmetic(5, 2, "multiply");
    arithmetic(8, 2, "divide");
    console.log("");


    // average rounded
    function average(scores) {
        var total = eval(scores.join('+'));
        var average = Math.round(total / scores.length);

        console.log(average);
    }
    average([49,3,5,300,7]);
    average([90,98,89,100,100,86,94]);
    console.log("");


    // greetings
    function greet(name) {
        return (name === "" || name === null) ? null : "Hello " + name;
    }
    console.log(greet("Niks"));
    console.log(greet(null));




})();