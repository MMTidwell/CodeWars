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
    console.log("");


    // cap first letter of every word
    String.prototype.toJadenCase = function () {
        str = str.toLowerCase().split(" ");
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].split("");
            str[i][0] = str[i][0].toUpperCase();
            str[i] = str[i].join("");
        }
        console.log(str.join(" "));
    };
    var str = "How can mirrors be real if our eyes aren't real";
    str.toJadenCase();
    console.log("");


    // count number of times value shows up in array
    Array.prototype.numberOfOccurrences = function(element) {
        var count = 0;
        for (var i = 0; i < this.length; i++) {
            if (this[i] == element) {
                count++;
            }
        }
        console.log(count);
    }
    var arr = [4, 0, 4];
    arr.numberOfOccurrences(4);
    console.log("");


    // vowel removal
    function disemvowel(str) {
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        return str.split('').filter(function(el) {
            return vowels.indexOf(el.toLowerCase()) == -1;
        }).join('');
    }
    console.log(disemvowel("This website is for losers LOL!"));
    console.log("");


    // shortest word
    function findShort(s){
        var s = s.split(" ");
        // gets the length of each array
        var min = s[0].length;
        for (var i = 0; i < s.length; i++) {
            // checks the word length to the current word length
            if (s[i].length < min) {
                // sets min to the new shortest length
                min = s[i].length;
            }
        }
        console.log(min);
    }
    findShort("bitcoin take over the world maybe who knows perhaps")
    findShort("turns out random test cases are easier than writing out basic ones")
    console.log();


    // reverse string
    function solution(str){
        str = str.split("").reverse().join("");
        console.log(str);
    }
    solution('world');
    console.log();


    // JS object mapping
    function toLetSpeak(str) {
        var alpha = {
            A : '@',
            B : '8',
            C : '(',
            D : 'D',
            E : '3',
            F : 'F',
            G : '6',
            H : '#',
            I : '!',
            J : 'J',
            K : 'K',
            L : '1',
            M : 'M',
            N : 'N',
            O : '0',
            P : 'P',
            Q : 'Q',
            R : 'R',
            S : '$',
            T : '7',
            U : 'U',
            V : 'V',
            W : 'W',
            X : 'X',
            Y : 'Y',
            Z : '2'
        };
        // splits the string
        // compares the char to the key if found gives the keys result
        // if char is not a key, then it will place the char it looked for
        // joins the array and turns it into an array
        str = str.split("").map(char => alpha[char] || char).join("");
        console.log(str);
    }
    toLetSpeak("LEET");
    toLetSpeak("SPEAK!");
    toLetSpeak("HERE");
    console.log();


    // sort by string length
    function sortByLength (array) {
        array = array.sort((a, b) => a.length - b.length);
        console.log(array);
    };
    sortByLength(["Beg", "Life", "I", "To"]);
    console.log();


    // removing parts of a string
    function domainName(str) {
        var n = str.includes("http://www.")
        var o = str.includes("www.")
        if (n == true) {
            str = str.split("http://www.").pop();
        } else if (o == true) {
            str = str.split("www.").pop();
        } else {
            str = str.split("http://").pop();
        }
        str = str.split(".")[0];

        console.log(str);
    }
    domainName("http://github.com/carbonfive/raygun")
    domainName("http://www.zombie-bites.com")
    domainName("www.xakep.ru")
    console.log();


    // math
    function persistence(num) {
        var count = 0;
        num = num.toString();

        while (num.length > 1) {
            count++;
            num = num.split("").map(Number).reduce((a, b) => a * b).toString();
        }
        console.log(count);
    }
    persistence(39);
    persistence(4);
    persistence(25);
    persistence(999);
    console.log();


    // check if element is a number
    function filter_list(l) {
        var newList = [];
        for (var i = 0; i < l.length; i++) {
            if (typeof l[i] != 'string') {
                newList.push(l[i]);
            }
        }
        console.log(newList);
    }
    filter_list([1,2,'a','b']);
    filter_list([1,'a','b',0,15]);
    filter_list([1,2,'aasf','1','123',123]);
    console.log();


    // word swap
    function rakeGarden(garden) {
        garden = garden.split(" ");

        for (var i = 0; i < garden.length; i++) {
            if (garden[i] != "rock" && garden[i] != "gravel") {
                garden[i] = "gravel"
            }
        }
        garden = garden.join(" ");
        console.log(garden);
    }
    var garden1 = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel';
    var garden2 = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel';
    rakeGarden(garden1);
    rakeGarden(garden2);
    console.log();


    // population growth
    function nbYear(p0, percent, aug, p) {
        var years = 0;
        while (p0 < p) {
            p0 = p0 + p0 * (percent / 100) + aug;
            years++;
        }
        console.log(years);
    }
    nbYear(1500, 5, 100, 5000);
    nbYear(1500000, 2.5, 10000, 2000000);
    nbYear(1500000, 0.25, 1000, 2000000);
    console.log();


    // array search
    var moveZeros = function (arr) {
        var zero = [];
        var newArray = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                zero.push(arr[i]);
            } else {
                newArray.push(arr[i]);
            }
       }
       console.log(newArray.concat(zero));
    }
    moveZeros([false,1,0,1,2,0,1,3,"a"]);
    console.log("");


    // Build a tower
    function towerBuilder(nFloors) {
        var level = [];
        for (var i = 0; i < nFloors; i++) {
            // places the " " at the beginning of the array string
            level.push(" ".repeat(nFloors - i - 1)
                // places the * for each level
                + "*".repeat((i * 2) + 1)
                // places the " " at the end of each array string
                + " ".repeat(nFloors - i - 1));
        }
        console.log(level);
    }
    towerBuilder(1);
    towerBuilder(2);
    towerBuilder(3);
    towerBuilder(4);
    console.log();



























})();